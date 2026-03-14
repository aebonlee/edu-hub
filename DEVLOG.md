# DreamIT Edu Hub - 개발일지

## 2026-03-15 (v1.0.0) - 초기 구현 완료

### 프로젝트 개요
- **프로젝트명**: DreamIT Edu Hub (드림아이티 에듀 허브)
- **도메인**: edu-hub.dreamitbiz.com
- **저장소**: https://github.com/aebonlee/edu-hub
- **기반**: `D:\templete-ref` React + Vite 템플릿

### 구현 내역

#### Phase 1: 초기 설정
- 템플릿 복사 (node_modules, .git 제외)
- Git 초기화 및 remote 연결 (`https://github.com/aebonlee/edu-hub.git`)
- `CNAME` → `edu-hub.dreamitbiz.com`
- `package.json` → name: `dreamit-edu-hub`
- `vite.config.js` → port: `5175`
- `index.html` → title: `DreamIT Edu Hub | 드림아이티 에듀 허브`, meta description 변경
- `.env.example` → `VITE_SITE_URL=https://edu-hub.dreamitbiz.com`
- `npm install` (83 packages, 0 vulnerabilities)

#### Phase 2: 사이트 설정 (`src/config/site.js`) — 전면 재작성
- 브랜드: `Dream` / `IT` / `Edu`
- 메뉴: 홈, 학습사이트(드롭다운: DB/React/HTML/Web), 강사분양, 소개
- Family Sites: 본사이트 + 4개 학습사이트 + AHP + 핵심역량
- `learningSites` 배열 추가
  - 4개 사이트: DB, React, HTML, Web
  - 각 사이트별: id, url, icon, color, techStack, difficulty, curriculum(ko/en), features(ko/en), target(ko/en)
- 카트 아이콘 CSS 숨김 처리

#### Phase 3: 번역 (`src/utils/translations.js`) — site 블록 전체 교체
- 한국어/영어 완전 지원
- 신규 번역 키:
  - `site.nav.*` — 학습사이트, DB학습, React학습, HTML학습, Web학습, 강사분양
  - `site.home.*` — Hero, Stats, Sites, CTA 섹션 전체
  - `site.courses.*` — 필터, 커리큘럼, 특징, 대상
  - `site.franchise.*` — 혜택 4개, 지원서 폼 필드 전체
  - `site.about.*` — 미션, 비전, 핵심가치 4개, 운영팀
  - `site.difficulty.*` — 입문/중급/고급
- `footer.tagline` → 교육 관련 문구로 변경

#### Phase 4: 신규 페이지 (4개)

**Home.jsx (전면 재작성)**
- Hero 섹션: 그라디언트 배경 + 파티클 애니메이션 (20개), CTA 버튼 2개
- Stats 섹션: `useCountUp` 훅으로 카운터 애니메이션 (4개/500+/12명/95%)
- 학습사이트 카드: 2열 그리드, 아이콘/제목/설명/기술스택 태그/난이도 배지/방문 링크
- CTA 섹션: 학습 시작 유도

**Courses.jsx (신규)**
- 난이도별 필터 버튼 (전체/입문/중급/고급)
- 4개 학습사이트 상세 카드: 커리큘럼 리스트, 특징, 대상 수강자, 외부 사이트 링크
- URL 파라미터로 특정 사이트 하이라이트 (`/courses/:id`)

**Franchise.jsx (신규)**
- 혜택 섹션: 4개 카드 (커리큘럼 제공, 수익 공유, 기술 지원, 커뮤니티)
- 지원서 폼: Supabase `franchise_applications` 테이블 INSERT
  - 필드: 이름, 이메일, 연락처, 희망 사이트(select), 강의 경력, 지원 동기, 포트폴리오 URL
  - 미인증 사용자도 제출 가능, 로그인 시 user_id 자동 연결
  - Supabase 미설정 시 데모 모드 (1초 대기 후 성공)
  - 성공/에러 상태 처리

**About.jsx (신규)**
- 미션/비전: 2열 카드 레이아웃
- 핵심 가치: 4열 그리드 (실무 중심, 접근성, 최신 기술, 함께 성장)
- 운영팀 소개: 3열 그리드 (대표, 교육팀, 기술팀)

#### Phase 5: 라우팅 (`src/layouts/PublicLayout.jsx`)
- `/courses` → Courses
- `/courses/:id` → Courses (특정 사이트 하이라이트)
- `/franchise` → Franchise
- `/about` → About
- 기존 Auth/Shop 라우트 유지

#### Phase 6: CSS (`src/styles/site.css`) — 전면 재작성
- `.cart-icon-link { display: none }` — 카트 아이콘 숨김
- `.edu-stats-*` — 통계 카운터 카드 (4열 그리드)
- `.edu-sites-grid`, `.edu-site-card` — 학습사이트 카드 (2열 그리드)
- `.edu-difficulty-badge` — 난이도 배지 (beginner: 초록, intermediate: 파랑, advanced: 주황)
- `.edu-tech-tag` — 기술스택 태그
- `.edu-filter-*` — 필터 버튼 (pill 스타일)
- `.edu-detail-card`, `.edu-detail-block` — 상세 카드 (Courses 페이지)
- `.edu-benefits-grid`, `.edu-benefit-card` — 혜택 카드 (4열 그리드)
- `.edu-form-*` — 지원서 폼 (2열 row, 검증, 성공/에러 상태)
- `.edu-mission-*` — 미션/비전 (2열 그리드)
- `.edu-values-*` — 핵심 가치 (4열 그리드)
- `.edu-team-*` — 운영팀 (3열 그리드)
- Dark mode 오버라이드 전체 (`[data-theme="dark"]`)
- 반응형: 1024px / 768px / 480px

#### Phase 7: Supabase 스키마 (참고)
```sql
CREATE TABLE franchise_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  preferred_site TEXT NOT NULL,
  experience TEXT NOT NULL,
  motivation TEXT NOT NULL,
  portfolio_url TEXT,
  status TEXT DEFAULT 'pending',
  user_id UUID REFERENCES auth.users(id)
);
```
> 실제 테이블 생성은 Supabase 대시보드에서 수행

### 수정/생성 파일 목록

| 파일 | 작업 |
|------|------|
| `CNAME` | 수정 |
| `public/CNAME` | 수정 |
| `package.json` | 수정 (name) |
| `vite.config.js` | 수정 (port) |
| `index.html` | 수정 (title, description) |
| `.env.example` | 수정 (SITE_URL) |
| `src/config/site.js` | **전면 재작성** |
| `src/utils/translations.js` | **전면 재작성** |
| `src/pages/Home.jsx` | **전면 재작성** |
| `src/pages/Courses.jsx` | **신규 생성** |
| `src/pages/Franchise.jsx` | **신규 생성** |
| `src/pages/About.jsx` | **신규 생성** |
| `src/layouts/PublicLayout.jsx` | 라우트 추가 |
| `src/styles/site.css` | **전면 재작성** |
| `IMPLEMENTATION_PLAN.md` | **신규 생성** |
| `DEVLOG.md` | **신규 생성** |

### 변경 없는 파일
- `App.jsx`, `main.jsx`, `index.css`
- `Navbar.jsx`, `Footer.jsx`
- `contexts/*` (ThemeContext, LanguageContext, CartContext, AuthContext, ToastContext)
- `hooks/*` (useCountUp, useAOS)
- `utils/supabase.js`, `utils/auth.js`
- `styles/base.css`, `styles/navbar.css`, `styles/hero.css`, `styles/dark-mode.css`, `styles/responsive.css` 등

### 빌드 결과
- `npm run build` 성공 (2.57s, 0 errors)
- 총 19개 청크 생성
- CSS: `index-*.css` (101.71 kB), `auth-*.css` (7.46 kB)
- JS: `index-*.js` (276.75 kB / gzip: 89.36 kB)

### 배포
- GitHub Pages (GitHub Actions 자동 배포)
- 도메인: edu-hub.dreamitbiz.com

---

## 기술 스택

| 카테고리 | 기술 |
|----------|------|
| 프레임워크 | React 19 + Vite 7 |
| 스타일링 | Vanilla CSS (BEM-like, CSS Variables) |
| 백엔드 | Supabase (Auth + Database) |
| 배포 | GitHub Pages + GitHub Actions |
| 다국어 | 커스텀 i18n (ko/en) |
| 테마 | 다크모드 + 5개 컬러테마 (blue/red/green/purple/orange) |
