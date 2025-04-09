import { styled, Stack, Typography } from "@mui/material";
import { spacing } from "@/theme/variables";
import { visitorColors } from "@/theme/palette/visitor";

export const HeaderContainer = styled("div")({
  textAlign: "center",
  marginBottom: spacing.lg,
});

export const SubtitleText = styled(Typography)({
  opacity: 0.9,
  color: visitorColors.textSecondary,
});

export const HeaderSkeletonStyled = styled(Stack)({
  width: "100%",
  minHeight: "120px",
});
