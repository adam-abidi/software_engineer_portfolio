export interface DeveloperInfo {
    name: string;
    fullName: string;
    initials: string;
    title: string;
    roles: [string, string];
    description: string;
}

export interface SocialInfo {
    github: string;
    email: string;
    location: string;
}

export interface AboutInfo {
    title: string;
    description: string;
}

export interface Experience {
    position: string;
    company: string;
    period: string;
    location: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
}

export interface Project {
    id: number;
    title: string;
    category: string;
    technologies: string;
    image: string;
    description: string;
    link: string;
}

export interface SocialLink {
    name: string;
    url: string;
}

export interface ContactInfo {
    email: string;
    socials: SocialLink[];
}

export interface SkillCard {
    title: string;
    description: string;
    details: string;
    tools: string[];
}

export interface SkillsInfo {
    develop: SkillCard;
    design: SkillCard;
}

export interface TechItem {
    name: string;
    icon: string;
    url: string;
}

export interface AssetsInfo {
    profilePhoto: string;
    resumeUrl: string;
}

export interface PortfolioConfig {
    developer: DeveloperInfo;
    social: SocialInfo;
    about: AboutInfo;
    experiences: Experience[];
    projects: Project[];
    contact: ContactInfo;
    skills: SkillsInfo;
    techStack: TechItem[][];
    assets: AssetsInfo;
}

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const config: PortfolioConfig = {
    developer: {
        name: "Adam",
        fullName: "Adam Abidi",
        initials: "AA",
        title: "Software Engineering Student",
        roles: ["Software Engineer", "Full-Stack Developer"],
        description: "Final-year Software Architecture Engineering (SAE) student at ESPRIT with hands-on experience in full-stack development, microservices, database design, DevOps and CI/CD, gained through three internships and academic projects. I write Java, TypeScript and Python and build reliable, scalable software, from a Spring Boot microservice to a local RAG-based LLM app."
    },
    social: {
        github: "https://github.com/adam-abidi",
        email: "adamabidiengineer@gmail.com",
        location: "Ariana, Tunisia"
    },
    about: {
        title: "About Me",
        description: "I am a final-year Software Architecture Engineering (SAE) student at ESPRIT, Tunis. Through three internships and academic projects I have built hands-on experience in full-stack development, microservices, database design, DevOps and CI/CD. I write Java, TypeScript and Python and build reliable, scalable software — from a Spring Boot microservice platform to a local RAG-based LLM application. Eager to take on new challenges and collaborate on impactful projects."
    },
    experiences: [
        {
            position: "Full-Stack Developer Intern",
            company: "SPIRAW",
            period: "Jul 2026 - Aug 2026",
            location: "Tunisia",
            description: "Built the participant lifecycle for Spiraw Quiz (event discovery, registration, real-time scoring, leaderboards) with React 19 and Node.js, secured with 2FA and session cookies, containerized with Docker Compose and NGINX, and shipped through an automated GitHub Actions CI/CD pipeline.",
            responsibilities: [
                "Developed the participant lifecycle for Spiraw Quiz: event discovery, registration, real-time scoring, leaderboards",
                "Implemented 2FA, HttpOnly session cookies, token hashing, rate limiting and audit logging",
                "Automated CI/CD with GitHub Actions, linting, builds, SonarCloud quality gates and SSH-based production deployment",
                "Deployed nine mini-games as independent static NGINX bundles to decouple game releases from the core platform"
            ],
            technologies: ["React 19", "Node.js", "Express", "PostgreSQL", "Docker", "NGINX", "GitHub Actions"]
        },
        {
            position: "Full-Stack Developer Intern",
            company: "Food4Future Technologies",
            period: "Jul 2025 - Aug 2025",
            location: "Tunisia",
            description: "Delivered the youareshot.com e-commerce platform with English/Arabic RTL support, TND currency, Docker deployment, 15+ GA4 events and Odoo CRM integration.",
            responsibilities: [
                "Delivered an e-commerce platform with English/Arabic RTL support and TND currency",
                "Deployed with Docker and integrated 15+ GA4 events and Odoo CRM"
            ],
            technologies: ["React", "Node.js", "MongoDB", "Docker", "Odoo CRM"]
        },
        {
            position: "Network Engineering Intern",
            company: "Tunisie Telecom",
            period: "Summer 2024",
            location: "Tunisia",
            description: "Worked on network infrastructure, equipment configuration, diagnostics and technical documentation, contributing to 30% faster incident resolution and 36 hours/month of recovered availability across infrastructure serving 50+ devices.",
            responsibilities: [
                "Network infrastructure work, equipment configuration, diagnostics and technical documentation",
                "Contributed to 30% faster incident resolution and 36 hours/month of recovered availability across infrastructure serving 50+ devices"
            ],
            technologies: ["Networking", "Diagnostics", "Technical Documentation"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "AI Job Interview Simulator",
            category: "AI / Full-Stack",
            technologies: "Python, FastAPI, Angular 20, TypeScript, Ollama, Mistral-7B, FAISS, SQLite, JWT",
            image: "/images/smartcareer-cv-studio.png",
            description: "SmartCareer AI / CV Studio (ESPRIT): a local LLM interview simulator — Mistral-7B-Instruct served by Ollama, a three-stage prompt pipeline, a 72-chunk FAISS RAG layer, PII redaction before any LLM call, JWT-secured FastAPI endpoints and an Angular 20 UI with NDJSON streaming. Validated with 200 pytest tests and 12 Playwright E2E scenarios.",
            link: ""
        },
        {
            id: 2,
            title: "Freelancify",
            category: "Microservices",
            technologies: "Java 17, Spring Boot 3.2, Angular 17, MySQL, Flyway, Eureka, Keycloak, Jenkins, Kubernetes",
            image: "/images/freelancify.jpg",
            description: "ESPRIT team project (team of 6): a microservices freelancer platform. I owned the Collaboration Service — REST APIs and WebSocket/STOMP for contract negotiation, Kanban task transitions, sprint management and milestone updates — and configured Jenkins CI/CD, Kubernetes, SonarQube quality gates and Keycloak JWT security.",
            link: ""
        },
        {
            id: 3,
            title: "Learniverse",
            category: "E-Learning",
            technologies: "Symfony, JavaFX, FlutterFlow",
            image: "/images/learniverse.png",
            description: "Cross-platform e-learning platform with web, mobile and desktop apps, featuring 2FA, OAuth, session tracking, an administration panel and analytics.",
            link: ""
        }
    ],
    contact: {
        email: "adamabidiengineer@gmail.com",
        socials: [
            { name: "Github", url: "https://github.com/adam-abidi" },
            { name: "Linkedin", url: "https://linkedin.com/in/adam-abidi/" }
        ]
    },
    skills: {
        develop: {
            title: "BACKEND & MICROSERVICES",
            description: "Reliable backends & scalable services",
            details: "Designing and building REST APIs and microservices with Java, Spring Boot, Node.js and FastAPI, backed by PostgreSQL, MySQL and MongoDB, with containerized deployment and automated CI/CD pipelines.",
            tools: ["Java 17", "Spring Boot 3.2", "FastAPI", "Node.js", "Express", "PostgreSQL", "MySQL", "MongoDB", "Docker", "Kubernetes", "REST APIs", "WebSocket/STOMP"]
        },
        design: {
            title: "FULL-STACK & AI",
            description: "Modern web apps & local LLM integration",
            details: "Building responsive web UIs with Angular, React and TypeScript, and integrating local LLMs with RAG pipelines — Ollama, Mistral, FAISS and sentence-transformers — with a focus on security and testing.",
            tools: ["Angular 17/20", "React 19", "TypeScript", "Python", "Ollama", "Mistral", "RAG", "FAISS", "pytest", "Playwright", "JWT", "Keycloak"]
        }
    },
    techStack: [
        [
            { name: "Java", icon: `${DEVICON}/java/java-original.svg`, url: "https://dev.java" },
            { name: "Python", icon: `${DEVICON}/python/python-original.svg`, url: "https://python.org" },
            { name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg`, url: "https://typescriptlang.org" },
            { name: "React", icon: `${DEVICON}/react/react-original.svg`, url: "https://react.dev" },
            { name: "Angular", icon: `${DEVICON}/angularjs/angularjs-original.svg`, url: "https://angular.dev" },
            { name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg`, url: "https://nodejs.org" },
            { name: "Spring Boot", icon: `${DEVICON}/spring/spring-original.svg`, url: "https://spring.io/projects/spring-boot" },
            { name: "FastAPI", icon: `${DEVICON}/fastapi/fastapi-original.svg`, url: "https://fastapi.tiangolo.com" }
        ],
        [
            { name: "Symfony", icon: `${DEVICON}/symfony/symfony-original.svg`, url: "https://symfony.com" },
            { name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg`, url: "https://postgresql.org" },
            { name: "MySQL", icon: `${DEVICON}/mysql/mysql-original.svg`, url: "https://mysql.com" },
            { name: "MongoDB", icon: `${DEVICON}/mongodb/mongodb-original.svg`, url: "https://mongodb.com" },
            { name: "SQLite", icon: `${DEVICON}/sqlite/sqlite-original.svg`, url: "https://sqlite.org" },
            { name: "Oracle", icon: `${DEVICON}/oracle/oracle-original.svg`, url: "https://oracle.com/database" }
        ],
        [
            { name: "Docker", icon: `${DEVICON}/docker/docker-original.svg`, url: "https://docker.com" },
            { name: "Kubernetes", icon: `${DEVICON}/kubernetes/kubernetes-original.svg`, url: "https://kubernetes.io" },
            { name: "Jenkins", icon: `${DEVICON}/jenkins/jenkins-original.svg`, url: "https://jenkins.io" },
            { name: "GitHub Actions", icon: `${DEVICON}/githubactions/githubactions-original.svg`, url: "https://github.com/features/actions" },
            { name: "SonarQube", icon: `${DEVICON}/sonarqube/sonarqube-original.svg`, url: "https://sonarqube.org" }
        ],
        [
            { name: "NGINX", icon: `${DEVICON}/nginx/nginx-original.svg`, url: "https://nginx.org" },
            { name: "Maven", icon: `${DEVICON}/maven/maven-original.svg`, url: "https://maven.apache.org" },
            { name: "pytest", icon: `${DEVICON}/pytest/pytest-original.svg`, url: "https://pytest.org" },
            { name: "Playwright", icon: `${DEVICON}/playwright/playwright-original.svg`, url: "https://playwright.dev" }
        ],
        [
            { name: "Git", icon: `${DEVICON}/git/git-original.svg`, url: "https://git-scm.com" },
            { name: "GitHub", icon: `${DEVICON}/github/github-original.svg`, url: "https://github.com" },
            { name: "AWS", icon: `${DEVICON}/amazonwebservices/amazonwebservices-plain.svg`, url: "https://aws.amazon.com" }
        ]
    ],
    assets: {
        profilePhoto: "/images/adam-profile.png",
        resumeUrl: "/Adam_Abidi_CV.pdf"
    }
};
