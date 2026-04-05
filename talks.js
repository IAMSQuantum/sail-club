const talks = [
  {
    name: "Vibe coded hardware control for nanofiber fabrication",
    image: "01.gif",
    presenter: "Wen-Ting Wang",
    presentedDate: "12:15pm Wednesday April 15, 2026",
    contributors: "Chun-Chia Chen 陳俊嘉, Shayne Bennetts",
    labGroup: "IAMS Yb Lab https://iamsquantum.github.io/",
    keywords: ["hardware control", "optical nanofibers", "AI-assisted development"],
    sourceCode: "",
    description: "This talk presents an AI-assisted workflow for building control software used in optical nanofiber fabrication and characterization. We describe architecture choices, interface design, and rapid debugging methods that connected hardware, acquisition, and analysis. The project highlights how language models can accelerate instrument development while maintaining reliability, safety, and reproducibility."
  },
  {
    name: "Miss Align: Web based optical design",
    image: "03.gif",
    presenter: "Hao-Rong Yang 楊皓蓉",
    presentedDate: "12:15pm Wednesday April 15, 2026",
    contributors: "Shayne Bennetts, Chun-Chia Chen 陳俊嘉",
    labGroup: "IAMS Yb Lab https://iamsquantum.github.io/",
    keywords: ["optical design", "web tools", "alignment planning"],
    sourceCode: "",
    description: "Miss Align is a browser-based tool for optical system design, layout, alignment simulation and even 3D mechanical design. The presentation introduces its design goals, user flow, and how it was created include example prompts and the prompting tips and tricks. We discuss how AI-assisted coding can supercharge development both for teaching and research."
  },
  {
    name: "A vibe coded laser stabilization PID",
    image: "SAIL.png",
    imageStatus: "TBD",
    presenter: "Chun-Chia Chen 陳俊嘉",
    presentedDate: "12:15pm Wednesday April 15, 2026",
    contributors: "None listed",
    labGroup: "IAMS Yb Lab https://iamsquantum.github.io/",
    keywords: ["digital PID", "laser stabilization", "Codex"],
    sourceCode: "",
    description: "We show how a practical digital PID controller for laser frequency stabilization base on a moglabs wavemeter can be designed, implemented with justa few simple prompts. Codex drafted control logic, edge-case checks, and test scaffolds. Results emphasize interpretable control behavior, fast iteration, and experimental robustness for real systems."
  },
  {
    name: "Literature Triage with Embeddings",
    image: "SAIL_ENG.png",
    presenter: "J.-E. Wu",
    presentedDate: "May 6, 2026",
    contributors: "NLP Reading Circle",
    labGroup: "IAMS AI Methods",
    keywords: ["embeddings", "search", "literature review"],
    sourceCode: "https://github.com/iams-sail-club/talk-literature-triage",
    description: "A lightweight pipeline for clustering papers, surfacing related work, and prioritizing what to read first."
  },
  {
    name: "Bilingual Prompt Design (Mandarin/English)",
    image: "SAIL_ENG.png",
    presenter: "T.-P. Hsu",
    presentedDate: "May 13, 2026",
    contributors: "Mandarin/English Study Group",
    labGroup: "IAMS Outreach",
    keywords: ["bilingual", "translation", "terminology"],
    sourceCode: "https://github.com/iams-sail-club/talk-bilingual-prompts",
    description: "Prompt patterns for consistent technical translation while preserving scientific meaning and tone."
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





