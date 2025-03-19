import { type FC } from 'react';
import { Snackbar, Alert } from "@mui/material";

interface FormSnackbarProps {
    open: boolean;
    message: string;
    severity: 'success' | 'error';
    onClose: () => void;
}

export const FormSnackbar: FC<FormSnackbarProps> = ({ open, message, severity, onClose }) => (
    <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={onClose}
    >
        <Alert
            onClose={onClose}
            severity={severity}
            sx={{ width: '100%' }}
        >
            {message}
        </Alert>
    </Snackbar>
);