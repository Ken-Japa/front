import { styled } from "@mui/material/styles";
import { visitorColors } from "@/theme/palette/visitor";

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
    backgroundColor: visitorColors.backgroundOverlay,
    backdropFilter: visitorColors.blur,
  }
});