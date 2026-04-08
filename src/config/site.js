/**
 * DreamIT Edu Hub - 사이트 설정 파일
 * 학습사이트 허브의 브랜드, 메뉴, 학습사이트 정보를 정의합니다.
 */

const site = {
  // 사이트 기본 정보
  name: 'DreamIT Edu Hub',
  nameKo: '드림아이티 에듀 허브',
  description: 'DreamIT Edu Hub - 7개 전문 허브로 구성된 통합 교육 포털. 53개 학습사이트를 운영합니다.',
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

  // 허브 사이트 목록 (포털 전환: 개별 학습사이트 → 7개 허브 소개)
  hubs: [
    {
      id: 'basic-hub',
      name: 'Basic Hub',
      nameKo: '교양 허브',
      url: 'https://basic-hub.dreamitbiz.com',
      icon: 'fa-solid fa-book-open',
      color: '#8B5CF6',
      description: '어학, 교양기초, 스킬 분야 10개 학습사이트를 운영합니다.',
      descriptionEn: '10 learning sites covering languages, liberal arts basics, and skills.',
      siteCount: 10,
      sites: ['영어', '일본어', '한국어', '중국어', '프레젠테이션', '공부법', '컴퓨팅사고', 'AI·SW개론', '통계학', '글쓰기'],
      sitesEn: ['English', 'Japanese', 'Korean', 'Chinese', 'Presentation', 'Study Methods', 'Computational Thinking', 'AI & SW Intro', 'Statistics', 'Writing'],
    },
    {
      id: 'ai-hub',
      name: 'AI Hub',
      nameKo: 'AI활용 허브',
      url: 'https://ai-hub.dreamitbiz.com',
      icon: 'fa-solid fa-robot',
      color: '#F59E0B',
      description: '프롬프트 엔지니어링, LLM, 업무자동화 등 12개 AI 활용 학습사이트를 운영합니다.',
      descriptionEn: '12 AI learning sites covering prompt engineering, LLM, automation, and more.',
      siteCount: 12,
      sites: ['프롬프트엔지니어링', 'AI데이터분석', 'AI미디어생성', 'Claude', 'ChatGPT', 'Gemini', 'GenSpark', 'AI Agent', '업무자동화', '파인튜닝', 'OpenClaw', 'LLM&랭체인'],
      sitesEn: ['Prompt Engineering', 'AI Data Analysis', 'AI Media Generation', 'Claude', 'ChatGPT', 'Gemini', 'GenSpark', 'AI Agent', 'Automation', 'Fine-Tuning', 'OpenClaw', 'LLM & LangChain'],
    },
    {
      id: 'biz-hub',
      name: 'Biz Hub',
      nameKo: '경영 허브',
      url: 'https://biz-hub.dreamitbiz.com',
      icon: 'fa-solid fa-briefcase',
      color: '#0369A1',
      description: '회계, 마케팅, 경영전략, 재무관리 등 8개 경영 전공 학습사이트를 운영합니다.',
      descriptionEn: '8 business learning sites covering accounting, marketing, strategy, and finance.',
      siteCount: 8,
      sites: ['회계학', '경영전략', '재무관리', '마케팅', '셀프브랜딩', 'CX디자인', '디지털비즈니스', '전략기획'],
      sitesEn: ['Accounting', 'Management Strategy', 'Finance', 'Marketing', 'Self-Branding', 'CX Design', 'Digital Business', 'Strategic Planning'],
    },
    {
      id: 'cs-hub',
      name: 'CS Hub',
      nameKo: '컴퓨터전공 허브',
      url: 'https://cs-hub.dreamitbiz.com',
      icon: 'fa-solid fa-laptop-code',
      color: '#059669',
      description: 'DB, 알고리즘, 자료구조, 소프트웨어설계 등 5개 컴퓨터 전공 학습사이트를 운영합니다.',
      descriptionEn: '5 CS learning sites covering databases, algorithms, data structures, and software design.',
      siteCount: 5,
      sites: ['데이터베이스', '알고리즘', '자료구조', '소프트웨어설계', '정보통신'],
      sitesEn: ['Database', 'Algorithm', 'Data Structure', 'SW Design', 'Info & Comm'],
    },
    {
      id: 'coding-hub',
      name: 'Coding Hub',
      nameKo: '코딩학습 허브',
      url: 'https://coding-hub.dreamitbiz.com',
      icon: 'fa-solid fa-code',
      color: '#10B981',
      description: 'HTML, React, Python, Java, C 등 7개 프로그래밍 코딩 학습사이트를 운영합니다.',
      descriptionEn: '7 coding learning sites covering HTML, React, Python, Java, C, and more.',
      siteCount: 7,
      sites: ['HTML5+CSS3', 'React', '프로그래밍코딩', 'Python', 'Java', 'C언어', 'Vibe Backend'],
      sitesEn: ['HTML5+CSS3', 'React', 'Programming & Coding', 'Python', 'Java', 'C Language', 'Vibe Backend'],
    },
    {
      id: 'exam-hub',
      name: 'Exam Hub',
      nameKo: '자격증 허브',
      url: 'https://exam-hub.dreamitbiz.com',
      icon: 'fa-solid fa-award',
      color: '#DC2626',
      description: '정보처리기사, SQLD, 리눅스마스터 등 5개 자격증 학습사이트를 운영합니다.',
      descriptionEn: '5 certification learning sites covering Engineer, SQLD, Linux Master, and more.',
      siteCount: 5,
      sites: ['정보처리기사', 'SQLD', '리눅스마스터', '컴퓨터활용능력', '경영정보시각화'],
      sitesEn: ['Info Processing Engineer', 'SQLD', 'Linux Master', 'Computer Skills', 'Biz Visualization'],
    },
    {
      id: 'career-hub',
      name: 'Career Hub',
      nameKo: '커리어 허브',
      url: 'https://career-hub.dreamitbiz.com',
      icon: 'fa-solid fa-user-tie',
      color: '#7C3AED',
      description: '취업 로드맵, 경력개발, 역량개발, 커리어 코칭 등 6개 커리어 학습·서비스를 운영합니다.',
      descriptionEn: '6 career learning sites and services including job roadmap, coaching, and competency development.',
      siteCount: 6,
      sites: ['취업로드맵', '경력개발', '역량개발', '커리어사이트제작', '1:1코칭', '이력서코칭'],
      sitesEn: ['Job Roadmap', 'Career Development', 'Competency', 'Career Site', '1:1 Coaching', 'Resume Coaching'],
    },
  ],

  // 네비게이션 메뉴 (허브 포털 전환 — 외부 허브 링크 + 내부 페이지)
  menuItems: [
    {
      labelKey: 'site.nav.hubSites', path: '/hubs', activePath: '/hubs',
      dropdown: [
        { path: 'https://basic-hub.dreamitbiz.com', labelKey: 'site.nav.basicHub', external: true },
        { path: 'https://ai-hub.dreamitbiz.com', labelKey: 'site.nav.aiHub', external: true },
        { path: 'https://biz-hub.dreamitbiz.com', labelKey: 'site.nav.bizHub', external: true },
        { path: 'https://cs-hub.dreamitbiz.com', labelKey: 'site.nav.csHub', external: true },
        { path: 'https://coding-hub.dreamitbiz.com', labelKey: 'site.nav.codingHub', external: true },
        { path: 'https://exam-hub.dreamitbiz.com', labelKey: 'site.nav.examHub', external: true },
        { path: 'https://career-hub.dreamitbiz.com', labelKey: 'site.nav.careerHub', external: true },
      ]
    },
    {
      labelKey: 'site.nav.franchise', path: '/franchise', activePath: '/franchise',
      dropdown: [
        { path: '/pricing', labelKey: 'site.nav.pricing' },
        { path: '/franchise', labelKey: 'site.nav.franchiseInquiry' },
        { path: '/shop', labelKey: 'shop.title' },
      ]
    },
    {
      labelKey: 'site.nav.community', path: '/about', activePath: '/about',
      dropdown: [
        { path: '/about', labelKey: 'site.nav.aboutHub' },
        { path: '/notice', labelKey: 'site.nav.notice' },
        { path: '/qna', labelKey: 'site.nav.qna' },
      ]
    },
  ],

  // 푸터 바로가기 링크
  footerLinks: [
    { path: 'https://basic-hub.dreamitbiz.com', labelKey: 'site.nav.basicHub', external: true },
    { path: 'https://ai-hub.dreamitbiz.com', labelKey: 'site.nav.aiHub', external: true },
    { path: 'https://biz-hub.dreamitbiz.com', labelKey: 'site.nav.bizHub', external: true },
    { path: 'https://cs-hub.dreamitbiz.com', labelKey: 'site.nav.csHub', external: true },
    { path: 'https://coding-hub.dreamitbiz.com', labelKey: 'site.nav.codingHub', external: true },
    { path: 'https://exam-hub.dreamitbiz.com', labelKey: 'site.nav.examHub', external: true },
    { path: 'https://career-hub.dreamitbiz.com', labelKey: 'site.nav.careerHub', external: true },
    { path: '/about', labelKey: 'site.nav.community' },
  ],

  // Family Site 목록 (7개 허브)
  familySites: [
    { name: 'Basic Hub', url: 'https://basic-hub.dreamitbiz.com' },
    { name: 'AI Hub', url: 'https://ai-hub.dreamitbiz.com' },
    { name: 'Biz Hub', url: 'https://biz-hub.dreamitbiz.com' },
    { name: 'CS Hub', url: 'https://cs-hub.dreamitbiz.com' },
    { name: 'Coding Hub', url: 'https://coding-hub.dreamitbiz.com' },
    { name: 'Exam Hub', url: 'https://exam-hub.dreamitbiz.com' },
    { name: 'Career Hub', url: 'https://career-hub.dreamitbiz.com' },
  ],
};

export default site;
