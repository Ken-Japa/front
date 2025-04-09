import { Box, styled } from "@mui/material";

export const BlogContainer = styled(Box)`
  position: relative;
  min-height: 100vh;
  background-color: #000;
  isolation: isolate;

  .background-image {
    position: fixed !important;
    z-index: 0;
    bottom: 0;
    height: 100vh !important;
  }
`;

export const BlogContent = styled(Box)`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  padding: 2rem 0;
  padding-bottom: 112px;
`;
