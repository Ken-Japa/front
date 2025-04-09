import { type FC } from 'react';

import { Stack, Avatar, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { AmbassadorCardSkeleton } from "./AmbassadorCardSkeleton";
import { CardContainer } from "./styled";
import { CROWN } from "../../constants/ambassadors";

interface AmbassadorCardProps {
    name: string;
    role: string;
    avatar?: string;
    testimonial: string;
    index: number;
    isLoading?: boolean;
}

const AVATAR_STYLES = {
    width: 120,
    height: 120,
    border: "2px solid rgba(255, 215, 0, 0.5)"
} as const;

const ANIMATION_CONFIG = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
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
                        <Typography variant="h6" className="ambassador-name">
                            {name}
                        </Typography>
                        <Typography variant="subtitle1" className="ambassador-role">
                            {role}
                        </Typography>
                    </Box>
                    <Typography variant="body1" className="ambassador-testimonial">
                        &quot;{testimonial}&quot;
                    </Typography>
                </Stack>
            </CardContainer>
        </motion.div>
    );
};

export default AmbassadorCard;