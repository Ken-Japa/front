"use client";

import { styled } from "@mui/material";
import theme from "@/theme/mui";

export const SectionWelcome = styled("section")({
  backgroundImage: 'url("/assets/images/background/HOME.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  width: "100%",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  "& .home": {
    position: "relative",
    zIndex: 1,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  "& .welcome": {
    display: "flex",
    height: "140px",
    width: "100%",
  },
  "& .title-left": {
    textAlign: "end",
    flex: "1",
    marginRight: "40px",
    gap: "40px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  "& .title-right": {
    display: "flex",
    flex: "1",
    alignItems: "end",
    marginLeft: "180px",
    marginBottom: "40px",
    fontSize: "40px",
    fontWeight: "bold",
  },
  "& .free-test": {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "200px",
  },
  "& .container-free-test": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    marginRight: "40px",
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingBottom: "20px",
    width: "max-content",
    borderRadius: "100px",
    backdropFilter: "blur(10px)",
    border: `1px solid ${theme.palette.info.main}`,
  },
});
