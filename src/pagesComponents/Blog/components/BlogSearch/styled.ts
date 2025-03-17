import { Box, InputBase, styled } from "@mui/material";

export const SearchContainer = styled(Box)`
    display: flex;
    align-items: center;
    background: #1A1A1A;
    border-radius: 8px;
    padding: 8px 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    position: relative;

    &:hover, &:focus-within {
        border-color: ${({ theme }) => theme.palette.primary.main};
        box-shadow: 0 0 0 2px rgba(13, 149, 249, 0.1);
    }
`;

export const SearchInput = styled(InputBase)`
    width: 100%;
    color: white;
    margin-left: 8px;
    margin-right: 24px;

    input::placeholder {
        color: rgba(255, 255, 255, 0.6);
        opacity: 1;
    }
`;

export const SearchIconWrapper = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ClearButtonWrapper = styled(Box)`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
`;