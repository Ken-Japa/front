import { styled, Typography, Divider } from "@mui/material";
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
});

export const SectionSubtitle = styled("p")({
  fontSize: "1.1rem",
  color: visitorColors.textSecondary,
  textAlign: "center",
  maxWidth: "800px",
  margin: "0 auto",
});

export const BackgroundImageWrapper = styled("div")({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
});

export const BackgroundOverlay = styled("div")({
  position: "absolute",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});

export const StyledDivider = styled(Divider)({
  backgroundColor: "rgba(255, 255, 255, 0.12)",
});

export const FaqLink = styled("a")({
  color: "#0D95F9",
  textDecoration: "underline",
  "&:hover": {
    color: "rgba(13, 149, 249, 0.95)",
  },
});

export const StyledTypography = styled(Typography)({
  color: visitorColors.textSecondary,
  transition: transitions.medium,
  "&:hover": {
    color: visitorColors.text,
  },
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
