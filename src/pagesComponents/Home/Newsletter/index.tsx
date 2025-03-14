"use client";

import { Container, Stack, Typography } from "@mui/material";
import { useState } from "react";

export const Newsletter = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = (e.target as HTMLFormElement).email.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido');
            return;
        }
        
        // TODO: Implement email submission logic
        console.log('Email submitted:', email);
        (e.target as HTMLFormElement).reset();
    };

    return (
        <Container maxWidth="xl">
            <Stack spacing={4} alignItems="center">
                <Typography variant="h4" className="text-white text-center font-bold">
                    Quer ficar por dentro das novidades?
                </Typography>
                <Typography variant="h6" className="text-white/90 text-center max-w-2xl">
                    Cadastre-se para receber atualizações exclusivas e descontos especiais
                </Typography>
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                    <Stack direction="row" spacing={2}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Seu melhor email"
                            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#0D95F9]"
                            required
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 rounded-lg bg-[#0D95F9] text-white font-medium hover:bg-[#0D95F9]/90 transition-colors"
                        >
                            Cadastrar
                        </button>
                    </Stack>
                </form>
            </Stack>
        </Container>
    );
};