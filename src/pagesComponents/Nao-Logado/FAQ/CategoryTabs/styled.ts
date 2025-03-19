import { styled } from "@mui/material";

const BUTTON_STYLES = {
    padding: "8px 16px",
    borderRadius: "24px",
    transition: "all 0.3s ease",
    fontSize: "0.95rem",
} as const;

const ACTIVE_STYLES = {
    backgroundColor: "#0D95F9",
    color: "white",
} as const;

const INACTIVE_STYLES = {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    color: "rgba(255, 255, 255, 0.85)",
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.12)",
    }
} as const;

export const TabsContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    justifyContent: "center",
    marginBottom: "32px",

    "& .category-button": {
        ...BUTTON_STYLES,

        "&.active": ACTIVE_STYLES,
        "&.inactive": INACTIVE_STYLES
    }
}));