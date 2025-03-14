import { styled, Typography } from "@mui/material";

export const HeaderContainer = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(4),
  width: "100%",
  textAlign: "center",
}));

export const Title = styled("div")(({ theme }) => ({
  color: "white",
  fontSize: "1.75rem",
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  fontFamily: '"Roboto Mono", monospace',
  width: "100%",

  "& .matrix-title": {
    whiteSpace: "nowrap",
    display: "inline-block",
    fontSize: "1.75rem",
    fontWeight: "600",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",

    "& .matrix-title": {
      fontSize: "1.5rem !important",
    },
  },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  color: "rgba(255, 255, 255, 0.7)",
  fontSize: "1rem",

  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
  },
}));
