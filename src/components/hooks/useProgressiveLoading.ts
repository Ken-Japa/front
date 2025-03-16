import { useState, useEffect, useRef } from 'react';

interface UseProgressiveLoadingProps {
    threshold?: number;
    rootMargin?: string;
}

export const useProgressiveLoading = ({ 
    threshold = 0.1, 
    rootMargin = '50px' 
}: UseProgressiveLoadingProps = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Unobserve after becoming visible
                    if (elementRef.current) {
                        observer.unobserve(elementRef.current);
                    }
                }
            },
            {
                threshold,
                rootMargin
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [threshold, rootMargin]);

    return { isVisible, elementRef };
};