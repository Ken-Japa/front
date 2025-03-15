"use client";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ReactNode } from 'react';
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
  lightTheme,
  darkTheme
} from './styled';

interface Props {
  title: string;
  children?: ReactNode;
  body?: string;
  variant?: 'light' | 'dark';
  className?: string;
  titleColor?: string;
  bodyColor?: string;
}

export const CustomAccordion = ({ 
  title, 
  children,
  body,
  variant = 'light',
  className,
  titleColor,
  bodyColor
}: Props) => {
  const baseTheme = variant === 'light' ? lightTheme : darkTheme;
  const customTheme = {
    ...baseTheme,
    titleColor: titleColor || baseTheme.titleColor,
    bodyColor: bodyColor || baseTheme.bodyColor
  };

  const content = body ? (
    <div dangerouslySetInnerHTML={{ __html: body }} />
  ) : children;

  return (
    <StyledAccordion customTheme={customTheme} className={className}>
      <StyledAccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${title}-content`}
        id={`${title}-header`}
        customTheme={customTheme}
      >
        {title}
      </StyledAccordionSummary>
      <StyledAccordionDetails customTheme={customTheme}>
        {content}
      </StyledAccordionDetails>
    </StyledAccordion>
  );
};