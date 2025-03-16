import { Typography, Avatar, Stack, Box } from "@mui/material";
import { motion } from "framer-motion";
import { CardContainer } from "./styled";
import { CROWN } from "../../constants/ambassadors";
import { AmbassadorCardSkeleton } from "./AmbassadorCardSkeleton";

interface AmbassadorCardProps {
    name: string;
    role: string;
    avatar?: string;
    testimonial: string;
    index: number;
    isLoading?: boolean;
}

export const AmbassadorCard = ({ name, role, avatar, testimonial, index, isLoading }: AmbassadorCardProps) => {
    if (isLoading) {
        return <AmbassadorCardSkeleton />;
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            <CardContainer>
                <Stack spacing={3} alignItems="center" textAlign="center">
                    <Avatar
                        src={avatar || CROWN}
                        alt={name}
                        sx={{ width: 120, height: 120, border: '4px solid #FFD700' }}
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