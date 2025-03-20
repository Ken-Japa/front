"use client";

import { useEffect, useRef, useCallback } from 'react';
import styles from './MatrixRainText.module.css';

interface Props {
    text: string;
    className?: string;
    fontSize?: string;
    onComplete?: () => void;
    triggerOnce?: boolean;
    charDelay?: number;
    animationDuration?: number;
}

export const MatrixRainText = ({
    text,
    className = '',
    fontSize,
    onComplete,
    triggerOnce = false,
    charDelay = 25,
    animationDuration = 0.2
}: Props) => {
    const containerRef = useRef<HTMLSpanElement>(null);
    const hasPlayedRef = useRef(false);

    // Update createCharSpan to use CSS classes
    const createCharSpan = useCallback((char: string) => {
        const charSpan = document.createElement('span');
        charSpan.style.opacity = '0';
        charSpan.style.position = 'relative';
        charSpan.style.display = 'inline-block';
        charSpan.textContent = char;
        if (fontSize) {
            charSpan.style.fontSize = fontSize;
        }
        return charSpan;
    }, [fontSize]);

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
        <span 
            ref={containerRef} 
            className={`${styles.container} ${className}`}
        />
    );
};