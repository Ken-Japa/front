import { Stack, styled } from "@mui/material";

export const SectionPlans = styled("section")(({ theme }) => ({
  width: "100vw",
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "calc(-50vw + 50%)",
  marginRight: "calc(-50vw + 50%)",
  background: "transparent",

  ".plans": {
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px 16px",
    maxWidth: "1920px",
    margin: "0 auto",

    [theme.breakpoints.down("md")]: {
      padding: "24px 12px",
    },
  },
}));

export const CardContainer = styled(Stack)(({ theme }) => ({
  maxWidth: "250px",
  width: "100%",
  padding: "20px",
  backgroundColor: "rgba(0,0,0,0.5)",
  boxShadow: "2px 2px 5px rgba(255, 255, 255, 0.1)",
  borderRadius: "5px",
  color: "#FFFFFF",
  backdropFilter: "blur(8px)",

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    margin: "0 auto",
  },
  ul: {
    fontSize: "13px",
    listStyle: "inside",
    li: {
      marginBottom: "5px",
      color: "#FFFFFF",
    },
  },
  "h2, h3, small": {
    color: "#FFFFFF",
  },
  ".opacity-80": {
    opacity: 0.8,
    color: "#FFFFFF",
  },
}));
