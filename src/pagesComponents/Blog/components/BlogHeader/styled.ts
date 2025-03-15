import { Box, styled } from "@mui/material";

export const HeaderContainer = styled(Box)`
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
  text-align: center;
`;

export const HeaderContent = styled(Box)`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;

  h2 {
    margin: 0 auto;
  }
`;
