"use client";

import { styled } from "@mui/material";

export const SectionSolutions = styled('section')({
    minHeight: '100vh',
    width: '100%',
    backgroundImage: 'url("/assets/images/background/SOLUTIONS.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    '& .opacity': {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '64px 0'
    }
});

export const FeatureCard = styled('div')({
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(10px)',
    borderRadius: '8px',
    padding: '32px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
    },
    '& .icon-container': {
        color: '#00ff88',
        marginBottom: '16px',
    },
    '& .feature-title': {
        color: 'white',
        marginBottom: '16px',
    },
    '& .feature-description': {
        color: 'rgba(255, 255, 255, 0.7)',
    }
});