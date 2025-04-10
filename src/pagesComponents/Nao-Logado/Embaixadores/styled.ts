import { styled } from "@mui/material/styles";
import { visitorColors } from "@/theme/palette/visitor";
import { PageTransition } from "@/components/Utils/PageTransition";

export const EmbaixadoresSection = styled("main")({
  minHeight: "100vh",
  position: "relative",

  "& .background-container": {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
  },

  "& .overlay": {
    position: "absolute",
    inset: 0,
    backgroundColor: visitorColors.overlayS,
    backdropFilter: visitorColors.blur,
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
