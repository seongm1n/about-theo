import type { Translations } from "./types";

const ja: Translations = {
  nav: {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    greeting: "はじめまして、",
    name: "キム・ソンミン",
    nickname: "Theo",
    badge: "バックエンドエンジニア 1年目",
    roles: ["Backend Engineer", "AI Service Developer", "DevOps Practitioner"],
    description: "持続可能なアーキテクチャを追求するバックエンドエンジニア。",
    descriptionSub: "現在、世宗AI研究センターでAIサービスを設計しています。",
    contact: "Contact Me",
  },
  about: {
    index: "01",
    title: "About",
    values: [
      {
        keyword: "コラボレーションそのものを楽しむ",
        description:
          "異なる視点を持つ人々が集まり、一つのプロダクトを作り上げる過程が好きです。Apple Developer Academyで開発者、デザイナー、企画者と共に働き、一人では作れない価値を経験しました。その過程自体にやりがいを感じます。",
      },
      {
        keyword: "使われるソフトウェアを追求",
        description:
          "技術そのものより、その技術で誰かの問題を解決することに関心があります。サイドプロジェクトを実際のサービスとしてデプロイし、ユーザーフィードバックを反映して改善するサイクルを繰り返しながら、「使われるソフトウェア」を作りたいと思っています。",
      },
      {
        keyword: "挑戦を恐れない姿勢",
        description:
          "慣れたものに留まるより、新しい領域に飛び込むことを選びます。バックエンド開発者ですが、AI研究センターでディープラーニングとフルスタック開発を担当し、Apple Developer Academyに挑戦して全く異なる環境で成長しました。未知の技術の前で躊躇しません。",
      },
    ],
  },
  experience: {
    index: "02",
    title: "Experience",
    items: [
      {
        period: "2026.01 — 現在",
        title: "世宗AI研究センター",
        role: "研究員",
        type: "Work",
        current: true,
        details: [
          "ディープラーニング基盤のコンピュータビジョンモデルの研究開発およびサービス適用",
          "React + FastAPI フルスタックアーキテクチャ設計、AI推論パイプライン構築",
          "要件定義から設計・開発・デプロイまでEnd-to-Endで主導",
        ],
      },
      {
        period: "2025.03 — 2025.12",
        title: "Apple Developer Academy @ POSTECH",
        type: "Education",
        details: [
          "Apple支援のプロジェクトベース教育課程を修了",
          "開発・デザイン・企画のクロスファンクショナルチームで複数プロダクトをリリース",
        ],
      },
      {
        period: "2018.03 — 2025.03",
        title: "韓南大学校 コンピュータ工学科",
        type: "Education",
        details: [
          "コンピュータ工学科の学生会長として2年間学科運営を総括 (2023~2024)",
          "プログラミングサークル設立・運営、学内初のアルゴリズム大会を企画・開催",
        ],
      },
    ],
  },
  skills: {
    index: "03",
    title: "Skills",
    tiers: [
      {
        label: "メインスタック",
        description: "設計から運用まで自信を持って扱える技術",
        skills: ["Java", "Spring Boot", "MySQL", "Docker", "Git"],
      },
      {
        label: "実務で活用",
        description: "実プロジェクトで深く活用した技術",
        skills: ["Redis", "AWS", "Python", "GitHub Actions"],
      },
      {
        label: "プロジェクトで使用",
        description: "必要に応じて学習し適用した技術",
        skills: ["Jenkins", "FastAPI", "React", "Deep Learning"],
      },
    ],
    certificatesLabel: "Certificates",
    certificates: [
      { name: "情報処理技師", date: "2024.12" },
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
        title: "ReadIt (リディット)",
        subtitle: "AIベースのパーソナライズ英語学習プラットフォーム",
        period: "2025.09 ~",
        role: "バックエンドアーキテクチャ設計および全体開発",
        team: "6人チーム (PM 1, Design 2, iOS 2, BE 1)",
        status: "運用中",
        stacks: ["Spring Boot", "Spring AI", "Spring Security", "MySQL", "Redis", "AWS", "Docker", "GitHub Actions"],
        implementations: [
          "Spring AI + BeanOutputConverterを活用したLLMレスポンス → Javaオブジェクト自動マッピングパイプライン構築",
          "Redisson分散ロック基盤の同時実行制御で非同期リソース生成時のデータ整合性保証",
          "@Async非同期処理 + 事前生成戦略でユーザー待ち時間を最小化",
          "Apple Sign-In JWT検証を直接実装 + Factoryパターンで拡張可能なOAuth認証アーキテクチャ設計",
          "ALB + Route 53 + ACMベースのHTTPSプロダクション環境構築",
        ],
        troubleshooting: [
          "分散ロック導入で同時リクエスト時の重複生成を完全ブロック → 不要な外部APIコスト削減",
          "Long Transaction分離設計でDBコネクション占有時間 5分 → 50ms (99%短縮)",
        ],
        highlight: "MVP2週間でプロダクションデプロイ、実ユーザーフィードバックループによるデータ駆動型改善",
      },
      {
        title: "CheerLot (チョラッ)",
        subtitle: "リアルタイム野球観戦サポートサービス",
        period: "2025.05 — 2025.07",
        role: "バックエンド + データパイプライン + iOS一部",
        team: "6人チーム (PM 1, Design 2, iOS 2, BE 1)",
        status: "運用中",
        stacks: ["Spring Boot", "Redis", "Docker", "AWS", "SwiftUI", "Prometheus", "Grafana"],
        implementations: [
          "Thymeleafベースの管理システム構築 → 非開発職の独立した運用環境確保",
          "クライアントサイドバージョンキャッシュ戦略でAPI呼び出し70%削減",
          "MySQL → RedisマイグレーションでコアAPIレスポンス 200ms → 30ms (85%短縮)",
          "Prometheus + Grafanaベースのリアルタイムサービスモニタリングおよびアラート構築",
        ],
        troubleshooting: [
          "@Async + CompletableFuture非同期パイプラインで外部クローリングブロッキング問題を解消",
        ],
      },
      {
        title: "Challenger (チャレンジャー)",
        subtitle: "AIベースのチャレンジ記録・管理アプリ",
        period: "2025.04 — 2025.05",
        role: "個人フルサイクル開発",
        team: "個人プロジェクト",
        status: "完了",
        stacks: ["Spring Boot", "Spring Security", "MySQL", "Redis", "Jenkins", "Nginx", "Docker", "AWS"],
        implementations: [
          "Spring Security + JWTベースのStateless認証・認可システム設計",
          "Redisベースのリフレッシュトークン管理およびトークン窃取防御ロジック実装",
          "Spring AIを活用したチャレンジ推薦・分析AI機能統合",
          "Blue-Greenデプロイ戦略でZero-downtimeリリースパイプライン構築",
          "Jenkins CI/CD自動化 — コードプッシュからプロダクションデプロイまで完全自動化",
        ],
      },
    ],
  },
  contact: {
    index: "05",
    title: "Contact",
    description: "新しい機会やコラボレーションにいつでもオープンです。お気軽にご連絡ください。",
  },
  footer: {
    copyright: "© 2026 キム・ソンミン (Theo)",
  },
};

export default ja;
