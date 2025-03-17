import { Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { CustomButton } from '@/components/Custom/Button';
import { motion, AnimatePresence } from 'framer-motion';

interface EditDialogProps {
    open: boolean;
    title: string;
    value: string;
    onClose: () => void;
    onSave: (value: string) => void;
}

export const EditDialog = ({ open, title, value, onClose, onSave }: EditDialogProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        onSave(formData.get('value') as string);
    };

    return (
        <AnimatePresence>
            {open && (
                <Dialog
                    open={open}
                    onClose={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <form onSubmit={handleSubmit}>
                            <DialogTitle>Editar {title}</DialogTitle>
                            <DialogContent>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    name="value"
                                    label={title}
                                    defaultValue={value}
                                    fullWidth
                                />
                            </DialogContent>
                            <DialogActions>
                                <CustomButton value="Cancelar" onClick={onClose} color="inherit" />
                                <CustomButton value="Salvar" type="submit" variant="contained" />
                            </DialogActions>
                        </form>
                    </motion.div>
                </Dialog>
            )}
        </AnimatePresence>
    );
};