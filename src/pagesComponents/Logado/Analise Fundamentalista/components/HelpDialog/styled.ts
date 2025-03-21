import { Dialog, DialogTitle, styled } from "@mui/material";

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    backgroundColor: theme.palette.background.paper,
    backdropFilter: "blur(8px)",
  },
}));

export const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  borderBottom: `1px solid ${theme.palette.divider}`,
  fontWeight: 600,
  boxShadow: `0 1px 3px ${theme.palette.grey[200]}`,
}));

export const StepsList = styled("ul")(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  "& li": {
    marginBottom: theme.spacing(1),
  },
  "& .highlight": {
    color: theme.palette.error.light,
    fontWeight: 600,
  },
}));
