"use client";

import { useEffect, useRef, useCallback } from 'react';

interface Props {
    text: string;
    className?: string;
    onComplete?: () => void;
    triggerOnce?: boolean;
    charDelay?: number;
    animationDuration?: number;
}

export const MatrixRainText = ({
    text,
    className = '',
    onComplete,
    triggerOnce = false,
    charDelay = 25,
    animationDuration = 0.2
}: Props) => {
    const containerRef = useRef<HTMLSpanElement>(null);
    const hasPlayedRef = useRef(false);

    const createCharSpan = useCallback((char: string) => {
        const charSpan = document.createElement('span');
        charSpan.style.opacity = '0';
        charSpan.style.position = 'relative';
        charSpan.style.display = 'inline-block';
        charSpan.textContent = char;
        return charSpan;
    }, []);

    const animateChar = useCallback((charSpan: HTMLSpanElement, delay: number) => {
        setTimeout(() => {
            charSpan.style.transition = `all ${animationDuration}s ease`;
            charSpan.style.opacity = '1';
            charSpan.style.animation = `matrixDrop ${animationDuration}s forwards`;
        }, delay);
    }, [animationDuration]);

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

        words.forEach((word, wordIndex) => {
            const wordSpan = document.createElement('span');
            const chars = word.split('');

            chars.forEach((char, charIndex) => {
                const charSpan = createCharSpan(char);
                wordSpan.appendChild(charSpan);
                animateChar(charSpan, totalDelay + charIndex * charDelay);
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
            setTimeout(onComplete, totalDelay + (charDelay * 2));
        }

        hasPlayedRef.current = true;

        // Cleanup function
        return () => {
            if (container) {
                container.innerHTML = '';
            }
        };
    }, [text, onComplete, triggerOnce, charDelay, createCharSpan, animateChar]);

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