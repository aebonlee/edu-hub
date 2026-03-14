# DreamIT Edu Hub — 메뉴 재구성 및 다크블루 테두리 통일

## 개발일지

**작성일:** 2026-03-15
**작업 유형:** 기능 개선 / UI 통일
**상태:** 완료

---

## 1. 변경 개요

### 1.1 메뉴 재구성
기존 4개 학습사이트(DB, React, HTML, Web) 중심의 단일 메뉴를 **5개 카테고리** 기반 메뉴로 전면 재구성하였습니다.

| 메뉴 | 경로 | 하위 항목 |
|------|------|-----------|
| 교양분야 | `/courses/liberal-arts` | 통계학 기초, 실용 영어, 글쓰기와 소통, 프레젠테이션 |
| 경영전공분야 | `/courses/business` | 회계학 원리, 마케팅 전략, 경영전략론, 재무관리 |
| 컴퓨터전공분야 | `/courses/computer` | DB 학습, React 학습, HTML 학습, Web 학습 |
| 자격증학습분야 | `/courses/certification` | 정보처리기사, 컴퓨터활용능력, SQLD, 리눅스마스터 |
| 학습사이트분양 | `/franchise` | (드롭다운 없음) |

### 1.2 학습사이트 확장
- 기존 4개 → **16개** 학습사이트로 확장
- 각 사이트에 `category` 필드 추가로 카테고리 분류
- 기존 컴퓨터 4개 사이트는 외부 URL 유지
- 신규 12개 사이트는 `url: '#'` (준비중)

### 1.3 다크블루 테두리 통일
모든 콘텐츠 박스 테두리를 `2px solid var(--primary-blue)` (#0046C8)로 통일하였습니다.

**적용 셀렉터:**
- `.edu-stats-card` — 통계 카드
- `.edu-site-card` — 사이트 카드
- `.edu-detail-card` — 상세 카드
- `.edu-benefit-card` — 혜택 카드
- `.edu-value-card` — 가치 카드
- `.edu-team-card` — 팀 카드
- `.edu-mission-card` — 미션 카드
- `.edu-form-wrapper` — 폼 컨테이너
- `.edu-category-card` — 카테고리 카드 (신규)

**다크모드:** `border-color: var(--primary-blue-light, #4A90D9)` 적용

---

## 2. 수정 파일 목록

| 파일 | 변경 내용 |
|------|-----------|
| `src/config/site.js` | 메뉴 5개 카테고리, learningSites 16개, categories 배열 추가, footerLinks 갱신 |
| `src/utils/translations.js` | 5개 카테고리 + 12개 사이트명 번역 키, franchise → 학습사이트분양, comingSoon 키 |
| `src/pages/Courses.jsx` | 카테고리/사이트ID 스마트 라우팅, 준비중 배지 표시 |
| `src/pages/Home.jsx` | 카테고리 카드 4개 (2열 그리드), stats 16개/4분야 업데이트 |
| `src/styles/site.css` | 다크블루 테두리 통일, `.edu-category-card`/`.edu-coming-soon` 신규 |

---

## 3. 주요 기술 결정

### 3.1 라우팅 전략
- `/courses/:id` 단일 라우트로 카테고리 슬러그와 사이트 ID를 모두 처리
- `site.categories` 배열의 ID와 매칭하여 카테고리 여부 판별
- 사이트 ID 매칭 시 해당 카테고리로 필터링 + 하이라이트

### 3.2 준비중 처리
- `url === '#'`인 사이트는 `<span>` 태그로 "준비중" 배지 표시
- `pointer-events: none`으로 클릭 방지
- 추후 실제 URL 할당 시 자동으로 활성화

### 3.3 카테고리 카드
- 홈페이지에서 기존 개별 사이트 카드 대신 4개 카테고리 개요 카드 표시
- 각 카테고리 코스 수 동적 계산
- 카테고리 설명은 번역 키로 관리

---

## 4. 빌드 확인

```
npm run build → ✓ built in 2.51s
- 114 modules transformed
- dist/ 생성 완료
```

---

## 5. 검증 체크리스트

- [x] 5개 메뉴 드롭다운 네비게이션 동작
- [x] 각 카테고리 페이지에서 해당 카테고리 코스만 표시
- [x] 개별 사이트 하이라이트 (`/courses/db` 등)
- [x] 준비중 사이트 배지 표시
- [x] 모든 콘텐츠 박스 다크블루 테두리
- [x] 다크모드 테두리 블루 계열 유지
- [x] 한국어/영어 전환
- [x] 반응형 레이아웃 (모바일)
- [x] `npm run build` 성공

---

## 6. 추가 개선: 코스 카드 2열 레이아웃 (2026-03-15)

### 6.1 변경 내용
코스 상세 카드의 "커리큘럼, 특징, 대상" 영역이 세로로 나열되어 카드 높이가 과도하게 길었던 문제를 2열 그리드 레이아웃으로 개선하였습니다.

**레이아웃 구조:**

```
┌─────────────────────────────────────────┐
│  아이콘  과목명  난이도배지              │
│  설명 텍스트                            │
│  [태그] [태그] [태그] [태그]            │
├────────────────┬────────────────────────┤
│  커리큘럼       │  특징                  │
│  ✓ 항목 1      │  ✓ 항목 1              │
│  ✓ 항목 2      │  ✓ 항목 2              │
│  ✓ 항목 3      │  ✓ 항목 3              │
│  ✓ 항목 4      │                        │
│  ✓ 항목 5      │  대상                  │
│                │  대상 설명 텍스트       │
├────────────────┴────────────────────────┤
│  [사이트 방문하기] / [준비중]            │
└─────────────────────────────────────────┘
```

### 6.2 수정 파일

| 파일 | 변경 내용 |
|------|-----------|
| `src/pages/Courses.jsx` | 커리큘럼/특징/대상을 `edu-detail-blocks-row` 래퍼로 감싸 2열 배치 |
| `src/styles/site.css` | `.edu-detail-blocks-row` (2열 그리드), `.edu-detail-block-right` (우측 스택) 신규 |

### 6.3 신규 CSS 클래스

| 클래스 | 역할 |
|--------|------|
| `.edu-detail-blocks-row` | `grid-template-columns: 1fr 1fr` — 2열 그리드 컨테이너 |
| `.edu-detail-block-right` | 우측 열 (특징 + 대상 세로 스택) |

### 6.4 반응형 처리
- **768px 이하:** `.edu-detail-blocks-row` → `grid-template-columns: 1fr` (1열 스택)

### 6.5 커밋 이력

| 커밋 | 메시지 |
|------|--------|
| `e863a12` | `style: 코스 카드 커리큘럼/특징/대상 2열 레이아웃 적용` |

---

## 7. 추가 개선: 필터 삭제 / 카테고리 타이틀 / 테두리 세련화 (2026-03-15)

### 7.1 필터 버튼 삭제
코스 페이지의 전체/입문/중급/고급 필터 버튼을 제거하였습니다.
- 난이도 배지는 각 카드 내부에 그대로 유지
- `useState(filter)`, `FILTERS` 배열, `.edu-filter-bar/.edu-filter-btn` CSS 모두 삭제

### 7.2 카테고리 섹션 타이틀 추가
카테고리별로 그룹핑하여 섹션 타이틀을 표시합니다.

```
📚 교양분야  ④
─────────────────
[카드] [카드]
[카드] [카드]

💼 경영전공분야  ④
─────────────────
[카드] [카드]
...
```

**신규 CSS 클래스:**
- `.edu-category-section` — 카테고리 그룹 래퍼 (하단 여백 56px)
- `.edu-category-title` — 아이콘 + 타이틀 + 코스 수 (하단 라인)
- `.edu-category-title-icon` — 32px 아이콘
- `.edu-category-title-count` — 블루 원형 뱃지

### 7.3 테두리 세련화
기존 `2px solid var(--primary-blue)` → `1px solid rgba(0, 70, 200, 0.15)` 로 변경하여 은은한 블루 틴트로 통일하였습니다.

| 항목 | 변경 전 | 변경 후 |
|------|---------|---------|
| 기본 테두리 | `2px solid #0046C8` | `1px solid rgba(0,70,200,0.15)` |
| 호버 테두리 | 변화 없음 | `rgba(0,70,200,0.3)` |
| 호버 그림자 | `var(--shadow-lg)` | `0 8px 24px rgba(0,70,200,0.12)` |
| 상단 포인트 | `4px solid` | `3px solid` (카드 악센트 컬러) |
| 다크모드 기본 | `#4A90D9` | `rgba(74,144,217,0.25)` |
| 다크모드 호버 | 변화 없음 | `rgba(74,144,217,0.5)` + 글로우 |

**적용 셀렉터 (9종):**
stats-card, site-card, detail-card, benefit-card, value-card, team-card, mission-card, form-wrapper, category-card

### 7.4 수정 파일

| 파일 | 변경 내용 |
|------|-----------|
| `src/pages/Courses.jsx` | 필터 삭제, 카테고리별 그룹핑 + 섹션 타이틀 렌더링 |
| `src/styles/site.css` | 필터 CSS 삭제, 카테고리 타이틀 신규, 테두리 전면 세련화 |

---

## 8. 경영전공분야 4개 과목 교체 (2026-03-15)

### 8.1 변경 내용
경영전공분야의 기존 4개 과목(회계학 원리, 마케팅 전략, 경영전략론, 재무관리)을 실제 운영 사이트가 있는 4개 과목으로 교체하였습니다.

| 과목명 | URL | 난이도 |
|--------|-----|--------|
| 마케팅개론 | https://marketing.dreamitbiz.com | 입문 |
| 셀프 브랜딩 마케팅 | https://self-branding.dreamitbiz.com | 입문 |
| 고객경험디자인 | https://uxdesign.dreamitbiz.com | 중급 |
| 디지털비즈니스전략세미나 | https://digitalbiz.dreamitbiz.com | 고급 |

### 8.2 수정 파일

| 파일 | 변경 내용 |
|------|-----------|
| `src/config/site.js` | 메뉴 드롭다운 4개 경로 교체, learningSites 경영 4개 항목 전면 교체 |
| `src/utils/translations.js` | 경영분야 네비게이션 번역 키 4개 교체 (ko/en) |

### 8.3 기존 과목 유지 + 신규 4개 추가
기존 4개 과목(회계학 원리, 마케팅 전략, 경영전략론, 재무관리)을 그대로 유지하고, 신규 4개 과목을 추가하여 경영분야를 총 **8개 과목**으로 확장하였습니다.

**기존 유지 (준비중):**
- 회계학 원리 (`accounting`) — url: '#'
- 마케팅 전략 (`marketing`) — url: '#'
- 경영전략론 (`management`) — url: '#'
- 재무관리 (`finance`) — url: '#'

**신규 추가 (실제 사이트):**
- 마케팅개론 (`marketing-intro`) — marketing.dreamitbiz.com
- 셀프 브랜딩 마케팅 (`self-branding`) — self-branding.dreamitbiz.com
- 고객경험디자인 (`ux-design`) — uxdesign.dreamitbiz.com
- 디지털비즈니스전략세미나 (`digital-biz`) — digitalbiz.dreamitbiz.com

### 8.4 전체 사이트 수 변경
- 총 학습사이트: 16개 → **20개**
- 홈페이지 stat, CTA 문구 반영
