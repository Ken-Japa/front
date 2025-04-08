import { styled } from '@mui/material/styles';
import { Paper, Box, Typography } from '@mui/material';

export const DerivativosContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : 'white',
  color: theme.palette.mode === 'dark' ? theme.palette.text.primary : 'black',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
}));

export const VencimentoInfo = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const TitleTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.text.primary : 'black',
  textAlign: 'center',
}));

export const SubtitleTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.text.primary : 'black',
  textAlign: 'center',
}));

export const LoadingContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  padding: 3,
});
