import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";

export const FooterContainer = styled(motion.footer)`
    background-color: #111111;
    padding: 3.5rem 0;
    position: relative;
    z-index: 2;
`;

export const TopSection = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 5rem;
`;

export const NavigationGrid = styled(Box)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;

    @media (min-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const SocialSection = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;