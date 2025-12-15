/* EXPERIENCE */
export interface CareerProject {
    id: string; // 고유 ID
    title: string;
    description: string;
    images: string[]; // 이미지 경로 배열
}

/* EXPERIENCE */
export interface Experience {
    id: string; // 고유 ID
    company: string;
    team: string;
    position: string;
    period: string; // "20XX.XX - 20XX.XX"
    workList: string[]; // 주요 업무 리스트
    projects: CareerProject[]; // 해당 경력 내에서 수행한 주요 프로젝트 리스트
}

/* EDUCATION */
export interface Education {
    id: string;
    institution: string;
    period: string;
    major: string; // 전공 또는 과정명
    contentList: string[]; // 주요 교육 내용 리스트
}

/* LINK */
export interface LinkInfo {
    name: string;
    url: string;
    iconSrc: string; // 이미지 경로
}


/* RESUME */
export interface ResumeData {
    name: string;
    phone: string;
    email: string;
    summary: string;
    links: LinkInfo[];
    skillStacks: string[]; // ['React', 'Next.js', 'TypeScript', ...]
    experience: Experience[]; // 경력 사항 리스트 (Experience[]로 변경)
    education: Education[]; // 학력/교육 사항 리스트
}