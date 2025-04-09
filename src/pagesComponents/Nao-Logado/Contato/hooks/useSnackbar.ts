import { useState } from 'react';
import { SnackbarState, SnackbarSeverity } from '../types';

export const useSnackbar = () => {
    const [snackbar, setSnackbar] = useState<SnackbarState>({
        open: false,
        message: '',
        severity: 'success'
    });

    const showSnackbar = (
        message: string, 
        severity: SnackbarSeverity = 'success', 
        open: boolean = true
    ) => {
        setSnackbar({ message, severity, open });
    };

    return { snackbar, showSnackbar };
};