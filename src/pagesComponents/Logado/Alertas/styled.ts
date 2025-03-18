import { styled } from "@mui/material/styles";

export const BackgroundContainer = styled("div")`
  min-height: 100vh;
  background-image: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/assets/images/background/Alertas-Dark.jpg")'
      : 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("/assets/images/background/Alertas-Light.jpg")'};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  transition: background-image 0.3s ease-in-out;
  padding: 24px 0;
  margin-top: -64px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 16px 0;
  }
`;
