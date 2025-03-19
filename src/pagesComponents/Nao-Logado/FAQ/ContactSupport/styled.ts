import { styled } from "@mui/material";

const CONTAINER_STYLES = {
    marginTop: "48px",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    padding: "32px",
    borderRadius: "8px",
    width: "100%",
} as const;

const TITLE_STYLES = {
    fontSize: "1.25rem",
    color: "#0D95F9",
    marginBottom: "16px",
} as const;

const TEXT_STYLES = {
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "24px",
} as const;

const BUTTON_STYLES = {
    padding: "10px 24px",
    backgroundColor: "#0D95F9",
    color: "white",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    "&:hover": {
        backgroundColor: "rgba(13, 149, 249, 0.9)",
    }
} as const;

export const SupportContainer = styled("div")(({ theme }) => ({
    ...CONTAINER_STYLES,
    "& .support-title": TITLE_STYLES,
    "& .support-text": TEXT_STYLES,
    "& .support-button": BUTTON_STYLES
}));