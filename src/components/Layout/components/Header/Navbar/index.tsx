"use client";

import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from "framer-motion";

import { NavLink } from "./NavLink";
import { useDrawer } from "../../../hooks/useDrawer";
import { publicNavigation, authNavigation } from "@/components/Layout/constants/Navigation";
import { LinkNavbar, MobileNavContainer } from "./styled";

export const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { isOpen, toggle } = useDrawer();
    const { data: session } = useSession();

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

    const getLinkStyles = (isActive: boolean, isHighlight: boolean) => `
        px-3 py-2 rounded-md transition-all duration-200
        ${isActive
            ? 'text-white font-medium bg-white/10'
            : 'text-white/70 hover:text-white hover:bg-white/5'}
        ${isHighlight ? 'text-[#0D95F9] hover:text-[#0D95F9]' : ''}
    `;

    return (
        <div className="relative">
            <div className="md:hidden">
                <IconButton
                    onClick={toggle}
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
                {session ?
                    authNavigation.map(nav => (
                        <motion.div key={nav.name} variants={item} className="relative">
                            <NavLink
                                path={nav.path}
                                name={nav.name}
                                highlight={nav.highlight}
                            />
                        </motion.div>
                    ))
                    :
                    publicNavigation.map(nav => (
                        <motion.div key={nav.name} variants={item} className="relative">
                            <NavLink
                                path={nav.path}
                                name={nav.name}
                                highlight={nav.highlight}
                            />
                        </motion.div>
                    ))
                }
            </nav>

            {/* Mobile Navigation */}
            {isOpen && (
                <MobileNavContainer>
                    <motion.nav
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col gap-2 items-end pr-4"
                    >
                        {session ?
                            authNavigation.map(nav => (
                                <motion.div key={nav.name} variants={item}>
                                    <LinkNavbar
                                        className={getLinkStyles(pathname === nav.path, !!nav.highlight)}
                                        onClick={() => {
                                            router.push(nav.path);
                                            toggle();
                                        }}
                                    >
                                        {nav.name}
                                    </LinkNavbar>
                                </motion.div>
                            ))
                            :
                            publicNavigation.map(nav => (
                                <motion.div key={nav.name} variants={item}>
                                    <LinkNavbar
                                        className={getLinkStyles(pathname === nav.path, !!nav.highlight)}
                                        onClick={() => {
                                            router.push(nav.path);
                                            toggle();
                                        }}
                                    >
                                        {nav.name}
                                    </LinkNavbar>
                                </motion.div>
                            ))
                        }
                    </motion.nav>
                </MobileNavContainer>
            )}
        </div>
    );
}