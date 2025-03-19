import { type FC } from 'react';

import { Alert, Snackbar } from "@mui/material";

interface SnackbarNotificationProps {
    open: boolean;
    message: string;
    severity: 'success' | 'error';
    onClose: () => void;
}

export const SnackbarNotification: FC<SnackbarNotificationProps> = ({
    open,
    message,
    severity,
    onClose
}) => (
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