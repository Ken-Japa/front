import { styled } from "@mui/material";
import { spacing, borderRadius, transitions } from "@/theme/variables";
import { visitorColors } from "@/theme/palette/visitor";

export const MainContainer = styled("main")({
  background: visitorColors.backgroundGradient,
  overflow: "hidden",
});

interface SectionProps {
  withPadding?: boolean;
  withBackground?: boolean;
}

export const Section = styled("section")<SectionProps>(
  ({ withPadding, withBackground }) => ({
    padding: withPadding ? `${spacing.xxl} ${spacing.md}` : "0",
    position: "relative",
    minHeight: withPadding ? "auto" : "100vh",
    display: "flex",
    alignItems: "center",
    isolation: "isolate",

    ...(withBackground && {
      "&::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        backgroundImage: 'url("/assets/images/background/Precos.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.9,
        zIndex: -1,
      },
      "&::after": {
        content: '""',
        position: "absolute",
        inset: 0,
        backgroundColor: visitorColors.overlay,
        zIndex: -1,
      },
    }),

    "@media (max-width: 900px)": {
      padding: withPadding ? `${spacing.xl} ${spacing.md}` : "0",
    },
  })
);

export const SectionTitle = styled("h2")({
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: visitorColors.primary,
  textAlign: "center",
  marginBottom: spacing.md,
});

export const SectionSubtitle = styled("p")({
  fontSize: "1.1rem",
  color: visitorColors.textSecondary,
  textAlign: "center",
  maxWidth: "800px",
  margin: "0 auto",
  lineHeight: 1.6,
});

export const ContentContainer = styled("div")({
  backgroundColor: visitorColors.backgroundLight,
  padding: spacing.xl,
  borderRadius: borderRadius.md,
  backdropFilter: visitorColors.blur,
  transition: transitions.medium,

  "&:hover": {
    backgroundColor: visitorColors.backgroundMedium,
  },
});
