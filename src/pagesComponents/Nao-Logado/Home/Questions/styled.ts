import { styled } from "@mui/material";
import { spacing } from '@/theme/variables';

export const QuestionsSection = styled("section")(({ theme }) => ({
  padding: `${spacing.md} 0`,
  "& .section-title": {
    fontSize: "2rem",
    color: "#0D95F9",
    marginBottom: spacing.lg,
    textAlign: "center",
  },
  "& .section-subtitle": {
    color: "rgba(255, 255, 255, 0.6)",
    textAlign: "center",
    marginBottom: spacing.xl,
  },
}));
