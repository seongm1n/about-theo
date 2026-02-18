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
    badge: "1년차 백엔드 엔지니어",
    roles: ["Backend Engineer", "AI Service Developer", "DevOps Practitioner"],
    description: "지속 가능한 구조를 고민하는 백엔드 엔지니어.",
    descriptionSub: "현재 세종AI연구센터에서 AI 서비스를 설계하고 있습니다.",
    contact: "Contact Me",
  },
  about: {
    index: "01",
    title: "About",
    values: [
      {
        keyword: "협업 그 자체를 즐기는 사람",
        description:
          "서로 다른 시각을 가진 사람들이 모여 하나의 프로덕트를 만들어가는 과정이 좋습니다. Apple Developer Academy에서 개발자, 디자이너, 기획자와 함께 일하며 혼자서는 만들 수 없는 가치를 경험했고, 그 과정 자체에서 보람을 느낍니다.",
      },
      {
        keyword: "만든 것이 쓰이는 경험을 추구",
        description:
          "기술 자체보다 그 기술로 누군가의 문제를 해결하는 데 관심이 있습니다. 사이드 프로젝트를 실제 서비스로 배포하고, 사용자 피드백을 받아 개선하는 사이클을 반복하며 '쓰이는 소프트웨어'를 만들고 싶습니다.",
      },
      {
        keyword: "도전을 두려워하지 않는 자세",
        description:
          "익숙한 것에 머무르기보다 새로운 영역에 뛰어드는 것을 선택합니다. 백엔드 개발자이지만 AI 연구센터에서 딥러닝과 풀스택을 맡았고, Apple Developer Academy에 도전해 전혀 다른 환경에서 성장했습니다. 낯선 기술 앞에서 주저하지 않습니다.",
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
        role: "연구원",
        type: "Work",
        current: true,
        details: [
          "딥러닝 기반 컴퓨터 비전 모델 연구 개발 및 서비스 적용",
          "React + FastAPI 풀스택 아키텍처 설계, AI 추론 파이프라인 구축",
          "요구사항 정의부터 설계·개발·배포까지 End-to-End 주도",
        ],
      },
      {
        period: "2025.03 — 2025.12",
        title: "Apple Developer Academy @ POSTECH",
        type: "Education",
        details: [
          "Apple 지원 프로젝트 기반 교육 과정 수료",
          "개발·디자인·기획 크로스펑셔널 팀에서 다수 프로덕트 출시",
        ],
      },
      {
        period: "2018.03 — 2025.03",
        title: "한남대학교 컴퓨터공학과",
        type: "Education",
        details: [
          "컴퓨터공학과 학생회장으로 2년간 학과 운영 총괄 (2023~2024)",
          "프로그래밍 동아리 설립·운영, 교내 최초 알고리즘 대회 기획·주최",
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
        skills: ["Java", "Spring Boot", "MySQL", "Docker", "Git"],
      },
      {
        label: "능숙하게 다룹니다",
        description: "실무 프로젝트에서 깊이 있게 활용한 기술",
        skills: ["Redis", "AWS", "Python", "GitHub Actions"],
      },
      {
        label: "프로젝트에 활용했습니다",
        description: "필요에 따라 학습하며 적용한 기술",
        skills: ["Jenkins", "FastAPI", "React", "Deep Learning"],
      },
    ],
    certificatesLabel: "Certificates",
    certificates: [
      { name: "정보처리기사", date: "2024.12" },
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
        title: "ReadIt (리딧)",
        subtitle: "AI 기반 맞춤형 영어 학습 플랫폼",
        period: "2025.09 ~",
        role: "백엔드 아키텍처 설계 및 전체 개발",
        team: "6인 팀 (PM 1, Design 2, iOS 2, BE 1)",
        status: "운영 중",
        stacks: ["Spring Boot", "Spring AI", "Spring Security", "MySQL", "Redis", "AWS", "Docker", "GitHub Actions"],
        implementations: [
          "Spring AI + BeanOutputConverter를 활용한 LLM 응답 → Java 객체 자동 매핑 파이프라인 구축",
          "Redisson 분산 락 기반 동시성 제어로 비동기 리소스 생성 시 데이터 정합성 보장",
          "@Async 비동기 처리 + 사전 생성 전략으로 사용자 대기 시간 최소화",
          "Apple Sign-In JWT 검증 직접 구현 + Factory 패턴으로 OAuth 제공자 확장 가능한 인증 아키텍처 설계",
          "ALB + Route 53 + ACM 기반 HTTPS 프로덕션 배포 환경 구축",
        ],
        troubleshooting: [
          "분산 락 도입으로 동시 요청 시 중복 생성 완전 차단 → 불필요한 외부 API 비용 제거",
          "Long Transaction 분리 설계로 DB 커넥션 점유 시간 5분 → 50ms (99% 단축)",
        ],
        highlight: "MVP 2주 만에 프로덕션 배포, 실사용자 피드백 루프를 통한 데이터 기반 점진적 개선",
      },
      {
        title: "CheerLot (쳐랏)",
        subtitle: "실시간 야구 직관 도우미 서비스",
        period: "2025.05 — 2025.07",
        role: "백엔드 + 데이터 파이프라인 + iOS 일부",
        team: "6인 팀 (PM 1, Design 2, iOS 2, BE 1)",
        status: "운영 중",
        stacks: ["Spring Boot", "Redis", "Docker", "AWS", "SwiftUI", "Prometheus", "Grafana"],
        implementations: [
          "Thymeleaf 기반 어드민 시스템 구축 → 비개발 직군의 독립적 운영 환경 확보",
          "클라이언트 사이드 버전 캐싱 전략으로 API 호출 70% 절감",
          "MySQL → Redis 마이그레이션으로 핵심 API 응답 200ms → 30ms (85% 단축)",
          "Prometheus + Grafana 기반 실시간 서비스 모니터링 및 알림 체계 구축",
        ],
        troubleshooting: [
          "@Async + CompletableFuture 비동기 파이프라인으로 외부 크롤링 블로킹 이슈 해소",
        ],
      },
      {
        title: "Challenger (챌린저)",
        subtitle: "AI 기반 챌린지 기록·관리 앱",
        period: "2025.04 — 2025.05",
        role: "1인 풀사이클 개발",
        team: "개인 프로젝트",
        status: "완료",
        stacks: ["Spring Boot", "Spring Security", "MySQL", "Redis", "Jenkins", "Nginx", "Docker", "AWS"],
        implementations: [
          "Spring Security + JWT 기반 Stateless 인증/인가 시스템 설계",
          "Redis 기반 리프레시 토큰 관리 및 토큰 탈취 방어 로직 구현",
          "Spring AI를 활용한 챌린지 추천·분석 AI 기능 통합",
          "Blue-Green 배포 전략으로 Zero-downtime 릴리즈 파이프라인 구축",
          "Jenkins CI/CD 자동화 — 코드 푸시부터 프로덕션 배포까지 완전 자동화",
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
