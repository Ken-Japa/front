import { useState } from 'react';
import AddAlertIcon from '@mui/icons-material/AddAlert';

import { AlertDialog } from '../AlertDialog';
import { StyledAddButton } from './styled';

export const AddAlertButton = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleAddAlert = () => {
        setOpenDialog(true);
    };

    return (
        <>
            <StyledAddButton
                variant="contained"
                startIcon={<AddAlertIcon />}
                onClick={handleAddAlert}
            >
                Adicionar Alerta
            </StyledAddButton>

            <AlertDialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                alert={null}
            />
        </>
    );
};