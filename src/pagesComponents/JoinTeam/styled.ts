"use client";

import { styled } from "@mui/material";

export const SectionJoinTeam = styled('section')({
    minHeight: '100vh',
    width: '100%',
    backgroundImage: 'url("/assets/images/background/TEAM.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    '& .opacity': {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '64px 0'
    }
});

export const JoinTeamForm = styled('form')({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '32px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(10px)',
    borderRadius: '8px',
    '& .MuiTextField-root': {
        '& .MuiOutlinedInput-root': {
            color: 'white',
            '& fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.23)',
            },
            '&:hover fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.5)',
            },
        },
        '& .MuiInputLabel-root': {
            color: 'rgba(255, 255, 255, 0.7)',
        },
    },
    '& .MuiMenuItem-root': {
        color: 'black',
    }
});