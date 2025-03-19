import { Dialog, IconButton, styled } from "@mui/material";

export const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    background: transparent;
    box-shadow: none;
    margin: 0;
    max-width: none;
    width: 100%;
    height: 100vh;
    max-height: none;
    
    .background-image {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: -1;
    }

    .content {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      overflow-y: auto;
    }
  }
`;

export const StyledCloseButton = styled(IconButton)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: white;
  z-index: 10;
  
  &:hover {
    color: #0D95F9;
  }
`;
