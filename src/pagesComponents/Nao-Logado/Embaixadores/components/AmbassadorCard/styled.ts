import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { borderRadius, spacing, transitions } from "@/theme/variables";
import { visitorColors } from "@/theme/palette/visitor";

export const CardContainer = styled(Box)({
  background: visitorColors.backgroundLight,
  backdropFilter: visitorColors.blur,
  borderRadius: borderRadius.md,
  padding: spacing.lg,
  border: `1px solid ${visitorColors.borderLight}`,
  transition: transitions.medium,
  
  "&:hover": {
    borderColor: `${visitorColors.gold}4d`, // 30% opacity
  },
  
  "& .ambassador-name": {
    color: visitorColors.text,
    fontWeight: "bold",
  },
  
  "& .ambassador-role": {
    color: visitorColors.gold,
  },
  
  "& .ambassador-testimonial": {
    color: `${visitorColors.text}cc`, // 80% opacity
  }
});