"use client";

import { useState } from "react";
import { ContactForm, SectionContact } from "./styled";
import { TextField, Button, Typography, Alert, Snackbar, Stack } from "@mui/material";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';

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
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="text-white">
                        <div className="mb-12">
                            <MatrixRainText
                                text="Entre em Contato"
                                className="text-4xl font-bold text-[#0D95F9] mb-6"
                            />
                            <Typography variant="body1" className="text-white/70 mb-8">
                                Estamos aqui para ajudar. Entre em contato conosco através de qualquer um dos canais abaixo.
                            </Typography>
                        </div>

                        <Stack spacing={4}>
                            <div className="flex items-center gap-4">
                                <EmailIcon sx={{ color: '#0D95F9', fontSize: 32 }} />
                                <div>
                                    <Typography variant="h6" className="text-[#0D95F9]">Email</Typography>
                                    <Typography className="text-white/70">contato@augecapital.com.br</Typography>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <LocationOnIcon sx={{ color: '#0D95F9', fontSize: 32 }} />
                                <div>
                                    <Typography variant="h6" className="text-[#0D95F9]">Localização</Typography>
                                    <Typography className="text-white/70">São Paulo, SP - Brasil</Typography>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <PhoneIcon sx={{ color: '#0D95F9', fontSize: 32 }} />
                                <div>
                                    <Typography variant="h6" className="text-[#0D95F9]">Telefone</Typography>
                                    <Typography className="text-white/70">(11) 99999-9999</Typography>
                                </div>
                            </div>
                        </Stack>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[#ffffff0a] p-8 rounded-lg backdrop-blur-sm">
                        <ContactForm onSubmit={handleSubmit}>
                            <TextField
                                name="name"
                                label="Nome"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={formData.name}
                                onChange={handleChange}
                                error={!!errors.name}
                                helperText={errors.name}
                                className="bg-[#ffffff05]"
                            />
                            <TextField
                                name="email"
                                label="E-mail"
                                type="email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={formData.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
                                className="bg-[#ffffff05]"
                            />
                            <TextField
                                name="subject"
                                label="Assunto"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={formData.subject}
                                onChange={handleChange}
                                error={!!errors.subject}
                                helperText={errors.subject}
                                className="bg-[#ffffff05]"
                            />
                            <TextField
                                name="message"
                                label="Mensagem"
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={formData.message}
                                onChange={handleChange}
                                error={!!errors.message}
                                helperText={errors.message}
                                className="bg-[#ffffff05]"
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                size="large"
                                sx={{
                                    marginTop: '24px',
                                    backgroundColor: '#0D95F9',
                                    '&:hover': {
                                        backgroundColor: '#0D95F9/80'
                                    }
                                }}
                                endIcon={<SendIcon />}
                            >
                                Enviar Mensagem
                            </Button>
                        </ContactForm>
                    </div>
                </div>
            </div>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
            >
                <Alert
                    severity={snackbar.severity}
                    onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </SectionContact>
    );
};