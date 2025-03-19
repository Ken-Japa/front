import { type FC } from 'react';
import { motion } from "framer-motion";

import { Typography, Avatar, Stack, Box } from "@mui/material";

import { CROWN } from "../../constants/ambassadors";

import { CardContainer } from "./styled";
import { AmbassadorCardSkeleton } from "./AmbassadorCardSkeleton";

interface AmbassadorCardProps {
    name: string;
    role: string;
    avatar?: string;
    testimonial: string;
    index: number;
    isLoading?: boolean;
}

const ANIMATION_CONFIG = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: "easeOut" }
} as const;

const AVATAR_STYLES = {
    width: 120,
    height: 120,
    border: '4px solid #FFD700'
} as const;

export const AmbassadorCard: FC<AmbassadorCardProps> = ({ 
    name, 
    role, 
    avatar, 
    testimonial, 
    index, 
    isLoading 
}) => {
    if (isLoading) {
        return <AmbassadorCardSkeleton />;
    }

    return (
        <motion.div
            {...ANIMATION_CONFIG}
            transition={{ ...ANIMATION_CONFIG.transition, delay: index * 0.1 }}
        >
            <CardContainer>
                <Stack spacing={3} alignItems="center" textAlign="center">
                    <Avatar
                        src={avatar || CROWN}
                        alt={name}
                        sx={AVATAR_STYLES}
                    />
                    <Box>
                        <Typography variant="h6" className="text-white font-bold">
                            {name}
                        </Typography>
                        <Typography variant="subtitle1" className="text-[#FFD700]">
                            {role}
                        </Typography>
                    </Box>
                    <Typography variant="body1" className="text-white/80">
                        &quot;{testimonial}&quot;
                    </Typography>
                </Stack>
            </CardContainer>
        </motion.div>
    );
};