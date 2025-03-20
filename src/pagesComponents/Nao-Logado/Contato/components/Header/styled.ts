import { styled, Stack, Typography } from "@mui/material";

export const HeaderContainer = styled("div")({
  textAlign: "center",
  marginBottom: "2rem",
});

export const SubtitleText = styled(Typography)(({ theme }) => ({
  opacity: 0.9,
}));

export const HeaderSkeletonStyled = styled(Stack)({
  width: "100%",
  minHeight: "120px",
});
