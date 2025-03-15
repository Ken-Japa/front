"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CloseIcon from '@mui/icons-material/Close';
import { useGoogleLogin } from '@react-oauth/google';
import { OptimizedImage } from "@/components/OptimizedImage";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RegisterFormContent } from "./components/RegisterForm/index";
import { RegisterLoadingSkeleton } from "./components/LoadingSkeleton";
import { validateForm } from "./utils/validation";
import { FormData, FormErrors } from "./types";
import { StyledDialog } from "./components/Dialog/styled";
import { StyledCloseButton } from "./components/CloseButton/styled";


export const Register = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
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
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

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
        <PageTransition>
            <ErrorBoundary>
                <StyledDialog
                    open={true}
                    maxWidth="md"
                    fullWidth
                    disableEscapeKeyDown
                >
                    <div className="background-image">
                        <OptimizedImage
                            src="/assets/images/background/REGISTER.jpg"
                            alt="Register Background"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="content">
                        <StyledCloseButton onClick={() => router.push('/')}>
                            <CloseIcon />
                        </StyledCloseButton>

                        {isLoading ? (
                            <RegisterLoadingSkeleton />
                        ) : (
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
                            />
                        )}
                    </div>
                </StyledDialog>
            </ErrorBoundary>
        </PageTransition>
    );
};