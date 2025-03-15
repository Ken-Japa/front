import { styled } from "@mui/material";

export const HeaderContainer = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginBottom: theme.spacing(4),

  "& .matrix-title": {
    color: "white",
    fontSize: "1.75rem",
    fontWeight: 600,
    whiteSpace: "nowrap",
    display: "inline-block",
    marginBottom: theme.spacing(1),

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    }
  }
}));