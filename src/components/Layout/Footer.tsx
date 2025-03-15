"use client";

import { Link, Container, Typography, Box, IconButton } from "@mui/material";
import { Logo } from "../Logo";
import LinkNext from "next/link";
import { usePathname } from 'next/navigation'; // Add this import
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from "framer-motion";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const socialLinks = [
    { icon: <XIcon />, href: "https://twitter.com/augeinvest", label: "Twitter" },
    { icon: <InstagramIcon />, href: "https://instagram.com/augeinvest", label: "Instagram" },
    { icon: <YouTubeIcon />, href: "https://youtube.com/augeinvest", label: "YouTube" },
    { icon: <LinkedInIcon />, href: "https://linkedin.com/company/augeinvest", label: "LinkedIn" }
];

const navigationLinks = [
    { href: "/", label: "Início" },
    { href: "/quem-somos", label: "Quem somos" },
    { href: "/recursos", label: "Recursos" },
    { href: "/precos", label: "Preços" },
    { href: "/faq", label: "FAQ" },
    { href: "/contato", label: "Fale Conosco" },
    { href: "/faca-parte", label: "Junte-se a equipe" },
    { href: "/politica-privacidade", label: "Política de Privacidade" },
    { href: "/termos-servicos", label: "Termos de Serviço" }
];

const MotionBox = motion(Box);
const MotionFooter = motion.footer;

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const pathname = usePathname();

    return (
        <MotionFooter
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#111111] py-14"
        >
            <Container maxWidth="lg">
                <Box className="flex flex-col gap-20">
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

                    {/* Middle Section with updated navigation links */}
                    <Box className="flex flex-col md:flex-row justify-center gap-12">
                        <Box className="flex flex-col gap-8">
                            <Typography variant="h6" className="font-bold text-white">
                                Links
                            </Typography>
                            <Box className="grid grid-cols-2 md:grid-cols-1 gap-2 text-white/80">
                                {navigationLinks.map((link) => (
                                    <LinkNext
                                        key={link.href}
                                        href={link.href}
                                        className={`
                                            relative transition-colors duration-200
                                            ${pathname === link.href
                                                ? 'text-[#0D95F9] font-medium'
                                                : 'text-white/80 hover:text-white'
                                            }
                                        `}
                                    >
                                        {link.label}
                                    </LinkNext>
                                ))}
                            </Box>
                        </Box>

                        <Box className="flex flex-col gap-8">
                            <Typography variant="h6" className="font-bold text-white">
                                Redes Sociais
                            </Typography>
                            <Box className="flex flex-col gap-12">
                                <Box className="flex gap-4 text-white/80">
                                    {socialLinks.map((social) => (
                                        <IconButton
                                            key={social.label}
                                            component={LinkNext}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white/80 hover:text-white"
                                            size="large"
                                        >
                                            {social.icon}
                                        </IconButton>
                                    ))}
                                </Box>
                                <LinkNext
                                    href="/embaixadores"
                                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                                >
                                    <WorkspacePremiumIcon className="text-white" fontSize="medium" />
                                    <span className="text-lg font-semibold">Embaixadores</span>
                                </LinkNext>
                            </Box>
                        </Box>
                    </Box>

                    {/* Bottom Section */}
                    <Typography
                        variant="body2"
                        className="text-center text-white/60 pt-8 border-t border-white/10"
                    >
                        © {currentYear} Auge Invest. Todos os direitos reservados.
                    </Typography>
                </Box>
            </Container>
        </MotionFooter>
    );
}