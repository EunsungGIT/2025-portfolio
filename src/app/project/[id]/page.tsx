/* NEXT */
import { notFound } from 'next/navigation';

/* DATA */
import { PROJECTS } from '@/data/projectData';

/* 클라이언트 컴포넌트 */
import ProjectDetailClient from './ProjectDetailClient';

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    /* 비동기로 받아온 파라미터를 await로 해제 */
    const { id } = await params;

    /* PROJECT에서 해당 데이터 조회 */
    const project = PROJECTS.find((p) => p.id === id);

    /* 데이터가 없을 시 */
    if (!project) return notFound();

    return <ProjectDetailClient project={project} />;
}