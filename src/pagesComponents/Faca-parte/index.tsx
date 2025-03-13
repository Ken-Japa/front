"use client";

import { useState, useEffect } from "react";
import { SectionJoinTeam, JoinTeamForm } from "./styled";
import { TextField, Button, Typography, Stack, MenuItem, Alert, Snackbar, Grid, Chip } from "@mui/material";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import SendIcon from '@mui/icons-material/Send';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { OptimizedImage } from "@/components/OptimizedImage";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';

interface FormData {
    name: string;
    email: string;
    phone: string;
    role: string;
    experience: string;
    portfolio: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    experience?: string;
}

export const JoinTeam = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        role: "",
        experience: "",
        portfolio: "",
        message: ""
    });

    const [joinAttempts, setJoinAttempts] = useState(0);
    const [isBlocked, setIsBlocked] = useState(false);
    const [blockTimer, setBlockTimer] = useState(0);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success' as 'success' | 'error'
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const blockedUntil = localStorage.getItem('joinTeamBlockedUntil');
        if (blockedUntil) {
            const timeLeft = parseInt(blockedUntil) - Date.now();
            if (timeLeft > 0) {
                setIsBlocked(true);
                setBlockTimer(Math.ceil(timeLeft / 1000));
            } else {
                localStorage.removeItem('joinTeamBlockedUntil');
            }
        }
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isBlocked && blockTimer > 0) {
            interval = setInterval(() => {
                setBlockTimer((prev) => {
                    if (prev <= 1) {
                        setIsBlocked(false);
                        localStorage.removeItem('joinTeamBlockedUntil');
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isBlocked, blockTimer]);


    const roles = [
        "Desenvolvedor Frontend",
        "Desenvolvedor Backend",
        "Analista de Dados",
        "Analista de Mercado",
        "Designer UI/UX",
        "Marketing Digital",
        "Outro"
    ];

    const benefits = [
        "Trabalho Remoto",
        "Horário Flexível",
        "Ambiente Inovador",
        "Desenvolvimento Profissional",
        "Equipe Dinâmica",
        "Projetos Desafiadores"
    ];

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePhone = (phone: string) => {
        const regex = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/;
        return regex.test(phone);
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            name: "",
            email: "",
            phone: "",
            message: "",
            experience: ""
        };

        if (!formData.name.trim()) {
            newErrors.name = "Nome é obrigatório";
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email é obrigatório";
            isValid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Email inválido";
            isValid = false;
        }

        if (formData.phone.trim() && !validatePhone(formData.phone)) {
            newErrors.phone = "Telefone inválido (Ex: 11999999999)";
            isValid = false;
        }

        if (!formData.experience.trim()) {
            newErrors.experience = "Experiência é obrigatória";
            isValid = false;
        } else if (formData.experience.trim().length < 15) {
            newErrors.experience = "A experiência deve ter pelo menos 15 caracteres";
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = "Mensagem é obrigatória";
            isValid = false;
        } else if (formData.message.trim().length < 50) {
            newErrors.message = "A mensagem deve ter pelo menos 50 caracteres";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear error when user starts typing
        if (errors[e.target.name as keyof typeof errors]) {
            setErrors({
                ...errors,
                [e.target.name]: ""
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isBlocked) {
            setSnackbar({
                open: true,
                message: `Por favor, aguarde ${blockTimer} segundos antes de tentar novamente.`,
                severity: 'error'
            });
            return;
        }

        if (validateForm()) {
            setJoinAttempts((prev) => {
                const newAttempts = prev + 1;

                // Block after 2 attempt (mais restrito)
                if (newAttempts >= 2) {
                    const blockDuration = 24 * 60 * 60 * 1000; // 24 hours
                    const blockedUntil = Date.now() + blockDuration;
                    localStorage.setItem('joinTeamBlockedUntil', blockedUntil.toString());
                    setIsBlocked(true);
                    setBlockTimer(86400); // 24 hours in seconds
                    return 0;
                }

                return newAttempts;
            });

            setIsSubmitting(true);
            try {
                // ... existing submission logic ...
            } catch (error) {
                setSnackbar({
                    open: true,
                    message: 'Erro ao enviar candidatura. Tente novamente.',
                    severity: 'error'
                });
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <PageTransition>
            <ErrorBoundary>
                <SectionJoinTeam>
                    <div className="background-image">
                        <OptimizedImage
                            src="/assets/images/background/Faca-Parte.jpg"
                            alt="Join Team Background"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="container mx-auto px-4 py-16">
                        <Grid container spacing={6}>
                            {/* Left Column - Info */}
                            <Grid item xs={12} md={5}>
                                {isLoading ? (
                                    <Stack spacing={6}>
                                        <ContentSkeleton />
                                        <ContentSkeleton type="card" />
                                    </Stack>
                                ) : (
                                    <Stack spacing={6}>
                                        <div className="text-center md:text-left">
                                            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                                                <GroupsIcon sx={{ fontSize: 40, color: '#0D95F9' }} />
                                                <MatrixRainText
                                                    text="Junte-se ao Time"
                                                    className="text-4xl font-bold text-[#0D95F9]"
                                                />
                                            </div>
                                            <Typography variant="h6" className="text-white/80 mb-8">
                                                Estamos sempre em busca de talentos apaixonados por inovação e mercado financeiro
                                            </Typography>
                                        </div>

                                        {/* Benefits Section */}
                                        <div className="bg-[#ffffff0a] p-6 rounded-lg backdrop-blur-sm">
                                            <Typography variant="h6" className="text-[#0D95F9] mb-4 flex items-center gap-2">
                                                <RocketLaunchIcon /> Benefícios
                                            </Typography>
                                            <div className="flex flex-wrap gap-2">
                                                {benefits.map((benefit) => (
                                                    <Chip
                                                        key={benefit}
                                                        label={benefit}
                                                        sx={{
                                                            backgroundColor: 'rgba(13, 149, 249, 0.1)',
                                                            color: '#fff',
                                                            '&:hover': {
                                                                backgroundColor: 'rgba(13, 149, 249, 0.2)',
                                                            }
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Current Openings */}
                                        {/*<div className="bg-[#ffffff0a] p-6 rounded-lg backdrop-blur-sm">
                                <Typography variant="h6" className="text-[#0D95F9] mb-4 flex items-center gap-2">
                                    <WorkIcon /> Vagas Abertas
                                </Typography>
                                <Stack spacing={2}>
                                    {roles.map((role) => (
                                        <div key={role} className="p-3 bg-[#ffffff05] rounded-lg hover:bg-[#ffffff08] transition-all">
                                            <Typography className="text-white">{role}</Typography>
                                        </div>
                                    ))}
                                </Stack>
                            </div>*/}
                                    </Stack>
                                )}
                            </Grid>

                            {/* Right Column - Form */}
                            <Grid item xs={12} md={7}>
                                <div className="bg-[#ffffff0a] p-8 rounded-lg backdrop-blur-sm">
                                    {isLoading ? (
                                        <ContentSkeleton type="form" />
                                    ) : (
                                        <JoinTeamForm onSubmit={handleSubmit}>
                                            <Stack spacing={3}>
                                                <TextField
                                                    name="name"
                                                    label="Nome Completo"
                                                    variant="outlined"
                                                    fullWidth
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    error={!!errors.name}
                                                    helperText={errors.name}
                                                />

                                                <TextField
                                                    name="email"
                                                    label="E-mail"
                                                    type="email"
                                                    variant="outlined"
                                                    fullWidth
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    error={!!errors.email}
                                                    helperText={errors.email}
                                                />

                                                <TextField
                                                    name="phone"
                                                    label="Telefone"
                                                    variant="outlined"
                                                    fullWidth
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    error={!!errors.phone}
                                                    helperText={errors.phone}
                                                    placeholder="Ex: 11999999999"
                                                />

                                                <TextField
                                                    name="role"
                                                    label="Área de Interesse"
                                                    select
                                                    variant="outlined"
                                                    fullWidth
                                                    required
                                                    value={formData.role}
                                                    onChange={handleChange}
                                                >
                                                    {roles.map((role) => (
                                                        <MenuItem key={role} value={role}>
                                                            {role}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>

                                                <TextField
                                                    name="experience"
                                                    label="Experiência"
                                                    multiline
                                                    rows={3}
                                                    variant="outlined"
                                                    fullWidth
                                                    required
                                                    value={formData.experience}
                                                    onChange={handleChange}
                                                    error={!!errors.experience}
                                                    helperText={errors.experience}
                                                    placeholder="Conte-nos sobre sua experiência profissional (mínimo 15 caracteres)"
                                                />

                                                <TextField
                                                    name="portfolio"
                                                    label="Portfolio/LinkedIn"
                                                    variant="outlined"
                                                    fullWidth
                                                    value={formData.portfolio}
                                                    onChange={handleChange}
                                                    placeholder="Links para seu portfolio ou LinkedIn"
                                                />

                                                <TextField
                                                    name="message"
                                                    label="Por que quer se juntar ao nosso time?"
                                                    multiline
                                                    rows={4}
                                                    variant="outlined"
                                                    fullWidth
                                                    required
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    error={!!errors.message}
                                                    helperText={errors.message}
                                                    placeholder="Explique por que você quer fazer parte da nossa equipe (mínimo 50 caracteres)"
                                                />

                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    size="large"
                                                    fullWidth
                                                    disabled={isSubmitting || isBlocked}
                                                    endIcon={<SendIcon />}
                                                    sx={{
                                                        backgroundColor: '#0D95F9',
                                                        height: '56px',
                                                        '&:hover': {
                                                            backgroundColor: '#0D95F9/80'
                                                        }
                                                    }}
                                                >
                                                    {isSubmitting ? 'Enviando...' :
                                                        isBlocked ? `Aguarde ${blockTimer}s` :
                                                            'Enviar Candidatura'}
                                                </Button>
                                            </Stack>
                                        </JoinTeamForm>
                                    )}
                                </div>
                            </Grid>
                        </Grid>
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
                </SectionJoinTeam>
            </ErrorBoundary>
        </PageTransition>
    );
};