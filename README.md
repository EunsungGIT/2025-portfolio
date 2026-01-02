# 🌟 2025 프론트엔드 포트폴리오

> **"새로운 기술에 발빠르게 적응하고 단기간에 완성도 높은 결과물을 도출하는 스프린터 개발자 입니다."**

Next.js App Router와 TypeScript를 기반으로 제작된 개인 포트폴리오 웹사이트입니다. 단순한 정보 전달을 넘어, 최신 웹 표준을 준수하며 컴포넌트 단위의 최적화된 설계와 부드러운 사용자 경험(UX)을 제공하는 데 집중했습니다.

<p align="left">
  <img src="https://img.shields.io/badge/Next.js%2015-000000?style=flat-square&logo=Next.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React%2019-61DAFB?style=flat-square&logo=React&logoColor=black"/>
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=Framer&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS_Modules-000000?style=flat-square&logo=CSS3&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white"/>
</p>

---

## 🚀 1. 프로젝트 개요 (Overview)

* **개발 기간**: 2025.10 ~ 2025.12
* **배포 주소**: [https://2025-ten-kohl.vercel.app/]
* **주요 특징**:
    * **App Router** 기반의 비동기 데이터 처리 및 SEO 최적화
    * **Framer Motion**을 이용한 스태거(Stagger) 애니메이션 및 스크롤 인터랙션
    * **Web3Forms API**를 연동하여 서버리스 환경에서의 실시간 문의 기능 구현
    * **Data-Driven Architecture**: 모든 콘텐츠를 데이터화하여 유지보수성 극대화

---

## 🛠️ 2. 기술 스택 (Tech Stack)

### **Frontend**
* **Framework**: `Next.js (App Router)`
* **Language**: `TypeScript`
* **State**: `React Hooks` (useState, useMemo, useEffect)
* **Animation**: `Framer Motion`
* **Styling**: `CSS Modules`

### **Infrastructure / Library**
* **Deployment**: `Vercel`
* **UI Interaction**: `Swiper.js` (Thumbnail Carousel 구현)
* **Contact**: `Web3Forms API`

---

## 💡 3. 기술적 도전 및 해결 과정 (Technical Challenges)

### 3-1. Next.js의 비동기 `params` 대응
* **문제 인식**: Next.js 업데이트로 인해 `params`가 Promise로 제공되면서 상세 페이지에서 ID 참조 시 타입 에러 발생.
* **해결 과정**: `Promise` 타입을 명시하고 컴포넌트를 `async`로 선언, `await params`를 통해 안전하게 파라미터를 해제하는 구조로 개선하여 런타임 안정성 확보.

### 3-2. Swiper.js와 CSS Modules의 클래스 충돌 해결
* **문제 인식**: CSS Modules의 해싱 처리로 인해 Swiper 내부 동적 클래스(`.swiper-button-disabled` 등) 스타일링 불가.
* **해결 과정**: `:global` 선택자를 활용하여 라이브러리 전역 클래스에 접근, 디자인 일관성을 유지하며 커스텀 스타일 적용.

### 3-3. Client Component 마운트 시점 제어
* **문제 인식**: 서버 사이드 렌더링 시점에서 DOM 요소 접근으로 인한 `Cannot read properties of undefined` 에러 발생.
* **해결 과정**: `useEffect`로 컴포넌트 마운트 상태를 관리하여 브라우저 환경이 준비된 시점에만 라이브러리가 렌더링되도록 방어 코드 작성.

---

## 📱 4. 주요 구현 사항 (Key Features)

### ✨ Interactive UI/UX
* **Scroll Stagger**: 사용자의 스크롤 위치에 따라 요소들이 순차적으로 나타나는 애니메이션을 공통 컴포넌트화하여 재사용성을 높였습니다.
* **Responsive Slider**: 프로젝트 상세 페이지에서 Swiper.js를 활용한 썸네일 연동 슬라이더를 구현했습니다.

### 📝 Resume & Contact
* **Data Driven UI**: 모든 경력 및 기술 스택 데이터를 JSON 구조로 관리하여 데이터 추가 및 유지보수가 용이하도록 설계했습니다.
* **Real-time Mail**: 외부 백엔드 구축 없이 API 연동만으로 실시간 메일 전송 기능을 구현했습니다.

---

## 📂 5. 프로젝트 구조 (Folder Structure)

```bash
src/
├── app/                        # Next.js App Router 기반 페이지 구성
│   ├── contact/                # Contact 페이지 (문의 폼)
│   ├── project/                # 프로젝트 리스트 페이지
│   │   └── [id]/               # 프로젝트 상세 페이지 (Dynamic Routes)
│   │       ├── ProjectDetailClient.tsx # 상세 페이지 클라이언트 컴포넌트
│   │       ├── page.module.css
│   │       └── page.tsx
│   ├── resume/                 # Resume 페이지 (이력서)
│   ├── globals.css             # 전역 스타일 및 CSS 변수
│   ├── layout.tsx              # Root Layout (GNB, Footer 포함)
│   ├── page.module.css         # 메인 페이지 스타일
│   └── page.tsx                # 메인 페이지 (Home)
├── components/                 # 공통 UI 및 레이아웃 컴포넌트
│   └── layout/                 # 프레임워크 성격의 레이아웃 컴포넌트
│       ├── Footer.tsx          # 공통 하단 푸터
│       ├── Header.tsx          # 공통 상단 헤더
│       ├── ScrollStagger.tsx   # 스크롤 애니메이션 라이브러리 (framer-motion)
│       ├── ScrollToTop.tsx     # 최상단 스크롤 컴포넌트 (framer-motion)
│       ├── ProgressBar.tsx     # 현재 진행도 바 컴포넌트 (framer-motion)
│       └── Transition.tsx      # 페이지 전환 애니메이션
└── data/                       # 서비스 데이터 및 타입 정의
    ├── projectData.ts          # 프로젝트 상세 콘텐츠 데이터
    ├── resumeData.ts           # 이력서 경력 및 정보 데이터
    ├── resumeType.ts           # 이력서 데이터 구조 (TypeScript Interface)
    └── stackData.ts            # 기술 스택 데이터
```

---

## 🔗 5. 배포 및 링크 (Deployment)

* **Live Demo**: [https://2025-ten-kohl.vercel.app/]
* **Repository**: [https://github.com/EunsungGIT/2025-portfolio]