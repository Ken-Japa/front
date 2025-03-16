import { Stack, Skeleton } from "@mui/material";
import { HeaderContainer } from "./styled";

export const HeaderSkeleton = () => {
    return (
        <HeaderContainer spacing={3}>
            <Skeleton variant="circular" width={60} height={60} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
            <Skeleton variant="text" width={200} height={60} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
            <Skeleton variant="text" width={180} height={40} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
            <Skeleton variant="text" width={500} height={60} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
        </HeaderContainer>
    );
};