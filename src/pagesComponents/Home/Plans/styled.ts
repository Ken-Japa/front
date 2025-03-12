"use client";

import { Stack, styled } from "@mui/material";

export const SectionPlans = styled('section')(({ theme }) => ({     
    '.plans': {
        width: '100%',
        background: 'url("assets/images/background/PLANS.jpg") no-repeat center',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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