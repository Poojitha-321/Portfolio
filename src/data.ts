/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Certification, Experience, Achievement, Skill } from './types';

export const PROFILE = {
  name: "Poojitha Thodupunoori",
  title: "Machine Learning & Software Engineer",
  tagline: "Building high-performance full-stack web applications, automated data pipelines, and predictive AI models.",
  shortBio: "Computer Science & Engineering (AI/ML) student with deep practical experience building full-stack web suites and deploying scalable machine learning solutions.",
  detailedBio: "I am a dedicated Developer and Machine Learning Engineer. My technology toolkit spans across robust React/Node.js/Express.js web structures, sophisticated SQL databases (PostgreSQL, MySQL), and advanced AI frameworks (TensorFlow, PyTorch, Scikit-Learn). From developing real-time interactive systems using Socket.IO to training CNNs and LSTM sequence prediction systems, I bridge the gap between high-scale systems architecture and deep machine intelligence.",
  email: "thodupunooripoojitha321@gmail.com",
  phone: "+91 7997429652",
  location: "Nizamabad, Telangana, India",
  linkedin: "https://www.linkedin.com/in/poojitha-thodupunoori28",
  github: "https://github.com/Poojitha-321",
  avatar: "https://github.com/Poojitha-321.png",
};

export const SKILLS: Skill[] = [
  // SOFTWARE DEVELOPMENT
  {
    name: "Java",
    category: "software-dev",
    level: 85,
    description: "Object-oriented design patterns, MVC architecture, solid garbage collection understanding, and data structures.",
    useCase: "Developing robust corporate services and implementing efficient algorithms."
  },
  {
    name: "JavaScript / TypeScript",
    category: "software-dev",
    level: 90,
    description: "Asynchronous loops, ES6+ semantics, type-safety parameters, and React/Vite interface engines.",
    useCase: "Structuring reactive web views and lightweight server environments."
  },
  {
    name: "React.js",
    category: "software-dev",
    level: 94,
    description: "Context API, state hooks, reusable components, modular state libraries, and responsive DOM rendering.",
    useCase: "Designing lightweight layouts with real-time UI/UX feedback elements."
  },
  {
    name: "Node.js & Express.js",
    category: "software-dev",
    level: 90,
    description: "RESTful API design, middleware management, security routing, request handling, and JSON parsing.",
    useCase: "Serving fast asynchronous endpoints and communicating with transactional backends."
  },
  {
    name: "Socket.IO",
    category: "software-dev",
    level: 88,
    description: "Bi-directional persistent WebSockets, event broadcasting, room management, and latency minimization.",
    useCase: "Creating real-time microservices like chat queues and status indicators."
  },

  // DATA SCIENCE
  {
    name: "SQL & Relational Databases",
    category: "data-science",
    level: 92,
    description: "Query optimizations, index planning, transactional ACID controls, CTEs, and relational modeling.",
    useCase: "Writing fast aggregations and organizing structured transactional logs in PostgreSQL/MySQL."
  },
  {
    name: "Pandas & NumPy",
    category: "data-science",
    level: 94,
    description: "Data frames, matrices, vectorization speeds, cleaning routines, and Exploratory Data Analysis (EDA).",
    useCase: "Pre-processing raw sensor datasets and structuring matrices for model trainings."
  },
  {
    name: "Power BI & Tableau",
    category: "data-science",
    level: 85,
    description: "Creating business intelligence reporting visual panels, DAX queries, and stakeholder dashboards.",
    useCase: "Translating messy numbers into clean corporate visual metrics for executive decisions."
  },
  {
    name: "MySQL & PostgreSQL",
    category: "data-science",
    level: 92,
    description: "Query optimizations, logical table structures, index tuning, constraint planning, and backups.",
    useCase: "Ensuring persistent web storage with sub-millisecond querying."
  },

  // MACHINE LEARNING
  {
    name: "Python for ML/DS",
    category: "machine-learning",
    level: 95,
    description: "Core scripting, object-oriented programming (OOP), packages like SciPy, Scikit-learn, and math libraries.",
    useCase: "Developing algorithmic model prototypes and building end-to-end training pipelines."
  },
  {
    name: "Scikit-Learn",
    category: "machine-learning",
    level: 93,
    description: "Classifications, regression formulas, cluster groupings, grid searches, and scaling tools.",
    useCase: "Formulating customer recommendation systems and data pipeline processing."
  },
  {
    name: "TensorFlow & Keras",
    category: "machine-learning",
    level: 92,
    description: "Deep learning neural paths, LSTM sequences, CNN filters, layer tunings, and model evaluation.",
    useCase: "Training convolutional networks for image classifications and LSTM models for predictions."
  },
  {
    name: "PyTorch",
    category: "machine-learning",
    level: 88,
    description: "Dynamic computation graphs, neural network models, tensor manipulation, and modular dataset loaders.",
    useCase: "Fine-tuning deep neural architectures and executing research-oriented models."
  },

  // ARTIFICIAL INTELLIGENCE (AI)
  {
    name: "Natural Language Processing (NLP)",
    category: "ai",
    level: 85,
    description: "TF-IDF text scoring, cosine similarities, word packaging, sentiments, and tokenizing.",
    useCase: "Processing user interactions to deliver highly accurate semantic recommendations."
  },
  {
    name: "Computer Vision & CNNs",
    category: "ai",
    level: 86,
    description: "Convolutional layers, feature extraction, object detection with OpenCV, and image preprocessing.",
    useCase: "Developing visual automation feeds and pixel-level classification microservices."
  },
  {
    name: "Large Language Models & GenAI",
    category: "ai",
    level: 87,
    description: "Prompt engineering, Gemini API integrations, retrieval-augmented generation (RAG) structures, and embedding vectors.",
    useCase: "Connecting applications to intelligent LLM services for automated smart categorization."
  }
];

export const PROJECTS: Project[] = [
  // SOFTWARE DEVELOPMENT
  {
    id: "pocket-task-jobs",
    title: "Job Portal Web Application — Pocket Task",
    description: "A complete full-stack job application suite featuring interactive applicant search, real-time tracking queues, and fully responsive dashboards.",
    problemStatement: "Job seekers and recruiters faced slow, unresponsive platforms lacking automated status tracking and granular, fast searching indexes.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "Git"],
    keyInsights: [
      "Optimized query runtimes by 35% through MongoDB database indexing and structured projection rules.",
      "Protected user channels with JSON Web Tokens (JWT) routing and rigid client field validators.",
      "Integrated automated background tracking systems keeping candidate statuses synchronized."
    ],
    businessImpact: "Created an end-to-end sandbox platform enabling 200+ users to coordinate and track vacancy states in real-time.",
    category: "software-dev",
    githubUrl: "https://github.com/Poojitha-321",
    liveUrl: "https://github.com/Poojitha-321",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ecommerce-web-app",
    title: "Scalable E-Commerce Web Application",
    description: "A production-grade e-commerce application processing product catalogs, user checkouts, and transactional payment logs safely.",
    problemStatement: "Traditional cart checkout systems had high latencies and uncoordinated product listings, leading to broken sales transactions.",
    technologies: ["React.js", "JavaScript", "Node.js", "MongoDB", "PostgreSQL", "REST APIs", "Context API"],
    keyInsights: [
      "Designed reusable React components managed via Context API, improving UI page render speeds by 25%.",
      "Created a dual-engine storage setup: PostgreSQL handles transactional entries, while MongoDB manages fluid product specs.",
      "Programmed input filtering patterns and cross-site scripting (XSS) prevention safeguards."
    ],
    businessImpact: "Ensured secure e-commerce execution with optimized queries (30% speedup) and safe, transactional database protection.",
    category: "software-dev",
    githubUrl: "https://github.com/Poojitha-321",
    liveUrl: "https://github.com/Poojitha-321",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "realtime-chat-app",
    title: "High-Concurrency Real-Time Chat Application",
    description: "An instant communication service featuring persistent socket connections, live user status badges, and typing indicators.",
    problemStatement: "Corporate teams lacked highly secure, sub-100ms real-time messaging portals capable of high concurrent connections without drops.",
    technologies: ["React.js", "Node.js", "Socket.IO", "MongoDB", "Unix/Linux", "AWS (EC2)"],
    keyInsights: [
      "Configured robust persistent WebSockets with Socket.IO, maintaining chat deliveries in under 100ms.",
      "Built resilient server routes on AWS EC2 matching active MongoDB Atlas storage pools.",
      "Incorporated modular software design, improving codebase simplicity by 20% compared to typical architectures."
    ],
    businessImpact: "Prototyped a scalable chat queue supporting 100+ concurrent active team members without packet drops or delays.",
    category: "software-dev",
    githubUrl: "https://github.com/Poojitha-321",
    liveUrl: "https://github.com/Poojitha-321",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800&auto=format&fit=crop"
  },

  // DATA SCIENCE
  {
    id: "data-science-analytics",
    title: "Business Intelligence & Retail Trends Analytics Engine",
    description: "An end-to-end data pipeline and business intelligence suite analyzing over 100,000 transaction records, featuring dynamic customer cohort tracking and forecasting.",
    problemStatement: "Raw corporate transactional data was highly disorganized across unstructured systems, which blocked teams from measuring seasonal trends and customer segment values properly.",
    technologies: ["Python", "SQL", "Pandas", "PostgreSQL", "Power BI", "Tableau", "Matplotlib"],
    keyInsights: [
      "Wrote complex PostgreSQL transactional queries and window aggregates to compute real-time customer lifetime retention ratios.",
      "Designed clean Python ETL workflows using Pandas, cutting raw database preparation and cleaning time by 40%.",
      "Formulated visual summaries highlighting seasonal purchasing indexes and active churn metrics for presentation to stakeholders."
    ],
    businessImpact: "Granted business analysts accurate insights to optimize loyalty campaigns, driving a proven 18% improvement in customer lifecycle conversions.",
    category: "data-science",
    githubUrl: "https://github.com/Poojitha-321",
    liveUrl: "https://github.com/Poojitha-321",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"
  },

  // MACHINE LEARNING
  {
    id: "lstm-stock-prediction",
    title: "Stock Price Prediction using LSTM Networks",
    description: "A deep learning timeseries regression analysis predicting corporate stock market indices based on historical ticker logs.",
    problemStatement: "Financial forecasters struggle with non-linear stock telemetry, where traditional econometric regressions fail to capture seasonal parameters.",
    technologies: ["Python", "TensorFlow", "Pandas", "LSTM model", "Scikit-Learn", "Matplotlib"],
    keyInsights: [
      "Constructed multi-layered LSTM neural paths trained on historical financial timeseries.",
      "Applied min-max normalization preprocessing and rolling cross-validation strategies.",
      "Conducted extensive model parameter tuning, minimizing Mean Absolute Percentage Error (MAPE)."
    ],
    businessImpact: "Delivered a prediction pipeline displaying future vector trajectories, significantly improving forecast accuracy over standard models.",
    category: "machine-learning",
    githubUrl: "https://github.com/Poojitha-321",
    liveUrl: "https://github.com/Poojitha-321",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop"
  },

  // ARTIFICIAL INTELLIGENCE (AI)
  {
    id: "cnn-image-classification",
    title: "Image Classification System using CNN",
    description: "A convolutional neural network model cataloging target visuals deployed as a fast Flask microservice.",
    problemStatement: "Sensory hardware required fast, automated visual categorization capable of running on edge servers with low memory budgets.",
    technologies: ["Python", "Flask", "OpenCV", "CNN", "TensorFlow", "Keras"],
    keyInsights: [
      "Engineered a multi-layered CNN structure complete with custom kernel sizes and dropouts to prevent overfitting.",
      "Utilized OpenCV for real-time image resizing, matrix conversions, and normalization procedures.",
      "Deployed the final neural checkpoint inside a Flask microservice returning JSON classifications."
    ],
    businessImpact: "Enabled real-time, touchless image classification through standard Rest API integrations within industrial environments.",
    category: "ai",
    githubUrl: "https://github.com/Poojitha-321",
    liveUrl: "https://github.com/Poojitha-321",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "nlp-recommendation-system",
    title: "AI-Based Intelligent Recommendation System",
    description: "A hybrid recommendation engine utilizing collaborative and content-based NLP metrics to personalize user feeds.",
    problemStatement: "E-commerce sites experience drop-offs due to poorly targeted product recommendations and cold-start user experiences.",
    technologies: ["Python", "Machine Learning", "NLP", "Scikit-Learn", "Cosine Similarity", "TF-IDF"],
    keyInsights: [
      "Formulated a vector matrix representing items using clean TF-IDF term scoring algorithms.",
      "Calculated cosine distance indexes over user interactions for quick recommendation outputs.",
      "Enhanced model performance and robustness using feature engineering techniques."
    ],
    businessImpact: "Improved recommendations targeting, ensuring personalized and relevant feeds based on subtle semantic signals.",
    category: "ai",
    githubUrl: "https://github.com/Poojitha-321",
    liveUrl: "https://github.com/Poojitha-321",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "azure-ai-fundamentals",
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    credentialId: "AI-900 (Skilltimate Technologies)",
    verificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/",
    skillsVerified: ["Azure AI services", "Machine Learning Studio", "Natural Language Processing", "Computer Vision workflows", "Responsible AI practices"],
    badgeColor: "purple"
  },
  {
    id: "python-training",
    title: "Core Python, Data Structures & OOP Certification",
    issuer: "TechAugusta",
    date: "2024",
    credentialId: "TA-PY-8832",
    verificationUrl: "https://github.com/Poojitha-321",
    skillsVerified: ["Object-Oriented Programming (OOP)", "Advanced Data Structures & Algorithms (DSA)", "Standard Python libraries", "File Handlers"],
    badgeColor: "cyan"
  },
  {
    id: "dsa-training",
    title: "Data Structures & Algorithms Training",
    issuer: "TechAugusta",
    date: "2024",
    credentialId: "TA-DSA-9921",
    verificationUrl: "https://github.com/Poojitha-321",
    skillsVerified: ["Arrays & Linked Lists", "Trees & Graphs", "Sorting & Searching Algorithms", "Optimal complexity scaling"],
    badgeColor: "indigo"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "intern-1",
    role: "Data Science Intern",
    company: "Technology & Analytics Domain",
    location: "Hyderabad, India / Remote",
    period: "Oct 2025 - Nov 2025",
    type: "Internship",
    description: [
      "Performed detailed data cleaning, preprocessing, and feature engineering tasks over datasets exceeding 10,000+ entries using Python.",
      "Engineered 5+ interactive business intelligence and data visualization dashboards using Matplotlib and Seaborn.",
      "Applied Scikit-Learn regression and classification machine learning algorithms to discover business trends, hitting an 85%+ validation metrics target.",
      "Collaborated with project leads using Git for repository version synchronization, presenting analytical takeaways in weekly review meetings."
    ],
    skillsLearned: ["Python Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn", "Git VCS"]
  },
  {
    id: "app-2",
    role: "Full-Stack Software Engineering Apprentice",
    company: "Campus Tech Labs",
    location: "Malla Reddy EC / Remote",
    period: "2024 - Present",
    type: "Apprenticeship",
    description: [
      "Acquired hands-on experience formulating scalable web applications using React.js and Node.js frameworks.",
      "Coded and deployed backend routes communicating with structured MongoDB logs and PostgreSQL transactional schemas.",
      "Worked in Unix/Linux operating environments, deploying testing services with command-line tools."
    ],
    skillsLearned: ["React.js", "Node.js", "Express.js", "MySQL", "PostgreSQL", "Linux bash"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    title: "B.Tech Computer Science & Engineering candidate",
    event: "Malla Reddy Engineering College",
    category: "Community",
    date: "2023 - 2027",
    description: "Maintaining a great aggregate grade of over 75% focus throughout CSE core courses as a reliable student representative.",
    metric: "First Class Distinction"
  },
  {
    id: "ach-2",
    title: "Intermediate Scholar (MPC)",
    event: "SR Junior College",
    category: "Certification",
    date: "2021 - 2023",
    description: "Completed comprehensive high-level training in Mathematics, Physics, and Chemistry courses with excellent test scores.",
    metric: "Nizamabad Top Tier"
  },
  {
    id: "ach-3",
    title: "High School Academy Honors (SSC)",
    event: "Indrani School",
    category: "Community",
    date: "2021",
    description: "Completed secondary education with top honors in language arts, mathematical frameworks, and science.",
    metric: "Distinction Award"
  }
];
