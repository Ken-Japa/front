import { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { SearchContainer } from './styled';

interface Commodity {
    id: string;
    name: string;
    value: number;
    variation: number;
    history: number[];
}

interface SearchDialogProps {
    open: boolean;
    onClose: () => void;
    onSelect: (commodity: Commodity) => void;
    commodities: Commodity[];
}

export const SearchDialog = ({ open, onClose, onSelect, commodities }: SearchDialogProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCommodities = commodities.filter(commodity =>
        commodity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        commodity.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>
                Buscar Commodity
                <IconButton
                    onClick={onClose}
                    sx={{ position: 'absolute', right: 8, top: 8 }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <SearchContainer>
                    <TextField
                        autoFocus
                        fullWidth
                        placeholder="Digite para buscar..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <List>
                        {filteredCommodities.map((commodity) => (
                            <ListItem key={commodity.id} disablePadding>
                                <ListItemButton onClick={() => onSelect(commodity)}>
                                    <ListItemText 
                                        primary={commodity.name}
                                        secondary={`US$ ${commodity.value.toLocaleString('pt-BR', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        })}`}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </SearchContainer>
            </DialogContent>
        </Dialog>
    );
};