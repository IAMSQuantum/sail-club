const talks = [
  {
    name: "Building a 1D optical simulator with ChatGPT and Claude Code",
    image: "4-1.png",
    presenter: "Yi-Quan Li 李翊銓 (Eric)",
    presentedDate: "12pm Tuesday September 22, 2026",
    contributors: "None listed",
    labGroup: "IAMS Lab 107 https://sites.google.com/view/iamslab107/home",
    keywords: ["optical simulation", "beam propagation", "Claude Code", "ChatGPT", "Tkinter GUI"],
    sourceCode: "https://github.com/Li-Yi-2002/IAMS_Lab107_optical_simulation",
    description: "In this short talk I will share how I used generative AI (ChatGPT and Claude Code) to build a 1D optical simulator that can support several kinds of optical component (spiral phase plates, axicons, thin lenses and apertures) and propagates a Gaussian beam through them in an interactive GUI. I will show my working flow and my conversation with the AI. Using AI really helped me boost my progress and saved me a lot of time. If my experience is helpful to you, that would be great!"
  },
  {
    name: "Using AI to reverse-engineer a discontinued product: reviving the Air Mentor 8099-AP air sensor",
    image: "4-2.png",
    presenter: "Yi-Quan Li 李翊銓 (Eric)",
    presentedDate: "12pm Tuesday September 22, 2026",
    contributors: "None listed",
    labGroup: "IAMS Lab 107 https://sites.google.com/view/iamslab107/home",
    keywords: ["reverse engineering", "air quality sensor", "Bluetooth LE", "Raspberry Pi", "ChatGPT", "Claude Code"],
    sourceCode: "https://github.com/Li-Yi-2002/Air-mentor----revive-your-old-air-sensor-",
    description: "In this second short talk I will show how I used AI to reverse-engineer a discontinued product, the Air Mentor 8099-AP air quality sensor, whose manufacturer and app no longer exist. By decoding the sensor's Bluetooth Low Energy broadcasts with help from AI, the device now logs CO2, PM2.5, PM10, TVOC, temperature and humidity to a Raspberry Pi with a simple web dashboard. I will show my working flow and my conversation with the AI, and how it saved me a lot of time."
  },
  {
    name: "Accelerating Theoretical Derivations with Claude",
    image: "SAIL.png",
    imageStatus: "TBD",
    presenter: "Chih-En Shen 沈智恩",
    presentedDate: "12pm Tuesday June 23, 2026",
    contributors: "None listed",
    labGroup: "LYHsu Group",
    keywords: ["theoretical derivation"],
    sourceCode: "",
    slides: "Presentations/3-1-Chih-En%20Shen%20-%20Accelerating%20Theoretical%20Derivations%20w%20Claude.pdf",
    description: "This talk presents my AI-assisted workflow for theoretical derivation research, focusing on how AI assists us with the lengthy bookkeeping steps. I will describe how language models can be used to read old papers, scaffold long derivations step by step, and check intermediate results for consistency."
  },
  {
    name: "An open source graphical tool for AI automation of tasks without any coding",
    image: "n8n20260615.png",
    presenter: "Sam Chang",
    presentedDate: "12pm Tuesday June 23, 2026",
    contributors: "None listed",
    labGroup: "",
    keywords: ["n8n", "no-code automation", "workflow automation"],
    sourceCode: "https://github.com/n8n-io/n8n",
    slides: "Presentations/3-2-Build%20AI%20automation%20Workflow%20with%20one%20visual%20tool(V2).pdf",
    description: "I will describe an open source tool, n8n (https://github.com/n8n-io/n8n) that provides a simple graphical way to harness the intelligence of claude or chatgpt models to automate simple tasks. I will demonstrate the n8n interface and demonstrate it for tasks like video subtitle editing and a line bot for capturing and processing input data. (this talk will be given in mandarin)"
  },
  {
    name: "Building a Custom Vibrational Mode Viewer with Superpowered Claude Code",
    image: "QR20260615.png",
    presenter: "Qian-Rui Huang 黃千睿",
    presentedDate: "12pm Tuesday June 23, 2026",
    contributors: "None listed",
    labGroup: "JLKuo Group",
    keywords: ["vibrational visualizer", "normal modes", "superpowers"],
    sourceCode: "https://github.com/appendko/vib_viewer",
    appLink: "https://appendko.github.io/vib_viewer/",
    slides: "Presentations/3-3-Qian-Rui%20Huang%20-%20Building%20a%20Custom%20Vibrational%20Mode%20Viewer%20with%20Superpowered%20Claude%20Code.pdf",
    description: "I'll show how a browser-based vibrational mode viewer supporting custom vibrational coordinates can be built in a few evenings using Claude Code with the \"superpowers\" plugin — a structured workflow that enforces planning and spec-writing before any code is written. The talk focuses on the experience from a scientist's perspective: how the planning-first approach resonates with how we decompose research problems, and what this means for researchers building custom tools for niche but real needs."
  },
  {
    name: "Miss Align: Web based optical design",
    image: "03.gif",
    presenter: "Hao-Rong Yang 楊皓蓉",
    presentedDate: "12pm Tuesday May 26, 2026",
    contributors: "Shayne Bennetts, Chun-Chia Chen 陳俊嘉",
    labGroup: "IAMS Yb Lab https://iamsquantum.github.io/",
    keywords: ["optical design", "alignment simulation", "3D mechanical design"],
    sourceCode: "https://github.com/s20000125-alt/frequency_shift_simulator",
    appLink: "https://s20000125-alt.github.io/frequency_shift_simulator/",
    slides: "",
    extras: [
      { label: "Demo webpage (SAIL Club site built with AI)", url: "Presentations/SAIL%20web.html" },
      { label: "Gesture paper reader (Python tool)", url: "Presentations/gesture_paper_reader.py" }
    ],
    description: "Miss Align is a browser-based tool for optical system design, layout, alignment simulation and even 3D mechanical design. The presentation introduces its design goals, user flow, and how it was created include example prompts and the prompting tips and tricks. We discuss how AI-assisted coding can supercharge development both for teaching and research."
  },
  {
    name: "A vibe coded laser stabilization PID",
    image: "Wavemeter.gif",
    presenter: "Chun-Chia Chen 陳俊嘉",
    presentedDate: "12pm Tuesday May 26, 2026",
    contributors: "Hao-Rong Yang 楊皓蓉",
    labGroup: "IAMS Yb Lab https://iamsquantum.github.io/",
    keywords: ["digital PID", "laser stabilization", "Codex"],
    sourceCode: "",
    slides: "Presentations/2-2-Chun-ChiaChen-Sail%20club_Wavemeter.pdf",
    description: "We show how a practical digital PID controller for laser frequency stabilization based on a MOGLabs wavemeter can be designed and implemented with just a few simple prompts. Codex drafted control logic, edge-case checks, and test scaffolds. Results emphasize interpretable control behavior, fast iteration, and experimental robustness for real systems."
  },
  {
    name: "Vibe coded experimental hardware control for optical nanofiber fabrication",
    image: "01.gif",
    presenter: "Wen-Ting Wang",
    presentedDate: "12pm Wednesday April 29, 2026",
    contributors: "Jie-En Chen 陳杰恩, Chun-Chia Chen 陳俊嘉, Shayne Bennetts",
    labGroup: "IAMS Yb Lab https://iamsquantum.github.io/",
    keywords: ["hardware control", "optical nanofibers", "AI-assisted development"],
    sourceCode: "",
    slides: "Presentations/1-1-Wen-TingWang-AI%20assisted%20Coding.pdf",
    description: "This talk presents an AI-assisted workflow for building control software used in optical nanofiber fabrication and characterization. We describe architecture choices, interface design, and rapid debugging methods that connected hardware, acquisition, and analysis. The project highlights how language models can accelerate instrument development while maintaining reliability, safety, and reproducibility."
  },
  {
    name: "Data acquisition and analysis vibe coded in minutes and putting cold atom design tools into web apps",
    image: "jieEn.png",
    presenter: "Jie-En Chen 陳杰恩",
    presentedDate: "12pm Wednesday April 29, 2026",
    contributors: "Wen-Ting Wang, Chun-Chia Chen 陳俊嘉, Shayne Bennetts",
    labGroup: "IAMS Yb Lab https://iamsquantum.github.io/",
    keywords: ["data acquisition", "analysis", "cold atom design tools"],
    sourceCode: "",
    appLink: "https://yb-polarizability-calculator-tb3yemhxkfbttaqt3y5b5l.streamlit.app/#1-s0",
    slides: "Presentations/1-2-JieEnChen-AI%20assisted%20tool%20building.pdf",
    description: "A quick demonstration of how vibe coding can produce practical data acquisition and analysis workflows in minutes, and how cold-atom design tools can be turned into usable browser applications for faster collaboration and testing."
  },
  {
    name: "Accelerating First Principles Conformational Search of Glycan via Neural Network Potentials",
    image: "SAIL.png",
    imageStatus: "TBD",
    presenter: "Dr. Kenee Kaiser Custodio",
    presentedDate: "12pm Wednesday April 29, 2026",
    contributors: "None listed",
    labGroup: "Molecular and Material Modelling Lab https://sites.google.com/site/jlkiams/",
    keywords: ["glycans", "conformational search", "neural network potentials", "ab initio"],
    sourceCode: "",
    description: "Traditional ab initio approaches for conducting structure searches of highly complex systems, such as carbohydrates (glycans), are frequently limited by substantial time requirements and high computational costs. To address this, we utilize machine learning-driven methods to significantly accelerate the structure search process. Specifically, neural network potentials (NNPs) are employed to facilitate the identification of low-energy candidate structures for subsequent geometry optimization using the reference ab initio method. These NNPs are trained on energy and atomic force data generated at the chosen reference ab initio method. By effectively mimicking the potential energy surface of the reference method, the NNP-based approach enables geometry optimizations that are at least 100 times faster than traditional ab initio methods, offering a scalable and efficient solution for the conformational search of complex biomolecules."
  }
];
