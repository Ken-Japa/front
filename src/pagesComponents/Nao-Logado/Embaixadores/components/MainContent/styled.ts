import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import { spacing } from "@/theme/variables";

export const ContentWrapper = styled("div")({
  position: "relative",
  zIndex: 10,
  padding: `${spacing.xl} 0`,
});

export const StyledContainer = styled(Container)({
  maxWidth: "lg",
});
