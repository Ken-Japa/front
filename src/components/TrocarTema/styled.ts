import { styled } from "@mui/material/styles";
import { ProfileSection } from "@/pagesComponents/Logado/Perfil/styled";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export const ThemeContainer = styled(ProfileSection)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ThemeControlContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DarkIcon = styled(DarkModeIcon)`
  color: #4fc3f7;
`;

export const LightIcon = styled(LightModeIcon)`
  color: #ffb74d;
`;
