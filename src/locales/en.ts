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
    name: "Kim SeongMin",
    nickname: "Theo",
    badge: "Backend Engineer",
    roles: ["Backend Engineer", "AI Service Developer", "DevOps Practitioner"],
    description:
      "A backend engineer finding his center while exploring a wide range of technologies.",
    descriptionSub: "Currently designing AI services at Sejong AI Research Center.",
    contact: "Contact Me",
  },
  about: {
    index: "01",
    title: "About",
    values: [
      {
        keyword: "Technology is a tool, not the answer",
        description:
          "I've loved problem solving since my undergraduate years — from algorithms to project-level issues, I enjoy approaching things from multiple angles. That's why I see technology as a tool, not a fixed answer. There are many ways to solve the same problem, and choosing the right tool for the context is what an engineer does.",
      },
      {
        keyword: "Use AI actively, but don't depend on it",
        description:
          "At Sejong AI Research Center, I build object-detection AI pipelines and fine-tune Hugging Face models for our domain to ship them as services. I try out emerging general-purpose AI tools myself, and continuously think about how to leverage AI well without becoming dependent on it.",
      },
      {
        keyword: "Design for change, not against it",
        description:
          "Scalability and flexibility are what I value most in backend design. Most environments I've worked in are zero-base startups where requirements shift constantly. I learned firsthand that without designing for change, modification cost snowballs — which led me to clean code, SOLID, and object-oriented design.",
      },
      {
        keyword: "Contribute meaningfully to the team and product",
        description:
          "I find the most fulfillment in building services that reach real users and taking on a core role as those services grow. To support that, I'm building up the DevOps capabilities required for stable service operation.",
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
        role: "Full-stack Developer",
        type: "Work",
        current: true,
        details: [
          "Object-detection model fine-tuning, AI pipeline design, and end-to-end service integration",
          "Fine-tune Hugging Face models for our domain and deploy them as production services",
          "Full-stack development in a startup environment with rapid MVP cycles, leveraging AI tools",
        ],
      },
      {
        period: "2026.03 — 2026.06",
        title: "DDD — Working Professionals' Side-Project Club",
        role: "Backend",
        type: "Side",
        details: [
          "Collaborated with PMs, designers, FE, and BE engineers from various companies — directly compared cross-org processes and tooling",
          "Drove introduction and operation of internal collaboration tools",
        ],
      },
      {
        period: "2025.03 — 2025.12",
        title: "Apple Developer Academy @ POSTECH",
        type: "Education",
        details: [
          "Completed the 10-month developer training program co-run by Apple and POSTECH",
          "Challenge-Based Learning (CBL): end-to-end product experience from problem definition to app design and development in mixed designer/developer teams",
        ],
      },
      {
        period: "2018.03 — 2025.02",
        title: "Hannam University — B.S. in Computer Engineering",
        type: "Education",
        details: [
          "Department president 2023–2024 — planned and ran the department's first-ever programming contest",
          "Operated programming club CMD, leading projects and study groups",
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
        skills: ["Java", "Spring Boot", "Python", "FastAPI", "Docker", "Git"],
      },
      {
        label: "Proficient",
        description: "Deeply used in production projects",
        skills: [
          "AWS (EC2, S3, RDS)",
          "PyTorch",
          "Hugging Face",
          "TypeScript",
          "React Native",
          "GitHub",
        ],
      },
      {
        label: "Hands-on Experience",
        description: "Learned and applied as needed",
        skills: [
          "Next.js",
          "YOLO",
          "VLM",
          "U-Net",
          "Kubernetes",
          "Cloudflare",
          "Jira",
          "Postman",
          "Notion",
        ],
      },
    ],
    certificatesLabel: "Certificates",
    certificates: [
      { name: "Engineer Information Processing", date: "2024.12" },
      { name: "SQLD", date: "2024.09" },
      { name: "AWS SAA-C03" },
      { name: "CKA" },
    ],
  },
  projects: {
    index: "04",
    title: "Projects",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    resultLabel: "Result",
    items: [
      {
        title: "ReadIt",
        subtitle:
          "AI-personalized English book learning app — selected for university startup grant; team is taking it to incorporation.",
        period: "2025.09 — 2025.12 (build) / 2025.12 — Present (operation)",
        role: "Sole backend & infrastructure (now contributing as technical advisor)",
        status: "Live",
        image: "/images/readit.png",
        imageWidth: 744,
        imageHeight: 330,
        stacks: [
          "Spring Boot",
          "Spring AI",
          "Redisson",
          "Redis",
          "MySQL",
          "Docker Compose",
          "Gemini API",
          "AWS (EC2, RDS, ALB)",
        ],
        problem:
          "English book learning has two chronic pain points: (1) it's hard to find a book at your level, and (2) the words you want to study don't appear at the right frequency. Off-the-shelf books are written without regard to the reader's level (no personalization), and pure flashcard memorization lacks context. To solve both, we built a Lexile-based AI story generation service and ran it end-to-end from MVP to real user validation.",
        solutions: [
          {
            title: "Ship a usable MVP in 2 weeks — validate value first",
            body:
              "We prioritized core-value validation over polish. Focused on three features — AI story generation, sentence-level Korean translation, and comprehension quizzes — and minimized infrastructure with Docker Compose to ship a usable service in 2 weeks. We avoided over-engineering and let user feedback shape direction.",
          },
          {
            title: "10-user pilot → established priorities",
            body:
              "A one-week test with 10 English learners surfaced three improvement axes: (1) Lexile-based difficulty personalization, (2) unknown-word review system, and (3) reducing generation latency. The shared feedback that \"AI generation takes too long\" directly motivated a pre-generation system, turning what used to be a 5-minute wait into a feel-instant experience.",
          },
          {
            title: "Spring AI — type-safe LLM integration",
            body:
              "Switched from raw OpenAI SDK calls to the Spring AI framework. We kept Spring Boot's DI, autoconfiguration, and property management, and used type-safe Structured Output to map non-deterministic LLM responses cleanly to Java objects. Defensive parsing code dropped sharply, and integration became reliable in production.",
          },
          {
            title: "Redisson distributed lock — eliminate duplicate generation",
            body:
              "If users sent another request while async book generation was in flight, identical books got generated repeatedly. A Redisson-based distributed lock per user serializes generation tasks: in-flight requests fail fast, and locks release safely on exception. Duplicate generation was eliminated, removing wasted LLM API spend.",
          },
          {
            title: "Transaction scope optimization — connection hold 5min → 50ms (~99%)",
            body:
              "Book generation including the AI API call averaged 5 minutes, and a single @Transactional wrapping the whole flow held a DB connection for those 5 minutes. With HikariCP's default pool size of 10, just 10 concurrent requests would exhaust it. We moved AI generation outside the transaction and applied an explicit transaction only to the Book entity save, cutting connection-hold time from ~5 min to ~50 ms (~99% reduction) and restoring concurrent throughput.",
          },
        ],
        results: [
          "Launched on the App Store in 2025.12, still in operation and maintenance",
          "Selected for university startup grant; team is incorporating (I contribute as technical advisor)",
          "Established a virtuous cycle: 2-week MVP → 10-user feedback → pre-generation & review system",
        ],
        highlight:
          "MVP shipped in 2 weeks, then iterated through real user feedback into pre-generation and a review system — all the way to a startup.",
        links: [
          {
            label: "App Store",
            href: "https://apps.apple.com/kr/app/%EB%A6%AC%EB%93%9C%EC%9E%87-ai-%EB%A7%9E%EC%B6%A4%ED%98%95-%EC%98%81%EC%96%B4-%ED%95%99%EC%8A%B5/id6754702442",
          },
        ],
        notice: "Source code is private, as agreed with the team operating this service.",
      },
      {
        title: "CheerLot",
        subtitle:
          "Baseball lineup & cheer-song app — grew to DAU 300 · MAU 10K as an in-stadium companion.",
        period: "2025.05 — 2025.07 (build) / 2025.07 — Present (operation)",
        role: "Backend & infrastructure (build) → React Native Android app (post-launch)",
        status: "Live",
        image: "/images/cheerlot.png",
        imageWidth: 1434,
        imageHeight: 804,
        stacks: [
          "Spring Boot",
          "FastAPI",
          "Redis",
          "NotionDB",
          "React Native",
          "Oracle Cloud (OCI)",
          "Cloudflare R2",
        ],
        problem:
          "There was no unified service to quickly look up the lineup and each player's cheer song while watching baseball live. Beginners especially struggled to navigate per-team scattered info during a game. On top of that, the baseball domain data (players, cheer songs, lineups) is large and frequently updated, and data accessibility & comms with non-developers (PM/designer) became a bottleneck.",
        solutions: [
          {
            title: "NotionDB as the data layer — non-dev-friendly operations",
            body:
              "Given the requirement that PM/designers must be able to edit data themselves, we picked NotionDB as the backend data source — no separate admin page needed. But Notion API has hundreds-of-ms-to-1s latency, rate limits, and intermittent failures, so we wrapped it in exponential-backoff retry + a Redis caching layer. Cache hits cut response time to under 5ms (~100x improvement vs. raw API calls), isolated us from API outages, and the retry policy absorbed 99%+ of transient failures.",
          },
          {
            title: "Split crawler worker (Spring Boot → FastAPI)",
            body:
              "Initially the Spring Boot server handled crawling too, and operational API availability dropped noticeably. We split the crawler into a separate FastAPI service to isolate it from production. Python's mature crawling ecosystem helped reliability. After the split, the production server's response was no longer affected by crawl load.",
          },
          {
            title: "Continuous QA and feedback-driven iteration",
            body:
              "We kept a per-release QA cycle and folded real user feedback into the next sprint. We detected Android demand in operations and shipped an RN Android app ourselves to expand platform coverage.",
          },
        ],
        results: [
          "Launched 2025.07, continuously operated since",
          "Achieved DAU 300 · MAU 10,000 with sustained growth",
          "Detected native Android demand in production → built and shipped an RN Android app",
        ],
        highlight:
          "A side project that started for one baseball-novice friend grew into a DAU 300 · MAU 10K product.",
        links: [
          { label: "GitHub", href: "https://github.com/CheerLotTeam" },
          { label: "Instagram", href: "https://www.instagram.com/cheer.lot/" },
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
    copyright: "© 2026 Kim SeongMin (Theo)",
  },
};

export default en;
