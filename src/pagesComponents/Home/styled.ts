import { styled } from "@mui/material";

export const MainContainer = styled("main")(({ theme }) => ({
  background: "linear-gradient(180deg, #000000 0%, #001529 100%)",
  overflow: "hidden",
}));

interface SectionProps {
  withPadding?: boolean;
  withBackground?: boolean;
}

export const Section = styled("section")<SectionProps>(
  ({ theme, withPadding, withBackground }) => ({
    padding: withPadding ? "80px 16px" : "0",
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
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: -1,
      },
    }),

    [theme.breakpoints.down("md")]: {
      padding: withPadding ? "40px 16px" : "0",
    },
  })
);

export const SectionTitle = styled("h2")(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: "white",
  textAlign: "center",
  marginBottom: "1rem",

  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
  },
}));

export const SectionSubtitle = styled("p")({
  color: "rgba(255, 255, 255, 0.9)",
  textAlign: "center",
  maxWidth: "800px",
  margin: "0 auto",
  marginBottom: "3rem",
});
