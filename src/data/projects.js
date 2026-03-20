export const projects = [
  {
    name: "Apple MCP Notes",
    slug: "apple-mcp-notes",
    category: "Current",
    description: "Transforms your personal Apple Notes library into a fully searchable, AI-powered knowledge base. Rather than relying on simple keyword matching, the system builds a vector database of your notes using semantic embeddings, allowing you to surface relevant content based on meaning and context. On top of search, it applies BERTopic clustering to automatically identify recurring themes across hundreds of notes, making hidden patterns in your thinking visible. The visual frontend renders these clusters as interactive 2D/3D UMAP plots.",
    techStack: ["TypeScript", "Python", "FastAPI", "React", "Electron", "LanceDB"],
    links: {
      github: { "Source Code": "https://github.com/russellelliott/mcp-apple-notes-2" }
    },
    dates: {
      start: new Date("2025-07"),
      end: "Ongoing"
    }
  },
  {
    name: "Elliott Home Organizer",
    slug: "elliott-home-organization",
    category: "Current",
    description: "A smart household cataloging system that brings AI vision to the task of organizing physical media. You simply photograph your bookshelves, and the app uses Google Gemini's vision capabilities to identify every book's title and author from the image. It enriches each entry by pulling in ISBNs, publishers, and publication years via Perplexity API, turning manual inventory work into a structured database.",
    techStack: ["Next.js", "Google Gemini API", "Perplexity API", "Firebase"],
    links: {
      github: { "Source Code": "https://github.com/russellelliott/Elliott-Home-Organization" }
    },
    dates: {
      start: new Date("2026-01"),
      end: "Ongoing"
    }
  },
  {
    name: "Luma Events Aggregator",
    slug: "luma-event-aggregation",
    category: "Current",
    description: "Solves the problem of event discovery overload by automatically pulling events from Luma, classifying them using LLMs, and presenting them through a clean, filterable web interface. The full data pipeline from fetching and classification to database backup and API serving can be triggered with a single startup script, reducing friction for tech networking.",
    techStack: ["Python", "FastAPI", "React", "Google Maps API", "LanceDB", "Ollama"],
    links: {
      github: { "Source Code": "https://github.com/russellelliott/Luma-Event-Aggregation" }
    },
    dates: {
      start: new Date("2025-10"),
      end: "Ongoing"
    }
  },
  {
    name: "Job Organizer App",
    slug: "job-application-tracker",
    category: "Current",
    description: "A fully-featured desktop application built to bring order to the chaos of a high-volume job search. It tracks every application through a detailed timeline, highlights stagnant applications, and visualizes the application funnel as a Sankey diagram. Built as a native desktop app, all data stays local and private.",
    techStack: ["Electron", "React", "TypeScript", "PouchDB", "Recharts", "Material UI"],
    links: {
      github: { "Source Code": "https://github.com/russellelliott/Job-Application-Tracker" }
    },
    dates: {
      start: new Date("2026-02"),
      end: "Ongoing"
    }
  },
  {
    name: "Open Web Places Data Extraction & Validation",
    slug: "crwn102-places-engine",
    category: "Recent",
    description: "An AI-powered validation pipeline developed to improve the quality and accuracy of open web places data, focusing on restaurant POI across the US and Canada. Features a modular architecture for data standardization, location validation, and enrichment.",
    highlights: [
      "Built a 3-stage validation pipeline to clean and standardize restaurant POI data from Yelp and AllThePlaces for Overture Maps, processing 246 GeoJSON files and 323+ chains.",
      "Designed a deterministic restaurant status system using Google Places API to classify locations and detect acquisitions and permanent closures, removing LLM hallucinations.",
      "Implemented a hybrid API-grounded flow using Perplexity, Gemini, and Google Geocoding to fill gaps (websites, hours, names, coordinates) and return traceable, authoritative business data at scale."
    ],
    techStack: ["Python", "Gemini AI", "Google Places API", "Perplexity API"],
    links: {
      github: {
        "Pipeline": "https://github.com/project-terraforma/openweb-places-engine",
        "Analysis": "https://github.com/project-terraforma/places-engine-data-filtering"
      },
      slides: "https://docs.google.com/presentation/d/18dB3RolsSjz0vFho0Ej7Q1W8CgxRVQCW40ov89NH5LI/edit?usp=sharing"
    },
    dates: {
      start: new Date("2025-09"),
      end: new Date("2025-12")
    }
  },
  {
    name: "LLM Security Benchmarking (CSE233)",
    slug: "cse233-project",
    category: "Recent",
    description: "Systematically evaluates the behavior and security robustness of various LLMs (GPT-4o, Claude, Gemini, DeepSeek, Llama3) when prompted with code-related tasks and 'jailbreak' contexts from the RedCode dataset.",
    highlights: [
      "Evaluated 5 LLMs across 25+ threat categories, proving jailbreak prompts bypass safety filters (up to 92% success).",
      "Built async pipeline tracking rejection behaviors and cosine similarity of generated exploits."
    ],
    techStack: ["Python", "LLM APIs"],
    links: {
      github: {
        "Scripts": "https://github.com/russellelliott/CSE233-Project",
        "Graphs": "https://github.com/russellelliott/CSE233-Project-LLM-Cherrypicking"
      }
    },
    dates: {
      start: new Date("2025-01"),
      end: new Date("2025-03")
    }
  },
  {
    name: "TriCO: NYT Connections Generator (CMPM244)",
    slug: "cmpm244-project",
    category: "Recent",
    description: "Implements and extends research on LLMs as puzzle generators for The New York Times' Connections game. Introduces a novel method called TriCO (Tri-view Counterfactual Optimization) which optimizes puzzles by combining semantic, phonetic, and orthographic word relationships.",
    techStack: ["Python", "Flask", "React", "LLM APIs"],
    links: {
      github: { "Source Code": "https://github.com/russellelliott/CMPM244-Project" }
    },
    dates: {
      start: new Date("2025-04"),
      end: new Date("2025-06")
    }
  },
  {
    name: "T2C: Parsons Problem Generator",
    slug: "t2c",
    description: "Leverages OpenAI's GPT to automatically generate Parsons problems (programming exercises). Users can specify criteria like programming language and difficulty, and the app dynamically creates customized problem sets.",
    techStack: ["Next.js", "OpenAI API", "Tailwind CSS"],
    links: {
      github: { "Source Code": "https://github.com/russellelliott/T2c" },
      live: "https://parsons-problem-generator.vercel.app/"
    },
    dates: {
      start: new Date("2025-05"),
      end: new Date("2025-05")
    }
  },
  {
    name: "T2A: Parsons Problem Hints",
    slug: "parsons-problems",
    description: "Incorporates AI to enhance the learning experience for Parsons problems by providing an OpenAI-powered hint generation system that gives intelligent, context-aware feedback.",
    techStack: ["React", "OpenAI API"],
    links: {
      github: { "Source Code": "https://github.com/russellelliott/Parsons-Problems" }
    },
    dates: {
      start: new Date("2025-04"),
      end: new Date("2025-04")
    }
  },
  {
    name: "CMPM290 Video Platform",
    slug: "video-platform",
    category: "Recent",
    description: "A platform for video transcription and navigation. Integrated Google Gemini’s speech-to-text technology and implemented speaker diarization within the transcription pipeline.",
    techStack: ["React", "FastAPI", "Google Gemini", "LanceDB"],
    links: {
      github: { "Source Code": "https://github.com/MistreanuIonutCosmin/video-platfrom" }
    },
    dates: {
      start: new Date("2025-06"),
      end: new Date("2025-06")
    }
  },
  {
    name: "Yumbai (CSE187 Capstone Project)",
    slug: "cse187-capstone-project",
    description: "Full Stack e-commerce group project. Microservices-based app with distinct servers for User, Admin, and Moderator. Each communicates with several specialized microservices. Utilizes category tree for infinite inter-category relations.",
    highlights: [
      ">90% code coverage across each microservice and frontend app.",
      "Comprehensive end-to-end tests executed via Github Workflows.",
      "Utilized Cloudinary for storing images and Docker for containerization."
    ],
    techStack: ["React", "NextJS", "ExpressJS", "OpenAPI", "GraphQL", "Docker", "PostgreSQL", "NodeJS"],
    links: {
      github: { "Source Code": "https://github.com/CSE187-Team2" },
      video: "https://youtu.be/xXD64lfvpT4"
    },
    dates: {
      start: new Date("2023-01"),
      end: new Date("2023-03")
    }
  },
  {
    name: "CruzHacks 2024 Website",
    slug: "cruzhacks-2024-website",
    description: "Developed notification system for hackathon participants. Created schema for applications to participate in the hackathon and worked on frontend components for displaying sponsors and previous year’s websites.",
    techStack: ["React", "Node.js", "Firebase"],
    links: {
      github: {
        "Frontend": "https://github.com/CruzHacks/cruzhacks-2024-website",
        "Backend": "https://github.com/CruzHacks/cruzhacks-2024-backend"
      }
    },
    dates: {
      start: new Date("2023-09"),
      end: new Date("2024-01")
    }
  },
  {
    name: "CruzHacks Backend Challenge",
    slug: "cruzhacks-backend-challenge",
    description: "Backend challenge for my application to the engineering team at CruzHacks. Features endpoints for managing hackers and judges in a hackathon through an OpenAPI RESTful API.",
    techStack: ["React", "Node.js", "OpenAPI", "PostgreSQL", "Docker"],
    links: {
      github: { "Source Code": "https://github.com/russellelliott/CruzHacks2024-Backend-Challenge" }
    },
    dates: {
      start: new Date("2023-05"),
      end: new Date("2023-05")
    }
  },
  {
    name: "CruzHacks Frontend Challenge",
    slug: "cruzhacks-frontend-challenge",
    description: "Frontend challenge for my application to the engineering team at CruzHacks. Features a frontend schedule component fetching data from a provided API.",
    techStack: ["React", "Node.js"],
    links: {
      github: { "Source Code": "https://github.com/russellelliott/CruzHacks2024-Frontend-Challenge" }
    },
    dates: {
      start: new Date("2023-05"),
      end: new Date("2023-05")
    }
  },
  {
    name: "Club Organizer App",
    slug: "club-organizer-app",
    description: "Project for a Software Engineering class. A website where users can join clubs or create their own as officers. Officers can post events and moderate member activity, while admins can modify club and category data.",
    techStack: ["React", "NextJS", "ExpressJS", "OpenAPI", "PostgreSQL", "Docker"],
    links: {
      github: { "Source Code": "https://github.com/CSE115A-Club-Organizer-App/Club-Organizer-App" }
    },
    dates: {
      start: new Date("2023-09"),
      end: new Date("2023-12")
    }
  },
  {
    name: "SlugSwap",
    slug: "slugswap",
    category: "Hackathon",
    description: "A messaging app for exchanging UCSC’s meal currency, SlugPoints. Features Google/Apple authentication and real-time messaging. Won Best UI/UX at CruzHacks 2023.",
    techStack: ["React Native", "Firebase"],
    links: {
      github: { "Source Code": "https://github.com/Ankur-0429/cruzhacks2023" },
      devpost: "https://devpost.com/software/slug-swap-g1uz0s",
      video: "https://youtu.be/repxf9i9c2g?si=Xc_5Ke7NoyfyRg3Z"
    },
    dates: {
      start: new Date("2023-01"),
      end: new Date("2023-01")
    }
  },
  {
    name: "CodePath Flashcard App",
    slug: "codepath-flashcard-app",
    description: "Built during CodePath’s Mobile App Development course. Features include adding, editing, and deleting flashcards, with optional dynamic screen size support and multiple choice answers.",
    techStack: ["Swift"],
    links: {
      github: { "Source Code": "https://github.com/russellelliott/CodePath-Flashcards" }
    },
    dates: {
      start: new Date("2022-02"),
      end: new Date("2022-04")
    }
  },
  {
    name: "PerfectlySnug Smart Topper App",
    slug: "perfectlysnug-smart-topper-app",
    description: "Developed for PerfectlySnug's temperature-controlled mattress topper. Built using the Ionic Framework for iOS and Android, featuring modern HTML, JavaScript, CSS, and Angular with Cordova plugins.",
    techStack: ["Ionic Framework", "Angular"],
    links: {
      github: { "Source Code": "https://github.com/russellelliott/PerfectlySnug-DemoApp" }
    },
    dates: {
      start: new Date("2022-06"),
      end: new Date("2022-09")
    }
  },
  {
    name: "Microgrid Manager",
    slug: "microgrid-manager",
    description: "A home power usage monitoring app that integrates data from Powerview, eGauge, and weather APIs to display power generation and consumption. Provides an intuitive UI to interpret technical data.",
    techStack: ["React", "Python", "Docker"],
    links: {
      github: { "Source Code": "https://github.com/daxidngyn/microgrid-manager-v2" }
    },
    dates: {
      start: new Date("2024-01"),
      end: new Date("2024-06")
    }
  },
  {
    name: "SierraHiking.net",
    slug: "sierrahiking-net",
    description: "Developed a website with a focus on maps, including major pages like landing, master map, and trail pages. Implemented AWS infrastructure for hosting, social media login, and security measures against DDOS attacks.",
    techStack: ["WordPress", "JavaScript", "HTML", "CSS"],
    links: {
      live: "https://sierrahiking.net/"
    },
    dates: {
      start: new Date("2022-07"),
      end: new Date("2023-01")
    }
  },
  {
    name: "Pack List Wizard",
    slug: "pack-list-wizard",
    description: "A WordPress plugin that generates custom backpacking lists using the OpenAI API based on user inputs. Users can see lists in a tabulated interface and export them as CSV files.",
    techStack: ["PHP", "OpenAI", "JavaScript", "CSS"],
    links: {
      live: "https://www.sierrahiking.net/pack-list-wizard/"
    },
    dates: {
      start: new Date("2023-06"),
      end: new Date("2024-01")
    }
  },
  {
    name: "PayPal Hackathon",
    slug: "paypal-hackathon",
    category: "Hackathon",
    description: "A storefront utilizing PayPal Fastlane for quick and easy checkout without requiring user accounts.",
    techStack: ["JavaScript", "OpenAPI", "Docker", "PostgreSQL"],
    links: {
      github: { "Source Code": "https://github.com/russellelliott/PayPal-Hackathon" }
    },
    dates: {
      start: new Date("2022-08"),
      end: new Date("2022-08")
    }
  },
  {
    name: "Esri Demo App",
    slug: "esri-demo",
    description: "A React application using the Esri JavaScript API, allowing users to view maps and place markers at desired locations with a simple click.",
    techStack: ["JavaScript", "Esri API"],
    links: {
      github: { "Source Code": "https://github.com/russellelliott/Esri-Demo-App" },
      live: "https://esri-demo-app.netlify.app/"
    },
    dates: {
      start: new Date("2024-06"),
      end: new Date("2024-06")
    }
  },
  {
    name: "Old Personal Website",
    slug: "old-personal-website",
    description: "My old personal website. Contained various programs in Javascript with HTML websites.",
    techStack: ["Javascript", "HTML", "CSS"],
    links: {
      github: { "Source Code": "https://github.com/russellelliott/russellelliott.github.io" },
      live: "https://russellelliott.github.io/"
    },
    dates: {
      start: new Date("2021-01"),
      end: new Date("2022-01")
    }
  }
];
