export const projects = [
    {
      name: "CruzHacks Website",
      description: "Developed notification system for hackathon participants. Created schema for applications to participate in the hackathon and worked on frontend components for displaying sponsors and previous year’s websites.",
      techStack: ["React", "Node.js", "Firebase"],
      links: {
        githubFrontend: "https://github.com/CruzHacks/cruzhacks-2024-website",
        githubBackend: "https://github.com/CruzHacks/cruzhacks-2024-backend"
      },
      dates: {
        start: new Date("2023-09"),
        end: new Date("2024-01")
      },
      slug: "cruzhacks-website"
    },
    {
      name: "CruzHacks Backend Challenge",
      description: "Backend challenge for my application to the engineering team at CruzHacks. Features endpoints for managing hackers and judges in a hackathon through an OpenAPI RESTful API.",
      techStack: ["React", "Node.js", "OpenAPI", "PostgreSQL", "Docker"],
      links: {
        github: "https://github.com/russellelliott/CruzHacks2024-Backend-Challenge"
      },
      dates: {
        start: new Date("2023-05"),
        end: new Date("2023-05")
      },
      slug: "cruzhacks-backend-challenge"
    },
    {
      name: "CruzHacks Frontend Challenge",
      description: "Frontend challenge for my application to the engineering team at CruzHacks. Features a frontend schedule component fetching data from a provided API.",
      techStack: ["React", "Node.js"],
      links: {
        github: "https://github.com/russellelliott/CruzHacks2024-Frontend-Challenge"
      },
      dates: {
        start: new Date("2023-05"),
        end: new Date("2023-05")
      },
      slug: "cruzhacks-frontend-challenge"
    },
    {
      name: "Club Organizer App",
      description: "Project for a Software Engineering class. A website where users can join clubs or create their own as officers. Officers can post events and moderate member activity, while admins can modify club and category data.",
      techStack: ["React", "NextJS", "ExpressJS", "OpenAPI", "PostgreSQL", "Docker"],
      links: {
        github: "https://github.com/CSE115A-Club-Organizer-App/Club-Organizer-App"
      },
      dates: {
        start: new Date("2023-09"),
        end: new Date("2023-12")
      },
      slug: "club-organizer-app"
    },
    {
      name: "SlugSwap",
      description: "A messaging app for exchanging UCSC’s meal currency, SlugPoints. Features Google/Apple authentication and real-time messaging. Won Best UI/UX at CruzHacks 2023.",
      techStack: ["React Native", "Firebase"],
      links: {
        github: "https://github.com/Ankur-0429/cruzhacks2023",
        devpost: "https://devpost.com/software/slug-swap-g1uz0s",
        video: "https://youtu.be/repxf9i9c2g"
      },
      dates: {
        start: new Date("2023-01"),
        end: new Date("2023-01")
      },
      slug: "slugswap"
    },
    {
      name: "CodePath Flashcard App",
      description: "Built during CodePath’s Mobile App Development course. Features include adding, editing, and deleting flashcards, with optional dynamic screen size support and multiple choice answers.",
      techStack: ["Swift"],
      links: {
        github: "https://github.com/russellelliott/CodePath-Flashcards"
      },
      dates: {
        start: new Date("2022-02"),
        end: new Date("2022-04")
      },
      slug: "codepath-flashcard-app"
    },
    {
      name: "PerfectlySnug Smart Topper App",
      description: "Developed for PerfectlySnug's temperature-controlled mattress topper. Built using the Ionic Framework for iOS and Android, featuring modern HTML, JavaScript, CSS, and Angular with Cordova plugins.",
      techStack: ["Ionic Framework", "Angular"],
      links: {
        github: "https://github.com/russellelliott/PerfectlySnug-DemoApp"
      },
      dates: {
        start: new Date("2022-06"),
        end: new Date("2022-09")
      },
      slug: "perfectlysnug-smart-topper-app"
    },
    {
      name: "Microgrid Manager",
      description: "A home power usage monitoring app that integrates data from Powerview, Gauge, and weather APIs to display power generation and consumption. Provides an intuitive UI to interpret technical data.",
      techStack: ["React", "Python", "Docker"],
      links: {
        github: "https://github.com/daxidngyn/microgrid-manager-v2"
      },
      dates: {
        start: new Date("2024-01"),
        end: new Date("2024-06")
      },
      slug: "microgrid-manager"
    },
    {
      name: "SierraHiking.net",
      description: "Developed a website with a focus on maps, including major pages like landing, master map, and trail pages. Implemented AWS infrastructure for hosting, social media login, and security measures against DDOS attacks.",
      techStack: ["WordPress", "JavaScript", "HTML", "CSS"],
      links: {
        web: "https://sierrahiking.net/"
      },
      dates: {
        start: new Date("2022-07"),
        end: new Date("2023-01")
      },
      slug: "sierrahiking-net"
    },
    {
      name: "Pack List Wizard",
      description: "A WordPress plugin that generates custom backpacking lists using the OpenAI API based on user inputs. Users can see lists in a tabulated interface and export them as CSV files.",
      techStack: ["PHP", "OpenAI", "JavaScript", "CSS"],
      links: {
        web: "https://www.sierrahiking.net/pack-list-wizard/"
      },
      dates: {
        start: new Date("2023-06"),
        end: new Date("2024-01")
      },
      slug: "pack-list-wizard"
    },
    {
      name: "CSE187 Capstone Project",
      description: "An e-commerce application for buying and selling items, featuring admin capabilities, a CI/CD pipeline, and a microservice architecture. Includes comprehensive tests and containerization.",
      techStack: ["React", "NextJS", "OpenAPI", "GraphQL", "Docker", "PostgreSQL"],
      links: {
        github: "https://github.com/CSE187-Team2",
        video: "https://www.youtube.com/watch?v=xXD64lfvpT4"
      },
      dates: {
        start: new Date("2022-09"),
        end: new Date("2022-12")
      },
      slug: "cse187-capstone-project"
    },
    {
      name: "PayPal Hackathon",
      description: "A storefront utilizing PayPal Fastlane for quick and easy checkout without requiring user accounts.",
      techStack: ["JavaScript", "OpenAPI", "Docker", "PostgreSQL"],
      links: {
        github: "https://github.com/russellelliott/PayPal-Hackathon"
      },
      dates: {
        start: new Date("2022-08"),
        end: new Date("2022-08")
      },
      slug: "paypal-hackathon"
    },
    {
      name: "Esri Demo App",
      description: "A React application using the Esri JavaScript API, allowing users to view maps and place markers at desired locations with a simple click.",
      techStack: ["JavaScript", "Esri API"],
      links: {
        github: "https://github.com/russellelliott/Esri-Demo-App",
        web: "https://esri-demo-app.netlify.app/"
      },
      dates: {
        start: new Date("2024-06"),
        end: new Date("2024-06")
      },
      slug: "esri-demo"
    },
    {
      name: "Old Personal Website",
      description: "My old personal website. Contained various programs in Javascript with HTML websites.",
      techStack: ["Javascript", "HTML", "CSS"],
      links: {
        github: "https://github.com/russellelliott/russellelliott.github.io",
        web: "https://russellelliott.github.io/"
      },
      dates: {
        start: new Date("2021-01"),
        end: new Date("2022-01")
      },
      slug: "old-personal-website"
    }
  ];
  