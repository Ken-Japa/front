import { styled } from "@mui/material";

const WRAPPER_STYLES = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "16px",
} as const;

const TITLE_STYLES = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#0D95F9",
} as const;

const SUBTITLE_STYLES = {
    color: "rgba(255, 255, 255, 0.9)",
    marginTop: "16px",
    fontSize: "1.1rem",
} as const;

const RESPONSIVE_STYLES = (theme: any) => ({
    [theme.breakpoints.down('sm')]: {
        fontSize: "2rem",
    }
});

const SUBTITLE_RESPONSIVE = (theme: any) => ({
    [theme.breakpoints.down('sm')]: {
        fontSize: "1rem",
    }
});

export const HeaderContainer = styled("div")(({ theme }) => ({
    textAlign: "center",
    marginBottom: "48px",

    "& .header-icon-wrapper": WRAPPER_STYLES,
    "& .title": {
        ...TITLE_STYLES,
        ...RESPONSIVE_STYLES(theme)
    },
    "& .subtitle": {
        ...SUBTITLE_STYLES,
        ...SUBTITLE_RESPONSIVE(theme)
    }
}));