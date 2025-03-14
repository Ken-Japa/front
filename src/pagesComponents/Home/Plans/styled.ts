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

  ".plans": {
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px 16px", // Adjusted padding for mobile
    maxWidth: "1920px",
    margin: "0 auto",
    
    [theme.breakpoints.down('md')]: {
      padding: "24px 12px",
    }
  },

  ".background-image": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    "& img": {
      objectFit: "cover",
      objectPosition: "center",
    }
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1,
  },

  "& > *": {
    position: "relative",
    zIndex: 2,
  },
}));

export const CardContainer = styled(Stack)(({ theme }) => ({
  maxWidth: "250px",
  width: "100%",
  padding: "20px",
  backgroundColor: "rgba(0,0,0,0.5)",
  boxShadow: "2px 2px 5px #fff",
  borderRadius: "5px",
  color: "#FFFFFF",
  
  [theme.breakpoints.down('md')]: {
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
