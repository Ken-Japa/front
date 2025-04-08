import { styled } from "@mui/material";

export const SectionSolutions = styled("section")`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;

  .video-background {
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -3;
  }

  .video-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: -2;
  }

  .image-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: -2;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: -1;
  }
`;

export const ContentWrapper = styled("div")`
  position: relative;
  z-index: 1;
  padding-bottom: 80px;
  width: 100%;
`;
