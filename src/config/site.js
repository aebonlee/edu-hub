/**
 * DreamIT Edu Hub - 사이트 설정 파일
 * 학습사이트 허브의 브랜드, 메뉴, 학습사이트 정보를 정의합니다.
 */

const site = {
  // 사이트 기본 정보
  name: 'DreamIT Edu Hub',
  nameKo: '드림아이티 에듀 허브',
  description: 'DreamIT Edu Hub - 학습사이트 허브. 교양, 경영, 컴퓨터, 자격증 분야 20개 학습 플랫폼',
  url: 'https://edu-hub.dreamitbiz.com',

  // 부모 사이트
  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },

  // 브랜드 로고 텍스트
  brand: {
    // 상단 네비게이션 로고
    parts: [
      { text: 'Edu', className: 'brand-biz' },
      { text: ' Hub', className: 'brand-dream' }
    ],
    // 푸터 로고 (2줄)
    footerLine1: [
      { text: 'Dream', className: 'brand-dream' },
      { text: 'IT', className: 'brand-it' },
      { text: ' Biz', className: 'brand-biz' }
    ],
    footerLine2: [
      { text: 'Edu', className: 'brand-biz' },
      { text: ' Hub', className: 'brand-dream' }
    ]
  },

  // 테마 컬러
  themeColor: '#0046C8',

  // 카테고리 메타 정보
  categories: [
    { id: 'liberal-arts', name: '교양분야', nameEn: 'Liberal Arts', icon: 'fa-solid fa-book-open', path: '/courses/liberal-arts' },
    { id: 'ai', name: '인공지능활용', nameEn: 'AI Utilization', icon: 'fa-solid fa-robot', path: '/courses/ai' },
    { id: 'business', name: '경영전공분야', nameEn: 'Business', icon: 'fa-solid fa-briefcase', path: '/courses/business' },
    { id: 'computer', name: '컴퓨터전공분야', nameEn: 'Computer Science', icon: 'fa-solid fa-laptop-code', path: '/courses/computer' },
    { id: 'coding', name: '프로그래밍 코딩학습', nameEn: 'Programming & Coding', icon: 'fa-solid fa-code', path: '/courses/coding' },
    { id: 'certification', name: '자격증학습분야', nameEn: 'Certification', icon: 'fa-solid fa-award', path: '/courses/certification' },
    { id: 'career', name: '진로컨설팅', nameEn: 'Career Consulting', icon: 'fa-solid fa-user-tie', path: '/courses/career' }
  ],

  // 네비게이션 메뉴
  menuItems: [
    {
      labelKey: 'site.nav.liberalArts',
      path: '/courses/liberal-arts',
      activePath: '/courses/liberal-arts',
      dropdown: [
        { path: '/courses/computational-thinking', labelKey: 'site.nav.computationalThinking' },
        { path: '/courses/ai-sw-intro', labelKey: 'site.nav.aiSwIntro' },
        { path: '/courses/statistics', labelKey: 'site.nav.statistics' },
        { path: '/courses/english', labelKey: 'site.nav.english' },
        { path: '/courses/japanese', labelKey: 'site.nav.japanese' },
        { path: '/courses/chinese', labelKey: 'site.nav.chinese' },
        { path: '/courses/writing', labelKey: 'site.nav.writing' },
        { path: '/courses/presentation', labelKey: 'site.nav.presentation' }
      ]
    },
    {
      labelKey: 'site.nav.ai',
      path: '/courses/ai',
      activePath: '/courses/ai',
      dropdown: [
        { path: '/courses/prompt-engineering', labelKey: 'site.nav.promptEngineering' },
        { path: '/courses/llm-langchain', labelKey: 'site.nav.llmLangchain' },
        { path: '/courses/ai-automation', labelKey: 'site.nav.aiAutomation' },
        { path: '/courses/ai-data-analysis', labelKey: 'site.nav.aiDataAnalysis' },
        { path: '/courses/ai-image-gen', labelKey: 'site.nav.aiImageGen' },
        { path: '/courses/open-claw', labelKey: 'site.nav.openClaw' }
      ]
    },
    {
      labelKey: 'site.nav.business',
      path: '/courses/business',
      activePath: '/courses/business',
      dropdown: [
        { path: '/courses/accounting', labelKey: 'site.nav.accounting' },
        { path: '/courses/management', labelKey: 'site.nav.management' },
        { path: '/courses/finance', labelKey: 'site.nav.finance' },
        { path: '/courses/marketing-intro', labelKey: 'site.nav.marketingIntro' },
        { path: '/courses/self-branding', labelKey: 'site.nav.selfBranding' },
        { path: '/courses/ux-design', labelKey: 'site.nav.uxDesign' },
        { path: '/courses/digital-biz', labelKey: 'site.nav.digitalBiz' }
      ]
    },
    {
      labelKey: 'site.nav.computer',
      path: '/courses/computer',
      activePath: '/courses/computer',
      dropdown: [
        { path: '/courses/db', labelKey: 'site.nav.db' },
        { path: '/courses/algorithm', labelKey: 'site.nav.algorithm' },
        { path: '/courses/data-structure', labelKey: 'site.nav.dataStructure' },
        { path: '/courses/info-comm', labelKey: 'site.nav.infoComm' },
        { path: '/courses/sw-design', labelKey: 'site.nav.swDesign' }
      ]
    },
    {
      labelKey: 'site.nav.coding',
      path: '/courses/coding',
      activePath: '/courses/coding',
      dropdown: [
        { path: '/courses/html', labelKey: 'site.nav.html' },
        { path: '/courses/web', labelKey: 'site.nav.web' },
        { path: '/courses/react', labelKey: 'site.nav.react' },
        { path: '/courses/coding-learn', labelKey: 'site.nav.codingLearn' },
        { path: '/courses/java-master', labelKey: 'site.nav.javaMaster' },
        { path: '/courses/python-master', labelKey: 'site.nav.pythonMaster' }
      ]
    },
    {
      labelKey: 'site.nav.certification',
      path: '/courses/certification',
      activePath: '/courses/certification',
      dropdown: [
        { path: '/courses/engineer', labelKey: 'site.nav.engineer' },
        { path: '/courses/computerSkills', labelKey: 'site.nav.computerSkills' },
        { path: '/courses/sqld', labelKey: 'site.nav.sqld' },
        { path: '/courses/linux', labelKey: 'site.nav.linux' },
        { path: '/courses/biz-visual', labelKey: 'site.nav.bizVisual' }
      ]
    },
    {
      labelKey: 'site.nav.career',
      path: '/courses/career',
      activePath: '/courses/career',
      dropdown: [
        { path: '/courses/career-journey', labelKey: 'site.nav.careerJourney' },
        { path: '/courses/career-site', labelKey: 'site.nav.careerSite' },
        { path: '/courses/career-coaching', labelKey: 'site.nav.careerCoaching' },
        { path: '/courses/resume-coaching', labelKey: 'site.nav.resumeCoaching' }
      ]
    },
    {
      labelKey: 'site.nav.community',
      path: '/about',
      activePath: '/about',
      dropdown: [
        { path: '/about', labelKey: 'site.nav.aboutHub' },
        { path: '/notice', labelKey: 'site.nav.notice' },
        { path: '/franchise', labelKey: 'site.nav.franchiseInquiry' },
        { path: '/qna', labelKey: 'site.nav.qna' }
      ]
    }
  ],

  // 푸터 바로가기 링크
  footerLinks: [
    { path: '/courses/liberal-arts', labelKey: 'site.nav.liberalArts' },
    { path: '/courses/ai', labelKey: 'site.nav.ai' },
    { path: '/courses/business', labelKey: 'site.nav.business' },
    { path: '/courses/computer', labelKey: 'site.nav.computer' },
    { path: '/courses/coding', labelKey: 'site.nav.coding' },
    { path: '/courses/certification', labelKey: 'site.nav.certification' },
    { path: '/courses/career', labelKey: 'site.nav.career' },
    { path: '/about', labelKey: 'site.nav.community' }
  ],

  // Family Site 목록
  familySites: [
    { name: 'DB 학습', url: 'https://db-study.dreamitbiz.com' },
    { name: 'React 학습', url: 'https://reactstudy.dreamitbiz.com' },
    { name: 'HTML 학습', url: 'https://html.dreamitbiz.com' },
    { name: 'Web 학습', url: 'https://webstudy.dreamitbiz.com' },
    { name: 'AHP 연구 플랫폼', url: 'https://ahp-basic.dreamitbiz.com' },
    { name: '핵심역량 자가측정', url: 'https://competency.dreamitbiz.com' }
  ],

  // 학습사이트 목록
  learningSites: [
    // ── 교양분야 (liberal-arts) ──
    {
      id: 'computational-thinking',
      name: '컴퓨팅 사고',
      nameEn: 'Computational Thinking',
      url: 'https://koreatech.dreamitbiz.com',
      icon: 'fa-solid fa-brain',
      color: '#2563EB',
      category: 'liberal-arts',
      description: '문제 해결을 위한 컴퓨팅 사고력과 알고리즘 설계 능력을 학습합니다.',
      descriptionEn: 'Learn computational thinking and algorithm design skills for problem solving.',
      techStack: ['알고리즘', '논리설계', '추상화', '패턴인식'],
      difficulty: 'beginner',
      curriculum: [
        '컴퓨팅 사고의 이해',
        '문제 분해와 패턴 인식',
        '추상화와 알고리즘 설계',
        '순서도와 의사코드 작성',
        '실전 문제 해결 프로젝트'
      ],
      curriculumEn: [
        'Understanding computational thinking',
        'Problem decomposition and pattern recognition',
        'Abstraction and algorithm design',
        'Flowcharts and pseudocode writing',
        'Practical problem-solving projects'
      ],
      features: ['단계별 사고 훈련', '실습 문제 제공', '자가 평가'],
      featuresEn: ['Step-by-step thinking training', 'Practice problems', 'Self-assessment'],
      target: 'IT 입문자, 비전공자, 논리적 사고력 향상을 원하는 학습자',
      targetEn: 'IT beginners, non-CS majors, learners seeking logical thinking improvement'
    },
    {
      id: 'ai-sw-intro',
      name: 'AI·SW개론',
      nameEn: 'Intro to AI & SW',
      url: '#',
      icon: 'fa-solid fa-microchip',
      color: '#7C3AED',
      category: 'liberal-arts',
      description: '인공지능과 소프트웨어의 기본 개념을 이해하고, AI 시대에 필요한 디지털 소양을 갖춥니다.',
      descriptionEn: 'Understand the fundamentals of AI and software, and build digital literacy for the AI era.',
      techStack: ['AI개론', 'SW개론', '컴퓨팅사고', '디지털리터러시'],
      difficulty: 'beginner',
      curriculum: [
        '인공지능의 이해와 역사',
        '머신러닝·딥러닝 기초 개념',
        '소프트웨어 개발 프로세스',
        'AI 활용 사례와 윤리',
        'SW 기초 실습과 프로젝트'
      ],
      curriculumEn: [
        'Understanding AI and its history',
        'Machine learning & deep learning basics',
        'Software development process',
        'AI use cases and ethics',
        'SW basics practice and projects'
      ],
      features: ['AI·SW 기초 이론', '사례 중심 학습', '비전공자 맞춤'],
      featuresEn: ['AI & SW fundamentals', 'Case-based learning', 'Non-CS major friendly'],
      target: '비전공자, AI·SW 입문자, 디지털 소양을 갖추고 싶은 학습자',
      targetEn: 'Non-CS majors, AI/SW beginners, learners seeking digital literacy'
    },
    {
      id: 'statistics',
      name: '통계학 기초',
      nameEn: 'Statistics Basics',
      url: '#',
      icon: 'fa-solid fa-chart-bar',
      color: '#6366F1',
      category: 'liberal-arts',
      description: '데이터 분석의 기초가 되는 통계학 개념과 실습을 학습합니다.',
      descriptionEn: 'Learn fundamental statistics concepts and practice for data analysis.',
      techStack: ['통계학', '확률론', 'Excel', 'R'],
      difficulty: 'beginner',
      curriculum: [
        '기술통계와 데이터 시각화',
        '확률과 확률분포',
        '추정과 가설검정',
        '상관분석과 회귀분석',
        '실습 프로젝트'
      ],
      curriculumEn: [
        'Descriptive statistics and data visualization',
        'Probability and distributions',
        'Estimation and hypothesis testing',
        'Correlation and regression analysis',
        'Practice projects'
      ],
      features: ['실습 데이터 제공', '단계별 학습', '퀴즈 평가'],
      featuresEn: ['Practice datasets', 'Step-by-step learning', 'Quiz assessments'],
      target: '데이터 분석 입문자, 교양 수강생',
      targetEn: 'Data analysis beginners, liberal arts students'
    },
    {
      id: 'english',
      name: '실용 영어',
      nameEn: 'Practical English',
      url: 'https://english.dreamitbiz.com/',
      icon: 'fa-solid fa-globe',
      color: '#EC4899',
      category: 'liberal-arts',
      description: '비즈니스 및 일상에서 활용 가능한 실용 영어 회화와 작문을 학습합니다.',
      descriptionEn: 'Learn practical English conversation and writing for business and daily life.',
      techStack: ['회화', '작문', '비즈니스영어', 'TOEIC'],
      difficulty: 'beginner',
      curriculum: [
        '일상 영어 회화 패턴',
        '비즈니스 이메일 작성',
        '프레젠테이션 영어',
        '영어 독해와 요약',
        '실전 모의 테스트'
      ],
      curriculumEn: [
        'Daily conversation patterns',
        'Business email writing',
        'Presentation English',
        'Reading comprehension and summary',
        'Practice mock tests'
      ],
      features: ['원어민 음성 제공', '실전 시나리오', '자가 평가'],
      featuresEn: ['Native speaker audio', 'Real-life scenarios', 'Self-assessment'],
      target: '영어 실력 향상을 원하는 학습자',
      targetEn: 'Learners looking to improve English skills'
    },
    {
      id: 'japanese',
      name: '실용 일본어',
      nameEn: 'Practical Japanese',
      url: 'https://japanese.dreamitbiz.com/',
      icon: 'fa-solid fa-language',
      color: '#DC2626',
      category: 'liberal-arts',
      description: '비즈니스 및 일상에서 활용 가능한 실용 일본어 회화와 작문을 학습합니다.',
      descriptionEn: 'Learn practical Japanese conversation and writing for business and daily life.',
      techStack: ['회화', '작문', '비즈니스일본어', 'JLPT'],
      difficulty: 'beginner',
      curriculum: [
        '일본어 기초 문법과 발음',
        '일상 일본어 회화 패턴',
        '비즈니스 일본어와 경어',
        '일본어 독해와 작문',
        'JLPT 실전 대비'
      ],
      curriculumEn: [
        'Basic Japanese grammar and pronunciation',
        'Daily conversation patterns',
        'Business Japanese and honorifics',
        'Japanese reading and writing',
        'JLPT exam preparation'
      ],
      features: ['원어민 음성 제공', '실전 시나리오', '자가 평가'],
      featuresEn: ['Native speaker audio', 'Real-life scenarios', 'Self-assessment'],
      target: '일본어 실력 향상을 원하는 학습자',
      targetEn: 'Learners looking to improve Japanese skills'
    },
    {
      id: 'chinese',
      name: '실용 중국어',
      nameEn: 'Practical Chinese',
      url: '#',
      icon: 'fa-solid fa-language',
      color: '#EA580C',
      category: 'liberal-arts',
      description: '비즈니스 및 일상에서 활용 가능한 실용 중국어 회화와 작문을 학습합니다.',
      descriptionEn: 'Learn practical Chinese conversation and writing for business and daily life.',
      techStack: ['회화', '작문', '비즈니스중국어', 'HSK'],
      difficulty: 'beginner',
      curriculum: [
        '중국어 기초 문법과 성조',
        '일상 중국어 회화 패턴',
        '비즈니스 중국어 표현',
        '중국어 독해와 작문',
        'HSK 실전 대비'
      ],
      curriculumEn: [
        'Basic Chinese grammar and tones',
        'Daily conversation patterns',
        'Business Chinese expressions',
        'Chinese reading and writing',
        'HSK exam preparation'
      ],
      features: ['원어민 음성 제공', '실전 시나리오', '자가 평가'],
      featuresEn: ['Native speaker audio', 'Real-life scenarios', 'Self-assessment'],
      target: '중국어 실력 향상을 원하는 학습자',
      targetEn: 'Learners looking to improve Chinese skills'
    },
    {
      id: 'writing',
      name: '글쓰기와 소통',
      nameEn: 'Writing & Communication',
      url: '#',
      icon: 'fa-solid fa-pen-fancy',
      color: '#14B8A6',
      category: 'liberal-arts',
      description: '논리적 글쓰기와 효과적인 커뮤니케이션 능력을 배양합니다.',
      descriptionEn: 'Develop logical writing and effective communication skills.',
      techStack: ['논술', '보고서', '커뮤니케이션', '비판적사고'],
      difficulty: 'beginner',
      curriculum: [
        '논리적 글쓰기의 기초',
        '보고서 및 제안서 작성법',
        '비판적 읽기와 분석',
        '효과적인 소통 전략',
        '포트폴리오 작성'
      ],
      curriculumEn: [
        'Fundamentals of logical writing',
        'Report and proposal writing',
        'Critical reading and analysis',
        'Effective communication strategies',
        'Portfolio creation'
      ],
      features: ['피드백 시스템', '샘플 자료 제공', '동료 평가'],
      featuresEn: ['Feedback system', 'Sample materials', 'Peer evaluation'],
      target: '글쓰기 역량 강화를 원하는 학습자',
      targetEn: 'Learners looking to strengthen writing skills'
    },
    {
      id: 'presentation',
      name: '프레젠테이션',
      nameEn: 'Presentation Skills',
      url: '#',
      icon: 'fa-solid fa-microphone',
      color: '#F59E0B',
      category: 'liberal-arts',
      description: '효과적인 발표 기법과 시각 자료 제작 능력을 학습합니다.',
      descriptionEn: 'Learn effective presentation techniques and visual material creation.',
      techStack: ['PPT', '스피치', '시각디자인', '스토리텔링'],
      difficulty: 'beginner',
      curriculum: [
        '프레젠테이션 기획과 구성',
        'PPT 디자인 원칙',
        '스피치와 전달력 향상',
        '데이터 시각화 기법',
        '실전 발표 연습'
      ],
      curriculumEn: [
        'Presentation planning and structure',
        'PPT design principles',
        'Speech and delivery improvement',
        'Data visualization techniques',
        'Practical presentation practice'
      ],
      features: ['템플릿 제공', '영상 피드백', '실전 시뮬레이션'],
      featuresEn: ['Templates provided', 'Video feedback', 'Practice simulation'],
      target: '발표 능력 향상을 원하는 학습자',
      targetEn: 'Learners looking to improve presentation skills'
    },

    // ── 인공지능활용 (ai) ──
    {
      id: 'prompt-engineering',
      name: '프롬프트 엔지니어링',
      nameEn: 'Prompt Engineering',
      url: 'https://ai-prompt.dreamitbiz.com/',
      icon: 'fa-solid fa-comments',
      color: '#7C3AED',
      category: 'ai',
      description: 'ChatGPT, Claude 등 AI 모델에서 원하는 결과를 이끌어내는 프롬프트 작성 기법을 학습합니다.',
      descriptionEn: 'Learn prompt crafting techniques to get desired results from AI models like ChatGPT and Claude.',
      techStack: ['ChatGPT', 'Claude', 'Prompt', 'Few-shot'],
      difficulty: 'beginner',
      curriculum: [
        '프롬프트 엔지니어링 개론',
        '효과적인 프롬프트 구조와 패턴',
        'Few-shot / Chain-of-Thought 기법',
        '역할 부여와 시스템 프롬프트 설계',
        '업무별 프롬프트 실전 활용'
      ],
      curriculumEn: [
        'Introduction to prompt engineering',
        'Effective prompt structures and patterns',
        'Few-shot / Chain-of-Thought techniques',
        'Role assignment and system prompt design',
        'Practical prompt usage by task type'
      ],
      features: ['실습 중심 학습', '다양한 AI 모델 대응', '업무 활용 템플릿'],
      featuresEn: ['Practice-oriented learning', 'Multi-model support', 'Work-ready templates'],
      target: 'AI 활용에 관심 있는 모든 학습자',
      targetEn: 'Anyone interested in utilizing AI'
    },
    {
      id: 'llm-langchain',
      name: 'LLM & 랭체인',
      nameEn: 'LLM & LangChain',
      url: '#',
      icon: 'fa-solid fa-link',
      color: '#059669',
      category: 'ai',
      description: '대규모 언어 모델(LLM)의 원리를 이해하고 LangChain으로 AI 애플리케이션을 구축합니다.',
      descriptionEn: 'Understand LLM principles and build AI applications with LangChain.',
      techStack: ['LLM', 'LangChain', 'Python', 'RAG'],
      difficulty: 'advanced',
      curriculum: [
        'LLM 개념과 동작 원리',
        'LangChain 프레임워크 기초',
        'RAG(검색 증강 생성) 구현',
        '체인과 에이전트 활용',
        'AI 챗봇 및 서비스 구축 프로젝트'
      ],
      curriculumEn: [
        'LLM concepts and how they work',
        'LangChain framework basics',
        'RAG (Retrieval-Augmented Generation) implementation',
        'Chains and agents in practice',
        'AI chatbot and service building project'
      ],
      features: ['프로젝트 기반 학습', 'RAG 파이프라인 구축', '실전 AI 서비스 개발'],
      featuresEn: ['Project-based learning', 'RAG pipeline building', 'Real AI service development'],
      target: 'AI 개발자 지망생, 백엔드 개발자',
      targetEn: 'Aspiring AI developers, backend developers'
    },
    {
      id: 'ai-automation',
      name: '업무자동화',
      nameEn: 'AI Work Automation',
      url: '#',
      icon: 'fa-solid fa-gears',
      color: '#2563EB',
      category: 'ai',
      description: 'AI를 활용한 문서 작성, 데이터 처리, 반복 업무 자동화 기법을 학습합니다.',
      descriptionEn: 'Learn AI-powered automation for document creation, data processing, and repetitive tasks.',
      techStack: ['ChatGPT', 'Python', 'API 연동', '자동화'],
      difficulty: 'intermediate',
      curriculum: [
        'AI 업무자동화 개론',
        '문서 작성 및 요약 자동화',
        '데이터 수집과 정리 자동화',
        'API 연동을 통한 워크플로우 구축',
        '반복 업무 자동화 실전 프로젝트'
      ],
      curriculumEn: [
        'Introduction to AI work automation',
        'Automated document creation and summarization',
        'Automated data collection and organization',
        'Workflow building via API integration',
        'Repetitive task automation project'
      ],
      features: ['실무 시나리오 실습', 'API 연동 실습', '자동화 템플릿 제공'],
      featuresEn: ['Real-world scenario practice', 'API integration practice', 'Automation templates provided'],
      target: '직장인, 업무 효율화를 원하는 학습자',
      targetEn: 'Office workers, learners seeking work efficiency'
    },
    {
      id: 'ai-data-analysis',
      name: 'AI 데이터 분석',
      nameEn: 'AI Data Analysis',
      url: 'https://ai-data.dreamitbiz.com/',
      icon: 'fa-solid fa-chart-line',
      color: '#DC2626',
      category: 'ai',
      description: 'AI를 활용하여 데이터를 분석하고 인사이트를 도출하는 능력을 키웁니다.',
      descriptionEn: 'Build the ability to analyze data and derive insights using AI.',
      techStack: ['Python', 'Pandas', 'ChatGPT', '시각화'],
      difficulty: 'intermediate',
      curriculum: [
        'AI 기반 데이터 분석 개론',
        '데이터 전처리와 탐색적 분석',
        'AI 활용 데이터 시각화',
        '자연어로 데이터 질의하기',
        '분석 보고서 자동 생성'
      ],
      curriculumEn: [
        'Introduction to AI-based data analysis',
        'Data preprocessing and exploratory analysis',
        'AI-powered data visualization',
        'Querying data with natural language',
        'Automated analysis report generation'
      ],
      features: ['실데이터 분석 실습', 'AI 기반 시각화', '보고서 자동화'],
      featuresEn: ['Real data analysis practice', 'AI-based visualization', 'Report automation'],
      target: '데이터 분석가 지망생, 기획자',
      targetEn: 'Aspiring data analysts, planners'
    },
    {
      id: 'ai-image-gen',
      name: 'AI 이미지 생성',
      nameEn: 'AI Image Generation',
      url: '#',
      icon: 'fa-solid fa-image',
      color: '#EA580C',
      category: 'ai',
      description: 'Midjourney, DALL-E, Stable Diffusion 등을 활용한 AI 이미지 생성 기법을 학습합니다.',
      descriptionEn: 'Learn AI image generation techniques using Midjourney, DALL-E, and Stable Diffusion.',
      techStack: ['Midjourney', 'DALL-E', 'Stable Diffusion', 'Prompt'],
      difficulty: 'beginner',
      curriculum: [
        'AI 이미지 생성 개론',
        '이미지 프롬프트 작성법',
        'Midjourney 활용 실습',
        'DALL-E & Stable Diffusion 비교',
        '상업용 이미지 제작 프로젝트'
      ],
      curriculumEn: [
        'Introduction to AI image generation',
        'Image prompt writing techniques',
        'Midjourney hands-on practice',
        'DALL-E & Stable Diffusion comparison',
        'Commercial image creation project'
      ],
      features: ['다양한 AI 도구 실습', '프롬프트 패턴 학습', '상업적 활용법'],
      featuresEn: ['Multi-tool practice', 'Prompt pattern learning', 'Commercial usage techniques'],
      target: '디자이너, 콘텐츠 크리에이터',
      targetEn: 'Designers, content creators'
    },
    {
      id: 'open-claw',
      name: 'Open Claw',
      nameEn: 'Open Claw',
      url: '#',
      icon: 'fa-solid fa-hand',
      color: '#0891B2',
      category: 'ai',
      description: 'Open Claw 프레임워크를 활용한 AI 에이전트 구축과 오픈소스 AI 도구 활용법을 학습합니다.',
      descriptionEn: 'Learn to build AI agents with the Open Claw framework and utilize open-source AI tools.',
      techStack: ['Open Claw', 'AI Agent', 'Python', '오픈소스'],
      difficulty: 'intermediate',
      curriculum: [
        'Open Claw 프레임워크 개론',
        'AI 에이전트 설계와 구현',
        '오픈소스 AI 도구 활용',
        '멀티 에이전트 시스템 구축',
        'Open Claw 실전 프로젝트'
      ],
      curriculumEn: [
        'Introduction to Open Claw framework',
        'AI agent design and implementation',
        'Utilizing open-source AI tools',
        'Building multi-agent systems',
        'Open Claw hands-on project'
      ],
      features: ['오픈소스 AI 실습', '에이전트 설계', '프로젝트 기반 학습'],
      featuresEn: ['Open-source AI practice', 'Agent design', 'Project-based learning'],
      target: 'AI 개발자, 오픈소스 AI 활용에 관심 있는 학습자',
      targetEn: 'AI developers, learners interested in open-source AI'
    },

    // ── 경영전공분야 (business) ──
    {
      id: 'accounting',
      name: '회계학 원리',
      nameEn: 'Accounting Principles',
      url: '#',
      icon: 'fa-solid fa-calculator',
      color: '#059669',
      category: 'business',
      description: '재무회계와 관리회계의 기초 원리를 체계적으로 학습합니다.',
      descriptionEn: 'Systematically learn the fundamentals of financial and management accounting.',
      techStack: ['재무회계', '관리회계', '원가회계', '세무'],
      difficulty: 'intermediate',
      curriculum: [
        '회계의 기본 개념과 원칙',
        '재무제표의 이해와 분석',
        '분개와 전기 실습',
        '원가계산과 관리회계',
        '세무회계 기초'
      ],
      curriculumEn: [
        'Basic accounting concepts and principles',
        'Understanding and analyzing financial statements',
        'Journal entry and posting practice',
        'Cost calculation and management accounting',
        'Tax accounting basics'
      ],
      features: ['실습 문제 풀이', '사례 분석', '자격시험 대비'],
      featuresEn: ['Practice problem solving', 'Case analysis', 'Certification exam prep'],
      target: '경영학 전공자, 회계 입문자',
      targetEn: 'Business majors, accounting beginners'
    },
    {
      id: 'management',
      name: '경영전략론',
      nameEn: 'Management Strategy',
      url: '#',
      icon: 'fa-solid fa-building',
      color: '#6D28D9',
      category: 'business',
      description: '기업 경영전략의 수립과 실행에 대한 이론과 사례를 학습합니다.',
      descriptionEn: 'Learn theories and cases of corporate strategy formulation and execution.',
      techStack: ['전략기획', 'SWOT', '경쟁분석', '리더십'],
      difficulty: 'advanced',
      curriculum: [
        '경영전략의 기본 프레임워크',
        'SWOT 분석과 경쟁전략',
        '기업 성장 전략',
        '글로벌 경영전략',
        '전략적 의사결정 사례'
      ],
      curriculumEn: [
        'Basic strategy frameworks',
        'SWOT analysis and competitive strategy',
        'Corporate growth strategy',
        'Global management strategy',
        'Strategic decision-making cases'
      ],
      features: ['기업 사례 분석', '전략 시뮬레이션', '토론 학습'],
      featuresEn: ['Corporate case analysis', 'Strategy simulation', 'Discussion-based learning'],
      target: '경영학 전공자, 예비 경영인',
      targetEn: 'Business majors, aspiring managers'
    },
    {
      id: 'finance',
      name: '재무관리',
      nameEn: 'Financial Management',
      url: '#',
      icon: 'fa-solid fa-coins',
      color: '#0E7490',
      category: 'business',
      description: '기업 재무관리와 투자 분석의 핵심 이론을 학습합니다.',
      descriptionEn: 'Learn core theories of corporate finance and investment analysis.',
      techStack: ['재무분석', '투자론', '포트폴리오', '리스크관리'],
      difficulty: 'advanced',
      curriculum: [
        '재무관리의 기본 원리',
        '화폐의 시간가치와 투자평가',
        '자본구조와 배당정책',
        '포트폴리오 이론',
        '리스크 관리와 파생상품'
      ],
      curriculumEn: [
        'Fundamentals of financial management',
        'Time value of money and investment evaluation',
        'Capital structure and dividend policy',
        'Portfolio theory',
        'Risk management and derivatives'
      ],
      features: ['Excel 실습', '투자 시뮬레이션', '재무제표 분석'],
      featuresEn: ['Excel practice', 'Investment simulation', 'Financial statement analysis'],
      target: '경영·금융 전공자, 재무 분석가 지망생',
      targetEn: 'Finance majors, aspiring financial analysts'
    },
    {
      id: 'marketing-intro',
      name: '마케팅개론',
      nameEn: 'Introduction to Marketing',
      url: 'https://marketing.dreamitbiz.com',
      icon: 'fa-solid fa-chart-line',
      color: '#DC2626',
      category: 'business',
      description: '마케팅의 기본 개념부터 시장 분석, STP 전략, 4P Mix까지 마케팅 전반을 체계적으로 학습합니다.',
      descriptionEn: 'Systematically learn marketing fundamentals from basic concepts to market analysis, STP strategy, and 4P Mix.',
      techStack: ['STP전략', '4P Mix', '시장분석', '소비자행동'],
      difficulty: 'beginner',
      curriculum: [
        '마케팅의 기본 개념과 환경 분석',
        '소비자 행동과 시장 세분화(STP)',
        '제품·가격·유통·촉진 전략(4P)',
        '마케팅 리서치와 데이터 해석',
        '마케팅 계획 수립 실습'
      ],
      curriculumEn: [
        'Marketing concepts and environmental analysis',
        'Consumer behavior and market segmentation (STP)',
        'Product, Price, Place, Promotion strategy (4P)',
        'Marketing research and data interpretation',
        'Marketing plan development practice'
      ],
      features: ['사례 분석 학습', '마케팅 플랜 실습', '퀴즈 평가'],
      featuresEn: ['Case study learning', 'Marketing plan practice', 'Quiz assessments'],
      target: '경영학 전공자, 마케팅 입문자',
      targetEn: 'Business majors, marketing beginners'
    },
    {
      id: 'self-branding',
      name: '셀프 브랜딩 마케팅',
      nameEn: 'Self-Branding Marketing',
      url: 'https://self-branding.dreamitbiz.com',
      icon: 'fa-solid fa-star',
      color: '#7C3AED',
      category: 'business',
      description: '개인 브랜드를 구축하고 SNS·콘텐츠를 활용한 셀프 마케팅 전략을 학습합니다.',
      descriptionEn: 'Build your personal brand and learn self-marketing strategies using SNS and content.',
      techStack: ['퍼스널브랜딩', 'SNS마케팅', '콘텐츠전략', '포트폴리오'],
      difficulty: 'beginner',
      curriculum: [
        '퍼스널 브랜드의 이해와 설계',
        'SNS 채널별 마케팅 전략',
        '콘텐츠 기획과 스토리텔링',
        '온라인 포트폴리오 구축',
        '개인 브랜드 성장 전략'
      ],
      curriculumEn: [
        'Understanding and designing personal brand',
        'Marketing strategy by SNS channel',
        'Content planning and storytelling',
        'Building online portfolio',
        'Personal brand growth strategy'
      ],
      features: ['브랜드 진단 도구', '실전 SNS 운영', '멘토링'],
      featuresEn: ['Brand assessment tool', 'Hands-on SNS management', 'Mentoring'],
      target: '프리랜서, 1인 창업자, 취업 준비생',
      targetEn: 'Freelancers, solo entrepreneurs, job seekers'
    },
    {
      id: 'ux-design',
      name: '고객경험디자인',
      nameEn: 'Customer Experience Design',
      url: 'https://uxdesign.dreamitbiz.com',
      icon: 'fa-solid fa-palette',
      color: '#0891B2',
      category: 'business',
      description: 'UX/CX 관점에서 고객 여정을 분석하고 최적의 경험을 설계하는 방법을 학습합니다.',
      descriptionEn: 'Learn to analyze customer journeys and design optimal experiences from UX/CX perspectives.',
      techStack: ['UX디자인', 'CX전략', '고객여정맵', '서비스디자인'],
      difficulty: 'intermediate',
      curriculum: [
        '고객경험(CX)의 이해와 중요성',
        '고객 여정 맵 설계',
        'UX 리서치 방법론',
        '서비스 디자인 씽킹',
        'CX 측정과 개선 전략'
      ],
      curriculumEn: [
        'Understanding CX and its importance',
        'Customer journey map design',
        'UX research methodology',
        'Service design thinking',
        'CX measurement and improvement strategy'
      ],
      features: ['실습 워크숍', '고객 여정 맵 도구', '사례 분석'],
      featuresEn: ['Practice workshop', 'Journey map tool', 'Case analysis'],
      target: 'UX/CX 디자이너, 서비스 기획자, 경영 전공자',
      targetEn: 'UX/CX designers, service planners, business majors'
    },
    {
      id: 'digital-biz',
      name: '디지털비즈니스전략세미나',
      nameEn: 'Digital Business Strategy Seminar',
      url: 'https://digitalbiz.dreamitbiz.com',
      icon: 'fa-solid fa-rocket',
      color: '#059669',
      category: 'business',
      description: '디지털 전환 시대의 비즈니스 모델 혁신과 전략적 의사결정을 학습합니다.',
      descriptionEn: 'Learn business model innovation and strategic decision-making in the digital transformation era.',
      techStack: ['디지털전환', 'BM혁신', '플랫폼전략', 'AI비즈니스'],
      difficulty: 'advanced',
      curriculum: [
        '디지털 전환(DX)의 이해',
        '디지털 비즈니스 모델 분석',
        '플랫폼 비즈니스 전략',
        'AI·데이터 기반 의사결정',
        '디지털 혁신 사례 세미나'
      ],
      curriculumEn: [
        'Understanding digital transformation (DX)',
        'Digital business model analysis',
        'Platform business strategy',
        'AI and data-driven decision making',
        'Digital innovation case seminars'
      ],
      features: ['세미나 형식 강의', '실제 기업 사례', '전략 수립 실습'],
      featuresEn: ['Seminar-style lectures', 'Real business cases', 'Strategy development practice'],
      target: '경영 전공자, 스타트업 종사자, 디지털 전략 관심자',
      targetEn: 'Business majors, startup professionals, digital strategy enthusiasts'
    },

    // ── 컴퓨터전공분야 (computer) ──
    {
      id: 'db',
      name: 'DB 학습',
      nameEn: 'Database Learning',
      url: 'https://db-study.dreamitbiz.com',
      icon: 'fa-solid fa-database',
      color: '#2563EB',
      category: 'computer',
      description: '데이터베이스 설계부터 SQL 쿼리 최적화까지, 실무 중심의 DB 학습 플랫폼',
      descriptionEn: 'A practical DB learning platform covering database design to SQL query optimization',
      techStack: ['MySQL', 'PostgreSQL', 'SQL', 'ERD'],
      difficulty: 'intermediate',
      curriculum: [
        'DB 기초 개념과 RDBMS 이해',
        'SQL 기본 문법 및 고급 쿼리',
        'ERD 설계 및 정규화',
        '인덱스와 쿼리 최적화',
        'Supabase 실습 프로젝트'
      ],
      curriculumEn: [
        'DB fundamentals and RDBMS concepts',
        'SQL basics and advanced queries',
        'ERD design and normalization',
        'Indexing and query optimization',
        'Supabase hands-on project'
      ],
      features: ['실습 환경 제공', '단계별 커리큘럼', '실무 프로젝트'],
      featuresEn: ['Practice environment', 'Step-by-step curriculum', 'Real-world projects'],
      target: '백엔드 개발자, 데이터 분석가 지망생',
      targetEn: 'Aspiring backend developers and data analysts'
    },
    {
      id: 'algorithm',
      name: '알고리즘',
      nameEn: 'Algorithm',
      url: 'https://algorithm.dreamitbiz.com',
      icon: 'fa-solid fa-diagram-project',
      color: '#7C3AED',
      category: 'computer',
      description: '효율적인 문제 해결을 위한 알고리즘 설계와 분석 능력을 학습합니다.',
      descriptionEn: 'Learn algorithm design and analysis skills for efficient problem solving.',
      techStack: ['정렬', '탐색', '그래프', '동적프로그래밍'],
      difficulty: 'intermediate',
      curriculum: [
        '알고리즘 기초와 복잡도 분석',
        '정렬과 탐색 알고리즘',
        '재귀와 분할 정복',
        '그래프 알고리즘 (BFS, DFS)',
        '동적 프로그래밍과 그리디'
      ],
      curriculumEn: [
        'Algorithm basics and complexity analysis',
        'Sorting and searching algorithms',
        'Recursion and divide & conquer',
        'Graph algorithms (BFS, DFS)',
        'Dynamic programming and greedy'
      ],
      features: ['코딩 테스트 대비', '시각화 학습', '단계별 풀이'],
      featuresEn: ['Coding test preparation', 'Visual learning', 'Step-by-step solutions'],
      target: '코딩 테스트 준비생, CS 전공자',
      targetEn: 'Coding test candidates, CS majors'
    },
    {
      id: 'data-structure',
      name: '자료구조',
      nameEn: 'Data Structure',
      url: 'https://data-structure.dreamitbiz.com/',
      icon: 'fa-solid fa-sitemap',
      color: '#0D9488',
      category: 'computer',
      description: '프로그래밍의 핵심인 자료구조의 개념과 구현을 체계적으로 학습합니다.',
      descriptionEn: 'Systematically learn the concepts and implementation of data structures, the core of programming.',
      techStack: ['배열', '연결리스트', '트리', '해시'],
      difficulty: 'intermediate',
      curriculum: [
        '자료구조 개요와 배열',
        '연결 리스트와 스택/큐',
        '트리와 이진 탐색 트리',
        '힙과 우선순위 큐',
        '해시 테이블과 그래프'
      ],
      curriculumEn: [
        'Data structure overview and arrays',
        'Linked lists, stacks, and queues',
        'Trees and binary search trees',
        'Heaps and priority queues',
        'Hash tables and graphs'
      ],
      features: ['구현 실습', '시각화 도구', '성능 비교 분석'],
      featuresEn: ['Implementation practice', 'Visualization tools', 'Performance comparison'],
      target: 'CS 전공자, 개발자 지망생',
      targetEn: 'CS majors, aspiring developers'
    },
    {
      id: 'info-comm',
      name: '정보통신',
      nameEn: 'Information & Communications',
      url: '#',
      icon: 'fa-solid fa-tower-cell',
      color: '#0369A1',
      category: 'computer',
      description: '네트워크, 프로토콜, 통신 기술 등 정보통신의 핵심 개념을 체계적으로 학습합니다.',
      descriptionEn: 'Systematically learn core concepts of information and communications including networks, protocols, and telecom technologies.',
      techStack: ['네트워크', 'TCP/IP', '프로토콜', '보안'],
      difficulty: 'intermediate',
      curriculum: [
        '정보통신 개론과 데이터 통신',
        '네트워크 구조와 TCP/IP',
        '무선통신과 모바일 네트워크',
        '네트워크 보안과 암호화',
        '클라우드와 IoT 통신 기술'
      ],
      curriculumEn: [
        'Introduction to telecom and data communication',
        'Network architecture and TCP/IP',
        'Wireless and mobile networks',
        'Network security and encryption',
        'Cloud and IoT communication technologies'
      ],
      features: ['이론 + 실습 병행', '네트워크 시뮬레이션', '자격증 연계 학습'],
      featuresEn: ['Theory & practice combined', 'Network simulation', 'Certification-linked learning'],
      target: 'CS 전공자, 네트워크 엔지니어 지망생',
      targetEn: 'CS majors, aspiring network engineers'
    },
    {
      id: 'sw-design',
      name: '소프트웨어설계 & 구현',
      nameEn: 'Software Design & Implementation',
      url: 'https://software.dreamitbiz.com/',
      icon: 'fa-solid fa-drafting-compass',
      color: '#7E22CE',
      category: 'computer',
      description: '소프트웨어 설계 원칙부터 UML, 디자인 패턴, 구현까지 체계적으로 학습합니다.',
      descriptionEn: 'Learn software design principles, UML, design patterns, and implementation systematically.',
      techStack: ['UML', '디자인패턴', 'OOP', 'TDD'],
      difficulty: 'advanced',
      curriculum: [
        '소프트웨어 개발 생명주기(SDLC)',
        '요구분석과 UML 모델링',
        '디자인 패턴과 설계 원칙(SOLID)',
        '객체지향 프로그래밍과 구현',
        '테스트 주도 개발(TDD)과 리팩토링'
      ],
      curriculumEn: [
        'Software Development Life Cycle (SDLC)',
        'Requirements analysis and UML modeling',
        'Design patterns and SOLID principles',
        'Object-oriented programming and implementation',
        'Test-driven development (TDD) and refactoring'
      ],
      features: ['설계 문서 실습', '디자인 패턴 적용', '프로젝트 기반 학습'],
      featuresEn: ['Design document practice', 'Design pattern application', 'Project-based learning'],
      target: 'SW 개발자 지망생, CS 전공자',
      targetEn: 'Aspiring SW developers, CS majors'
    },

    // ── 코딩학습분야 (coding) ──
    {
      id: 'html',
      name: 'HTML 학습',
      nameEn: 'HTML Learning',
      url: 'https://html.dreamitbiz.com',
      icon: 'fa-brands fa-html5',
      color: '#F97316',
      category: 'coding',
      description: 'HTML5 시맨틱 태그부터 CSS3 레이아웃까지, 웹의 기초를 탄탄하게',
      descriptionEn: 'Build a solid web foundation from HTML5 semantic tags to CSS3 layouts',
      techStack: ['HTML5', 'CSS3', 'Flexbox', 'Grid'],
      difficulty: 'beginner',
      curriculum: [
        'HTML5 기본 구조와 시맨틱 태그',
        'CSS3 선택자와 속성',
        'Flexbox 레이아웃',
        'CSS Grid 레이아웃',
        '반응형 웹 디자인'
      ],
      curriculumEn: [
        'HTML5 structure and semantic tags',
        'CSS3 selectors and properties',
        'Flexbox layout',
        'CSS Grid layout',
        'Responsive web design'
      ],
      features: ['실시간 미리보기', '과제 자동 채점', '웹 표준 준수'],
      featuresEn: ['Live preview', 'Auto-graded assignments', 'Web standards compliant'],
      target: '웹 개발 입문자, 비전공자',
      targetEn: 'Web development beginners and non-CS majors'
    },
    {
      id: 'web',
      name: 'Web 학습',
      nameEn: 'Web Development',
      url: 'https://webstudy.dreamitbiz.com',
      icon: 'fa-solid fa-code',
      color: '#8B5CF6',
      category: 'coding',
      description: 'JavaScript, API, 배포까지 풀스택 웹 개발의 전체 흐름을 학습',
      descriptionEn: 'Learn full-stack web development from JavaScript and APIs to deployment',
      techStack: ['JavaScript', 'Node.js', 'API', 'Deploy'],
      difficulty: 'advanced',
      curriculum: [
        'JavaScript ES6+ 핵심 문법',
        'DOM 조작과 이벤트 처리',
        'Fetch API와 비동기 프로그래밍',
        'Node.js 기초와 Express',
        'GitHub Pages 배포'
      ],
      curriculumEn: [
        'JavaScript ES6+ core syntax',
        'DOM manipulation and events',
        'Fetch API and async programming',
        'Node.js basics and Express',
        'GitHub Pages deployment'
      ],
      features: ['풀스택 프로젝트', '실무 배포 실습', '코드 리뷰'],
      featuresEn: ['Full-stack projects', 'Real deployment practice', 'Code review'],
      target: '풀스택 개발자 지망생, 현직 개발자',
      targetEn: 'Aspiring full-stack developers and working developers'
    },
    {
      id: 'react',
      name: 'React 학습',
      nameEn: 'React Learning',
      url: 'https://reactstudy.dreamitbiz.com',
      icon: 'fa-brands fa-react',
      color: '#0EA5E9',
      category: 'coding',
      description: 'React 컴포넌트부터 상태관리, 라우팅까지 모던 프론트엔드 개발의 핵심',
      descriptionEn: 'Core modern frontend development from React components to state management and routing',
      techStack: ['React', 'JSX', 'Hooks', 'Router'],
      difficulty: 'intermediate',
      curriculum: [
        'React 기초와 JSX 문법',
        '컴포넌트와 Props/State',
        'Hooks (useState, useEffect 등)',
        'React Router를 이용한 SPA',
        '상태관리와 Context API'
      ],
      curriculumEn: [
        'React basics and JSX syntax',
        'Components and Props/State',
        'Hooks (useState, useEffect, etc.)',
        'SPA with React Router',
        'State management and Context API'
      ],
      features: ['코드 샌드박스', '프로젝트 기반 학습', '최신 React 19 대응'],
      featuresEn: ['Code sandbox', 'Project-based learning', 'Latest React 19 compatible'],
      target: '프론트엔드 개발자 지망생, 웹 퍼블리셔',
      targetEn: 'Aspiring frontend developers and web publishers'
    },
    {
      id: 'coding-learn',
      name: '프로그래밍 코딩학습',
      nameEn: 'Programming & Coding',
      url: 'https://coding.dreamitbiz.com/',
      icon: 'fa-solid fa-laptop-code',
      color: '#10B981',
      category: 'coding',
      description: 'C언어, JAVA, Python 문법을 체계적으로 학습하고, 초급~실전 단계별 코딩 실력 테스트로 프로그래밍 역량을 키우는 학습 플랫폼',
      descriptionEn: 'A learning platform for systematic C, JAVA, and Python grammar study with step-by-step coding skill tests from beginner to advanced',
      techStack: ['C언어', 'JAVA', 'Python', '문법학습'],
      difficulty: 'beginner',
      curriculum: [
        'C언어 기초 문법과 포인터·메모리 관리',
        'JAVA 객체지향 프로그래밍과 클래스 설계',
        'Python 문법과 데이터 처리 기초',
        '초급~고급 단계별 코딩 실력 테스트',
        'C / JAVA / Python 종합 실력 평가'
      ],
      curriculumEn: [
        'C language basics: pointers & memory management',
        'JAVA OOP: classes & object-oriented design',
        'Python syntax & data processing fundamentals',
        'Beginner to advanced coding skill tests',
        'C / JAVA / Python comprehensive assessment'
      ],
      features: ['C·JAVA·Python 문법 학습', '초급~실전 단계별 코딩 테스트', '언어별 실력 평가'],
      featuresEn: ['C, JAVA, Python grammar lessons', 'Beginner to advanced coding tests', 'Language-specific skill assessment'],
      target: '코딩 입문자, 프로그래밍 언어 학습자',
      targetEn: 'Coding beginners and programming language learners'
    },
    {
      id: 'java-master',
      name: '자바 마스터',
      nameEn: 'Java Master',
      url: 'https://java-study.dreamitbiz.com/',
      icon: 'fa-brands fa-java',
      color: '#DC2626',
      category: 'coding',
      description: 'Java 프로그래밍의 기초부터 객체지향, 고급 문법까지 체계적으로 마스터하는 학습 플랫폼',
      descriptionEn: 'A learning platform to systematically master Java programming from basics to OOP and advanced syntax',
      techStack: ['Java', 'OOP', 'Spring', 'JVM'],
      difficulty: 'intermediate',
      curriculum: [
        'Java 기초 문법과 자료형',
        '객체지향 프로그래밍(OOP) 핵심',
        '컬렉션 프레임워크와 제네릭',
        '예외 처리와 입출력(I/O)',
        'Java 프로젝트 실전 개발'
      ],
      curriculumEn: [
        'Java basic syntax and data types',
        'Object-oriented programming (OOP) core concepts',
        'Collections framework and generics',
        'Exception handling and I/O',
        'Java project development practice'
      ],
      features: ['단계별 문법 학습', '코딩 실력 테스트', 'OOP 설계 실습'],
      featuresEn: ['Step-by-step grammar lessons', 'Coding skill tests', 'OOP design practice'],
      target: 'Java 입문자, 백엔드 개발자 지망생',
      targetEn: 'Java beginners, aspiring backend developers'
    },
    {
      id: 'python-master',
      name: '파이썬 마스터',
      nameEn: 'Python Master',
      url: 'https://python-study.dreamitbiz.com/',
      icon: 'fa-brands fa-python',
      color: '#2563EB',
      category: 'coding',
      description: 'Python 프로그래밍의 기초부터 데이터 처리, 자동화까지 체계적으로 마스터하는 학습 플랫폼',
      descriptionEn: 'A learning platform to systematically master Python from basics to data processing and automation',
      techStack: ['Python', '데이터처리', '자동화', 'Flask'],
      difficulty: 'beginner',
      curriculum: [
        'Python 기초 문법과 자료형',
        '함수, 모듈, 패키지 활용',
        '파일 처리와 데이터 분석 기초',
        '웹 크롤링과 업무 자동화',
        'Python 프로젝트 실전 개발'
      ],
      curriculumEn: [
        'Python basic syntax and data types',
        'Functions, modules, and packages',
        'File handling and data analysis basics',
        'Web crawling and task automation',
        'Python project development practice'
      ],
      features: ['단계별 문법 학습', '코딩 실력 테스트', '실무 프로젝트'],
      featuresEn: ['Step-by-step grammar lessons', 'Coding skill tests', 'Real-world projects'],
      target: 'Python 입문자, 데이터 분석 지망생',
      targetEn: 'Python beginners, aspiring data analysts'
    },

    // ── 자격증학습분야 (certification) ──
    {
      id: 'engineer',
      name: '정보처리기사',
      nameEn: 'Information Processing Engineer',
      url: '#',
      icon: 'fa-solid fa-clipboard-list',
      color: '#0D9488',
      category: 'certification',
      description: '정보처리기사 자격증 취득을 위한 이론과 실기를 체계적으로 학습합니다.',
      descriptionEn: 'Systematically study theory and practice for the Information Processing Engineer certification.',
      techStack: ['소프트웨어공학', '데이터베이스', '네트워크', '보안'],
      difficulty: 'intermediate',
      curriculum: [
        '소프트웨어 설계',
        '소프트웨어 개발',
        '데이터베이스 구축',
        '프로그래밍 언어 활용',
        '정보시스템 구축관리'
      ],
      curriculumEn: [
        'Software design',
        'Software development',
        'Database construction',
        'Programming language utilization',
        'Information system management'
      ],
      features: ['기출문제 풀이', '모의고사', '합격 전략'],
      featuresEn: ['Past exam practice', 'Mock exams', 'Pass strategies'],
      target: '정보처리기사 수험생',
      targetEn: 'Information Processing Engineer exam candidates'
    },
    {
      id: 'computer-skills',
      name: '컴퓨터활용능력',
      nameEn: 'Computer Skills Certification',
      url: '#',
      icon: 'fa-solid fa-desktop',
      color: '#EA580C',
      category: 'certification',
      description: '컴퓨터활용능력 1·2급 자격증 취득을 위한 실기와 필기를 학습합니다.',
      descriptionEn: 'Study practical and written exams for Computer Skills Certification Level 1 & 2.',
      techStack: ['Excel', 'Access', '스프레드시트', '데이터분석'],
      difficulty: 'beginner',
      curriculum: [
        '스프레드시트 기본 기능',
        'Excel 함수와 매크로',
        '데이터베이스(Access) 활용',
        '데이터 분석과 차트',
        '실기 모의고사'
      ],
      curriculumEn: [
        'Spreadsheet basics',
        'Excel functions and macros',
        'Database (Access) utilization',
        'Data analysis and charts',
        'Practical mock exams'
      ],
      features: ['실기 환경 제공', '단계별 풀이', '오답 분석'],
      featuresEn: ['Practical environment', 'Step-by-step solutions', 'Error analysis'],
      target: '컴퓨터활용능력 수험생',
      targetEn: 'Computer Skills Certification exam candidates'
    },
    {
      id: 'sqld',
      name: 'SQLD',
      nameEn: 'SQLD Certification',
      url: 'https://sqld.dreamitbiz.com/',
      icon: 'fa-solid fa-magnifying-glass-chart',
      color: '#4F46E5',
      category: 'certification',
      description: 'SQL 개발자 자격증(SQLD) 취득을 위한 이론과 실전 문제를 학습합니다.',
      descriptionEn: 'Learn theory and practice problems for the SQL Developer (SQLD) certification.',
      techStack: ['SQL', '데이터모델링', '성능최적화', 'RDBMS'],
      difficulty: 'intermediate',
      curriculum: [
        '데이터 모델링의 이해',
        'SQL 기본과 활용',
        'SQL 최적화 기본 원리',
        '관리 구문과 DCL/TCL',
        '기출문제 분석과 실전 대비'
      ],
      curriculumEn: [
        'Understanding data modeling',
        'SQL basics and applications',
        'SQL optimization principles',
        'Management statements and DCL/TCL',
        'Past exam analysis and preparation'
      ],
      features: ['기출문제 풀이', 'SQL 실습 환경', '오답노트'],
      featuresEn: ['Past exam practice', 'SQL practice environment', 'Error notes'],
      target: 'SQLD 수험생, DB 개발자',
      targetEn: 'SQLD exam candidates, DB developers'
    },
    {
      id: 'linux',
      name: '리눅스마스터',
      nameEn: 'Linux Master',
      url: 'https://linux-study.dreamitbiz.com/',
      icon: 'fa-brands fa-linux',
      color: '#B91C1C',
      category: 'certification',
      description: '리눅스마스터 1·2급 자격증 취득을 위한 이론과 실습을 학습합니다.',
      descriptionEn: 'Study theory and practice for the Linux Master Level 1 & 2 certification.',
      techStack: ['Linux', 'Shell', '시스템관리', '네트워크'],
      difficulty: 'intermediate',
      curriculum: [
        '리눅스 시스템 이해',
        '리눅스 운영 및 관리',
        '쉘 스크립트 프로그래밍',
        '네트워크 관리',
        '보안 및 시스템 관리'
      ],
      curriculumEn: [
        'Understanding Linux systems',
        'Linux operations and management',
        'Shell script programming',
        'Network management',
        'Security and system management'
      ],
      features: ['가상 환경 실습', '명령어 연습', '기출문제 풀이'],
      featuresEn: ['Virtual environment practice', 'Command practice', 'Past exam practice'],
      target: '리눅스마스터 수험생, 시스템 관리자',
      targetEn: 'Linux Master exam candidates, system administrators'
    },
    {
      id: 'biz-visual',
      name: '경영정보시각화',
      nameEn: 'Business Information Visualization',
      url: '#',
      icon: 'fa-solid fa-chart-pie',
      color: '#D97706',
      category: 'certification',
      description: '경영 데이터를 효과적으로 시각화하고 분석하는 역량을 갖추는 자격증 과정입니다.',
      descriptionEn: 'A certification course for effectively visualizing and analyzing business data.',
      techStack: ['Excel', 'Power BI', '데이터분석', '차트설계'],
      difficulty: 'intermediate',
      curriculum: [
        '경영정보 시각화 개론',
        '데이터 수집과 전처리',
        '차트 유형과 시각화 원칙',
        '스프레드시트 활용 시각화',
        'BI 도구를 활용한 대시보드 구현'
      ],
      curriculumEn: [
        'Introduction to business information visualization',
        'Data collection and preprocessing',
        'Chart types and visualization principles',
        'Spreadsheet-based visualization',
        'Dashboard implementation with BI tools'
      ],
      features: ['실무 데이터 실습', '대시보드 제작', '기출문제 풀이'],
      featuresEn: ['Real business data practice', 'Dashboard creation', 'Past exam practice'],
      target: '경영정보시각화 수험생, 데이터 분석가',
      targetEn: 'Biz visualization exam candidates, data analysts'
    },

    // ── 진로컨설팅 (career) ──
    {
      id: 'career-journey',
      name: '나를 찾는 여행 - 나의 진로',
      nameEn: 'Journey to Find Myself - My Career',
      url: 'https://career.dreamitbiz.com/',
      icon: 'fa-solid fa-compass',
      color: '#0EA5E9',
      category: 'career',
      description: '자기 탐색을 통해 나만의 진로를 발견하고, 이력서·자기소개서 작성까지 체계적으로 취업을 준비합니다. 적성, 흥미, 가치관 분석부터 실전 취업 준비까지.',
      descriptionEn: 'Discover your career path through self-exploration and systematically prepare for employment, from aptitude analysis to resume and cover letter writing.',
      techStack: ['자기탐색', '적성검사', '진로설계', '이력서작성', '자기소개서'],
      difficulty: 'beginner',
      curriculum: [
        '자기 이해와 탐색',
        '적성 및 흥미 분석',
        '가치관과 직업 세계 탐색',
        '진로 목표 설정 및 로드맵 수립',
        '이력서 작성법과 실전 작성',
        '자기소개서 작성 전략',
        '취업 준비 종합 점검'
      ],
      curriculumEn: [
        'Self-understanding and exploration',
        'Aptitude and interest analysis',
        'Values and career world exploration',
        'Career goal setting and roadmap planning',
        'Resume writing methods and practice',
        'Cover letter writing strategy',
        'Comprehensive employment preparation review'
      ],
      features: ['자기 탐색', '적성 분석', '진로 로드맵', '이력서·자기소개서 작성'],
      featuresEn: ['Self-exploration', 'Aptitude analysis', 'Career roadmap', 'Resume & cover letter writing'],
      target: '진로 고민 학생, 취업 준비생, 진로 전환 희망자',
      targetEn: 'Students exploring careers, job seekers, career changers'
    },
    {
      id: 'career-site',
      name: '맞춤 커리어 사이트 제작',
      nameEn: 'Custom Career Site',
      url: '#',
      icon: 'fa-solid fa-globe',
      color: '#2563EB',
      category: 'career',
      isService: true,
      price: 50000,
      description: '나만의 커리어 포트폴리오 사이트를 맞춤 제작해드립니다. 이력서, 프로젝트, 자기소개를 한눈에 보여주는 전문 사이트.',
      descriptionEn: 'We create a custom career portfolio site for you. A professional site showcasing your resume, projects, and self-introduction.',
      techStack: ['포트폴리오', '반응형웹', '도메인연결', '맞춤디자인'],
      difficulty: 'beginner',
      curriculum: [
        '요구사항 분석 및 상담',
        '맞춤 디자인 시안 제작',
        '포트폴리오 콘텐츠 구성',
        '반응형 웹사이트 개발',
        '도메인 연결 및 배포'
      ],
      curriculumEn: [
        'Requirements analysis and consultation',
        'Custom design mockup creation',
        'Portfolio content structuring',
        'Responsive website development',
        'Domain connection and deployment'
      ],
      features: ['맞춤 디자인', '반응형 웹', '도메인 연결 지원'],
      featuresEn: ['Custom design', 'Responsive web', 'Domain connection support'],
      target: '취업 준비생, 이직 희망자, 프리랜서',
      targetEn: 'Job seekers, career changers, freelancers'
    },
    {
      id: 'career-coaching',
      name: '1:1 커리어 코칭',
      nameEn: '1:1 Career Coaching',
      url: '#',
      icon: 'fa-solid fa-comments',
      color: '#7C3AED',
      category: 'career',
      isService: true,
      price: 0,
      description: '전문 커리어 컨설턴트와 1:1 상담을 통해 진로 방향을 설계하고 취업 전략을 수립합니다.',
      descriptionEn: 'Design your career path and build employment strategies through 1:1 consultation with professional career consultants.',
      techStack: ['진로설계', '면접코칭', '취업전략', '커리어맵'],
      difficulty: 'beginner',
      curriculum: [
        '현재 역량 진단 및 분석',
        '목표 직무/산업 탐색',
        '맞춤 커리어 로드맵 설계',
        '면접 전략 및 모의면접',
        '취업 전략 수립 및 피드백'
      ],
      curriculumEn: [
        'Current skill assessment and analysis',
        'Target job/industry exploration',
        'Custom career roadmap design',
        'Interview strategy and mock interviews',
        'Employment strategy and feedback'
      ],
      features: ['1:1 맞춤 상담', '면접 코칭', '취업 전략'],
      featuresEn: ['1:1 personalized consultation', 'Interview coaching', 'Job strategy'],
      target: '취업 준비생, 이직 희망자, 진로 고민자',
      targetEn: 'Job seekers, career changers, those considering career paths'
    },
    {
      id: 'resume-coaching',
      name: '이력서 & 자기소개서 코칭',
      nameEn: 'Resume & Cover Letter Coaching',
      url: '#',
      icon: 'fa-solid fa-file-pen',
      color: '#059669',
      category: 'career',
      isService: true,
      price: 0,
      description: '채용 담당자의 시선을 사로잡는 이력서와 자기소개서 작성법을 코칭합니다.',
      descriptionEn: 'Coaching on writing resumes and cover letters that capture the attention of hiring managers.',
      techStack: ['이력서', '자기소개서', '포트폴리오', '첨삭'],
      difficulty: 'beginner',
      curriculum: [
        '이력서 구조와 핵심 포인트',
        '직무별 자기소개서 작성법',
        '포트폴리오 구성 전략',
        '1:1 첨삭 및 피드백',
        '최종 완성본 검수'
      ],
      curriculumEn: [
        'Resume structure and key points',
        'Cover letter writing by job type',
        'Portfolio structuring strategy',
        '1:1 editing and feedback',
        'Final version review'
      ],
      features: ['1:1 첨삭', '직무별 맞춤', '포트폴리오 구성'],
      featuresEn: ['1:1 editing', 'Job-specific customization', 'Portfolio structuring'],
      target: '취업 준비생, 이직 희망자',
      targetEn: 'Job seekers, career changers'
    }
  ]
};

export default site;
