import { Box, styled } from "@mui/material";

export const HeaderContainer = styled(Box)`
    background: linear-gradient(to right, #111111, #1A1A1A);
    padding: 6rem 0;
    position: relative;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: url('/assets/images/patterns/grid.png') repeat;
        opacity: 0.1;
        z-index: 1;
    }
`;

export const HeaderContent = styled(Box)`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 200px;
`;