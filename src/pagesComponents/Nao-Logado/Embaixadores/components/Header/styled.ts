import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import { spacing } from "@/theme/variables";
import { visitorColors } from "@/theme/palette/visitor";

export const HeaderContainer = styled(Stack)({
  textAlign: "center",
  alignItems: "center",
  
  "& .header-title": {
    color: visitorColors.gold,
    fontWeight: "bold",
  },
  
  "& .header-subtitle": {
    color: visitorColors.text,
  },
  
  "& .header-description": {
    color: `${visitorColors.text}cc`,
    maxWidth: "32rem",
  }
});