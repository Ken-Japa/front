import { styled } from "@mui/material/styles";

const BACKGROUND_STYLES = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -1,
    "& > span": {
        height: "100vh !important",
    },
    "& img": {
        objectFit: "cover",
        objectPosition: "center",
    },
} as const;

const CONTENT_STYLES = {
    position: "relative",
    zIndex: 1,
    width: "100%",
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 24px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(8px)",
} as const;

export const SectionFAQ = styled("section")(({ theme }) => ({
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: "2rem 0",
    backgroundColor: "rgba(0, 0, 0, 0.4)",

    "& .background-image": BACKGROUND_STYLES,
    "& .content-container": {
        ...CONTENT_STYLES,
        [theme.breakpoints.down("sm")]: {
            padding: "24px 16px",
        },
    },
}));
