const talks = [
  {
    name: "用 Claude 加速理論推導",
    image: "SAIL.png",
    imageStatus: "TBD",
    presenter: "Chih-En Shen 沈智恩",
    presentedDate: "2026 年 6 月 23 日（週二）中午 12點",
    contributors: "無",
    labGroup: "LYHsu 團隊",
    keywords: ["理論推導"],
    sourceCode: "",
    description: "本分享介紹我用 AI 輔助進行理論推導研究的工作流程，重點放在 AI 如何協助處理冗長的記帳式（bookkeeping）步驟。我將說明如何運用語言模型閱讀舊論文、逐步搭建長篇推導，並檢查中間結果的一致性。"
  },
  {
    name: "開源圖形化工具：無需寫程式即可用 AI 自動化工作",
    image: "n8n20260615.png",
    presenter: "Sam Chang",
    presentedDate: "2026 年 6 月 23 日（週二）中午 12點",
    contributors: "無",
    labGroup: "",
    keywords: ["n8n", "無程式碼自動化", "工作流程自動化"],
    sourceCode: "https://github.com/n8n-io/n8n",
    description: "我將介紹一個開源工具 n8n（https://github.com/n8n-io/n8n），它提供簡單的圖形化介面，讓你可以運用 Claude 或 ChatGPT 模型的智能來自動化各種簡單任務。我會示範 n8n 的介面，並展示其在影片字幕編輯、以及一個用於擷取與處理輸入資料的 LINE Bot 等任務上的應用。（本場分享將以中文進行）"
  },
  {
    name: "用 Superpowered Claude Code 打造自訂振動模式檢視器",
    image: "QR20260615.png",
    presenter: "Qian-Rui Huang 黃千睿",
    presentedDate: "2026 年 6 月 23 日（週二）中午 12點",
    contributors: "無",
    labGroup: "JLKuo 團隊",
    keywords: ["振動模式視覺化", "簡正模式", "superpowers"],
    sourceCode: "https://github.com/appendko/vib_viewer",
    appLink: "https://appendko.github.io/vib_viewer/",
    description: "本分享將展示如何使用搭配「superpowers」外掛的 Claude Code，在幾個晚上的時間內，打造一個支援自訂振動座標的瀏覽器版振動模式檢視器。「superpowers」是一套會在動手寫程式前強制執行規劃與規格撰寫的結構化工作流程。本場分享聚焦於科學家視角的開發體驗：這種「先規劃」的方式如何呼應我們拆解研究問題的思路，以及這對研究人員打造小眾但實際需求的工具有何意義。"
  },
  {
    name: "Miss Align：瀏覽器版光學設計工具",
    image: "03.gif",
    presenter: "Hao-Rong Yang 楊皓蓉",
    presentedDate: "2026 年 5 月 26 日（週二）中午 12點",
    contributors: "Shayne Bennetts、Chun-Chia Chen 陳俊嘉",
    labGroup: "IAMS Yb Lab https://iamsquantum.github.io/",
    keywords: ["光學設計", "對準模擬", "3D 機構設計"],
    sourceCode: "https://github.com/s20000125-alt/frequency_shift_simulator",
    appLink: "https://s20000125-alt.github.io/frequency_shift_simulator/",
    description: "Miss Align 是一套以瀏覽器為基礎的工具，涵蓋光學系統設計、配置、對準模擬，甚至 3D 機構設計。本分享將介紹其設計目標、使用流程與實作過程，包含範例提示與提示技巧。我們也將說明 AI 輔助程式開發如何同時強化教學與研究開發效率。"
  },
  {
    name: "用 Vibe Coding 打造雷射穩頻數位 PID",
    image: "Wavemeter.gif",
    presenter: "Chun-Chia Chen 陳俊嘉",
    presentedDate: "2026 年 5 月 26 日（週二）中午 12點",
    contributors: "Hao-Rong Yang 楊皓蓉",
    labGroup: "IAMS Yb Lab https://iamsquantum.github.io/",
    keywords: ["數位 PID", "雷射穩定", "Codex"],
    sourceCode: "",
    description: "我們展示如何以 MOGLabs 波長計為基礎，透過幾個簡單提示，設計並實作可用於雷射頻率穩定的實用數位 PID 控制器。Codex 起草了控制邏輯、邊界情境檢查與測試骨架。結果強調可解釋的控制行為、快速迭代，以及在實驗系統中的穩健性。"
  },
  {
    name: "用 Vibe Coding 打造光學奈米光纖製程的實驗硬體控制",
    image: "01.gif",
    presenter: "Wen-Ting Wang",
    presentedDate: "2026 年 4 月 29 日（週三）中午 12點",
    contributors: "Jie-En Chen 陳杰恩、Chun-Chia Chen 陳俊嘉、Shayne Bennetts",
    labGroup: "IAMS Yb Lab https://iamsquantum.github.io/",
    keywords: ["硬體控制", "奈米光纖", "AI 輔助開發"],
    sourceCode: "",
    description: "本分享介紹如何以 AI 輔助方式建立奈米光纖製作與量測的硬體控制系統。我們將說明系統架構、介面設計與除錯流程，如何串接硬體控制、資料擷取與分析。重點在於以語言模型加速開發，同時維持系統可靠性、安全性與可重現性。"
  },
  {
    name: "幾分鐘內 Vibe Code 完成數據收集分析，並將冷原子設計工具做成網頁應用程式",
    image: "jieEn.png",
    presenter: "Jie-En Chen 陳杰恩",
    presentedDate: "2026 年 4 月 29 日（週三）中午 12點",
    contributors: "Wen-Ting Wang、Chun-Chia Chen 陳俊嘉、Shayne Bennetts",
    labGroup: "IAMS Yb Lab https://iamsquantum.github.io/",
    keywords: ["數據收集", "分析", "冷原子設計工具"],
    sourceCode: "",
    appLink: "https://yb-polarizability-calculator-tb3yemhxkfbttaqt3y5b5l.streamlit.app/#1-s0",
    description: "本分享示範如何在幾分鐘內以 Vibe Code 建立可用的數據收集與分析流程，並將冷原子設計工具做成可直接操作的網頁應用程式，提升測試效率與團隊協作速度。"
  },
  {
    name: "以神經網路勢能加速醣類第一原理構形搜尋",
    image: "SAIL.png",
    imageStatus: "TBD",
    presenter: "Dr. Kenee Kaiser Custodio",
    presentedDate: "2026 年 4 月 29 日（週三）中午 12點",
    contributors: "無",
    labGroup: "分子/材料模擬實驗室 https://sites.google.com/site/jlkiams/",
    keywords: ["醣類", "構形搜尋", "神經網路勢能", "第一原理"],
    sourceCode: "",
    description: "對於如醣類（glycans）這類高度複雜系統，傳統第一原理結構搜尋方法常受限於龐大的時間需求與高昂計算成本。為解決此問題，我們採用機器學習方法大幅加速搜尋流程。具體而言，我們使用神經網路勢能（NNP）先快速找出低能量候選構形，再以參考第一原理方法進行幾何最佳化。NNP 以該參考方法所產生的能量與原子力資料訓練，能有效擬合其勢能面。此作法可讓幾何最佳化速度達到傳統第一原理方法的至少 100 倍，為複雜生物分子的構形搜尋提供可擴展且高效率的解決方案。"
  }
];
