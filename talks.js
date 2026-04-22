const talks = [
  {
    name: "Vibe coded experimental hardware control for optical nanofiber fabrication",
    image: "01.gif",
    presenter: "Wen-Ting Wang",
    presentedDate: "12:10pm Wednesday April 29, 2026",
    contributors: "Jie-En Chen 陳杰恩, Chun-Chia Chen 陳俊嘉, Shayne Bennetts",
    labGroup: "IAMS Yb Lab https://iamsquantum.github.io/",
    keywords: ["hardware control", "optical nanofibers", "AI-assisted development"],
    sourceCode: "",
    description: "This talk presents an AI-assisted workflow for building control software used in optical nanofiber fabrication and characterization. We describe architecture choices, interface design, and rapid debugging methods that connected hardware, acquisition, and analysis. The project highlights how language models can accelerate instrument development while maintaining reliability, safety, and reproducibility."
  },
  {
    name: "Data acquisition and analysis vibe coded in minutes and putting cold atom design tools into web apps",
    image: "jieEn.png",
    presenter: "Jie-En Chen 陳杰恩",
    presentedDate: "12:10pm Wednesday April 29, 2026",
    contributors: "Wen-Ting Wang, Chun-Chia Chen 陳俊嘉, Shayne Bennetts",
    labGroup: "IAMS Yb Lab https://iamsquantum.github.io/",
    keywords: ["data acquisition", "analysis", "cold atom design tools"],
    sourceCode: "",
    description: "A quick demonstration of how vibe coding can produce practical data acquisition and analysis workflows in minutes, and how cold-atom design tools can be turned into usable browser applications for faster collaboration and testing."
  },
  {
    name: "TBA",
    image: "SAIL.png",
    imageStatus: "TBD",
    presenter: "Kenee Kaiser Suyo Custodio",
    presentedDate: "12:10pm Wednesday April 29, 2026",
    contributors: "None listed",
    labGroup: "Molecular and Material Modelling Lab https://sites.google.com/site/jlkiams/",
    keywords: ["TBA"],
    sourceCode: "",
    description: "TBA"
  },
  {
    name: "Miss Align: Web based optical design",
    image: "03.gif",
    presenter: "Hao-Rong Yang 楊皓蓉",
    presentedDate: "12:10pm Wednesday May 27, 2026",
    contributors: "Shayne Bennetts, Chun-Chia Chen 陳俊嘉",
    labGroup: "IAMS Yb Lab https://iamsquantum.github.io/",
    keywords: ["optical design", "alignment simulation", "3D mechanical design"],
    sourceCode: "https://github.com/s20000125-alt/frequency_shift_simulator",
    appLink: "https://s20000125-alt.github.io/frequency_shift_simulator/",
    description: "Miss Align is a browser-based tool for optical system design, layout, alignment simulation and even 3D mechanical design. The presentation introduces its design goals, user flow, and how it was created include example prompts and the prompting tips and tricks. We discuss how AI-assisted coding can supercharge development both for teaching and research."
  },
  {
    name: "A vibe coded laser stabilization PID",
    image: "SAIL.png",
    imageStatus: "TBD",
    presenter: "Chun-Chia Chen 陳俊嘉",
    presentedDate: "12:10pm Wednesday May 27, 2026",
    contributors: "None listed",
    labGroup: "IAMS Yb Lab https://iamsquantum.github.io/",
    keywords: ["digital PID", "laser stabilization", "Codex"],
    sourceCode: "",
    description: "We show how a practical digital PID controller for laser frequency stabilization base on a moglabs wavemeter can be designed, implemented with justa few simple prompts. Codex drafted control logic, edge-case checks, and test scaffolds. Results emphasize interpretable control behavior, fast iteration, and experimental robustness for real systems."
  },
  {
    name: "Agentic Coding for Lab Automation",
    image: "SAIL_ENG.png",
    presenter: "R. Bennett",
    presentedDate: "May 20, 2026",
    contributors: "Automation Team",
    labGroup: "IAMS Experimental Systems",
    keywords: ["agents", "automation", "instrument control"],
    sourceCode: "https://github.com/iams-sail-club/talk-agentic-lab",
    description: "Examples of using coding agents to draft scripts for instrument routines and data housekeeping tasks."
  },
  {
    name: "Evaluation Basics: Hallucination and Grounding",
    image: "SAIL_ENG.png",
    presenter: "S. Huang",
    presentedDate: "May 27, 2026",
    contributors: "Model Evaluation Group",
    labGroup: "IAMS AI Safety Discussions",
    keywords: ["evaluation", "hallucination", "grounding"],
    sourceCode: "https://github.com/iams-sail-club/talk-eval-basics",
    description: "Practical checks to reduce unsupported outputs and improve citation-grounded responses in lab workflows."
  },
  {
    name: "RAG for Internal Knowledge Notes",
    image: "SAIL_ENG.png",
    presenter: "M. Lee",
    presentedDate: "June 3, 2026",
    contributors: "Knowledge Management Group",
    labGroup: "IAMS Shared Infrastructure",
    keywords: ["RAG", "vector database", "knowledge base"],
    sourceCode: "https://github.com/iams-sail-club/talk-rag-notes",
    description: "How to build a small retrieval system from meeting notes and wiki pages for quick Q&A across teams."
  },
  {
    name: "AI-Generated Tests for Scientific Code",
    image: "SAIL_ENG.png",
    presenter: "K. Tsai",
    presentedDate: "June 10, 2026",
    contributors: "Software Reliability Group",
    labGroup: "IAMS Software Stack",
    keywords: ["testing", "unit tests", "CI"],
    sourceCode: "https://github.com/iams-sail-club/talk-ai-testing",
    description: "Strategies for using AI to draft meaningful tests and then harden them with domain constraints."
  },
  {
    name: "Planning a SAIL Project Sprint",
    image: "SAIL_ENG.png",
    presenter: "Club Committee",
    presentedDate: "June 17, 2026",
    contributors: "All SAIL Members",
    labGroup: "IAMS + Collaborators",
    keywords: ["project planning", "collaboration", "roadmap"],
    sourceCode: "https://github.com/iams-sail-club/talk-project-sprint",
    description: "A sprint-planning session covering topic selection, milestones, and demo format for upcoming SAIL mini-projects."
  }
];











