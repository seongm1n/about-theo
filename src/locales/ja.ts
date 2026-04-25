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
    badge: "バックエンド開発者",
    roles: ["Backend Engineer", "AI Service Developer", "DevOps Practitioner"],
    description: "様々な技術を経験しながら軸を整えているバックエンド開発者。",
    descriptionSub: "現在は世宗AI研究センターでAIサービスを設計しています。",
    contact: "Contact Me",
  },
  about: {
    index: "01",
    title: "About",
    values: [
      {
        keyword: "技術は答えではなく道具",
        description:
          "学部時代からProblem Solvingそのものが好きでした。アルゴリズムからプロジェクトの課題まで、複数の視点で解いていく過程が一番楽しく、だからこそ技術を答えではなく道具として捉えています。同じ問題を解く方法は複数あり、文脈に合った道具を選ぶことがエンジニアの仕事だと考えています。",
      },
      {
        keyword: "AIを積極活用しつつ依存しない",
        description:
          "現在は世宗AI研究センターでフルスタック開発者として働き、物体検出モデルベースのAIパイプラインを構築し、Hugging Faceモデルをドメインに合わせてファインチューニングしてサービスとしてデプロイしています。新しい汎用AIツールはなるべく自分で試し、AIに依存せずうまく活用する方法を考え続けています。",
      },
      {
        keyword: "変化を前提にした拡張可能な設計",
        description:
          "バックエンド設計で最も重視するのは拡張性と柔軟性です。ゼロベースから始まるスタートアップ環境で要件が頻繁に変わる状況を多く経験し、変化を前提にしないと修正コストが雪だるま式に膨らむことを身をもって学びました。自然とクリーンコード・SOLID原則・オブジェクト指向設計に関心を持つようになりました。",
      },
      {
        keyword: "チームとサービスの成長への実質的貢献",
        description:
          "誰かに届くサービスを作り、その成長の流れの中で中核的な役割を担っていくことに最もやりがいを感じます。そのために安定したサービス運用に必要なDevOps力も並行して伸ばしています。",
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
        role: "フルスタック開発者",
        type: "Work",
        current: true,
        details: [
          "物体検出モデルのファインチューニングおよびAIパイプライン設計・サービス統合まで担当",
          "Hugging Faceモデルをドメインに合わせてファインチューニングしサービスとしてデプロイ",
          "スタートアップ環境でAIツールを積極活用したフルスタック開発(高速MVPサイクル)",
        ],
      },
      {
        period: "2026.03 — 2026.06",
        title: "DDD — 社会人サイドプロジェクト同好会",
        role: "バックエンド",
        type: "Side",
        details: [
          "様々な企業のPM・デザイナー・FE・BEと協業し、組織ごとの開発プロセス・ツールの違いを直接比較・経験",
          "チーム内の協業ツール導入・運用を主導",
        ],
      },
      {
        period: "2025.03 — 2025.12",
        title: "Apple Developer Academy @ POSTECH",
        type: "Education",
        details: [
          "AppleとPOSTECHが共同運営する開発者育成プログラム(10ヶ月課程修了)",
          "Challenge-Based Learning方式で、デザイナー・開発者混成チームで実問題定義からアプリ企画・開発までE2Eを経験",
        ],
      },
      {
        period: "2018.03 — 2025.02",
        title: "韓南大学校 コンピュータ工学科 — 学士",
        type: "Education",
        details: [
          "2023~2024 学科の学生会長 — 学科初の校内プログラミングコンテストを企画・運営",
          "校内プログラミングサークルCMDを運営、プロジェクト・勉強会を主導",
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
        skills: ["Java", "Spring Boot", "Python", "FastAPI", "Docker", "Git"],
      },
      {
        label: "実務で活用",
        description: "実プロジェクトで深く活用した技術",
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
        label: "プロジェクトで使用",
        description: "必要に応じて学習し適用した技術",
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
      { name: "情報処理技師", date: "2024.12" },
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
        title: "ReadIt (リドイット)",
        subtitle:
          "AIパーソナライズ英語原書学習アプリ — 大学創業支援金に採択され、チームが起業を進行中。",
        period: "2025.09 — 2025.12 (開発) / 2025.12 — 現在 (運用・保守)",
        role: "バックエンド・インフラ専任(現在は技術アドバイザーとして継続貢献)",
        status: "運用中",
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
          "英語原書学習には2つの根深いペインがある。①自分のレベルに合う本を選びにくい、②学習したい単語が本に適切な頻度で出てこない。既存の原書は読者レベルに関係なく書かれており個人化が不可能で、単語帳暗記は文脈がなく実効性が低い。これら2点を同時に解くため、Lexile指数ベースのAIストーリー生成サービスを企画し、MVPからユーザー検証までE2Eで進めた。",
        solutions: [
          {
            title: "2週間で実用MVPをデプロイ — 価値検証を最優先",
            body:
              "プロダクト完成度よりコア価値の検証を優先。「AIストーリー生成 / 文単位の韓国語訳 / 読解クイズ」の3つに絞り、Docker Composeで最小構成し2週間で実用サービスをデプロイ。過剰設計を避け、ユーザーフィードバックで方向性を決め段階的に拡張する戦略を取った。",
          },
          {
            title: "初期ユーザー10名テスト → 優先順位の確立",
            body:
              "1週間英語学習者10名にテストし、①Lexile基準の難易度個別化、②未知語の復習システム、③生成待機時間の短縮という3つの改善軸を確立。「AI生成の待ち時間が長すぎる」という共通フィードバックが事前生成システム導入の直接的契機となり、平均5分かかっていた本生成を、ユーザーから見ると即時に開始できる体験へ転換した。",
          },
          {
            title: "Spring AI導入 — 型安全なLLM統合",
            body:
              "OpenAI SDK直叩きからSpring AIフレームワークに移行。Spring BootのDI・自動構成・プロパティ管理を活かしつつ、特に型安全な構造化出力(Structured Output)でLLMの非決定的なテキストレスポンスをJavaオブジェクトに安定マッピング。AIレスポンスのパース失敗用防御コードが大幅に減り、本番統合の安定性が向上した。",
          },
          {
            title: "Redisson分散ロック — 重複生成の根本遮断",
            body:
              "非同期での本生成中にユーザーが追加リクエストを送ると同一の本が無限に重複生成される問題があった。Redissonベースの分散ロックでユーザー単位の生成タスクを直列化し、生成中のリクエストは即時エラーで返し、例外時もロックを安全に解放するよう設計。重複生成が完全に遮断され、不要なLLM API呼び出しコストも削減した。",
          },
          {
            title: "トランザクションスコープ最適化 — 接続占有時間 5分 → 50ms (約99%短縮)",
            body:
              "本生成はAI API呼び出しを含め平均5分かかるが、@Transactionalが全体を包んでおりDB接続を5分占有する構造だった。HikariCP既定プール(10)では同時10リクエストでも枯渇する状況。AI生成処理をトランザクション外に分離し、Bookエンティティ保存区間にのみ明示的トランザクションを適用、接続占有時間を5分→50msへ約99%短縮し、同時リクエスト処理量を回復した。",
          },
        ],
        results: [
          "2025.12 App Store正式リリース、現在も運用・保守を継続",
          "大学創業支援金に採択、チームが起業手続きを進行中(本人は技術アドバイザーとして貢献)",
          "MVP2週 → ユーザー10名フィードバック → 事前生成・復習システム高度化の好循環を確立",
        ],
        highlight:
          "MVPを2週間でリリースし、ユーザーフィードバックで事前生成・復習システムを高度化、起業まで繋げたプロジェクト。",
        links: [
          {
            label: "App Store",
            href: "https://apps.apple.com/kr/app/%EB%A6%AC%EB%93%9C%EC%9E%87-ai-%EB%A7%9E%EC%B6%A4%ED%98%95-%EC%98%81%EC%96%B4-%ED%95%99%EC%8A%B5/id6754702442",
          },
        ],
        notice: "チームで運用中のサービスのため、協議の上ソースコードは非公開としています。",
      },
      {
        title: "CheerLot (チョラッ)",
        subtitle: "野球ラインナップ・応援歌アプリ — DAU 300・MAU1万まで成長した直観コンパニオン。",
        period: "2025.05 — 2025.07 (開発) / 2025.07 — 現在 (運用・保守)",
        role: "バックエンド・インフラ(開発期) → React Native Androidアプリ(運用フェーズ)",
        status: "運用中",
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
          "野球の直観時に、ラインナップと選手別応援歌を素早く参照できる統合サービスがなかった。特に初心者は球団ごとに散らばった情報を試合中に探すのが難しい。さらに野球ドメインデータ(選手・応援歌・ラインナップ)は量が多く更新も頻繁で、非開発者(PM・デザイナー)との協業ではデータアクセス性とコミュニケーションがボトルネックになっていた。",
        solutions: [
          {
            title: "NotionDBをデータレイヤに採用 — 非開発者フレンドリーなデータ運用",
            body:
              "PM・デザイナーが直接データを扱える必要があったため、NotionDBをバックエンドのデータソースに採用。別途管理ページを作らずに即座に協業できるのが利点。一方Notion APIは平均応答が数百ms〜1秒で、レート制限と断続的な失敗もあるため、exponential backoffリトライ + Redisキャッシュ層で包んだ。キャッシュヒット時は応答時間が5ms以内になり外部API比で約100倍の改善とAPI障害の隔離効果を確保、リトライポリシーで一過性失敗の99%以上を吸収した。",
          },
          {
            title: "クローラワーカーの分離 (Spring Boot → FastAPI)",
            body:
              "初期はSpring Boot単一サーバーでクローリングまで担当していたが、運用APIの可用性が明確に低下。クローラを別FastAPIサーバーに分離し運用環境と隔離。Pythonのクロール周りの成熟したエコシステムで安定性も担保。分離以降、運用サーバーはクローリング負荷に左右されず応答する。",
          },
          {
            title: "継続QAとユーザーフィードバック駆動の高度化",
            body:
              "リリース後もデプロイごとにQAを回し、実ユーザーのフィードバックを次スプリントに反映するサイクルを維持。運用中にAndroid需要を確認しReact Nativeで自ら開発しプラットフォームを拡張した。",
          },
        ],
        results: [
          "2025.07正式リリース、現在も運用継続中",
          "DAU 300・MAU 10,000を達成、成長傾向を維持",
          "運用中にネイティブ需要を検知 → RN Androidアプリを自ら開発・リリース",
        ],
        highlight: "野球初心者の友人1人のために始めたサイドプロジェクトが、DAU300・MAU1万規模に成長。",
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
    description: "新しい機会やコラボレーションにいつでもオープンです。お気軽にご連絡ください。",
  },
  footer: {
    copyright: "© 2026 キム・ソンミン (Theo)",
  },
};

export default ja;
