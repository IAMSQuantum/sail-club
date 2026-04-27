const talks = [
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
  },
  {
    name: "Miss Align：瀏覽器版光學設計工具",
    image: "03.gif",
    presenter: "Hao-Rong Yang 楊皓蓉",
    presentedDate: "2026 年 5 月 27 日（週三）中午 12點",
    contributors: "Shayne Bennetts、Chun-Chia Chen 陳俊嘉",
    labGroup: "IAMS Yb Lab https://iamsquantum.github.io/",
    keywords: ["光學設計", "對準模擬", "3D 機構設計"],
    sourceCode: "https://github.com/s20000125-alt/frequency_shift_simulator",
    appLink: "https://s20000125-alt.github.io/frequency_shift_simulator/",
    description: "Miss Align 是一套以瀏覽器為基礎的工具，涵蓋光學系統設計、配置、對準模擬，甚至 3D 機構設計。本分享將介紹其設計目標、使用流程與實作過程，包含範例提示與提示技巧。我們也將說明 AI 輔助程式開發如何同時強化教學與研究開發效率。"
  },
  {
    name: "用 Vibe Coding 打造雷射穩頻數位 PID",
    image: "SAIL.png",
    imageStatus: "待補",
    presenter: "Chun-Chia Chen 陳俊嘉",
    presentedDate: "2026 年 5 月 27 日（週三）中午 12點",
    contributors: "無",
    labGroup: "IAMS Yb Lab https://iamsquantum.github.io/",
    keywords: ["數位 PID", "雷射穩定", "Codex"],
    sourceCode: "",
    description: "我們展示如何以 Moglabs 波長計為基礎，透過幾個簡單提示，設計並實作可用於雷射頻率穩定的實用數位 PID 控制器。Codex 起草了控制邏輯、邊界情境檢查與測試骨架。結果強調可解釋的控制行為、快速迭代，以及在實驗系統中的穩健性。"
  },
  {
    name: "Agentic Coding 於實驗室自動化",
    image: "SAIL_ENG.png",
    presenter: "R. Bennett",
    presentedDate: "2026 年 5 月 20 日",
    contributors: "自動化小組",
    labGroup: "IAMS Experimental Systems",
    keywords: ["代理", "自動化", "儀器控制"],
    sourceCode: "https://github.com/iams-sail-club/talk-agentic-lab",
    description: "透過 coding agents 快速產生儀器流程腳本與資料整理工具的實作範例。"
  },
  {
    name: "模型評估基礎：幻覺與依據",
    image: "SAIL_ENG.png",
    presenter: "S. Huang",
    presentedDate: "2026 年 5 月 27 日",
    contributors: "模型評估小組",
    labGroup: "IAMS AI Safety Discussions",
    keywords: ["評估", "幻覺", "grounding"],
    sourceCode: "https://github.com/iams-sail-club/talk-eval-basics",
    description: "實務檢核方法，降低無根據輸出並提升引文與來源對齊品質。"
  },
  {
    name: "RAG 在內部知識筆記的應用",
    image: "SAIL_ENG.png",
    presenter: "M. Lee",
    presentedDate: "2026 年 6 月 3 日",
    contributors: "知識管理小組",
    labGroup: "IAMS Shared Infrastructure",
    keywords: ["RAG", "向量資料庫", "知識庫"],
    sourceCode: "https://github.com/iams-sail-club/talk-rag-notes",
    description: "使用會議紀錄與 wiki 建立小型檢索系統，支援跨團隊問答。"
  },
  {
    name: "AI 產生科學程式測試",
    image: "SAIL_ENG.png",
    presenter: "K. Tsai",
    presentedDate: "2026 年 6 月 10 日",
    contributors: "軟體可靠度小組",
    labGroup: "IAMS Software Stack",
    keywords: ["測試", "單元測試", "CI"],
    sourceCode: "https://github.com/iams-sail-club/talk-ai-testing",
    description: "如何用 AI 起草測試，再用領域限制補強，提升研究程式穩定性。"
  },
  {
    name: "SAIL 專案衝刺規劃",
    image: "SAIL_ENG.png",
    presenter: "社群委員會",
    presentedDate: "2026 年 6 月 17 日",
    contributors: "全體 SAIL 成員",
    labGroup: "IAMS + Collaborators",
    keywords: ["專案規劃", "協作", "roadmap"],
    sourceCode: "https://github.com/iams-sail-club/talk-project-sprint",
    description: "規劃下一階段 SAIL mini-project 的題目、里程碑與展示形式。"
  }
];
