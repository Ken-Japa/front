import { Stack, styled } from "@mui/material";

export const InfoContainer = styled(Stack)({
    padding: '2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '8px',
    backdropFilter: 'blur(10px)'
});

export const InfoItem = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
});

export const InfoHeader = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',

    '& .info-icon': {
        color: '#0D95F9'
    },

    '& .info-title': {
        fontWeight: 600,
        color: 'white'
    }
});

export const ContactInfoSkeletonStyled = styled(Stack)({
    width: '100%',
    minHeight: '200px'
});
