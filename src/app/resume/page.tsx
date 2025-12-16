import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

/* DATA */
import { RESUME_DATA } from '@/data/resumeData';
import { ResumeData } from '@/data/resumeType';
import { STACKS } from '@/data/stackData'; 


export default function ResumePage() {
    const resumeData: ResumeData = RESUME_DATA;
    const { name, email, phone, links, summary, experience, education } = resumeData;

    return (
        <main>
            <section className={styles.resumeSection}>
                {/* 1. INTRO & CONTACT */}
                <section className={styles.introSection}>
                    <div className={styles.introTitle}>
                        <h2>안녕하세요,<br />프론트엔드 개발자 {name} 입니다.</h2>
                        <p>{summary}</p>
                    </div>
                    <div className={styles.introCall}>
                        <h2>LINK & CONTACT</h2>
                        <div className={styles.introCallList}>
                            {/* LINK */}
                            <div className={styles.introLink}>
                                <h3>LINK</h3>
                                <div className={styles.linkButton}>
                                    {links.map((link) => (
                                        <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`${link.name} Link`} key={link.name}>
                                            <Image src={link.iconSrc} alt={link.name} width={20} height={20} />
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* CONTACT */}
                            <div className={styles.introContact}>
                                <h3>CONTACT</h3>
                                <div className={styles.contactItem}>
                                    <Image src='/images/icons/email.png' alt="Email" width={20} height={20} />
                                    <p>{email}</p>
                                </div>
                                <div className={styles.contactItem}>
                                    <Image src='/images/icons/phone.png' alt="Phone" width={20} height={20} />
                                    <p>{phone}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. CAREER */}
                <section className={styles.careerSection}>
                    <h2>CAREER</h2>
                    <div className={styles.careerList}>
                        {experience.map((exp) => (
                            <div className={styles.career} key={exp.id}>
                                <div className={styles.carrerTitle}>
                                    <h3>{exp.company}</h3>
                                    <p>{exp.team} · {exp.position}</p>
                                    <p>{exp.period}</p>
                                </div>
                                <ul className={styles.workList}>
                                    {exp.workList.map((work, index) => (
                                        <li key={index}>- {work}</li>
                                    ))}
                                </ul>
                                <div className={styles.projectList}>
                                    {exp.projects.map((project) => (
                                        <div className={styles.project} key={project.id}>
                                            <h4>{project.title}</h4>
                                            <p>{project.description}</p>
                                            <div className={styles.projectScroll}>
                                                <div className={styles.projectImage}>
                                                    {project.images.map((imgSrc, index) => (
                                                        <Image 
                                                            key={index}
                                                            src={imgSrc} 
                                                            alt={project.title} 
                                                            width={200}
                                                            height={300} 
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. STACK */}
                <section className={styles.stackSection}>
                    <h2>STACKS</h2>
                    <div className={styles.stackList}>
                        {STACKS.map((category) => (
                            <div className={styles.stackCategory} key={category.menu}> 
                                <h3>{category.menu}</h3> 
                                <div className={styles.stackItemList}>
                                    {category.icons.map((stack) => (
                                        <div key={stack.name} className={styles.stackItem}>
                                            <div className={styles.stackIcon}>
                                                <Image 
                                                    src={stack.src} 
                                                    alt={stack.name} 
                                                    width={20}
                                                    height={20} 
                                                />
                                            </div>
                                            <div className={styles.stackContent}>
                                                <h4>{stack.name}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. EDUCATION */}
                <section className={styles.educationSection}>
                    <h2>EDUCATION</h2>
                    <div className={styles.educationList}>
                        {education.map((edu) => (
                            <div className={styles.education} key={edu.id}>
                                <div className={styles.educationTitle}>
                                    <h3>{edu.institution}</h3>
                                    <p>{edu.major}</p>
                                    <p>{edu.period}</p>
                                </div>
                                <ul className={styles.contentList}>
                                    {edu.contentList.map((content, index) => (
                                        <li key={index}>{content}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </main>
    );
}