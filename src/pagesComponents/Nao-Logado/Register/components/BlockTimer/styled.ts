import { styled, Box, Typography } from "@mui/material";
import { spacing, borderRadius } from "@/theme/variables";
import { visitorColors } from "@/theme/palette/visitor";

export const BlockTimerContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: spacing.xl,
  backgroundColor: `${visitorColors.backgroundDark}cc`,
  backdropFilter: visitorColors.blur,
  borderRadius: borderRadius.md,
  maxWidth: "400px",
  width: "100%",
  textAlign: "center",
});

export const TimerTitle = styled(Typography)({
  color: visitorColors.error,
  marginBottom: spacing.md,
  fontWeight: 600,
});

export const TimerText = styled(Typography)({
  color: visitorColors.text,
  marginBottom: spacing.lg,
});

export const TimerDisplay = styled(Typography)({
  color: visitorColors.primary,
  fontSize: "2rem",
  fontWeight: 700,
  fontFamily: '"Roboto Mono", monospace',
  marginBottom: spacing.lg,
});

export const TimerMessage = styled(Typography)({
  color: `${visitorColors.text}cc`,
});