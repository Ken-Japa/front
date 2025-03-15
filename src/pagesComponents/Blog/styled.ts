import { Box, styled } from "@mui/material";

export const BlogContainer = styled(Box)`
  background: linear-gradient(to right, #111111, #1a1a1a);
  position: relative;
  min-height: 100vh;

  &::after {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url("/assets/images/background/BlogHeader.jpg") center center;
    background-size: cover;
    opacity: 0.1;
    z-index: 0;
  }
`;

export const BlogContent = styled(Box)`
  position: relative;
  z-index: 1;
`;