import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <header className={styles.footer}> 
            <div className={styles.container}> 
                <h1 className={styles.logo}>
                    <Image 
                        src="/images/icons/logo.png"
                        alt="로고"
                        width={20}
                        height={20} 
                        priority
                    />
                    EUN
                </h1>
                <p>사용자 경험을 생각하며 탄탄한 기본기를 바탕으로 성장하는 개발자입니다. <br />본 사이트는 개인 포트폴리오 목적으로 제작되었으며, 상업적 용도로 사용하지 않습니다.</p>
                <p className="copyRight">Copyright ⓒ EUN</p>
                <div className={styles.footerButton}>
                    <Link href="https://github.com/EunsungGIT" target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                        <Image src='/images/stacks/github.png' alt="GitHub" width={30} height={30} />
                    </Link>
                    <Link href="https://almondine-tadpole-1ef.notion.site/43a32f3f27d34d3e91b3e02dae03469b?source=copy_link" target="_blank" rel="noopener noreferrer" aria-label="Notion Link">
                        <Image src='/images/stacks/notion.png' alt="Notion" width={30} height={30} />
                    </Link>
                </div>
            </div>
        </header>
    );
}