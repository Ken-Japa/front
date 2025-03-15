"use client";

import { Container, Typography, Box, IconButton, Link } from "@mui/material";
import { Logo } from "../../../Logo";
import LinkNext from "next/link";
import EmailIcon from '@mui/icons-material/Email';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { FooterContainer, TopSection } from "./styled";
import { socialLinks } from "../../constants/footer";
import { motion } from "framer-motion";
import { FooterNavigation } from "./components/FooterNavigation";
import { usePathname } from 'next/navigation';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const pathname = usePathname();

    return (
        <FooterContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Container maxWidth="lg">
                <TopSection>
                    {/* Top Section */}
                    <Box className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Logo height={80} width={80} />
                        </motion.div>
                        <Box className="text-center md:text-right max-w-md">
                            <Typography variant="body1" className="text-white/80 mb-2">
                                Inovações tecnológicas com o objetivo de fornecer ao investidor a melhor visão do mercado.
                            </Typography>
                            <Link
                                href="mailto:capitalauge@gmail.com"
                                className="text-white/60 hover:text-white flex items-center justify-center md:justify-end gap-2"
                                underline="hover"
                            >
                                <EmailIcon fontSize="small" />
                                capitalauge@gmail.com
                            </Link>
                        </Box>
                    </Box>

                    {/* Middle Section */}
                    <Box className="flex flex-col md:flex-row justify-center gap-12">
                        <FooterNavigation />

                        <Box className="flex flex-col gap-8">
                            <Typography variant="h6" className="font-bold text-white">
                                Redes Sociais
                            </Typography>
                            <Box className="flex flex-col gap-12">
                                <Box className="flex gap-4 text-white/80">
                                    {socialLinks.map((social) => {
                                        const Icon = social.icon;
                                        return (
                                            <IconButton
                                                key={social.label}
                                                component={LinkNext}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white/80 hover:text-white"
                                                size="large"
                                            >
                                                <Icon />
                                            </IconButton>
                                        );
                                    })}
                                </Box>
                                <LinkNext
                                    href="/embaixadores"
                                    className={`
                                        flex items-center gap-2 transition-colors
                                        ${pathname === '/embaixadores' 
                                            ? 'text-[#FFD700]' 
                                            : 'text-white/80 hover:text-white'
                                        }
                                    `}
                                >
                                    <WorkspacePremiumIcon />
                                    <span className="text-lg font-bold">
                                        Programa de Embaixadores
                                    </span>
                                </LinkNext>
                            </Box>
                        </Box>
                    </Box>

                    {/* Bottom Section */}
                    <Typography
                        variant="body2"
                        className="text-white/60 text-center"
                    >
                        © {currentYear} Auge Capital. Todos os direitos reservados.
                    </Typography>
                </TopSection>
            </Container>
        </FooterContainer>
    );
};