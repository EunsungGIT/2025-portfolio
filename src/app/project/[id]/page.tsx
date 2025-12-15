import { use } from 'react';
import { notFound } from 'next/navigation';
import { PROJECTS, Project } from '@/data/projectData';
import ProjectDetailClient from './ProjectDetailClient';

interface ProjectPageProps {
    params: {
        id: string;
    };
}

export default function ProjectPage({ params }: ProjectPageProps) {
    
    // 1. params 언래핑 (환경 문제 해결)
    const unwrappedParams = use(Promise.resolve(params)); 
    const currentId = unwrappedParams.id;
    
    // 2. 데이터 조회
    const project = PROJECTS.find((p: Project) => p.id === currentId);

    // 3. 데이터가 없으면 404 처리
    if (!project) {
        return notFound(); 
    }
    
    // 4. Client Component에 데이터를 Props로 전달
    return <ProjectDetailClient project={project} />;
}