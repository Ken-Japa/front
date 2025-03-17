import { IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import Link from "next/link";
import { motion } from "framer-motion";
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';

interface AuthButtonsProps {
    onButtonClick?: () => void;
    isFullWidth?: boolean;
}


export const PerfilButtons = ({ onButtonClick, isFullWidth }: AuthButtonsProps) => {
    const { data: session } = useSession();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <motion.div
            className={`flex gap-4 ${isFullWidth ? 'w-full' : ''}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div>
                <IconButton
                    onClick={handleMenu}
                    sx={{ padding: 0 }}
                    aria-label="account menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                >
                    <Avatar alt={session?.user?.name || 'User'}>
                        {session?.user?.name?.[0] || 'U'}
                    </Avatar>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem component={Link} href="/profile">
                        Perfil
                    </MenuItem>
                    <MenuItem component={Link} href="/settings">
                        Configurações
                    </MenuItem>
                    <MenuItem onClick={() => signOut({ callbackUrl: '/' })}>
                        Sair
                    </MenuItem>
                </Menu>
            </div>

        </motion.div>
    );
};