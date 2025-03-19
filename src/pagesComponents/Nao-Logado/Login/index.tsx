"use client";

import { useState, lazy } from "react";

import CloseIcon from '@mui/icons-material/Close';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { OptimizedImage } from "@/components/OptimizedImage";
import { PageTransition } from "@/components/PageTransition";
import { SuspenseWrapper } from "@/components/SuspenseWrapper";

import { useLoginForm } from "./hooks/useLoginForm";
import { useNavigation } from "./hooks/useNavigation";
import { StyledDialog, StyledCloseButton } from "./styled";
import { BlockTimer } from "./components/BlockTimer";

const LoginFormComponent = lazy(() => import('./components/LoginForm').then(mod => ({ default: mod.LoginFormComponent })));

export const Login = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const { handleClose } = useNavigation();
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

    const imageProps = {
        src: "/assets/images/background/REGISTER.jpg",
        alt: "Login Background",
        fill: true,
        priority: true,
        sizes: "(max-width: 900px) 100vw, 900px",
        className: "object-cover",
        loadingClassName: "scale-100 blur-sm grayscale",
        quality: 85,
        onLoad: () => setImageLoaded(true),
        style: {
            filter: !imageLoaded ? 'grayscale(1)' : 'none',
            transition: 'filter 0.5s ease-in-out'
        }
    };

    return (
        <PageTransition direction="up" duration={0.4} distance={30} className="w-full">
            <ErrorBoundary>
                <StyledDialog open={true} maxWidth="md" fullWidth disableEscapeKeyDown>
                    <div className="background-image">
                        <OptimizedImage {...imageProps} />
                    </div>
                    <div className="content">
                        <StyledCloseButton onClick={handleClose}>
                            <CloseIcon />
                        </StyledCloseButton>

                        <SuspenseWrapper>
                            {isBlocked ? (
                                <BlockTimer seconds={blockTimer} />
                            ) : (
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
                            )}
                        </SuspenseWrapper>
                    </div>
                </StyledDialog>
            </ErrorBoundary>
        </PageTransition>
    );
};