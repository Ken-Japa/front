"use client";

import { PermIdentity, Menu as MenuIcon } from "@mui/icons-material";
import { CustomButton } from "../Custom/Button";
import { Logo } from "../Logo";
import { Navbar } from "./Navbar";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Drawer, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export const Header = () => {
    const router = useRouter();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="sticky top-0 z-50 bg-[#111111]/95 backdrop-blur-sm border-b border-white/5"
        >
            <div className="container mx-auto h-20 flex items-center justify-between">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    <Logo width={60} height={60} onClick={() => router.push('/')} />
                </motion.div>

                {isMobile ? (
                    <>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className="text-white"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true,
                            }}
                            PaperProps={{
                                className: "bg-[#111111] w-64 p-4"
                            }}
                        >
                            <div className="flex flex-col gap-4">
                                <Navbar />
                                <div className="flex flex-col gap-2 mt-4">
                                    <CustomButton
                                        value="Login"
                                        Icon={PermIdentity}
                                        color="secondary"
                                        onClick={() => {
                                            router.push('/login');
                                            handleDrawerToggle();
                                        }}
                                        fullWidth
                                    />
                                    <CustomButton
                                        value="Registrar"
                                        Icon={PermIdentity}
                                        color="success"
                                        onClick={() => {
                                            router.push('/register');
                                            handleDrawerToggle();
                                        }}
                                        fullWidth
                                    />
                                </div>
                            </div>
                        </Drawer>
                    </>
                ) : (
                    <div className="flex items-center justify-between gap-20">
                        <Navbar />
                        <motion.div 
                            className="flex gap-5"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <CustomButton
                                value="Login"
                                Icon={PermIdentity}
                                color="secondary"
                                onClick={() => router.push('/login')}
                            />
                            <CustomButton
                                value="Registrar"
                                Icon={PermIdentity}
                                color="success"
                                onClick={() => router.push('/register')}
                            />
                        </motion.div>
                    </div>
                )}
            </div>
        </motion.header>
    );
}