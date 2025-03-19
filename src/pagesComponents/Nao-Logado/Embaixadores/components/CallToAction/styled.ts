import { Box, Stack, Skeleton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CallToActionContainer = styled(Box)`
    margin-top: 3rem;
    text-align: center;
`;

export const ContentStack = styled(Stack)`
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
    padding: 2rem;
    border-radius: 0.5rem;
`;

export const StyledSkeleton = styled(Skeleton)`
    background-color: rgba(255, 255, 255, 0.1);
`;