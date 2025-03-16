import { Suspense, ReactNode } from 'react';
import { Box, CircularProgress } from '@mui/material';

interface SuspenseWrapperProps {
    children: ReactNode;
    fallback?: ReactNode;
    className?: string;
}

export const SuspenseWrapper = ({ 
    children, 
    fallback,
    className = ''
}: SuspenseWrapperProps) => {
    const defaultFallback = (
        <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            minHeight={200}
            className={className}
        >
            <CircularProgress color="primary" />
        </Box>
    );

    return (
        <Suspense fallback={fallback || defaultFallback}>
            {children}
        </Suspense>
    );
};