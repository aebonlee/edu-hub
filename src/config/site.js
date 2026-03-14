/**
 * DreamIT Edu Hub - 사이트 설정 파일
 * 학습사이트 허브의 브랜드, 메뉴, 학습사이트 정보를 정의합니다.
 */

const site = {
  // 사이트 기본 정보
  name: 'DreamIT Edu Hub',
  nameKo: '드림아이티 에듀 허브',
  description: 'DreamIT Edu Hub - IT 학습사이트 허브. DB, React, HTML, Web 학습 플랫폼',
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

  // 네비게이션 메뉴
  menuItems: [
    { path: '/', labelKey: 'nav.home' },
    {
      labelKey: 'site.nav.courses',
      path: '/courses',
      activePath: '/courses',
      dropdown: [
        { path: '/courses/db', labelKey: 'site.nav.db' },
        { path: '/courses/react', labelKey: 'site.nav.react' },
        { path: '/courses/html', labelKey: 'site.nav.html' },
        { path: '/courses/web', labelKey: 'site.nav.web' }
      ]
    },
    { path: '/franchise', labelKey: 'site.nav.franchise', activePath: '/franchise' },
    { path: '/about', labelKey: 'nav.about', activePath: '/about' }
  ],

  // 푸터 바로가기 링크
  footerLinks: [
    { path: '/', labelKey: 'nav.home' },
    { path: '/courses', labelKey: 'site.nav.courses' },
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
    {
      id: 'db',
      name: 'DB 학습',
      nameEn: 'Database Learning',
      url: 'https://db.dreamitbiz.com',
      icon: '🗄️',
      color: '#2563EB',
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
    }
  ]
};

export default site;
