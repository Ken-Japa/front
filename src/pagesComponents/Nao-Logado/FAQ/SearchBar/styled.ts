import { styled } from "@mui/material";

const CONTAINER_STYLES = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
} as const;

const WRAPPER_STYLES = {
    position: "relative",
    width: "100%",
    maxWidth: "500px",
    marginBottom: "32px",
} as const;

const INPUT_STYLES = {
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
} as const;

const ICON_STYLES = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    color: "rgba(255, 255, 255, 0.7)",
} as const;

const CLEAR_BUTTON_STYLES = {
    ...ICON_STYLES,
    right: "12px",
    cursor: "pointer",
    transition: "color 0.3s ease",
    "&:hover": {
        color: "white",
    }
} as const;

const SEARCH_ICON_STYLES = {
    ...ICON_STYLES,
    left: "12px",
} as const;

export const SearchContainer = styled("div")(({ theme }) => ({
    ...CONTAINER_STYLES,
    "& .search-wrapper": WRAPPER_STYLES,
    "& .search-input": INPUT_STYLES,
    "& .search-icon": SEARCH_ICON_STYLES,
    "& .clear-button": CLEAR_BUTTON_STYLES
}));