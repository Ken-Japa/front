"use client";

import { useEffect, useRef } from 'react';

interface Props {
    text: string;
    className?: string;
    onComplete?: () => void;
    triggerOnce?: boolean;
}

export const MatrixRainText = ({ text, className = '', onComplete, triggerOnce = false }: Props) => {
    const containerRef = useRef<HTMLSpanElement>(null);
    const hasPlayedRef = useRef(false);

    useEffect(() => {
        if (!containerRef.current) return;
        if (triggerOnce && hasPlayedRef.current) {
            containerRef.current.innerHTML = text;
            return;
        }

        const container = containerRef.current;
        const words = text.split(' ');
        container.innerHTML = '';

        let totalDelay = 0;
        const charDelay = 25; // Reduced from 50 to 25ms

        words.forEach((word, wordIndex) => {
            const wordSpan = document.createElement('span');
            const chars = word.split('');

            chars.forEach((char, charIndex) => {
                const charSpan = document.createElement('span');
                charSpan.style.opacity = '0';
                charSpan.style.position = 'relative';
                charSpan.style.display = 'inline-block';
                charSpan.textContent = char;
                wordSpan.appendChild(charSpan);

                setTimeout(() => {
                    charSpan.style.transition = 'all 0.1s ease'; // Reduced from 0.2s to 0.1s
                    charSpan.style.opacity = '1';
                    charSpan.style.animation = 'matrixDrop 0.2s forwards'; // Reduced from 0.3s to 0.2s
                }, totalDelay + charIndex * charDelay);
            });

            container.appendChild(wordSpan);
            if (wordIndex < words.length - 1) {
                const space = document.createElement('span');
                space.innerHTML = '&nbsp;';
                container.appendChild(space);
            }

            totalDelay += chars.length * charDelay;
        });

        if (onComplete) {
            setTimeout(onComplete, totalDelay + 200); // Reduced from 300 to 200
        }

        hasPlayedRef.current = true;
    }, [text, onComplete, triggerOnce]);

    return (
        <>
            <style jsx global>{`
                @keyframes matrixDrop {
                    0% {
                        transform: translateY(-20px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
            `}</style>
            <span ref={containerRef} className={className}></span>
        </>
    );
};