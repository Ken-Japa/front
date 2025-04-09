import { Box, Stack, Skeleton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { borderRadius, spacing } from "@/theme/variables";
import { visitorColors } from "@/theme/palette/visitor";

export const CallToActionContainer = styled(Box)({
  marginTop: spacing.xl,
  textAlign: "center",
});

export const ContentStack = styled(Stack)({
  background: visitorColors.backgroundDark,
  backdropFilter: visitorColors.blur,
  padding: spacing.lg,
  borderRadius: borderRadius.md,
  
  "& .cta-question": {
    color: `${visitorColors.text}e6`, // 90% opacity
  },
  
  "& .cta-message": {
    color: visitorColors.text,
  }
});

export const StyledSkeleton = styled(Skeleton)({
  backgroundColor: visitorColors.skeletonBackground,
});