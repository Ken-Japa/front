import { styled } from "@mui/material";

export const SearchContainer = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& .search-wrapper": {
    position: "relative",
    width: "100%",
    maxWidth: "500px",
    marginBottom: "32px",
  },

  "& .search-input": {
    width: "100%",
    padding: "12px 40px",
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "8px",
    outline: "none",
    transition: "all 0.3s ease",

    "&:focus": {
      borderColor: "#0D95F9",
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    }
  },

  "& .search-icon": {
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "rgba(255, 255, 255, 0.7)",
  },

  "& .clear-button": {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "rgba(255, 255, 255, 0.7)",
    cursor: "pointer",
    transition: "color 0.3s ease",

    "&:hover": {
      color: "white",
    }
  }
}));