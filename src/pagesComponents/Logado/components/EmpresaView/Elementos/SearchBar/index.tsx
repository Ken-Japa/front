import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchContainer } from './styled';

interface SearchBarProps {
    defaultValue?: string;
}

export const SearchBar = ({ defaultValue = '' }: SearchBarProps) => {
    const [searchQuery, setSearchQuery] = useState(defaultValue);
    const router = useRouter();

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        if (query.length >= 5) {
            router.push(`/empresa/${query}`);
        }
    };

    return (
        <SearchContainer>
            <TextField
                size="small"
                placeholder="Buscar empresa..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                InputProps={{
                    endAdornment: <SearchIcon color="action" />
                }}
            />
        </SearchContainer>
    );
};