'use client';

import React, { useState } from 'react';
import styles from './page.module.css';

const WEB3FORMS_ACCESS_KEY = "a0129262-883a-4f73-9c6c-4c9ef6ffb980"; 

interface FormState {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!WEB3FORMS_ACCESS_KEY) {
            alert('Web3Forms Access Key를 설정해주세요!');
            return;
        }

        setStatus('sending');

        try {
            // Web3Forms에 전송할 데이터 객체
            const data = {
                access_key: WEB3FORMS_ACCESS_KEY,
                subject: `[포트폴리오 문의] ${formData.name}님으로부터`, // 이메일 제목 설정 가능
                ...formData,
            };

            const response = await fetch("https://api.web3forms.com/submit", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // 데이터 객체를 JSON으로 전송
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' }); 
            } else {
                setStatus('error');
                console.error('Web3Forms Error:', result);
                alert(`메시지 전송에 실패했습니다: ${result.message || '알 수 없는 오류'}`);
            }
        } catch (error) {
            console.error('Network or Fetch Error:', error);
            setStatus('error');
            alert('네트워크 오류가 발생했습니다.');
        }
    };

    return (
        <main>
            <section className={styles.contactSection}>
                <div className={styles.introRobot}>
                    <div className={styles.robot}>
                        <div className={styles.head}></div>
                        <div className={`${styles.arm} ${styles.l}`}>
                            <div>
                            <div></div>
                            </div>
                        </div>
                        <div className={`${styles.leg} ${styles.l}`}>
                            <div>
                            <div></div>
                            </div>
                        </div>
                        <div className={`${styles.leg} ${styles.r}`}>
                            <div>
                            <div></div>
                            </div>
                        </div>
                        <div className={`${styles.arm} ${styles.r}`}>
                            <div>
                            <div></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.shadow}></div>
                </div>
                <h2>언제든 성실하게 달려갈 준비가 되었습니다.</h2>
                <p>
                    제안, 기술 질문 또는 기타 문의 사항은 아래 폼을 통해 연락주시면 확인 후 빠르게 답변드리겠습니다.
                </p>

                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={status === 'sending'}
                            placeholder="이름을 적어주세요"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={status === 'sending'}
                            placeholder="이메일을 적어주세요"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            disabled={status === 'sending'}
                            placeholder="내용을 적어주세요"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className={styles.submitButton}
                        disabled={status === 'sending'}
                    >
                        {status === 'sending' ? '전송 중...' : '전송'}
                    </button>
                </form>
            </section>
        </main>
    );
}