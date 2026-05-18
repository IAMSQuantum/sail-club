const talks = [
  {
    name: "Vibe coded experimental hardware control for optical nanofiber fabrication",
    image: "01.gif",
    presenter: "Wen-Ting Wang",
    presentedDate: "12pm Wednesday April 29, 2026",
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
    presentedDate: "12pm Wednesday April 29, 2026",
    contributors: "Wen-Ting Wang, Chun-Chia Chen 陳俊嘉, Shayne Bennetts",
    labGroup: "IAMS Yb Lab https://iamsquantum.github.io/",
    keywords: ["data acquisition", "analysis", "cold atom design tools"],
    sourceCode: "",
    appLink: "https://yb-polarizability-calculator-tb3yemhxkfbttaqt3y5b5l.streamlit.app/#1-s0",
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
    description: "Miss Align is a browser-based tool for optical system design, layout, alignment simulation and even 3D mechanical design. The presentation introduces its design goals, user flow, and how it was created include example prompts and the prompting tips and tricks. We discuss how AI-assisted coding can supercharge development both for teaching and research."
  },
  {
    name: "A vibe coded laser stabilization PID",
    image: "Wavemeter.gif",
    presenter: "Hao-Rong Yang 楊皓蓉",
    presentedDate: "12pm Tuesday May 26, 2026",
    contributors: "Chun-Chia Chen 陳俊嘉",
    labGroup: "IAMS Yb Lab https://iamsquantum.github.io/",
    keywords: ["digital PID", "laser stabilization", "Codex"],
    sourceCode: "",
    description: "We show how a practical digital PID controller for laser frequency stabilization based on a MOGLabs wavemeter can be designed and implemented with just a few simple prompts. Codex drafted control logic, edge-case checks, and test scaffolds. Results emphasize interpretable control behavior, fast iteration, and experimental robustness for real systems."
  }
];











