import type { Translations } from "./types";

const ko: Translations = {
  nav: {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    greeting: "안녕하세요, 저는",
    name: "김성민",
    nickname: "Theo",
    badge: "백엔드 개발자",
    roles: ["Backend Engineer", "AI Service Developer", "DevOps Practitioner"],
    description: "다양한 기술을 경험하며 중심을 잡아가는 중인 백엔드 개발자.",
    descriptionSub: "현재 세종AI연구센터에서 AI 서비스를 설계하고 있습니다.",
    contact: "Contact Me",
  },
  about: {
    index: "01",
    title: "About",
    values: [
      {
        keyword: "기술은 정답이 아니라 도구",
        description:
          "학부 시절부터 Problem Solving 자체를 좋아했습니다. 알고리즘 풀이부터 프로젝트에서 부딪힌 이슈까지, 여러 관점에서 풀어내는 과정이 가장 재미있었고, 그래서 기술을 정답이 아니라 도구로 봅니다. 같은 문제를 푸는 방법은 여러 개고, 맥락에 맞는 도구를 고르는 게 엔지니어의 일이라고 생각합니다.",
      },
      {
        keyword: "AI를 적극 활용하되 의존하지 않는 개발",
        description:
          "현재 세종AI연구센터에서 풀스택 개발자로 일하며 객체탐지 모델 기반 AI 파이프라인을 구축하고, Hugging Face 모델을 도메인에 맞게 파인튜닝해 서비스 형태로 배포하고 있습니다. 새로 나오는 범용 AI 도구는 웬만하면 직접 써보는 편이고, AI에 의존하지 않으면서 잘 활용하는 법을 계속 고민하고 있습니다.",
      },
      {
        keyword: "변화를 전제로 한 확장 가능한 설계",
        description:
          "백엔드 설계에서 가장 중요하게 보는 건 확장성과 유연성입니다. 제로베이스에서 시작하는 스타트업 환경에서 요구사항이 수시로 바뀌는 상황을 자주 겪었고, 변화를 전제로 설계하지 않으면 수정 비용이 눈덩이처럼 불어난다는 걸 직접 배웠습니다. 그래서 자연스럽게 클린 코드와 SOLID 원칙, 객체지향 설계에 관심을 갖게 됐습니다.",
      },
      {
        keyword: "팀과 서비스의 성장에 실질적으로 기여",
        description:
          "누군가에게 닿는 서비스를 만들고, 그 서비스가 성장하는 흐름 안에서 핵심 역할을 맡아가는 과정이 가장 보람 있다고 느낍니다. 이를 위해 지금은 안정적인 서비스 운영에 필요한 DevOps 역량을 함께 쌓고 있습니다.",
      },
    ],
  },
  experience: {
    index: "02",
    title: "Experience",
    items: [
      {
        period: "2026.01 — 현재",
        title: "세종AI연구센터",
        role: "풀스택 개발자",
        type: "Work",
        current: true,
        details: [
          "객체탐지 모델 파인튜닝 및 AI 파이프라인 설계 · 서비스 통합까지 담당",
          "Hugging Face 모델을 도메인에 맞게 파인튜닝해 서비스 형태로 배포",
          "스타트업 환경에서 AI 도구를 적극 활용한 풀스택 개발 수행 (빠른 MVP 사이클 반복)",
        ],
      },
      {
        period: "2026.03 — 2026.06",
        title: "DDD — 직장인 사이드 프로젝트 동아리",
        role: "백엔드",
        type: "Side",
        details: [
          "다양한 회사 출신 PM · 디자이너 · 프론트엔드 · 백엔드와 협업하며 조직별 프로젝트 프로세스와 협업 도구 차이를 직접 비교 · 경험",
          "팀 내 협업 도구 도입 및 운영 주도",
        ],
      },
      {
        period: "2025.03 — 2025.12",
        title: "Apple Developer Academy @ POSTECH",
        type: "Education",
        details: [
          "Apple과 POSTECH이 공동 운영하는 개발자 양성 프로그램 (10개월 과정 수료)",
          "Challenge-Based Learning(CBL) 방식으로 디자이너 · 개발자 혼성 팀에서 실제 문제 정의부터 앱 기획 · 개발까지 E2E 경험",
        ],
      },
      {
        period: "2018.03 — 2025.02",
        title: "한남대학교 컴퓨터공학과 — 학사",
        type: "Education",
        details: [
          "2023~2024 컴퓨터공학과 학생회장 — 학과 최초의 교내 프로그래밍 대회 기획 · 운영",
          "교내 개발 동아리 CMD 운영, 프로젝트 · 스터디 주도",
        ],
      },
    ],
  },
  skills: {
    index: "03",
    title: "Skills",
    tiers: [
      {
        label: "주력으로 사용합니다",
        description: "설계부터 운영까지 자신 있게 다루는 기술",
        skills: ["Java", "Spring Boot", "Python", "FastAPI", "Docker", "Git"],
      },
      {
        label: "능숙하게 다룹니다",
        description: "실무 프로젝트에서 깊이 있게 활용한 기술",
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
        label: "프로젝트에 활용했습니다",
        description: "필요에 따라 학습하며 적용한 기술",
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
      { name: "정보처리기사", date: "2024.12" },
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
        title: "ReadIt (리드잇)",
        subtitle: "AI 맞춤형 영어 원서 학습 앱 — 대학 창업지원금 선정 후 팀 창업 진행 중",
        period: "2025.09 — 2025.12 (개발) / 2025.12 ~ 현재 (운영·유지보수)",
        role: "백엔드 · 인프라 전담 (현재는 기술 자문 형태로 지속 기여)",
        status: "운영 중",
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
          "영어 원서 학습은 두 가지 고질적 페인 포인트가 있다. ① 자기 수준에 맞는 책을 고르기 어렵고, ② 학습하고 싶은 단어가 책에 적절한 빈도로 나오지 않는다. 기성 원서는 독자 수준과 무관하게 쓰여 개인화가 불가능하고, 단어장 암기는 맥락이 없어 실효성이 떨어진다. 이 두 문제를 동시에 풀기 위해 Lexile 지수 기반 AI 스토리 생성 서비스를 기획하고, MVP부터 실제 사용자 검증까지 E2E로 진행했다.",
        solutions: [
          {
            title: "2주 안에 실사용 가능한 MVP 배포 — 핵심 가치 검증 우선",
            body:
              "프로덕션 완성도보다 핵심 가치 검증을 우선했다. \"AI 스토리 생성 / 문장별 한국어 번역 / 이해도 퀴즈\"라는 3가지 핵심 기능에만 집중하고, Docker Compose로 인프라를 최소 구성해 2주 만에 실사용 가능한 서비스를 배포했다. 과한 초기 설계를 피하고, 사용자 피드백으로 방향성을 잡은 뒤 점진적으로 확장하는 전략을 택했다.",
          },
          {
            title: "초기 사용자 10명 테스트 → 우선순위 확립",
            body:
              "1주간 영어 학습자 10명을 대상으로 테스트해 ① Lexile 지수 기반 난이도 개인화, ② 모르는 단어 복습 시스템, ③ 생성 대기 시간 개선이라는 3대 개선 축을 확보했다. 특히 \"AI 생성 대기 시간이 너무 길다\"는 공통 피드백이 사전 생성 시스템 도입의 직접적 계기가 됐고, 평균 5분이 걸리던 책 생성을 유저 관점에서는 즉시 시작 가능한 경험으로 전환했다.",
          },
          {
            title: "Spring AI 도입 — 타입 안전한 LLM 통합",
            body:
              "OpenAI SDK를 직접 호출하던 방식에서 Spring AI 프레임워크로 전환했다. Spring Boot 생태계의 DI·자동 구성·프로퍼티 관리를 그대로 활용할 수 있었고, 특히 타입 안전한 구조화 출력(Structured Output)으로 LLM의 비결정적 텍스트 응답을 Java 객체로 안정적으로 매핑할 수 있었다. AI 응답 파싱 실패 방어 코드가 대폭 줄고, 프로덕션 환경에서 안정적 통합이 가능해졌다.",
          },
          {
            title: "Redisson 분산 락 — 중복 생성 원천 차단",
            body:
              "비동기 책 생성 중 유저가 추가 요청을 보낼 때 동일 책이 무한 중복 생성되는 문제가 있었다. Redisson 기반 분산 락으로 유저별 생성 작업을 직렬화해, 생성 중인 요청은 즉시 에러로 반환하고 예외 발생 시에도 락을 안전하게 해제하도록 설계했다. 그 결과 중복 생성이 완전히 차단되고, 불필요한 LLM API 호출 비용까지 제거됐다.",
          },
          {
            title: "트랜잭션 스코프 최적화 — 커넥션 점유 시간 5분 → 50ms (약 99% 단축)",
            body:
              "책 생성은 AI API 호출까지 포함해 평균 5분이 걸리는데, @Transactional이 전체 흐름을 감싸고 있어 DB 커넥션을 5분간 점유하는 구조였다. HikariCP 기본 풀(10) 기준 동시 요청 10건만 누적돼도 풀 고갈이 발생했다. AI 생성 작업을 트랜잭션 밖으로 분리하고 Book 엔티티 저장 구간에만 명시적 트랜잭션을 적용해 커넥션 점유 시간을 5분 → 50ms 수준으로 약 99% 단축했고, 동시 요청 처리량이 회복됐다.",
          },
        ],
        results: [
          "2025.12 App Store 정식 출시, 현재까지 운영·유지보수 지속",
          "대학 창업지원금 선정, 팀원들이 창업 과정 진행 중 (본인은 기술 자문 형태로 기여)",
          "MVP 2주 → 사용자 10명 피드백 → 사전 생성·복습 시스템 고도화의 선순환 확립",
        ],
        highlight:
          "MVP 2주 만에 프로덕션 배포, 사용자 피드백 루프로 사전 생성·복습 시스템을 고도화하며 창업까지 이어간 프로젝트.",
        links: [
          {
            label: "App Store",
            href: "https://apps.apple.com/kr/app/%EB%A6%AC%EB%93%9C%EC%9E%87-ai-%EB%A7%9E%EC%B6%A4%ED%98%95-%EC%98%81%EC%96%B4-%ED%95%99%EC%8A%B5/id6754702442",
          },
        ],
        notice: "팀과 운영 중인 서비스로, 협의 후 GitHub 리포지토리는 비공개 처리했습니다.",
      },
      {
        title: "CheerLot (쳐랏)",
        subtitle: "야구 라인업·응원가 앱 — DAU 300 · MAU 1만으로 성장한 직관 동반 앱",
        period: "2025.05 — 2025.07 (개발) / 2025.07 ~ 현재 (운영·유지보수)",
        role: "백엔드 · 인프라 (개발) → React Native 안드로이드 앱 (운영 전환 후)",
        status: "운영 중",
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
          "야구 직관 시 라인업과 각 선수별 응원가를 빠르게 찾을 수 있는 통합 서비스가 없었다. 특히 야구 초보자는 구단별로 흩어진 정보를 경기 중에 탐색하기 어려웠다. 또한 야구 도메인 데이터(선수, 응원가, 라인업)가 방대하고 갱신이 잦아, 비개발자(PM·디자이너)와 협업하는 과정에서 데이터 접근성과 의사소통이 병목으로 떠올랐다.",
        solutions: [
          {
            title: "NotionDB를 데이터 레이어로 채택 — 비개발자 친화적 데이터 운영",
            body:
              "PM·디자이너가 직접 데이터를 다룰 수 있어야 한다는 요구사항에 맞춰 NotionDB를 백엔드 데이터 소스로 선택했다. 별도 어드민 페이지 구축 없이 바로 협업 가능한 게 핵심 이점이었다. 단, Notion API는 평균 응답시간이 수백 ms~1초 수준이고 rate limit과 간헐적 실패 이슈가 있어, exponential backoff 기반 retry + Redis 캐싱 레이어로 감쌌다. 캐시 히트 시 응답시간이 5ms 이내로 줄어 외부 API 대비 약 100배 수준의 성능 개선과 API 장애 격리 효과를 확보했고, retry 정책으로 transient 실패의 99% 이상을 흡수했다.",
          },
          {
            title: "크롤링 워커 분리 (Spring Boot → FastAPI)",
            body:
              "초기에는 Spring Boot 단일 서버에서 크롤링까지 담당했지만 운영 API 가용성이 눈에 띄게 떨어졌다. 크롤링 워커를 별도 FastAPI 서버로 분리해 운영 서버와 격리했고, Python의 성숙한 크롤링 라이브러리 생태계로 안정성까지 챙겼다. 분리 이후 운영 서버는 크롤링 부하와 무관하게 응답한다.",
          },
          {
            title: "지속적 QA와 유저 피드백 기반 고도화",
            body:
              "출시 후에도 배포 주기마다 QA 라운드를 반복하고 실사용자 피드백을 다음 스프린트에 녹이는 사이클을 유지했다. 운영 중 안드로이드 수요를 확인하고 React Native로 직접 개발해 플랫폼 커버리지를 확장했다.",
          },
        ],
        results: [
          "2025.07 정식 출시, 현재까지 운영 지속",
          "DAU 300 · MAU 10,000 달성, 성장세 유지",
          "운영 중 네이티브 수요 감지 → RN 안드로이드 앱 직접 개발 및 배포",
        ],
        highlight:
          "야구 초보 친구 한 명을 위해 시작한 사이드 프로젝트가 DAU 300·MAU 1만 규모로 성장.",
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
    description: "새로운 기회와 협업에 항상 열려 있습니다. 편하게 연락 주세요.",
  },
  footer: {
    copyright: "© 2026 김성민 (Theo)",
  },
};

export default ko;
