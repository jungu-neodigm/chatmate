<<<<<<< HEAD
# chatmate
AI 챗봇 / AI 대화 에이전트 서비스
=======
# ChatMate — AI 챗봇 / AI 대화 에이전트 소개 사이트

웹사이트, 문서, FAQ, 상품 정보를 대화형 고객 경험으로 전환하는 AI 챗봇 서비스의
멀티페이지 소개 웹사이트입니다. 별도 빌드 없이 정적 HTML/CSS/JS로 동작합니다.

## 페이지 구성

- `index.html` — Home
- `features.html` — 기능 소개
- `how-it-works.html` — 도입 절차 (8단계)
- `admin-console.html` — 관리자 콘솔
- `security.html` — 보안 & 거버넌스
- `pricing.html` — 요금
- `faq.html` — FAQ
- `contact.html` — 문의 / 데모 신청
- `use-cases/` — 활용 사례 목록 및 6개 상세 페이지
  (상품/서비스 탐색, 고객지원 자동화, B2B 상담·리드 수집, 지식 지원 및 도움, 내부 지식 검색, 공공기관/관공서 안내)
- `assets/site.js`, `assets/site.css` — 전 페이지 공용 헤더/푸터/드롭다운/아코디언 스크립트 및 스타일

## 로컬에서 열어보기

별도 서버 없이 `index.html`을 브라우저로 바로 열어도 대부분 동작하지만,
일부 브라우저의 로컬 파일 정책 때문에 아래처럼 간단한 로컬 서버로 여는 것을 권장합니다.

```bash
# 프로젝트 루트에서
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

## 기술 스택

- Tailwind CSS (CDN, 별도 빌드 불필요)
- Vanilla JavaScript (공용 헤더/푸터 삽입, 모바일 메뉴, FAQ 아코디언, GNB 드롭다운)

## 참고

현재 브랜드명(ChatMate), 가격, 연락처 등은 임시 플레이스홀더입니다.
실제 서비스에 맞게 콘텐츠를 교체해 사용하세요.
>>>>>>> 929ece9 (Initial commit: ChatMate AI 챗봇 소개 사이트)
