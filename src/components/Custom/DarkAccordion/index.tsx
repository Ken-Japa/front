"use client";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const StyledAccordion = styled(Accordion)({
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#FFFFFF',
    '&:before': {
        display: 'none',
    },
    '&.Mui-expanded': {
        margin: '8px 0',
    },
    borderRadius: '4px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    marginBottom: '8px',
});

const StyledAccordionSummary = styled(AccordionSummary)({
    '& .MuiAccordionSummary-content': {
        margin: '12px 0',
        color: '#FFFFFF',
        fontWeight: 500,
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
        color: '#FFFFFF',
    },
});

const StyledAccordionDetails = styled(AccordionDetails)({
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#FFFFFF',
    '& a': {
        color: '#0D95F9',
        textDecoration: 'underline',
        '&:hover': {
            opacity: 0.8,
        }
    }
});

type Props = {
    title: string;
    body: string;
}

export const DarkAccordion = ({ title, body }: Props) => {
    return (
        <StyledAccordion>
            <StyledAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={body}
            >
                {title}
            </StyledAccordionSummary>
            <StyledAccordionDetails>
                <div dangerouslySetInnerHTML={{ __html: body }} />
            </StyledAccordionDetails>
        </StyledAccordion>
    );
}