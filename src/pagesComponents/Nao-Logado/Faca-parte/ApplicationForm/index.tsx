import { useState, useEffect } from "react";
import { JoinTeamForm } from "./styled";
import { TextField, Button, Stack, MenuItem, Snackbar, Alert } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { ApplicationFormSkeleton } from "./ApplicationFormSkeleton";
import dynamic from 'next/dynamic';

interface HeaderProps {
    isLoading: boolean;
}

interface FormData {
    name: string;
    email: string;
    phone: string;
    role: string;
    experience: string;
    portfolio: string;
    github: string;
    message: string;
}
interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    experience?: string;
}

const roles = [
    "Desenvolvedor Frontend",
    "Desenvolvedor Backend",
    "Analista de Dados",
    "Analista de Mercado",
    "Designer UI/UX",
    "Marketing Digital",
    "Outro"
];

const DynamicTextField = dynamic(() => import('@mui/material').then(mod => mod.TextField), {
    loading: () => <ContentSkeleton type="text" textLines={1} />
});

export const ApplicationForm = ({ isLoading }: HeaderProps) => {

    const [joinAttempts, setJoinAttempts] = useState(0);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);
    const [blockTimer, setBlockTimer] = useState(0);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success' as 'success' | 'error'
    });
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        role: "",
        experience: "",
        portfolio: "",
        github: "",
        message: ""
    });

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
    if (isLoading) {
        return <ApplicationFormSkeleton />;
    }

    return (
        <>
            <JoinTeamForm onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <DynamicTextField
                        className="form-field"
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
                        SelectProps={{
                            MenuProps: {
                                PaperProps: {
                                    sx: {
                                        backgroundColor: 'rgba(0, 21, 41, 0.98)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(13, 149, 249, 0.2)',
                                        '& .MuiMenuItem-root': {
                                            color: 'white',
                                            '&:hover': {
                                                backgroundColor: 'rgba(13, 149, 249, 0.35)'
                                            }
                                        }
                                    }
                                }
                            }
                        }}
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
                        name="github"
                        label="GitHub"
                        variant="outlined"
                        fullWidth
                        value={formData.github}
                        onChange={handleChange}
                        placeholder="Link para seu perfil no GitHub (opcional)"
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
                        className="submit-button"
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        disabled={isSubmitting || isBlocked}
                        endIcon={<SendIcon />}
                    >
                        {isSubmitting ? 'Enviando...' :
                            isBlocked ? `Aguarde ${blockTimer}s` :
                                'Enviar Candidatura'}
                    </Button>
                </Stack>
            </JoinTeamForm>
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
        </>
    );
};
