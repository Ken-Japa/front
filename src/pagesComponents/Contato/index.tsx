"use client";

import { useState, useEffect } from "react";
import { ContactForm, SectionContact } from "./styled";
import { TextField, Button, Typography, Alert, Snackbar, Stack } from "@mui/material";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import { Box } from "@mui/material";
import { Autocomplete } from '@mui/material';
import { OptimizedImage } from "@/components/OptimizedImage";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';

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
        <PageTransition>
            <ErrorBoundary>
                <SectionContact>
                    <div className="background-image">
                        <OptimizedImage
                            src="/assets/images/background/Contato.jpg"
                            alt="Contact Background"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="opacity">
                        <Stack spacing={4} maxWidth="1200px" width="100%" px={2}>
                            <div className="text-center">
                                {isLoading ? (
                                    <ContentSkeleton />
                                ) : (
                                    <>
                                        <MatrixRainText
                                            text="Entre em Contato"
                                            className="text-4xl font-bold text-white mb-4"
                                        />
                                        <Typography variant="h6" className="text-white/70">
                                            Fale Com Quem Entende do Seu Dinheiro
                                        </Typography>
                                        <Typography variant="h6" className="text-white/70">
                                            Estamos aqui para ajudar. Entre em contato conosco!
                                        </Typography>
                                    </>
                                )}
                            </div>

                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                                <Stack spacing={3} flex={1}>
                                    {isLoading ? (
                                        <ContentSkeleton type="text" />
                                    ) : (
                                        <>
                                            <div>
                                                <Stack direction="row" spacing={2} alignItems="center" mb={1}>
                                                    <EmailIcon sx={{ color: '#0D95F9' }} />
                                                    <Typography variant="h6" className="text-white">Email</Typography> <br />

                                                </Stack>
                                                <Stack direction="column" spacing={2} mb={1}>

                                                    <Typography className="text-white/70">contato@capitalauge.com.br</Typography>
                                                </Stack>
                                            </div>
                                            <div>
                                                <Stack direction="row" spacing={2} alignItems="center" mb={1}>
                                                    <LocationOnIcon sx={{ color: '#0D95F9' }} />
                                                    <Typography variant="h6" className="text-white">Localização</Typography>
                                                </Stack>
                                                <Typography className="text-white/70">Minas Gerais, MG - Brasil</Typography>
                                            </div>
                                            <div>
                                                <Stack direction="row" spacing={2} alignItems="center" mb={1}>
                                                    <PhoneIcon sx={{ color: '#0D95F9' }} />
                                                    <Typography variant="h6" className="text-white">Telefone</Typography>
                                                </Stack>
                                                <Typography className="text-white/70">+55 (21) 99430-3047</Typography>
                                            </div>
                                        </>
                                    )}
                                </Stack>

                                {isLoading ? (
                                    <Box flex={1}>
                                        <ContentSkeleton type="form" />
                                    </Box>
                                ) : (
                                    <ContactForm onSubmit={handleSubmit}>
                                        <TextField
                                            fullWidth
                                            label="Nome"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            error={!!errors.name}
                                            helperText={errors.name}
                                        />
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            error={!!errors.email}
                                            helperText={errors.email}
                                        />
                                        <Autocomplete
                                            freeSolo
                                            options={subjectOptions}
                                            value={formData.subject}
                                            onChange={(_, newValue) => {
                                                setFormData(prev => ({
                                                    ...prev,
                                                    subject: newValue || ''
                                                }));
                                            }}
                                            onInputChange={(_, newInputValue) => {
                                                setFormData(prev => ({
                                                    ...prev,
                                                    subject: newInputValue
                                                }));
                                            }}
                                            componentsProps={{
                                                paper: {
                                                    sx: {
                                                        backgroundColor: 'rgba(0, 21, 41, 0.98)',
                                                        backdropFilter: 'blur(10px)',
                                                        border: '1px solid rgba(13, 149, 249, 0.1)',
                                                        '& .MuiAutocomplete-option': {
                                                            color: 'white',
                                                            '&:hover': {
                                                                backgroundColor: 'rgba(13, 149, 249, 0.3)'
                                                            },
                                                            '&.Mui-focused': {
                                                                backgroundColor: 'rgba(13, 149, 249, 0.2)'
                                                            }
                                                        }
                                                    }
                                                }
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Assunto"
                                                    name="subject"
                                                    error={!!errors.subject}
                                                    helperText={errors.subject}
                                                    fullWidth
                                                />
                                            )}
                                        />
                                        <TextField
                                            fullWidth
                                            label="Mensagem"
                                            name="message"
                                            multiline
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            error={!!errors.message}
                                            helperText={errors.message}
                                        />
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            size="large"
                                            endIcon={<SendIcon />}
                                            disabled={isBlocked}
                                        >
                                            {isBlocked ?
                                                `Aguarde ${blockTimer}s` :
                                                'Enviar Mensagem'
                                            }
                                        </Button>
                                    </ContactForm>
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