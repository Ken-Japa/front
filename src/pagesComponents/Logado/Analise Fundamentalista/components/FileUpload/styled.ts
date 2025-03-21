import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const UploadContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
}));

export const DropZone = styled(Box)(({ theme }) => ({
  border: `2px dashed ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.paper,
  cursor: 'pointer',
  transition: 'border-color 0.3s ease',
  '&:hover': {
    borderColor: theme.palette.primary.dark,
  },
}));