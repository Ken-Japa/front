import { ProfileSection, ProfileInfo, ProfileLabel, ProfileValue } from "../../styled";
import { CustomButton } from "@/components/Custom/Button";
import { useTheme } from "next-themes";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const ThemePreference = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    if (!mounted) return null;

    return (
        <ProfileSection>
            <ProfileInfo>
                <ProfileLabel>Tema</ProfileLabel>
                <motion.div
                    key={theme}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                >
                    <ProfileValue>
                        {theme === 'dark' ? 'Escuro' : 'Claro'}
                    </ProfileValue>
                </motion.div>
            </ProfileInfo>
            <AnimatePresence mode="wait">
                <motion.div
                    key={theme}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                >
                    <CustomButton
                        variant="outlined"
                        size="small"
                        startIcon={theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                        onClick={toggleTheme}
                        value={theme === 'dark' ? 'Mudar para Claro' : 'Mudar para Escuro'}
                        sx={{
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.05)',
                            }
                        }}
                    />
                </motion.div>
            </AnimatePresence>
        </ProfileSection>
    );
};