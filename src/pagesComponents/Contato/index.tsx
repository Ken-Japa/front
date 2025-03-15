"use client";

import { useState, useEffect } from "react";
import { SectionContact } from "./styled";
import { Alert, Snackbar, Stack, Box } from "@mui/material";
import { OptimizedImage } from "@/components/OptimizedImage";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Header } from "./Header";
import { ContactInfo } from "./ContactInfo";
import { ContactFormComponent } from "./ContactForm";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

const subjectOptions = [
    "Assinaturas",
    "Problemas de Acesso",
    "Estratégias",
    "Relatórios",
    "Problemas Técnicos",
    "Parcerias Comerciais",
    "Outros"
];

export const Contact = () => {
    const [contactAttempts, setContactAttempts] = useState(0);
    const [isBlocked, setIsBlocked] = useState(false);
    const [blockTimer, setBlockTimer] = useState(0);

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const [errors, setErrors] = useState<FormErrors>({});
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success' as 'success' | 'error'
    });

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Nome é obrigatório';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email inválido';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Assunto é obrigatório';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Mensagem é obrigatória';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isBlocked) {
            setSnackbar({
                open: true,
                message: `Aguarde ${blockTimer} segundos antes de tentar novamente.`,
                severity: 'error'
            });
            return;
        }

        if (!validateForm()) {
            return;
        }

        setContactAttempts((prev) => {
            const newAttempts = prev + 1;

            // Block after 2 attempts (mais restrito que login/registro)
            if (newAttempts >= 3) {
                const blockDuration = 15 * 60 * 1000; // 15 minutes
                const blockedUntil = Date.now() + blockDuration;
                localStorage.setItem('contactBlockedUntil', blockedUntil.toString());
                setIsBlocked(true);
                setBlockTimer(900); // 15 minutes in seconds
                return 0;
            }

            return newAttempts;
        });

        try {
            // ... existing submission logic ...
        } catch (error) {
            setSnackbar({
                open: true,
                message: 'Erro ao enviar mensagem. Tente novamente.',
                severity: 'error'
            });
        }
    };

    useEffect(() => {
        const blockedUntil = localStorage.getItem('contactBlockedUntil');
        if (blockedUntil) {
            const timeLeft = parseInt(blockedUntil) - Date.now();
            if (timeLeft > 0) {
                setIsBlocked(true);
                setBlockTimer(Math.ceil(timeLeft / 1000));
            } else {
                localStorage.removeItem('contactBlockedUntil');
            }
        }
    }, []);

    useEffect(() => {
        const blockedUntil = localStorage.getItem('contactBlockedUntil');
        if (blockedUntil) {
            const timeLeft = parseInt(blockedUntil) - Date.now();
            if (timeLeft > 0) {
                setIsBlocked(true);
                setBlockTimer(Math.ceil(timeLeft / 1000));
            } else {
                localStorage.removeItem('contactBlockedUntil');
            }
        }
    }, []);

    return (
        <PageTransition
            direction="up"
            duration={0.4}
            distance={30}
            className="w-full"
        >
            <ErrorBoundary>
                <SectionContact>
                    <div className="background-image">
                        <OptimizedImage
                            src="/assets/images/background/Contato.jpg"
                            alt="Contact Background"
                            fill
                            priority
                            className="object-cover"
                            loadingClassName="scale-100 blur-xl grayscale"
                            sizes="100vw"
                        />
                    </div>
                    <div className="content-wrapper">
                        <Stack spacing={4} className="content-container">
                            <Header isLoading={isLoading} />
                            <Stack
                                direction={{ xs: 'column', md: 'row' }}
                                spacing={4}
                                className="form-container"
                            >
                                <ContactInfo isLoading={isLoading} />
                                {isLoading ? (
                                    <Box flex={1}>
                                        <ContentSkeleton type="form" />
                                    </Box>
                                ) : (
                                    <ContactFormComponent
                                        formData={formData}
                                        errors={errors}
                                        isBlocked={isBlocked}
                                        blockTimer={blockTimer}
                                        handleChange={handleChange}
                                        handleSubmit={handleSubmit}
                                    />
                                )}
                            </Stack>
                        </Stack>
                        <Snackbar
                            open={snackbar.open}
                            autoHideDuration={6000}
                            onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
                        >
                            <Alert
                                onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
                                severity={snackbar.severity}
                                sx={{ width: '100%' }}
                            >
                                {snackbar.message}
                            </Alert>
                        </Snackbar>
                    </div>
                </SectionContact>
            </ErrorBoundary>
        </PageTransition>
    );
};