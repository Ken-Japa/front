"use client";

import { useState, lazy } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { OptimizedImage } from "@/components/OptimizedImage";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { useLoginForm } from "./hooks/useLoginForm";
import { StyledDialog } from "./styled";
import { StyledCloseButton } from "./components/CloseButton/styled";
import { SuspenseWrapper } from "@/components/SuspenseWrapper";
import { useRouter } from 'next/navigation';

const LoginFormComponent = lazy(() => import('./components/LoginForm').then(mod => ({ default: mod.LoginFormComponent })));

export const Login = () => {
    const router = useRouter();

    const handleClose = () => {
        try {
            router.back();
        } catch {
            router.push('/');
        }
    };
    const [imageLoaded, setImageLoaded] = useState(false);
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

    return (
        <PageTransition direction="up" duration={0.4} distance={30} className="w-full">
            <ErrorBoundary>
                <StyledDialog open={true} maxWidth="md" fullWidth disableEscapeKeyDown>
                    <div className="background-image">
                        <OptimizedImage
                            src="/assets/images/background/REGISTER.jpg"
                            alt="Login Background"
                            fill
                            priority
                            sizes="(max-width: 900px) 100vw, 900px"
                            className="object-cover"
                            loadingClassName="scale-100 blur-sm grayscale"
                            quality={85}
                            onLoad={() => setImageLoaded(true)}
                            style={{
                                filter: !imageLoaded ? 'grayscale(1)' : 'none',
                                transition: 'filter 0.5s ease-in-out'
                            }}
                        />
                    </div>
                    <div className="content">
                        <StyledCloseButton onClick={handleClose}>
                            <CloseIcon />
                        </StyledCloseButton>

                        <SuspenseWrapper>
                            <LoginFormComponent
                                formData={formData}
                                errors={errors}
                                isLoading={!imageLoaded}
                                isBlocked={isBlocked}
                                blockTimer={blockTimer}
                                rememberMe={rememberMe}
                                handleChange={handleChange}
                                handleSubmit={handleSubmit}
                                handleGoogleSignIn={handleGoogleSignIn}
                                setRememberMe={setRememberMe}
                            />
                        </SuspenseWrapper>
                    </div>
                </StyledDialog>
            </ErrorBoundary>
        </PageTransition>
    );
};