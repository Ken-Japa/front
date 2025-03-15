import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const useDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const toggle = () => setIsOpen(!isOpen);

    return {
        isOpen,
        toggle
    };
};