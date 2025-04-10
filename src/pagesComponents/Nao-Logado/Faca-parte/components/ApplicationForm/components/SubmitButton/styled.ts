import { styled, Button } from "@mui/material";
import { transitions } from "@/theme/variables";
import { visitorColors } from "@/theme/palette/visitor";

export const StyledSubmitButton = styled(Button)({
  height: "56px",
  backgroundColor: visitorColors.primary,
  transition: transitions.medium,
  "&:hover": {
    backgroundColor: visitorColors.buttonPrimary,
  },
  "&:disabled": {
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    color: "rgba(255, 255, 255, 0.3)",
  }
});