"use client";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const StyledAccordion = styled(Accordion)({
    boxShadow: 'none',
    '&:before': {
        display: 'none',
    },
    '&.Mui-expanded': {
        margin: '8px 0',
    },
    borderRadius: '4px',
    border: '1px solid #E5E7EB',
    marginBottom: '8px',
    backgroundColor: '#FFFFFF',
});

const StyledAccordionSummary = styled(AccordionSummary)({
    backgroundColor: '#FFFFFF',
    '& .MuiAccordionSummary-content': {
        margin: '12px 0',
        color: '#004C86',
        fontWeight: 500,
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
        color: '#004C86',
    },
});

const StyledAccordionDetails = styled(AccordionDetails)({
    backgroundColor: '#FFFFFF',
    padding: '16px 24px',
    color: '#4A4A4A',
    '& p': {
        marginBottom: '1rem',
        lineHeight: '1.5',
    },
    '& a': {
        color: '#0D95F9',
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
});

type Props = {
    title: string;
    body: string;
}

export const CustomAccordion = ({ title, body }: Props) => {
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