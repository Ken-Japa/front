"use client";

import { useState } from "react";
import { ContactForm, SectionContact } from "./styled";
import { TextField, Button, Typography } from "@mui/material";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <SectionContact>
            <div className="opacity p-10">
                <ContactForm onSubmit={handleSubmit}>
                    <div className="form-header">
                        <MatrixRainText 
                            text="Fale Conosco" 
                            className="text-white text-2xl font-bold mb-6"
                        />
                    </div>
                    
                    <Typography variant="body1" className="text-white mb-6">
                        Entre em contato conosco. Responderemos o mais breve possível.
                    </Typography>

                    <TextField
                        name="name"
                        label="Nome"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.name}
                        onChange={handleChange}
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
                    />
                    <TextField
                        name="subject"
                        label="Assunto"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.subject}
                        onChange={handleChange}
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
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
                        sx={{ marginTop: '24px' }}
                    >
                        Enviar Mensagem
                    </Button>
                </ContactForm>
            </div>
        </SectionContact>
    );
};