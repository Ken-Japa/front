"use client";

import { useState, useEffect } from "react";
import { StyledDialog } from "./styled";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from "next/navigation";
import { OptimizedImage } from "@/components/OptimizedImage";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { LoginFormComponent } from "./components/LoginForm";
import { useLoginForm } from "./hooks/useLoginForm";

export const Login = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const {
        formData,
        errors,
        isBlocked,
        blockTimer,
        rememberMe,
        handleChange,
        handleSubmit,
        setRememberMe,
        handleGoogleSignIn
    } = useLoginForm();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <PageTransition>
            <ErrorBoundary>
                <StyledDialog open={true} maxWidth="md" fullWidth>
                    <div className="background-image">
                        <OptimizedImage
                            src="/assets/images/background/REGISTER.jpg"
                            alt="Login Background"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="content">
                        <IconButton
                            onClick={() => router.push('/')}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: 'white'
                            }}
                        >
                            <CloseIcon />
                        </IconButton>

                        <LoginFormComponent
                            formData={formData}
                            errors={errors}
                            isLoading={isLoading}
                            isBlocked={isBlocked}
                            blockTimer={blockTimer}
                            rememberMe={rememberMe}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            handleGoogleSignIn={handleGoogleSignIn}
                            setRememberMe={setRememberMe}
                        />
                    </div>
                </StyledDialog>
            </ErrorBoundary>
        </PageTransition>
    );
};