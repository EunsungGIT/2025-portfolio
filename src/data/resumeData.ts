import { ResumeData, Experience, Education, LinkInfo } from './resumeType';

/* LINK */
const RESUME_LINKS: LinkInfo[] = [
    {
        name: 'GitHub',
        url: 'https://github.com/developer-kes/',
        iconSrc: '/images/stacks/github.png',
    },
    {
        name: 'Notion',
        url: 'https://almondine-tadpole-1ef.notion.site/43a32f3f27d34d3e91b3e02dae03469b?source=copy_link',
        iconSrc: '/images/stacks/notion.png',
    },
];

/* EXPERIENCE */
const EXPERIENCES_DATA: Experience[] = [
    {
        id: 'showm',
        company: '쇼엠',
        team: '플랫폼운영팀',
        position: '퍼블리셔 / 프론트엔드',
        period: '2024.04 - 2025.11',
        workList: [
            'PHP 기반 환경에서 HTML/CSS/JS를 활용하여 반응형 웹사이트 및 웹뷰 앱 총 200여 개 제작 및 납품.',
            '웹 접근성 및 웹 표준을 준수한 UI/UX 구현 및 브라우저 크로스 브라우징 대응.',
            '대규모 프로젝트 진행 시, 효율적인 컴포넌트 구조 설계를 위한 팀 협업 프로세스 기여.',
        ],
        projects: [
            {
                id: 'showm-dust',
                title: '미세먼지 알리미',
                description: 'geolocation 기반으로 주변의 미세먼지 연구소를 찾아 기반된 미세먼지 데이터를 사용자에게 제공해주는 서비스입니다.',
                images: [
                    '/images/works/dust/dust1.png', 
                    '/images/works/dust/dust2.png', 
                    '/images/works/dust/dust3.png', 
                ],
            },
            {
                id: 'showm-cctv',
                title: '고속도로 CCTV',
                description: '지도 API, 고속도로 상황을 알려주는 데이터 API를 조합해 위도와 경도를 이용해 마커를 찍고 사용자가 마커를 누르면 해당 고속도로 실시간 영상을 api에서 불러와 제공해주는 서비스입니다.',
                images: [
                    '/images/works/cctv/cctv1.png', 
                    '/images/works/cctv/cctv2.png', 
                    '/images/works/cctv/cctv3.png', 
                ],
            },
            {
                id: 'showm-diet',
                title: '다이어트 플래너',
                description: 'Local stroage 기능을 이용해 사용자의 체중과 목표, 기간을 저장하고 저장한 데이터 기반으로 다이어트 경과를 chart.js를 통해 보여주는 서비스',
                images: [
                    '/images/works/diet/diet1.png', 
                    '/images/works/diet/diet2.png', 
                    '/images/works/diet/diet3.png', 
                ],
            },
        ],
    },
];

/* EDUCATION */
const EDUCATION_DATA: Education[] = [
    {
        id: 'green',
        institution: '그린 컴퓨터 아카데미',
        period: '2023.10 - 2024.03',
        major: '프론트엔드 / 퍼블리셔 과정',
        contentList: [
            '웹 기본기 및 프로젝트 수행: HTML5, CSS3(SASS), JavaScript(ES6+)를 기초부터 학습하고, 개인 및 팀 프로젝트를 통해 반응형 웹 및 웹 표준을 준수한 UI/UX 구현 능력 확보.',
            '디자인 툴 활용 능력: Adobe Photoshop, Illustrator를 활용한 웹 콘텐츠 디자인 및 UI/UX 프로토타이핑 학습.',
            '백엔드 기초: PHP와 MySQL을 활용한 간단한 게시판 구현 및 데이터베이스 연동 기초 학습.',
        ],
    },
];

/* RESUME */
export const RESUME_DATA: ResumeData = {
    name: '김은성',
    phone: '010-4098-9161',
    email: 'developerrdt@google.com',
    summary: '프론트엔드 개발과 퍼블리싱을 주로 다루며, 새로운 기술에 발빠르게 적응하고 단기간에 완성도 높은 결과물을 도출하는 "스프린터 개발자" 입니다.',
    links: RESUME_LINKS,
    skillStacks: [
        'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 
        'Next.js', 'Redux', 'Sass', 'Tailwind CSS', 'Figma', 'Git', 'Vercel'
    ], // stackData.ts의 이름을 기반으로 합니다.
    experience: EXPERIENCES_DATA,
    education: EDUCATION_DATA,
};