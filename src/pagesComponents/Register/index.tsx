"use client";

import { useState } from "react";
import { RegisterForm, StyledDialog } from "./styled";
import {
    TextField,
    Button,
    Typography,
    IconButton,
    Link,
    CircularProgress,
    Checkbox,
    FormControlLabel,
    Box,
    LinearProgress
} from "@mui/material";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import CloseIcon from '@mui/icons-material/Close';
import GoogleIcon from '@mui/icons-material/Google';
import { useRouter } from "next/navigation";
import { useGoogleLogin } from '@react-oauth/google';


interface FormErrors {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

export const Register = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const validateForm = () => {
        const newErrors: FormErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = "Nome é obrigatório";
        } else if (formData.name.trim().length < 3) {
            newErrors.name = "Nome deve ter pelo menos 3 caracteres";
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Email inválido";
        }

        // Password validation
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!passwordRegex.test(formData.password)) {
            newErrors.password = "A senha deve conter pelo menos 6 caracteres, incluindo letras e números";
        }

        // Confirm password validation
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "As senhas não coincidem";
        }

        // Add terms validation
        if (!acceptedTerms) {
            alert("Você precisa aceitar os termos e condições para continuar");
            return false;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            try {
                // Proceed with registration
                console.log('Form is valid', formData);
            } catch (error) {
                console.error('Registration error:', error);
            } finally {
                setIsLoading(false);
            }
        }
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
        onError: (error) => {
            console.error('Google login failed:', error);
        }
    });

    const handleGoogleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        handleGoogleSignIn();
    };

    return (
        <StyledDialog open={true} maxWidth="md" fullWidth>
            <IconButton
                onClick={() => router.push('/')}
                sx={{ position: 'absolute', right: 8, top: 8, color: 'white' }}
            >
                <CloseIcon />
            </IconButton>

            <RegisterForm onSubmit={handleSubmit}>
                <div className="form-header text-center w-full">
                    <MatrixRainText
                        text="Crie sua conta"
                        className="text-white text-2xl font-bold mb-6 inline-block"
                    />
                </div>

                <TextField
                    name="name"
                    label="Nome completo"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    required
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
                />
                <TextField
                    name="password"
                    label="Senha"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.password}
                    onChange={handleChange}
                    error={!!errors.password}
                    helperText={errors.password}
                />

                {formData.password && (
                    <Box sx={{ width: '100%', mt: 1 }}>
                        <LinearProgress
                            variant="determinate"
                            value={getPasswordStrength(formData.password)}
                            sx={{
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: getPasswordStrength(formData.password) < 50 ? 'error.main' :
                                        getPasswordStrength(formData.password) < 100 ? 'warning.main' :
                                            'success.main'
                                }
                            }}
                        />
                        <Typography variant="caption" sx={{ color: 'white', mt: 0.5 }}>
                            Força da senha: {getPasswordStrength(formData.password)}%
                        </Typography>
                    </Box>
                )}

                <TextField
                    name="confirmPassword"
                    label="Confirme sua senha"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
                />

                {/* Remove the duplicate state declaration and keep the FormControlLabel */}
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={acceptedTerms}
                            onChange={(e) => setAcceptedTerms(e.target.checked)}
                            sx={{ color: 'white', '&.Mui-checked': { color: 'primary.main' } }}
                        />
                    }
                    label={
                        <Typography variant="body2" sx={{ color: 'white' }}>
                            Li e aceito os{' '}
                            <Link href="/termos-servicos" sx={{ color: 'primary.main' }}>
                                termos e condições
                            </Link>
                        </Typography>
                    }
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    disabled={isLoading}
                    sx={{ marginTop: '24px' }}
                >
                    {isLoading ? <CircularProgress size={24} color="inherit" /> : "Registrar"}
                </Button>

                <div className="divider-container">
                    <div className="divider" />
                    <span className="divider-text">ou</span>
                    <div className="divider" />
                </div>

                <Button
                    variant="outlined"
                    fullWidth
                    size="large"
                    startIcon={<GoogleIcon />}
                    onClick={handleGoogleClick}
                    sx={{
                        color: 'white',
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        '&:hover': {
                            borderColor: 'white',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        }
                    }}
                >
                    Continuar com Google
                </Button>

                <Typography
                    variant="body2"
                    className="login-text text-center text-white"
                >
                    Já tem uma conta?{' '}
                    <Link
                        href="/login"
                        sx={{
                            color: 'primary.main',
                            textDecoration: 'underline',
                            '&:hover': {
                                opacity: 0.8
                            }
                        }}
                    >
                        Faça login
                    </Link>
                </Typography>
            </RegisterForm>
        </StyledDialog>
    );
};


const getPasswordStrength = (password: string): number => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    return strength;
};