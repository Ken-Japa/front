import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchContainer } from './styled';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
    return (
        <SearchContainer>
            <TextField
                size="small"
                placeholder="Buscar BDR..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                InputProps={{
                    endAdornment: <SearchIcon color="action" />
                }}
            />
        </SearchContainer>
    );
};