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
        tech: ["HTML5", "CSS3", "JavaScript", "JQuery"],
        headCount: "팀 프로젝트",
        thumbnail: '/images/projects/wavve/wavve.png',
        mock1: '/images/projects/wavve/wavve1.png',
        mock2: '/images/projects/wavve/wavve2.png',
        mock3: '/images/projects/wavve/wavve3.png',
        description: "Html, Css, JS를 이용한 모든 페이지를 퍼블리싱 하였고 Chat API를 이용한 챗봇도 추가하였으며 데스크탑, 태블릿, 모바일 등 기종에 맞는 반응형도 구현한 프로젝트입니다.",
        work: "메인 페이지 HTML, CSS, JS / 서브 페이지 * 15 HTML, CSS, JS 기획 PPT 제작 / CHAT API 구현 (MAIN / SUB * 40 [모든 반응형 완료])",
        period: "2024.02 - 2024.03",
        githubLink: "https://github.com/EunsungGIT/TeamProjectWavve",
        figmaLink: "https://www.figma.com/proto/PhqRCxpefyBWCcOAhfM75s/Wavve-Team-Project?page-id=0%3A1&type=design&node-id=1-2&viewport=241%2C509%2C0.03&t=AlyfLtVwe8TtGUvH-1&scaling=contain",
        resultLink: "https://yunaweb.pe.kr/wave_frontend24/#",
    },
    {
        id: "gymshark",
        title: "Gymshark",
        tech: ["HTML5", "CSS3", "JavaScript"],
        headCount: "개인 프로젝트",
        thumbnail: '/images/projects/gymshark/gymshark.webp',
        mock1: '/images/projects/gymshark/gymshark1.png',
        mock2: '/images/projects/gymshark/gymshark2.png',
        mock3: '/images/projects/gymshark/gymshark3.png',
        description: "React를 이용한 포트폴리오 사이트 제작React를 이용한 포트폴리오 사이트 제작React를 이용한 포트폴리오 사이트 제작React를 이용한 포트폴리오 사이트 제작",
        work: "메인 페이지 HTML, CSS, JS / 서브 페이지 * 15 HTML, CSS, JS 기획 PPT 제작 / CHAT API 구현 (MAIN / SUB * 40 [모든 반응형 완료])",
        period: "2025.10 - 2025.12",
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