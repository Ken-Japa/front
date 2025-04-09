import { styled } from "@mui/material";
import { spacing, borderRadius, transitions } from "@/theme/variables";
import { visitorColors } from "@/theme/palette/visitor";

export const NewsletterContainer = styled("div")({
  width: "100vw",
  marginLeft: "calc(-50vw + 50%)",
  marginRight: "calc(-50vw + 50%)",
  padding: `${spacing.xxl} ${spacing.md}`,
  backgroundColor: visitorColors.backgroundPrimary,
  backdropFilter: "blur(4px)",
  textAlign: "center",

  "@media (max-width: 600px)": {
    padding: `${spacing.xl} ${spacing.md}`,
  },
});

export const NewsletterForm = styled("form")({
  width: "100%",
  maxWidth: "500px",
  padding: `0 ${spacing.md}`,

  "@media (max-width: 600px)": {
    "& .MuiStack-root": {
      flexDirection: "column",
      gap: spacing.md,
    },
    "& button": {
      width: "100%",
    },
  },

  "& input": {
    flex: 1,
    padding: `${spacing.sm} ${spacing.md}`,
    borderRadius: borderRadius.sm,
    backgroundColor: visitorColors.backgroundLight,
    border: `1px solid ${visitorColors.divider}`,
    color: visitorColors.text,
    width: "100%",
    "&::placeholder": {
      color: visitorColors.textMuted,
    },
    "&:focus": {
      outline: "none",
      borderColor: visitorColors.primary,
    },
  },
});
