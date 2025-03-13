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
import { OptimizedImage } from "@/components/OptimizedImage";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

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

export const Contact = () => {
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

        if (!validateForm()) {
            return;
        }

        try {
            // Here you would typically make an API call to send the email
            // For now, we'll simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 1000));

            setSnackbar({
                open: true,
                message: 'Mensagem enviada com sucesso!',
                severity: 'success'
            });

            // Clear form after successful submission
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        } catch (error) {
            setSnackbar({
                open: true,
                message: 'Erro ao enviar mensagem. Tente novamente.',
                severity: 'error'
            });
        }
    };

    return (
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
                                            <Typography variant="h6" className="text-white">Email</Typography>
                                        </Stack>
                                        <Typography className="text-white/70">contato@augeinvest.com.br</Typography>
                                    </div>
                                    <div>
                                        <Stack direction="row" spacing={2} alignItems="center" mb={1}>
                                            <LocationOnIcon sx={{ color: '#0D95F9' }} />
                                            <Typography variant="h6" className="text-white">Localização</Typography>
                                        </Stack>
                                        <Typography className="text-white/70">São Paulo, SP - Brasil</Typography>
                                    </div>
                                    <div>
                                        <Stack direction="row" spacing={2} alignItems="center" mb={1}>
                                            <PhoneIcon sx={{ color: '#0D95F9' }} />
                                            <Typography variant="h6" className="text-white">Telefone</Typography>
                                        </Stack>
                                        <Typography className="text-white/70">+55 (11) 99999-9999</Typography>
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
                                <TextField
                                    fullWidth
                                    label="Assunto"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    error={!!errors.subject}
                                    helperText={errors.subject}
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
                                >
                                    Enviar Mensagem
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
    );
};