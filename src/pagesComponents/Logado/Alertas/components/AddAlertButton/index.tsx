import { Button } from '@mui/material';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import { AlertDialog } from '../AlertDialog';
import { useState } from 'react';

export const AddAlertButton = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleAddAlert = () => {
        setOpenDialog(true);
    };

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddAlertIcon />}
                onClick={handleAddAlert}
            >
                Adicionar Alerta
            </Button>

            <AlertDialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                alert={null}
            />
        </>
    );
};