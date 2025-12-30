'use client'

import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/components/layout/ScrollStagger';
import { PROJECTS } from '@/data/projectData';

export default function Project() {
    return (
        <main>
            <section className={styles.projectSection}>
                {/* 타이틀 */}
                <motion.div 
                    className={styles.projectTitle}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>PROJECT</h2>
                    <p>React 기반의 최신 작업부터<br />퍼블리싱 작업까지 포함한 전체 목록입니다.</p>
                </motion.div>
                
                {/* 프로젝트 */}
                <motion.div 
                    className={styles.projectWrap}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    {PROJECTS.map(project => (
                        <motion.div 
                            key={project.id} 
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className={styles.projectCard} 
                        >
                            <Link 
                                href={`/project/${project.id}`} 
                                className={styles.projectLink}
                            >
                                <div className={styles.projectImage} style={{ background: project.color }}>
                                    <Image 
                                        src={project.thumbnail}
                                        alt={`${project.title} 썸네일`} 
                                        width={800} 
                                        height={500}
                                        priority={Number(project.id) <= 4}
                                    />
                                </div>
                                
                                <div className={styles.projectText}>
                                    <h3>{project.title}</h3>
                                    <p className={styles.headCount}>{project.headCount}</p>
                                    <p className={styles.description}>{project.description}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </main>
    );
}