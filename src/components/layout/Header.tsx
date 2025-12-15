'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'RESUME', href: '/resume' },
    { name: 'PROJECT', href: '/project' },
    { name: 'CONTACT', href: '/contact' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 🌟 2. 메뉴 닫기 핸들러 (링크 클릭, 배경 클릭, 닫기 버튼 클릭 시 사용)
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Framer Motion variants
    const menuVariants = {
        // 초기 상태 (mount될 때): 화면 밖 (오른쪽)
        initial: { x: '100%', transition: { duration: 0.3 } }, 
        // 열린 상태 (animate): 화면 안 (0)
        open: { x: 0, transition: { duration: 0.3 } },
        // 🌟 닫힐 때 상태 (unmount될 때): 화면 밖으로 (exit)
        closed: { x: '100%', transition: { duration: 0.3 } }, 
    };
    
    // 백드롭 variants (Fade in/out)
    const backdropVariants = {
        initial: { opacity: 0 },
        open: { opacity: 1 },
        closed: { opacity: 0 },
    }

    return (
        <header className={styles.header}> 
            <div className={styles.container}> 
                <Link href="/" className={styles.logo}>
                    <Image 
                        src="/images/icons/logo.png"
                        alt="로고"
                        width={20}
                        height={20} 
                        priority
                    />
                </Link>

                {/* PC */}
                <nav className={styles.nav}>
                    {navLinks.map((link) => (
                        <Link href={link.href} key={link.name}>
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* MO */}
                <button 
                    className={styles.menuButton}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <Image src="/images/icons/menu.png" alt="메뉴" width={30} height={30} />
                </button>
            </div>

            {isMenuOpen && (
                <motion.div 
                        className={styles.mobileMenuBack}
                        initial="initial"
                        animate="open"
                        exit="closed" // 🌟 exit 상태를 closed로 지정
                        variants={backdropVariants} // 🌟 백드롭 애니메이션 적용
                        onClick={closeMenu}
                >
                    <motion.nav
                        id="mobile-menu"
                        className={styles.mobileNav}
                        variants={menuVariants}
                        initial="initial"
                        animate="open"
                        exit="closed"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.navTitle}>
                            <h1 className={styles.mobileLogo}>
                                <Image src="/images/icons/logo.png" alt="로고" width={20} height={20} />
                            </h1>
                            <button className={styles.closeButton} onClick={closeMenu}>
                                <Image src="/images/icons/close.png" alt="닫기" width={30} height={30} />
                            </button>
                        </div>
                        {navLinks.map((link) => (
                            <Link 
                                href={link.href} 
                                key={link.name} 
                                className={styles.mobileNavLink}
                                onClick={closeMenu} // 링크 클릭 시 메뉴 닫기
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.nav>
                </motion.div>
            )}
        </header>
    );
}