import { styled } from '@mui/material/styles';
import { Box, Tabs, Tab } from '@mui/material';

export const TabsContainer = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : 'white',
}));

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTab-root': { 
    color: theme.palette.mode === 'dark' ? theme.palette.text.primary : 'black' 
  },
  '& .Mui-selected': { 
    color: theme.palette.mode === 'dark' ? theme.palette.primary.main : '#1976d2', 
    fontWeight: 'bold' 
  },
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.main : '#1976d2',
  }
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
}));