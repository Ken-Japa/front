import { Card, Chip, styled } from "@mui/material";

export const CardContainer = styled(Card)`
    background: #1A1A1A;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    }
`;

export const CardOverlay = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%);
    pointer-events: none;
`;

export const CategoryChip = styled(Chip)`
    position: absolute;
    top: 16px;
    right: 16px;
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: white;
    font-weight: 500;
    
    &:hover {
        background-color: ${({ theme }) => theme.palette.primary.dark};
    }
`;