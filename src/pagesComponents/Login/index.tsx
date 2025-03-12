"use client";

import { useState } from "react";
import { LoginForm, StyledDialog } from "./styled";
import { TextField, Button, Typography, IconButton, Link } from "@mui/material";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import CloseIcon from '@mui/icons-material/Close';
import GoogleIcon from '@mui/icons-material/Google';
import { useRouter } from "next/navigation";

export const Login = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic
    };

    const handleGoogleSignIn = () => {
        // Handle Google sign-in
    };

    return (
        <StyledDialog
            open={true}
            maxWidth="md"
            fullWidth
        >
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
            
            <LoginForm onSubmit={handleSubmit}>
                <div className="form-header">
                    <MatrixRainText 
                        text="Bem vindo de volta" 
                        className="text-white text-2xl font-bold mb-6"
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
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    sx={{ marginTop: '24px' }}
                >
                    Entrar
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
                >
                    Ainda não tem uma conta?{' '}
                    <Link 
                        href="/register"
                        sx={{
                            color: 'primary.main',
                            textDecoration: 'underline',
                            '&:hover': {
                                opacity: 0.8
                            }
                        }}
                    >
                        Registre-se
                    </Link>
                </Typography>
            </LoginForm>
        </StyledDialog>
    );
};