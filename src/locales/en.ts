import type { Translations } from "./types";

const en: Translations = {
  nav: {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Kim",
    nickname: "Theo",
    badge: "Backend Engineer, 1 YoE",
    roles: ["Backend Engineer", "AI Service Developer", "DevOps Practitioner"],
    description: "A backend engineer who cares about sustainable architecture.",
    descriptionSub: "Currently building AI services at Sejong AI Research Center.",
    contact: "Contact Me",
  },
  about: {
    index: "01",
    title: "About",
    values: [
      {
        keyword: "I enjoy collaboration itself",
        description:
          "I love the process of people with different perspectives coming together to build one product. At Apple Developer Academy, I worked with developers, designers, and planners — experiencing the value that can't be created alone. I find fulfillment in the process itself.",
      },
      {
        keyword: "Building software that gets used",
        description:
          "I'm more interested in solving real problems than in technology for its own sake. I've deployed side projects as live services, iterated based on user feedback, and I want to keep building software that people actually use.",
      },
      {
        keyword: "Never afraid to take on new challenges",
        description:
          "I choose to dive into unfamiliar territory rather than stay comfortable. As a backend developer, I took on deep learning and full-stack work at an AI research center, and challenged myself at Apple Developer Academy in a completely different environment. I don't hesitate in front of new technologies.",
      },
    ],
  },
  experience: {
    index: "02",
    title: "Experience",
    items: [
      {
        period: "2026.01 — Present",
        title: "Sejong AI Research Center",
        role: "Researcher",
        type: "Work",
        current: true,
        details: [
          "R&D of deep learning-based computer vision models and service deployment",
          "Full-stack architecture design with React + FastAPI, AI inference pipeline",
          "End-to-end ownership from requirements to design, development, and deployment",
        ],
      },
      {
        period: "2025.03 — 2025.12",
        title: "Apple Developer Academy @ POSTECH",
        type: "Education",
        details: [
          "Completed Apple-sponsored project-based education program",
          "Shipped multiple products in cross-functional teams (Dev, Design, PM)",
        ],
      },
      {
        period: "2018.03 — 2025.03",
        title: "Hannam University, Computer Engineering",
        type: "Education",
        details: [
          "Served as department president for 2 years (2023–2024)",
          "Founded programming club and organized the first university algorithm competition",
        ],
      },
    ],
  },
  skills: {
    index: "03",
    title: "Skills",
    tiers: [
      {
        label: "Primary Stack",
        description: "Confident from architecture to production",
        skills: ["Java", "Spring Boot", "MySQL", "Docker", "Git"],
      },
      {
        label: "Proficient",
        description: "Deeply used in production projects",
        skills: ["Redis", "AWS", "Python", "GitHub Actions"],
      },
      {
        label: "Hands-on Experience",
        description: "Learned and applied as needed",
        skills: ["Jenkins", "FastAPI", "React", "PostgreSQL", "Deep Learning"],
      },
    ],
    certificatesLabel: "Certificates",
    certificates: [
      { name: "Engineer Information Processing", date: "2024.12" },
      { name: "SQLD", date: "2024.06" },
    ],
  },
  projects: {
    index: "04",
    title: "Projects",
    implementationLabel: "Implementation",
    troubleshootingLabel: "Troubleshooting",
    items: [
      {
        title: "ReadIt",
        subtitle: "AI-powered personalized English learning platform",
        period: "2025.09 ~",
        role: "Backend architecture & full development",
        team: "Team of 6 (PM 1, Design 2, iOS 2, BE 1)",
        status: "Live",
        stacks: ["Spring Boot", "Spring AI", "Spring Security", "MySQL", "Redis", "AWS", "Docker", "GitHub Actions"],
        implementations: [
          "Built LLM response → Java object auto-mapping pipeline with Spring AI + BeanOutputConverter",
          "Ensured data consistency with Redisson distributed lock for async resource creation",
          "Minimized user wait time with @Async processing + pre-generation strategy",
          "Implemented Apple Sign-In JWT verification + Factory pattern for extensible OAuth architecture",
          "Set up HTTPS production environment with ALB + Route 53 + ACM",
        ],
        troubleshooting: [
          "Distributed lock eliminated duplicate creation on concurrent requests → removed unnecessary external API costs",
          "Long Transaction separation reduced DB connection hold time from 5 min → 50ms (99% reduction)",
        ],
        highlight: "Deployed MVP to production in 2 weeks, iteratively improved through real user feedback loops",
        links: [
          { label: "App Store", href: "https://apps.apple.com/kr/app/리드잇-ai-맞춤형-영어-학습/id6754702442" },
          { label: "Blog", href: "https://velog.io/@seongm1n/series/ReadIt" },
        ],
        notice: "Source code is private, as agreed upon with the team operating this service.",
      },
      {
        title: "CheerLot",
        subtitle: "Real-time baseball stadium companion service",
        period: "2025.05 — 2025.07",
        role: "Backend + Data pipeline + iOS (partial)",
        team: "Team of 6 (PM 1, Design 2, iOS 2, BE 1)",
        status: "Live",
        stacks: ["Spring Boot", "Redis", "Docker", "AWS", "SwiftUI", "Prometheus", "Grafana"],
        implementations: [
          "Built Thymeleaf-based admin system → enabled non-dev team members to manage servers independently",
          "Client-side version caching strategy reduced API calls by 70%",
          "MySQL → Redis migration cut core API response from 200ms → 30ms (85% faster)",
          "Real-time service monitoring and alerting with Prometheus + Grafana",
        ],
        troubleshooting: [
          "Resolved external crawling blocking issue with @Async + CompletableFuture async pipeline",
        ],
        links: [
          { label: "GitHub", href: "https://github.com/CheerLotTeam" },
          { label: "App Store", href: "https://apps.apple.com/kr/app/%EC%B3%90%EB%9E%8F-cheerlot/id6748527115" },
          { label: "Notion", href: "https://thrilling-chatter-055.notion.site/cheerlot" },
        ],
      },
      {
        title: "Challenger",
        subtitle: "AI-powered challenge tracking & management app",
        period: "2025.04 — 2025.05",
        role: "Solo full-cycle development",
        team: "Personal project",
        status: "Completed",
        stacks: ["Spring Boot", "Spring Security", "MySQL", "Redis", "Jenkins", "Nginx", "Docker", "AWS"],
        implementations: [
          "Designed stateless auth/authz system with Spring Security + JWT",
          "Implemented Redis-based refresh token management with token theft protection",
          "Integrated AI-powered challenge recommendation & analysis with Spring AI",
          "Built zero-downtime release pipeline with Blue-Green deployment",
          "Full CI/CD automation with Jenkins — from code push to production deployment",
        ],
        links: [
          { label: "GitHub", href: "https://github.com/challenger-c2" },
          { label: "Blog", href: "https://velog.io/@seongm1n/series/Challenger" },
        ],
      },
    ],
  },
  contact: {
    index: "05",
    title: "Contact",
    description: "Always open to new opportunities and collaboration. Feel free to reach out.",
  },
  footer: {
    copyright: "© 2026 Seongmin Kim (Theo)",
  },
};

export default en;
