# DreamIT Edu Hub

IT 학습사이트 허브 — DB, React, HTML, Web 학습 플랫폼을 소개하고, 강사 분양 신청을 받는 교육 포털 사이트입니다.

- **도메인**: https://edu-hub.dreamitbiz.com
- **기반**: React 19 + Vite 7 + Supabase

## 빠른 시작

```bash
# 1. 의존성 설치
npm install

# 2. 환경변수 설정
cp .env.example .env
# .env 파일에 Supabase 키를 입력하세요

# 3. 개발 서버 시작
npm run dev
```

## 페이지 구성

| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/` | Home | Hero, 통계, 학습사이트 카드, CTA |
| `/courses` | 학습사이트 | 난이도 필터, 4개 사이트 상세 |
| `/courses/:id` | 학습사이트 | 특정 사이트 하이라이트 |
| `/franchise` | 강사분양 | 혜택 소개, 지원서 폼 |
| `/about` | 소개 | 미션/비전, 핵심가치, 운영팀 |

## 학습사이트

| 사이트 | URL | 난이도 |
|--------|-----|--------|
| DB 학습 | https://db.dreamitbiz.com | 중급 |
| React 학습 | https://react.dreamitbiz.com | 중급 |
| HTML 학습 | https://html.dreamitbiz.com | 입문 |
| Web 학습 | https://web.dreamitbiz.com | 고급 |

## 기술 스택

- React 19, Vite 7, React Router 7
- Supabase (Auth + Database)
- GitHub Pages + GitHub Actions
- 다국어 (ko/en), 다크모드 + 5개 컬러테마

## 빌드 & 배포

```bash
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 미리보기
```

GitHub `main` 브랜치 push 시 GitHub Actions로 자동 배포됩니다.
