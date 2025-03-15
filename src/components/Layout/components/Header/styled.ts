import { styled } from "@mui/material";

export const HeaderContainer = styled('header')`
    position: sticky;
    top: 0;
    z-index: 50;
    background-color: #1A1A1A;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

export const HeaderContent = styled('div')`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1A1A1A;
`;

export const DrawerContent = styled('div')`
    background-color: #000000;
    width: 16rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;