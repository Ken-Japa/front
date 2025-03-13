"use client";

import { useState, useEffect } from "react";
import { LoginForm, StyledDialog } from "./styled";
import {
    TextField,
    Button,
    Typography,
    IconButton,
    CircularProgress,
    Checkbox,
    FormControlLabel,
    Link as MuiLink
} from "@mui/material";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import CloseIcon from '@mui/icons-material/Close';
import GoogleIcon from '@mui/icons-material/Google';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { OptimizedImage } from "@/components/OptimizedImage";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';

export const Login = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [rememberMe, setRememberMe] = useState(false);
    const [loginAttempts, setLoginAttempts] = useState(0);
    const [isBlocked, setIsBlocked] = useState(false);
    const [blockTimer, setBlockTimer] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { email: "", password: "" };

        if (!formData.email) {
            newErrors.email = "E-mail é obrigatório";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "E-mail inválido";
            isValid = false;
        }

        if (!formData.password) {
            newErrors.password = "Senha é obrigatória";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isBlocked) {
            return;
        }

        if (validateForm()) {
            try {
                // Simulate login attempt
                setLoginAttempts((prev) => {
                    const newAttempts = prev + 1;

                    // Block after 5 attempts
                    if (newAttempts >= 5) {
                        const blockDuration = 5 * 60 * 1000; // 5 minutes
                        const blockedUntil = Date.now() + blockDuration;
                        localStorage.setItem('loginBlockedUntil', blockedUntil.toString());
                        setIsBlocked(true);
                        setBlockTimer(300); // 5 minutes in seconds
                        return 0; // Reset attempts
                    }

                    return newAttempts;
                });

                // Your existing login logic here

            } catch (error) {
                console.error('Login error:', error);
            }
        }
    };

    const handleGoogleSignIn = () => {
        // Handle Google sign-in
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Check if user is blocked from localStorage
        const blockedUntil = localStorage.getItem('loginBlockedUntil');
        if (blockedUntil) {
            const timeLeft = parseInt(blockedUntil) - Date.now();
            if (timeLeft > 0) {
                setIsBlocked(true);
                setBlockTimer(Math.ceil(timeLeft / 1000));
            } else {
                localStorage.removeItem('loginBlockedUntil');
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
                        localStorage.removeItem('loginBlockedUntil');
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isBlocked, blockTimer]);

    return (
        <PageTransition>
            <ErrorBoundary>
                <StyledDialog
                    open={true}
                    maxWidth="md"
                    fullWidth
                >
                    <div className="background-image">
                        <OptimizedImage
                            src="/assets/images/background/REGISTER.jpg"
                            alt="Login Background"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="content">
                        <IconButton
                            onClick={() => router.push('/')}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: 'white'
                            }}
                        >
                            <CloseIcon />
                        </IconButton>

                        {isLoading ? (
                            <LoginForm>
                                {/* Header Skeleton */}
                                <div className="form-header text-center w-full mb-6">
                                    <ContentSkeleton />
                                </div>

                                {/* Email Field Skeleton */}
                                <ContentSkeleton />

                                {/* Password Field Skeleton */}
                                <ContentSkeleton />

                                {/* Forgot Password Link Skeleton */}
                                <ContentSkeleton />

                                {/* Remember Me Skeleton */}
                                <ContentSkeleton />

                                {/* Login Button Skeleton */}
                                <ContentSkeleton />

                                {/* Divider Skeleton */}
                                <div className="divider-container">
                                    <div className="divider" />
                                    <ContentSkeleton />
                                    <div className="divider" />
                                </div>

                                {/* Google Button Skeleton */}
                                <ContentSkeleton />

                                {/* Register Link Skeleton */}
                                <ContentSkeleton />
                            </LoginForm>
                        ) : (

                            <LoginForm onSubmit={handleSubmit}>
                                <div className="form-header text-center w-full">
                                    <MatrixRainText
                                        text="Bem vindo de volta"
                                        className="text-white text-2xl font-bold mb-6 inline-block"
                                    />
                                </div>

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

                                <MuiLink
                                    href="/forgot-password"
                                    sx={{
                                        color: 'primary.main',
                                        textDecoration: 'none',
                                        alignSelf: 'flex-end',
                                        marginTop: 1,
                                        display: 'block',
                                        textAlign: 'right',
                                        '&:hover': {
                                            textDecoration: 'underline'
                                        }
                                    }}
                                >
                                    Esqueceu sua senha?
                                </MuiLink>

                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            sx={{ color: 'white', '&.Mui-checked': { color: 'primary.main' } }}
                                        />
                                    }
                                    label={<Typography color="white">Lembrar-me</Typography>}
                                    sx={{ marginTop: 1 }}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    size="large"
                                    disabled={isLoading || isBlocked}
                                    sx={{ marginTop: '24px' }}
                                >
                                    {isLoading ? (
                                        <CircularProgress size={24} color="inherit" />
                                    ) : isBlocked ? (
                                        `Tente novamente em ${blockTimer}s`
                                    ) : (
                                        "Entrar"
                                    )}
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
                                    onClick={handleGoogleSignIn}
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
                                    sx={{ mt: 2 }}
                                >
                                    Ainda não tem uma conta?{' '}
                                    <Link href="/register" className="text-[#0D95F9] underline hover:opacity-80">
                                        Registre-se
                                    </Link>
                                </Typography>
                            </LoginForm>
                        )}
                    </div>
                </StyledDialog>
            </ErrorBoundary>
        </PageTransition>
    );
};