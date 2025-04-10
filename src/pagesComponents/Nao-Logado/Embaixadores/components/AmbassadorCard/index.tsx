import { type FC } from 'react';

import { Stack, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { AmbassadorCardSkeleton } from "./AmbassadorCardSkeleton";
import { CardContainer, StyledAvatar, animationConfig } from "./styled";
import { CROWN } from "../../constants/ambassadors";

interface AmbassadorCardProps {
    name: string;
    role: string;
    avatar?: string;
    testimonial: string;
    index: number;
    isLoading: boolean;
}

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
            {...animationConfig}
            transition={{ ...animationConfig.transition, delay: index * 0.1 }}
        >
            <CardContainer>
                <Stack spacing={3} alignItems="center" textAlign="center">
                    <StyledAvatar
                        src={avatar || CROWN}
                        alt={name}
                    />
                    <Box>
                        <Typography variant="h3" className="ambassador-name">
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