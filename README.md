# 🌟 2025 프론트엔드 포트폴리오 (Personal Portfolio)

> **Next.js와 TypeScript를 활용한 개인 포트폴리오 웹사이트**

<p align="left">
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>
</p>

---

## 🚀 1. 프로젝트 개요 (Project Overview)

프론트엔드 개발자로서의 기술적 역량과 디자인 감각을 전달하기 위해 구축된 개인 프로젝트입니다. 최신 Next.js 환경에서의 서버 사이드 렌더링(SSR)과 컴포넌트 최적화를 실전 프로젝트 수준으로 구현하는 데 초점을 맞췄습니다.

### 🎯 주요 목표
* **성능 최적화**: Next.js App Router 기반의 서버 컴포넌트 활용으로 초기 로딩 속도 단축
* **타입 안전성**: TypeScript 전면 도입을 통한 런타임 에러 방지 및 유지보수성 향상
* **사용자 경험(UX)**: `Framer Motion`을 활용한 부드러운 애니메이션 및 반응형 UI 제공

---

## 🛠️ 2. 기술 스택 (Tech Stack)

| 분류 | 기술 스택 |
| :--- | :--- |
| **Frontend** | `Next.js (App Router)`, `TypeScript`, `React` |
| **Styling** | `CSS Modules` (Scoped Styling), `Responsive Design` |
| **Libraries** | `Framer Motion` (UI/UX), `Swiper.js` (Slide 인터랙션) |
| **Deployment** | `Vercel` (CI/CD 자동 배포), `GitHub` |

---

## 💡 3. 기술적 도전 및 해결 과정 (Technical Challenges)

### 3-1. Next.js Server Component 내 비동기 `params` 처리
**[문제 인식]** Next.js 최신 버전에서 `params` 객체가 비동기적으로 처리됨에 따라, 상세 페이지(`/project/[id]`)에서 ID에 즉시 접근할 수 없어 타입 오류 및 데이터 페칭 실패가 발생했습니다.

**[해결 과정]** * `params`를 **Promise** 형태로 명시하고, 컴포넌트 내에서 `await`를 사용하여 비동기 파라미터를 해제하도록 수정했습니다.
* 이를 통해 서버 컴포넌트의 비동기 데이터 처리 메커니즘을 깊이 이해하고, 안정적인 서버 사이드 렌더링 환경을 구축했습니다.



### 3-2. Swiper.js 커스텀 버튼과 CSS Modules 연동
**[문제 인식]** CSS Modules의 클래스명 해싱(Hashing) 특성 때문에, Swiper 라이브러리가 동적으로 주입하는 `.swiper-button-disabled` 클래스를 인식하지 못해 버튼 비활성화 디자인이 반영되지 않았습니다.

**[해결 과정]** * **`:global` 선택자**를 활용하여 해싱된 클래스명 내부에서 전역 클래스를 타겟팅함으로써 디자인 충돌을 해결했습니다.
* `useRef`를 사용하여 Swiper 인스턴스와 실제 DOM 요소를 정확하게 바인딩하여 제어권을 확보했습니다.

---

## 📱 4. 주요 구현 특징 (Features)

* **Semantic Markup**: 웹 접근성(A11y)을 고려하여 시맨틱 태그 기반의 마크업 설계
* **Responsive Web**: PC, Tablet, Mobile 모든 환경에서 최적화된 레이아웃 제공
* **Interactive UI**: 스크롤 애니메이션 및 부드러운 페이지 전환 효과 적용

---

## 🔗 5. 배포 및 링크 (Deployment)

* **Live Demo**: [https://2025-ten-kohl.vercel.app/]
* **Repository**: [https://github.com/EunsungGIT/2025-portfolio]