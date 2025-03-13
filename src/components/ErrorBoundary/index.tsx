"use client";
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Typography, Button } from '@mui/material';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '100vh',
                        bgcolor: 'background.default',
                        color: 'text.primary',
                        p: 3,
                        textAlign: 'center'
                    }}
                >
                    <Typography variant="h4" component="h1" gutterBottom>
                        Oops! Algo deu errado.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                        Não se preocupe, estamos cientes do problema.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => window.location.reload()}
                    >
                        Recarregar Página
                    </Button>
                </Box>
            );
        }

        return this.props.children;
    }
}