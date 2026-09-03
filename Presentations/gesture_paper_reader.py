
import cv2
import mediapipe as mp
import pyautogui
import time

# ============ 可調整參數 ============
COOLDOWN_SECONDS = 1.5      # 兩次手勢之間的冷卻時間 (秒),避免重複觸發
HOLD_FRAMES = 5             # 手勢需要連續維持幾個畫格才會觸發 (避免誤判)
CAMERA_INDEX = 0            # 攝影機編號,通常是 0,如果有多個可以改 1,2...
SHOW_LANDMARKS = True       # 是否在畫面上畫出手部骨架
WINDOW_NAME = "Gesture Paper Reader (press Q to quit)"
# ===================================

# 關掉 pyautogui 的安全保護 (預設滑鼠移到角落會中斷,看論文時不需要)
pyautogui.FAILSAFE = False

mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils
mp_styles = mp.solutions.drawing_styles


def count_fingers(hand_landmarks, handedness_label):
   
    tips = [4, 8, 12, 16, 20]
    pips = [3, 6, 10, 14, 18]
    mcps = [2, 5, 9, 13, 17]   # 指根關節
    fingers_up = []

    landmarks = hand_landmarks.landmark
    wrist = landmarks[0]

   
    def dist(a, b):
        return ((a.x - b.x) ** 2 + (a.y - b.y) ** 2) ** 0.5

    thumb_tip_dist = dist(landmarks[tips[0]], wrist)
    thumb_mcp_dist = dist(landmarks[mcps[0]], wrist)
    thumb_up = thumb_tip_dist > thumb_mcp_dist * 1.1   # 加一點 margin 避免誤判
    fingers_up.append(thumb_up)

    
    for i in range(1, 5):
        finger_up = landmarks[tips[i]].y < landmarks[pips[i]].y
        fingers_up.append(finger_up)

    return sum(fingers_up), fingers_up


def classify_gesture(fingers_up):
   
    thumb, index, middle, ring, pinky = fingers_up

    if index and not middle and not ring and not pinky:
        return "ONE"

    if index and middle and not ring and not pinky:
        return "TWO"

    if not index and not middle and not ring and not pinky:
        return "FIST"

    if index and middle and ring and pinky:
        return "OPEN"

    return "UNKNOWN"


def trigger_action(gesture):
    
    if gesture == "ONE":
        pyautogui.press("right")
        return "下一頁 →"
    elif gesture == "TWO":
        pyautogui.press("left")
        return "← 上一頁"
    return None


def main():
    cap = cv2.VideoCapture(CAMERA_INDEX)
    if not cap.isOpened():
        print(f"無法開啟攝影機 (index={CAMERA_INDEX}),請檢查攝影機是否連接")
        return

    print("✋ 手勢翻頁助手已啟動")
    print("   比 1 → 下一頁 | 比 2 → 上一頁")
    print("   握拳 → 暫停 | 張開手掌 → 恢復")
    print("   按 Q 結束\n")

    last_trigger_time = 0
    gesture_buffer = []   # 紀錄最近幾個畫格的手勢,用來做穩定判斷
    paused = False
    last_action_msg = ""
    last_action_time = 0

    with mp_hands.Hands(
        model_complexity=1,           # 改成 1,準確度比 0 高很多
        min_detection_confidence=0.3, # 從 0.7 降到 0.3,更容易偵測到手
        min_tracking_confidence=0.3,
        max_num_hands=1,
    ) as hands:

        while cap.isOpened():
            ok, frame = cap.read()
            if not ok:
                continue

            # 鏡像翻轉,這樣使用者看自己比較自然
            frame = cv2.flip(frame, 1)
            rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            rgb.flags.writeable = False
            results = hands.process(rgb)

            current_gesture = "NONE"
            hand_detected = False

            if results.multi_hand_landmarks:
                hand_detected = True
                hand_landmarks = results.multi_hand_landmarks[0]
                handedness = results.multi_handedness[0].classification[0].label

                if SHOW_LANDMARKS:
                    mp_drawing.draw_landmarks(
                        frame,
                        hand_landmarks,
                        mp_hands.HAND_CONNECTIONS,
                        mp_styles.get_default_hand_landmarks_style(),
                        mp_styles.get_default_hand_connections_style(),
                    )

                num_fingers, fingers_up = count_fingers(hand_landmarks, handedness)
                current_gesture = classify_gesture(fingers_up)
                # debug: 顯示哪幾根手指被判定為伸直
                finger_names = ['T', 'I', 'M', 'R', 'P']
                debug_str = ''.join(n if up else '_' for n, up in zip(finger_names, fingers_up))

            # 維護 gesture_buffer,只保留最近 HOLD_FRAMES 個
            gesture_buffer.append(current_gesture)
            if len(gesture_buffer) > HOLD_FRAMES:
                gesture_buffer.pop(0)

            # 必須連續 HOLD_FRAMES 個畫格都是同一個手勢才算數
            stable_gesture = None
            if len(gesture_buffer) == HOLD_FRAMES and len(set(gesture_buffer)) == 1:
                stable_gesture = gesture_buffer[0]

            # 處理暫停 / 恢復
            if stable_gesture == "FIST" and not paused:
                paused = True
                last_action_msg = "已暫停辨識 (張開手掌恢復)"
                last_action_time = time.time()
                gesture_buffer.clear()
            elif stable_gesture == "OPEN" and paused:
                paused = False
                last_action_msg = "已恢復辨識"
                last_action_time = time.time()
                gesture_buffer.clear()

            # 處理翻頁
            now = time.time()
            if (not paused
                    and stable_gesture in ("ONE", "TWO")
                    and now - last_trigger_time > COOLDOWN_SECONDS):
                msg = trigger_action(stable_gesture)
                if msg:
                    last_action_msg = msg
                    last_action_time = now
                    last_trigger_time = now
                    gesture_buffer.clear()

            # === 畫面上的 HUD ===
            h, w = frame.shape[:2]

            # 狀態列底色
            cv2.rectangle(frame, (0, 0), (w, 70), (30, 30, 30), -1)

            status_color = (0, 165, 255) if paused else (0, 255, 0)
            status_text = "PAUSED" if paused else "ACTIVE"
            cv2.putText(frame, f"Status: {status_text}", (10, 28),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.7, status_color, 2)

            cv2.putText(frame, f"Gesture: {current_gesture}", (10, 58),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)

            # debug 資訊: 是否偵測到手 + 哪幾根手指伸直
            if hand_detected:
                debug_text = f"Hand: YES  Fingers: {debug_str}"
                debug_color = (0, 255, 255)
            else:
                debug_text = "Hand: NOT DETECTED - move closer / better lighting"
                debug_color = (0, 100, 255)
            cv2.putText(frame, debug_text, (10, h - 60),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.55, debug_color, 1)

            # 動作訊息 (顯示 2 秒)
            if last_action_msg and time.time() - last_action_time < 2.0:
                cv2.rectangle(frame, (0, h - 50), (w, h), (50, 100, 50), -1)
                cv2.putText(frame, last_action_msg, (10, h - 18),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 255), 2)

            # 提示說明 (右上)
            tips = ["1=Next  2=Prev", "Fist=Pause  Open=Resume", "Q=Quit"]
            for i, tip in enumerate(tips):
                cv2.putText(frame, tip, (w - 260, 25 + i * 22),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.5, (200, 200, 200), 1)

            cv2.imshow(WINDOW_NAME, frame)

            key = cv2.waitKey(1) & 0xFF
            if key == ord('q') or key == ord('Q'):
                break

    cap.release()
    cv2.destroyAllWindows()
    print("已結束")


if __name__ == "__main__":
    main()
