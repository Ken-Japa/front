import { styled } from "@mui/material/styles";

export const SectionFAQ = styled("section")({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  padding: "2rem 0",

  "& .background-image": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },

  "& .content": {
    position: "relative",
    zIndex: 1,
    width: "100%",
  },
});
