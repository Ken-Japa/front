import { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField
} from '@mui/material';

interface RenamePositionDialogProps {
    open: boolean;
    onClose: () => void;
    positionId: number | null;
}

export const RenamePositionDialog = ({ open, onClose, positionId }: RenamePositionDialogProps) => {
    const [newName, setNewName] = useState('');

    const handleSubmit = () => {
        // Rename position logic will be implemented
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle variant="h4" >Renomear Posição</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Novo Nome"
                    fullWidth
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancelar</Button>
                <Button onClick={handleSubmit} variant="contained">
                    Renomear
                </Button>
            </DialogActions>
        </Dialog>
    );
};