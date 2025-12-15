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
                <p>이미지 저작권은 유료 프리픽을 라이센스를 사용중이며, 게시물은 상업적 목적이 아닌 포트폴리오 목적으로만 사용됩니다.<br />아직 공개되지 않은 작업물은 포함하지 않으며, 오직 공개된 작업물만을 게시합니다.</p>
                <p className="copyRight">Copyright ⓒ EUN</p>
                <div className={styles.footerButton}>
                    <Link href="https://github.com/developer-kes/" target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
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