import { Box, styled } from "@mui/material";

export const PostContainer = styled(Box)`
    padding: 4rem 0;
    background: #111111;
    min-height: 100vh;
`;

export const PostContent = styled(Box)`
    color: #fff;
    font-size: 1.1rem;
    line-height: 1.8;

    h1, h2, h3, h4, h5, h6 {
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-weight: 600;
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.75rem;
    }

    p {
        margin-bottom: 1.5rem;
    }

    ul, ol {
        margin-bottom: 1.5rem;
        padding-left: 2rem;
    }

    li {
        margin-bottom: 0.5rem;
    }

    a {
        color: ${({ theme }) => theme.palette.primary.main};
        text-decoration: none;
        
        &:hover {
            text-decoration: underline;
        }
    }

    blockquote {
        border-left: 4px solid ${({ theme }) => theme.palette.primary.main};
        padding-left: 1rem;
        margin: 1.5rem 0;
        font-style: italic;
    }

    code {
        background: rgba(255, 255, 255, 0.1);
        padding: 0.2rem 0.4rem;
        border-radius: 4px;
        font-size: 0.9em;
    }

    pre {
        background: rgba(255, 255, 255, 0.1);
        padding: 1rem;
        border-radius: 8px;
        overflow-x: auto;
        margin: 1.5rem 0;

        code {
            background: none;
            padding: 0;
        }
    }
`;