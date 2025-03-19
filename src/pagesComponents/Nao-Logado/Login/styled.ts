import { Dialog, styled, IconButton } from "@mui/material";

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-container": {
    height: "100vh",
  },

  "& .MuiDialog-paper": {
    height: "100vh",
    maxHeight: "100vh",
    width: "100vw",
    maxWidth: "100vw !important",
    margin: 0,
    borderRadius: 0,
    position: "relative",
    overflow: "hidden",
    backgroundColor: "transparent",

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },

    "& .background-image": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(2px)",
      zIndex: 1,
    },

    "& .content": {
      position: "relative",
      zIndex: 2,
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: theme.spacing(8, 2),
    },
  },
}));

export const StyledCloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(3),
  top: theme.spacing(3),
  color: "white",
  zIndex: 10,
  transition: "all 0.3s ease",
  backgroundColor: "rgba(0, 0, 0, 0.2)",

  "&:hover": {
    opacity: 0.8,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },

  [theme.breakpoints.down("sm")]: {
    right: theme.spacing(2),
    top: theme.spacing(2),
  },
}));
