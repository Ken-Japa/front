import { styled } from "@mui/material";
import { spacing, borderRadius, transitions } from "@/theme/variables";

export const NewsletterContainer = styled("div")(({ theme }) => ({
  width: "100vw",
  marginLeft: "calc(-50vw + 50%)",
  marginRight: "calc(-50vw + 50%)",
  padding: `${spacing.xxl} ${spacing.md}`,
  backgroundColor: "rgba(13, 149, 249, 0.1)",
  backdropFilter: "blur(4px)",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    padding: `${spacing.xl} ${spacing.md}`,
  },
}));

export const NewsletterForm = styled("form")(({ theme }) => ({
  width: "100%",
  maxWidth: "500px",
  padding: `0 ${spacing.md}`,

  [theme.breakpoints.down("sm")]: {
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
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    color: theme.palette.common.white,
    width: "100%",
    "&::placeholder": {
      color: "rgba(255, 255, 255, 0.5)",
    },
    "&:focus": {
      outline: "none",
      borderColor: "#0D95F9",
    },
  },

  "& button": {
    padding: `${spacing.sm} ${spacing.md}`,
    borderRadius: borderRadius.sm,
    backgroundColor: "#0D95F9",
    color: "white",
    fontWeight: 500,
    transition: transitions.medium,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));
