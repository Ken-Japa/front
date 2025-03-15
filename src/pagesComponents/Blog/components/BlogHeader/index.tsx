"use client";

import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { HeaderContainer, HeaderContent } from "./styled";

export const BlogHeader = () => {
    return (
        <HeaderContainer>
            <Container maxWidth="lg">
                <HeaderContent>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography 
                            variant="h1" 
                            className="text-4xl md:text-5xl font-bold text-white mb-4"
                        >
                            Blog Auge Invest
                        </Typography>
                        <Typography 
                            variant="h2" 
                            className="text-xl md:text-2xl text-white/80 max-w-2xl"
                        >
                            Análises, insights e estratégias para você tomar as melhores decisões no mercado financeiro.
                        </Typography>
                    </motion.div>
                </HeaderContent>
            </Container>
        </HeaderContainer>
    );
};