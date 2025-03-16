"use client";

import { useState, useEffect, lazy } from "react";
import { useRouter } from "next/navigation";
import CloseIcon from '@mui/icons-material/Close';
import { useGoogleLogin } from '@react-oauth/google';
import { OptimizedImage } from "@/components/OptimizedImage";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { validateForm } from "./utils/validation";
import { FormData, FormErrors } from "./types";
import { StyledDialog } from "./components/Dialog/styled";
import { StyledCloseButton } from "./components/CloseButton/styled";
import { SuspenseWrapper } from "@/components/SuspenseWrapper";

const RegisterFormContent = lazy(() => import('./components/RegisterForm').then(mod => ({ default: mod.RegisterFormContent })));

export const Register = () => {
    const router = useRouter();
    const [imageLoaded, setImageLoaded] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [registerAttempts, setRegisterAttempts] = useState(0);
    const [isBlocked, setIsBlocked] = useState(false);
    const [blockTimer, setBlockTimer] = useState(0);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        cpf: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isBlocked) return;

        if (!acceptedTerms) {
            alert("Você precisa aceitar os termos e condições para continuar");
            return;
        }

        const { errors: validationErrors, isValid } = validateForm(formData, acceptedTerms);
        setErrors(validationErrors);

        if (isValid) {
            handleRegisterAttempt();
        }
    };

    const handleRegisterAttempt = () => {
        setRegisterAttempts((prev) => {
            const newAttempts = prev + 1;
            if (newAttempts >= 5) {
                handleBlockUser();
                return 0;
            }
            return newAttempts;
        });
    };

    const handleBlockUser = () => {
        const blockDuration = 10 * 60 * 1000;
        const blockedUntil = Date.now() + blockDuration;
        localStorage.setItem('registerBlockedUntil', blockedUntil.toString());
        setIsBlocked(true);
        setBlockTimer(600);
    };

    const handleGoogleSignIn = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                console.log('Google login success:', response);
                router.push('/');
            } catch (error) {
                console.error('Error:', error);
            }
        },
        onError: (error) => console.error('Google login failed:', error)
    });

    useEffect(() => {
        const checkBlockStatus = () => {
            const blockedUntil = localStorage.getItem('registerBlockedUntil');
            if (blockedUntil) {
                const timeLeft = parseInt(blockedUntil) - Date.now();
                if (timeLeft > 0) {
                    setIsBlocked(true);
                    setBlockTimer(Math.ceil(timeLeft / 1000));
                } else {
                    localStorage.removeItem('registerBlockedUntil');
                }
            }
        };

        checkBlockStatus();
    }, []);

    return (
        <PageTransition direction="up" duration={0.4} distance={30} className="w-full">
            <ErrorBoundary>
                <StyledDialog open={true} maxWidth="md" fullWidth disableEscapeKeyDown>
                    <div className="background-image">
                        <OptimizedImage
                            src="/assets/images/background/REGISTER.jpg"
                            alt="Register Background"
                            fill
                            priority
                            sizes="(max-width: 900px) 100vw, 900px"
                            className="object-cover"
                            loadingClassName="scale-100 blur-xl grayscale"
                            quality={85}
                            onLoad={() => setImageLoaded(true)}
                            style={{
                                filter: !imageLoaded ? 'grayscale(1)' : 'none',
                                transition: 'filter 0.5s ease-in-out'
                            }}
                        />
                    </div>
                    <div className="content">
                        <StyledCloseButton onClick={() => router.push('/')}>
                            <CloseIcon />
                        </StyledCloseButton>

                        <SuspenseWrapper>
                            <RegisterFormContent
                                formData={formData}
                                errors={errors}
                                acceptedTerms={acceptedTerms}
                                onSubmit={handleSubmit}
                                onChange={handleChange}
                                onTermsChange={setAcceptedTerms}
                                onGoogleClick={(e) => {
                                    e.preventDefault();
                                    handleGoogleSignIn();
                                }}
                                isLoading={!imageLoaded}
                            />
                        </SuspenseWrapper>
                    </div>
                </StyledDialog>
            </ErrorBoundary>
        </PageTransition>
    );
};