import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { PROJECTS } from '@/data/projectData';

export default function Project() {
    return (
        <main>
            <section className={styles.projectSection}>
                <div className={styles.projectTitle}>
                    <h2>PROJECT</h2>
                    <p>React 기반의 최신 작업부터<br />퍼블리싱 작업까지 포함한 전체 목록입니다.</p>
                </div>
                
                {/* === 2. 프로젝트 목록 (Project Wrap) === */}
                <div className={styles.projectWrap}>
                    {PROJECTS.map(project => (
                        <Link 
                            href={`/project/${project.id}`} 
                            key={project.id} 
                            className={styles.project}
                        >
                            <div className={styles.projectImage}>
                                <Image 
                                    src={project.thumbnail}
                                    alt={`${project.title} 썸네일`} 
                                    width={800} 
                                    height={500}
                                />
                            </div>
                            
                            <div className={styles.projectText}>
                                <h3>{project.title}</h3>
                                <p>{project.headCount}</p>
                                <p>{project.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}