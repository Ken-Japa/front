import { ElementType } from "react";
import { styled, Paper, Button as MuiButton, ButtonProps } from "@mui/material";

export const ProfileContainer = styled("div")`
  min-height: 100vh;
  background-image: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? 'url("/assets/images/background/Perfil-Dark.jpg")'
      : 'url("/assets/images/background/Perfil-Light.jpg")'};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  transition: background-image 0.3s ease-in-out;
  padding: 2rem 0;
  margin-top: -64px; // This removes the gap at the top (adjust value if needed)
`;

export const ProfileCard = styled(Paper)`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? "rgba(19, 47, 76, 0.4)"
      : "rgba(255, 255, 255, 0.8)"};
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid
    ${({ theme }) =>
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.1)"};
  margin-bottom: 2rem; // Add spacing between cards
`;

export const ProfileTitle = styled("h1")`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const ContactButton = styled("div")`
  display: flex;
  justify-content: center;
  max-width: 800px;
  margin: 2rem auto;
`;

export const StyledContactButton = styled(MuiButton)<
  ButtonProps & {
    component?: ElementType;
  }
>`
  background: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? "rgba(19, 47, 76, 0.4)"
      : "rgba(255, 255, 255, 0.8)"};
  backdrop-filter: blur(10px);
  color: ${({ theme }) =>
    theme.palette.mode === "dark" ? "#fff" : theme.palette.primary.main};
  border: 1px solid
    ${({ theme }) =>
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.1)"
        : theme.palette.primary.main};

  &:hover {
    background: ${({ theme }) =>
      theme.palette.mode === "dark"
        ? "rgba(19, 47, 76, 0.6)"
        : "rgba(255, 255, 255, 0.9)"};
  }
`;

export const ProfileSection = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid
    ${({ theme }) =>
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.1)"};

  &:last-child {
    border-bottom: none;
  }
`;

export const ProfileInfo = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProfileLabel = styled("span")`
  color: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.7)"
      : "rgba(0, 0, 0, 0.7)"};
  font-size: 0.875rem;
`;

export const ProfileValue = styled("span")`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 1rem;
  font-weight: 500;
`;
