import { styled } from "@mui/material/styles";
import { PageTransition } from "@/components/Utils/PageTransition";

export const SectionJoinTeam = styled("section")({
  minHeight: "100vh",
  position: "relative",
  paddingBottom: "64px",
  paddingTop: "64px",

  "& .background-image": {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    "&::after": {
      content: '""',
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      backdropFilter: "blur(2px)",
    },
  },

  "& .container": {
    position: "relative",
    zIndex: 1,
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
  },

  "& .content-wrapper": {
    minHeight: "calc(100vh - 4rem)",
    display: "flex",
    alignItems: "center",
  },
});

export const StyledPageTransition = styled(PageTransition)({
  width: "100%",
});

export const BackgroundImage = styled("div")<{ isLoaded: boolean }>(
  ({ isLoaded }) => ({
    filter: !isLoaded ? "grayscale(1)" : "none",
    transition: "filter 0.5s ease-in-out",
    width: "100%",
    height: "100%",
  })
);
