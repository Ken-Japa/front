import { styled } from "@mui/material";
import { Paper } from "@mui/material";

export const ProfileCard = styled(Paper)`
    padding: 2rem;
    margin-bottom: 2rem;
`;

export const ProfileSection = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    &:last-child {
        border-bottom: none;
    }
`;

export const ProfileInfo = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const ProfileLabel = styled('span')`
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.875rem;
`;

export const ProfileValue = styled('span')`
    color: white;
    font-size: 1rem;
    font-weight: 500;
`;