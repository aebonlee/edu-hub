/**
 * DreamIT Edu Hub - 사이트 설정 파일
 * 학습사이트 허브의 브랜드, 메뉴, 학습사이트 정보를 정의합니다.
 */

const site = {
  // 사이트 기본 정보
  name: 'DreamIT Edu Hub',
  nameKo: '드림아이티 에듀 허브',
  description: 'DreamIT Edu Hub - IT 학습사이트 허브. 교양, 경영, 컴퓨터, 자격증 분야 학습 플랫폼',
  url: 'https://edu-hub.dreamitbiz.com',

  // 부모 사이트
  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },

  // 브랜드 로고 텍스트
  brand: {
    parts: [
      { text: 'Dream', className: 'brand-dream' },
      { text: 'IT', className: 'brand-it' },
      { text: 'Edu', className: 'brand-biz' }
    ]
  },

  // 테마 컬러
  themeColor: '#0046C8',

  // 카테고리 메타 정보
  categories: [
    { id: 'liberal-arts', name: '교양분야', nameEn: 'Liberal Arts', icon: '📚', path: '/courses/liberal-arts' },
    { id: 'business', name: '경영전공분야', nameEn: 'Business', icon: '💼', path: '/courses/business' },
    { id: 'computer', name: '컴퓨터전공분야', nameEn: 'Computer Science', icon: '💻', path: '/courses/computer' },
    { id: 'certification', name: '자격증학습분야', nameEn: 'Certification', icon: '🏆', path: '/courses/certification' }
  ],

  // 네비게이션 메뉴
  menuItems: [
    { path: '/', labelKey: 'nav.home' },
    {
      labelKey: 'site.nav.liberalArts',
      path: '/courses/liberal-arts',
      activePath: '/courses/liberal-arts',
      dropdown: [
        { path: '/courses/statistics', labelKey: 'site.nav.statistics' },
        { path: '/courses/english', labelKey: 'site.nav.english' },
        { path: '/courses/writing', labelKey: 'site.nav.writing' },
        { path: '/courses/presentation', labelKey: 'site.nav.presentation' }
      ]
    },
    {
      labelKey: 'site.nav.business',
      path: '/courses/business',
      activePath: '/courses/business',
      dropdown: [
        { path: '/courses/accounting', labelKey: 'site.nav.accounting' },
        { path: '/courses/marketing', labelKey: 'site.nav.marketing' },
        { path: '/courses/management', labelKey: 'site.nav.management' },
        { path: '/courses/finance', labelKey: 'site.nav.finance' }
      ]
    },
    {
      labelKey: 'site.nav.computer',
      path: '/courses/computer',
      activePath: '/courses/computer',
      dropdown: [
        { path: '/courses/db', labelKey: 'site.nav.db' },
        { path: '/courses/react', labelKey: 'site.nav.react' },
        { path: '/courses/html', labelKey: 'site.nav.html' },
        { path: '/courses/web', labelKey: 'site.nav.web' }
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
        { path: '/courses/linux', labelKey: 'site.nav.linux' }
      ]
    },
    { path: '/franchise', labelKey: 'site.nav.franchise', activePath: '/franchise' }
  ],

  // 푸터 바로가기 링크
  footerLinks: [
    { path: '/', labelKey: 'nav.home' },
    { path: '/courses/liberal-arts', labelKey: 'site.nav.liberalArts' },
    { path: '/courses/business', labelKey: 'site.nav.business' },
    { path: '/courses/computer', labelKey: 'site.nav.computer' },
    { path: '/courses/certification', labelKey: 'site.nav.certification' },
    { path: '/franchise', labelKey: 'site.nav.franchise' },
    { path: '/about', labelKey: 'nav.about' }
  ],

  // Family Site 목록
  familySites: [
    { name: 'DB 학습', url: 'https://db.dreamitbiz.com' },
    { name: 'React 학습', url: 'https://react.dreamitbiz.com' },
    { name: 'HTML 학습', url: 'https://html.dreamitbiz.com' },
    { name: 'Web 학습', url: 'https://web.dreamitbiz.com' },
    { name: 'AHP 연구 플랫폼', url: 'https://ahp-basic.dreamitbiz.com' },
    { name: '핵심역량 자가측정', url: 'https://competency.dreamitbiz.com' }
  ],

  // 학습사이트 목록
  learningSites: [
    // ── 교양분야 (liberal-arts) ──
    {
      id: 'statistics',
      name: '통계학 기초',
      nameEn: 'Statistics Basics',
      url: '#',
      icon: '📊',
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
      url: '#',
      icon: '🌍',
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
      id: 'writing',
      name: '글쓰기와 소통',
      nameEn: 'Writing & Communication',
      url: '#',
      icon: '✍️',
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
      icon: '🎤',
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

    // ── 경영전공분야 (business) ──
    {
      id: 'accounting',
      name: '회계학 원리',
      nameEn: 'Accounting Principles',
      url: '#',
      icon: '🧮',
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
      id: 'marketing',
      name: '마케팅 전략',
      nameEn: 'Marketing Strategy',
      url: '#',
      icon: '📈',
      color: '#DC2626',
      category: 'business',
      description: '디지털 마케팅과 전통 마케팅의 핵심 전략을 학습합니다.',
      descriptionEn: 'Learn core strategies of digital and traditional marketing.',
      techStack: ['디지털마케팅', 'STP', '4P', '브랜딩'],
      difficulty: 'intermediate',
      curriculum: [
        '마케팅 기본 이론 (STP, 4P)',
        '디지털 마케팅 전략',
        '소비자 행동 분석',
        '브랜드 관리와 전략',
        '마케팅 캠페인 기획'
      ],
      curriculumEn: [
        'Marketing theory (STP, 4P)',
        'Digital marketing strategy',
        'Consumer behavior analysis',
        'Brand management and strategy',
        'Marketing campaign planning'
      ],
      features: ['사례 중심 학습', '캠페인 시뮬레이션', '실무 프로젝트'],
      featuresEn: ['Case-based learning', 'Campaign simulation', 'Practical projects'],
      target: '마케팅 전공자, 실무 마케터',
      targetEn: 'Marketing majors, working marketers'
    },
    {
      id: 'management',
      name: '경영전략론',
      nameEn: 'Management Strategy',
      url: '#',
      icon: '🏢',
      color: '#7C3AED',
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
      icon: '💰',
      color: '#0891B2',
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

    // ── 컴퓨터전공분야 (computer) ──
    {
      id: 'db',
      name: 'DB 학습',
      nameEn: 'Database Learning',
      url: 'https://db.dreamitbiz.com',
      icon: '🗄️',
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
      id: 'react',
      name: 'React 학습',
      nameEn: 'React Learning',
      url: 'https://react.dreamitbiz.com',
      icon: '⚛️',
      color: '#0EA5E9',
      category: 'computer',
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
      id: 'html',
      name: 'HTML 학습',
      nameEn: 'HTML Learning',
      url: 'https://html.dreamitbiz.com',
      icon: '📄',
      color: '#F97316',
      category: 'computer',
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
      url: 'https://web.dreamitbiz.com',
      icon: '🌐',
      color: '#8B5CF6',
      category: 'computer',
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

    // ── 자격증학습분야 (certification) ──
    {
      id: 'engineer',
      name: '정보처리기사',
      nameEn: 'Information Processing Engineer',
      url: '#',
      icon: '📋',
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
      icon: '🖥️',
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
      url: '#',
      icon: '🔍',
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
      url: '#',
      icon: '🐧',
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
    }
  ]
};

export default site;
