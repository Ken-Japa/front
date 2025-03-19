import { Dialog, styled, IconButton } from "@mui/material";

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-container": {
    height: "100vh",
    padding: theme.spacing(2),

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },

  "& .MuiDialog-paper": {
    minHeight: "80vh",
    position: "relative",
    margin: theme.spacing(2),
    width: "100%",
    overflow: "hidden",
    backgroundColor: "transparent",

    [theme.breakpoints.down("sm")]: {
      margin: 0,
      minHeight: "100vh",
    },

    "& .background-image": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
    },

    "& .content": {
      position: "relative",
      zIndex: 2,
      height: "100%",
      width: "100%",
      overflow: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(4, 2),

      "&::-webkit-scrollbar": {
        width: "8px",
      },
      "&::-webkit-scrollbar-track": {
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "4px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "rgba(255, 255, 255, 0.3)",
        borderRadius: "4px",
        "&:hover": {
          background: "rgba(255, 255, 255, 0.4)",
        },
      },
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
  },
}));

export const StyledCloseButton = styled(IconButton)(({ theme }) => ({
  position: "fixed",
  right: "calc(50% - 450px)",
  top: theme.spacing(5),
  color: "white",
  zIndex: 1300,
  transition: "all 0.3s ease",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  margin: theme.spacing(1),
  padding: theme.spacing(1),

  "&:hover": {
    opacity: 0.8,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },

  [theme.breakpoints.down("md")]: {
    right: theme.spacing(2),
    top: theme.spacing(2),
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.5),
  },
}));
