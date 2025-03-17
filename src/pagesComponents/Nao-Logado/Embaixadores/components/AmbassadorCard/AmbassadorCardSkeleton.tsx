import { Stack, Skeleton } from "@mui/material";
import { CardContainer } from "./styled";

export const AmbassadorCardSkeleton = () => {
    return (
        <CardContainer>
            <Stack spacing={3} alignItems="center" textAlign="center">
                <Skeleton 
                    variant="circular" 
                    width={120} 
                    height={120} 
                    sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} 
                />
                <Stack spacing={1} width="100%" alignItems="center">
                    <Skeleton variant="text" width={150} height={30} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
                    <Skeleton variant="text" width={120} height={24} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
                </Stack>
                <Skeleton variant="text" width="100%" height={80} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
            </Stack>
        </CardContainer>
    );
};