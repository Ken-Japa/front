import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import React from 'react';

export const EmpresaContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  maxWidth: 1200,
  margin: '0 auto',
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: string;
  value: string;
}

// Move TabPanel component to a separate .tsx file
// This is a better approach than using JSX in a .ts file
