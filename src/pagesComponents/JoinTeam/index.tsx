"use client";

import { useState } from "react";
import { SectionJoinTeam, JoinTeamForm } from "./styled";
import { TextField, Button, Typography, Stack, MenuItem } from "@mui/material";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";

export const JoinTeam = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        role: "",
        experience: "",
        portfolio: "",
        message: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        experience: ""  // Add experience to errors state
    });

    const roles = [
        "Desenvolvedor Frontend",
        "Desenvolvedor Backend",
        "Analista de Dados",
        "Analista de Mercado",
        "Designer UI/UX",
        "Marketing Digital",
        "Outro"
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form is valid", formData);
            // Handle form submission
        }
    };

    return (
        <SectionJoinTeam>
            <div className="opacity p-10">
                <Stack spacing={4} alignItems="center" maxWidth="800px" margin="0 auto">
                    <MatrixRainText
                        text="Junte-se ao Time"
                        className="text-white text-3xl font-bold"
                    />

                    <Typography variant="h6" className="text-white text-center">
                        Estamos sempre em busca de talentos apaixonados por inovação e mercado financeiro
                    </Typography>

                    <JoinTeamForm onSubmit={handleSubmit}>
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
                            color="primary"
                            size="large"
                            fullWidth
                        >
                            Enviar Candidatura
                        </Button>
                    </JoinTeamForm>
                </Stack>
            </div>
        </SectionJoinTeam>
    );
};