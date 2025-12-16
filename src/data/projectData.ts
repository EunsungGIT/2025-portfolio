export interface Project {
    id: string;
    title: string;
    tech: string[];
    headCount: "개인 프로젝트" | "팀 프로젝트";
    thumbnail: string; 
    mock1: string; 
    mock2: string; 
    mock3: string; 
    description: string;
    work: string;
    period: string;
    githubLink: string;
    figmaLink: string;
    resultLink: string;
}

export const PROJECTS: Project[] = [
    {
        id: "2025",
        title: "2025 PORTFOLIO",
        tech: ["Next.js", "TypeScript", "React", "CSS3"],
        headCount: "개인 프로젝트",
        thumbnail: '/images/projects/2025/2025.png',
        mock1: '/images/projects/2025/20251.png',
        mock2: '/images/projects/2025/20252.png',
        mock3: '/images/projects/2025/20253.png',
        description: "Next.js App Router 기반의 개인 포트폴리오 웹사이트입니다. TypeScript를 도입해 개발 생산성과 타입 안정성을 확보했으며, Framer Motion을 활용하여 사용자 친화적인 페이지 전환 애니메이션을 구현했습니다. 모든 페이지는 반응형으로 제작되었습니다.",
        work: "프론트엔드 전반: Next.js (App Router) 구조 설계 및 컴포넌트 개발 (전체 4개 페이지 및 10개 이상의 재사용 컴포넌트).\n- 사용자 경험(UX) 개선: Framer Motion을 이용한 부드러운 페이지 전환 애니메이션 및 Swiper를 활용한 프로젝트 슬라이드 구현.\n- 반응형 디자인: 미디어 쿼리 및 CSS Flex/Grid를 활용한 모든 페이지(PC, Tablet, Mobile) 반응형 구현 완료",
        period: "2025.10 - 2025.12",
        githubLink: "https://github.com/EunsungGIT/2025-portfolio",
        figmaLink: "",
        resultLink: "https://2025-ten-kohl.vercel.app/",
    },
    {
        id: "wavve",
        title: "Wavve",
        tech: ["HTML5", "CSS3", "JavaScript", "PHP", "API"],
        headCount: "팀 프로젝트",
        thumbnail: '/images/projects/wavve/wavve.png',
        mock1: '/images/projects/wavve/wavve1.png',
        mock2: '/images/projects/wavve/wavve2.png',
        mock3: '/images/projects/wavve/wavve3.png',
        description: "HTML, CSS, JavaScript, JQuery를 활용하여 OTT 서비스 'Wavve'의 전체 40여 개 페이지를 퍼블리싱 클론 프로젝트입니다. 원본 사이트에 없던 반응형 웹 디자인(Desktop, Tablet, Mobile)을 추가 구현하고, OpenAPI 기반 챗봇 기능을 도입하여 사용자 경험을 확장했습니다. 팀 프로젝트 내에서 퍼블리싱과 기능 구현, 기획 문서 작성에 기여했습니다.",
        work: "총 40개 페이지 중 메인 페이지 1개와 서브 페이지 15개 (총 16개 페이지) 퍼블리싱 및 기능 구현 담당\n전 페이지 반응형 웹 (Desktop, Tablet, Mobile) 디자인 구현 완료\nOpenAPI를 활용하여 서비스 통합형 챗봇 기능 구현\n프로젝트 시작 단계의 기획 및 디자인 피그마 기반 PPT 문서 제작 담당",
        period: "2024.02 - 2024.03",
        githubLink: "https://github.com/EunsungGIT/TeamProjectWavve",
        figmaLink: "https://www.figma.com/proto/PhqRCxpefyBWCcOAhfM75s/Wavve-Team-Project?page-id=0%3A1&type=design&node-id=1-2&viewport=241%2C509%2C0.03&t=AlyfLtVwe8TtGUvH-1&scaling=contain",
        resultLink: "https://wavve-five.vercel.app/",
    },
    {
        id: "gymshark",
        title: "Gymshark",
        tech: ["HTML5", "CSS3", "JavaScript", "API"],
        headCount: "개인 프로젝트",
        thumbnail: '/images/projects/gymshark/gymshark.webp',
        mock1: '/images/projects/gymshark/gymshark1.png',
        mock2: '/images/projects/gymshark/gymshark2.png',
        mock3: '/images/projects/gymshark/gymshark3.png',
        description: "글로벌 스포츠웨어 브랜드 'Gymshark' 웹사이트를 HTML, CSS, JavaScript를 활용하여 클론 퍼블리싱한 개인 프로젝트입니다. 기존 사이트의 디자인을 충실히 구현함과 동시에, Desktop, Tablet, Mobile 환경에 최적화된 심플하고 깔끔한 반응형 웹 레이아웃을 직접 재구성하여 적용했습니다. 또한, OpenAPI 기반의 챗봇 기능을 추가하여 기능을 확장했습니다.",
        work: "메인 페이지 1개와 서브 페이지 5개 (총 6개 페이지) 퍼블리싱 및 기능 구현 완료\nDesktop, Tablet, Mobile에 최적화된 반응형 웹 디자인 재구성 및 적용\nOpenAPI를 활용하여 서비스 통합형 챗봇 기능 구현",
        period: "2024.01 - 2024.02",
        githubLink: "https://github.com/EunsungGIT/GYMSHARK",
        figmaLink: "https://www.figma.com/proto/Jcq5im73DIXW9s2Aio8Wij/Gymshark?page-id=0%3A1&type=design&node-id=1-2&viewport=195%2C473%2C0.18&t=BeOMMhBJiOhPFgMP-1&scaling=contain",
        resultLink: "https://gymshark-kes.netlify.app/",
    },
    {
        id: "2024",
        title: "2024 PORTFOLIO",
        tech: ["HTML5", "CSS3", "JavaScript"],
        headCount: "개인 프로젝트",
        thumbnail: '/images/projects/2024/2024.png',
        mock1: '/images/projects/2024/20241.png',
        mock2: '/images/projects/2024/20242.png',
        mock3: '/images/projects/2024/20243.png',
        description: "React를 이용한 포트폴리오 사이트 제작React를 이용한 포트폴리오 사이트 제작React를 이용한 포트폴리오 사이트 제작React를 이용한 포트폴리오 사이트 제작",
        work: "메인 페이지 HTML, CSS, JS / 서브 페이지 * 15 HTML, CSS, JS 기획 PPT 제작 / CHAT API 구현 (MAIN / SUB * 40 [모든 반응형 완료])",
        period: "2025.10 - 2025.12",
        githubLink: "https://github.com/EunsungGIT/GYMSHARK",
        figmaLink: "",
        resultLink: "https://portfolio-kes.netlify.app/",
    },
];