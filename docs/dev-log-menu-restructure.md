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
