"use client";

import { Menu as MenuIcon } from "@mui/icons-material";
import { Logo } from "../../../Logo";
import { Navbar } from "../Navbar";
import { Drawer, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { AuthButtons } from "../AuthButtons";
import { useDrawer } from "../../hooks/useDrawer";
import { HeaderContainer, HeaderContent, DrawerContent } from "./styled";
import Link from 'next/link';

export const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { isOpen, toggle } = useDrawer();

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
        >
            <HeaderContainer>
                <HeaderContent className="container mx-auto">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <Link href="/">
                            <Logo width={60} height={60} />
                        </Link>
                    </motion.div>

                    {isMobile ? (
                        <>
                            <IconButton
                                color="inherit"
                                aria-label="open menu"
                                edge="start"
                                onClick={toggle}
                                className="text-white bg-[#1A1A1A]"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                anchor="right"
                                open={isOpen}
                                onClose={toggle}
                                ModalProps={{ keepMounted: true }}
                            >
                                <DrawerContent>
                                    <Navbar />
                                    <div className="mt-4">
                                        <AuthButtons onButtonClick={toggle} isFullWidth />
                                    </div>
                                </DrawerContent>
                            </Drawer>
                        </>
                    ) : (
                        <div className="flex items-center justify-between gap-20">
                            <Navbar />
                            <AuthButtons />
                        </div>
                    )}
                </HeaderContent>
            </HeaderContainer>
        </motion.div>
    );
};