/* RESUME 타입 지정 */
export interface CareerProject {
    id: string;
    title: string;
    description: string;
    images: string[];
}

/* EXPERIENCE */
export interface Experience {
    id: string;
    company: string;
    team: string;
    position: string;
    period: string;
    workList: string[];
    projects: CareerProject[];
}

/* EDUCATION */
export interface Education {
    id: string;
    institution: string;
    period: string;
    major: string;
    contentList: string[];
}

/* LINK */
export interface LinkInfo {
    name: string;
    url: string;
    iconSrc: string;
}


/* RESUME */
export interface ResumeData {
    name: string;
    phone: string;
    email: string;
    summary: string;
    links: LinkInfo[];
    skillStacks: string[];
    experience: Experience[];
    education: Education[];
}