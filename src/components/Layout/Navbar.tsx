"use client";

import { mainNavigation } from "@/helpers/navigation/mainNavigation";
import { motion } from "framer-motion";
import { LinkNavbar, MobileNavContainer } from "./styled";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";

export const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const container = {
        hidden: { opacity: 0, y: -20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: -10 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="relative">
            <div className="md:hidden">
                <IconButton
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    sx={{ 
                        color: 'rgba(255, 255, 255, 0.7)',
                        '&:hover': { color: 'rgba(255, 255, 255, 0.9)' }
                    }}
                >
                    <MenuIcon />
                </IconButton>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-3">
                {mainNavigation.map(nav => (
                    <motion.div key={nav.name} variants={item} className="relative">
                        <LinkNavbar
                            className={`
                                relative z-10 px-3 py-2 rounded-md transition-all duration-200
                                ${pathname === nav.path 
                                    ? 'text-white font-medium bg-white/10' 
                                    : 'text-white/70 hover:text-white hover:bg-white/5'}
                                ${nav.highlight ? 'text-[#0D95F9] hover:text-[#0D95F9]' : ''}
                            `}
                            onClick={() => router.push(nav.path)}
                        >
                            {nav.name}
                            {pathname === nav.path && (
                                <motion.span
                                    layoutId="activeNav"
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0D95F9]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </LinkNavbar>
                    </motion.div>
                ))}
            </nav>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <MobileNavContainer>
                    <motion.nav
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col gap-2 items-end pr-4" // Adicionado items-end e pr-4
                    >
                        {mainNavigation.map(nav => (
                            <motion.div key={nav.name} variants={item}>
                                <LinkNavbar
                                    className={`
                                        block w-full px-3 py-2 rounded-md transition-all duration-200
                                        ${pathname === nav.path 
                                            ? 'text-white font-medium bg-white/10' 
                                            : 'text-white/70 hover:text-white hover:bg-white/5'}
                                        ${nav.highlight ? 'text-[#0D95F9] hover:text-[#0D95F9]' : ''}
                                    `}
                                    onClick={() => {
                                        router.push(nav.path);
                                        setIsMobileMenuOpen(false);
                                    }}
                                >
                                    {nav.name}
                                </LinkNavbar>
                            </motion.div>
                        ))}
                    </motion.nav>
                </MobileNavContainer>
            )}
        </div>
    );
}