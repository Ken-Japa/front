import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export interface AccordionCustomTheme {
  background: string;
  titleColor?: string;
  bodyColor?: string;
  borderColor: string;
  hoverColor?: string;
  linkColor?: string;
  customBackground?: string;
  customBorderColor?: string;
  customTitleColor?: string;
  customContentBackground?: string;  // New prop
}

export const lightTheme: AccordionCustomTheme = {
  background: '#FFFFFF',
  titleColor: '#004C86',
  bodyColor: '#000000',
  borderColor: '#E5E7EB',
  linkColor: '#0D95F9'
};

export const darkTheme: AccordionCustomTheme = {
  background: 'rgba(0, 0, 0, 0.8)',
  titleColor: '#FFFFFF',
  bodyColor: '#FFFFFF',
  borderColor: 'rgba(255, 255, 255, 0.1)',
  linkColor: '#0D95F9'
};

interface StyledProps {
  customTheme: AccordionCustomTheme;
}

export const StyledAccordion = styled(Accordion, {
  shouldForwardProp: (prop) => prop !== 'customTheme'
})<StyledProps>(({ customTheme }) => ({
  boxShadow: 'none',
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: '8px 0',
  },
  borderRadius: '4px',
  border: `1px solid ${customTheme.customBorderColor || customTheme.borderColor}`,
  marginBottom: '8px',
  backgroundColor: customTheme.customBackground || customTheme.background,
}));

export const StyledAccordionSummary = styled(AccordionSummary, {
  shouldForwardProp: (prop) => prop !== 'customTheme'
})<StyledProps>(({ customTheme }) => ({
  backgroundColor: customTheme.customBackground || customTheme.background,
  '& .MuiAccordionSummary-content': {
    margin: '12px 0',
    color: customTheme.customTitleColor || customTheme.titleColor,
    fontWeight: 500,
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: customTheme.customTitleColor || customTheme.titleColor,
  },
}));

export const StyledAccordionDetails = styled(AccordionDetails, {
  shouldForwardProp: (prop) => prop !== 'customTheme'
})<StyledProps>(({ customTheme }) => ({
  backgroundColor: customTheme.customContentBackground || customTheme.background,
  padding: '16px 24px',
  color: customTheme.bodyColor,
  borderTop: `1px solid ${customTheme.borderColor}`,
  '& p': {
    marginBottom: '1rem',
    lineHeight: '1.5',
  },
  '& a': {
    color: customTheme.linkColor,
    textDecoration: 'underline',
    '&:hover': {
      opacity: 0.8,
    }
  },
  '& ul': {
    marginBottom: '1rem',
    paddingLeft: '1.5rem',
  },
  '& li': {
    marginBottom: '0.5rem',
  }
}));