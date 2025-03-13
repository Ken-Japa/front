"use client";

import { Stack, styled } from "@mui/material";

export const SectionPlans = styled('section')(({ theme }) => ({     
    '.plans': {
        width: '100%',
        height: '100vh',
        position: 'relative', // Add this
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::before': { // Add overlay
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1
        },
        '& > *': { // Make content appear above the background
            position: 'relative',
            zIndex: 2
        }
    },
    '.background-image': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
    }
}));

export const CardContainer = styled(Stack)(({ theme }) => ({ 
    maxWidth: '250px',
    width: '100%',
    padding: '20px',
    backgroundColor: 'rgba(0,0,0,0.5)',
    boxShadow: '2px 2px 5px #fff',
    borderRadius: '5px',
    color: '#FFFFFF',
    'ul': {
        fontSize: '13px',
        listStyle: 'inside',
        'li': {
            marginBottom: '5px',
            color: '#FFFFFF'
        }
    },
    'h2, h3, small': {
        color: '#FFFFFF'
    },
    '.opacity-80': {
        opacity: 0.8,
        color: '#FFFFFF'
    }
}));