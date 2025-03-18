import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const SectionTitle = styled(Typography)(({ theme }) => ({
  color:
    theme.palette.mode === "dark"
      ? theme.palette.grey[100]
      : theme.palette.grey[900],
  fontWeight: 600,
  position: "relative",
  textAlign: "center",
  marginBottom: theme.spacing(4),
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: -8,
    left: "50%",
    transform: "translateX(-50%)",
    width: 60,
    height: 3,
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
  },
}));
