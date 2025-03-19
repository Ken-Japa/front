import { type FC } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import { SearchContainer } from "./styled";
import { SearchBarSkeleton } from './SearchBarSkeleton';

const ICON_STYLES = {
    fontSize: 20
} as const;

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    isLoading?: boolean;
}

export const SearchBar: FC<SearchBarProps> = ({ searchTerm, setSearchTerm, isLoading }) => {
    if (isLoading) {
        return <SearchBarSkeleton />;
    }

    const handleClear = () => setSearchTerm('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);

    return (
        <SearchContainer>
            <div className="search-wrapper">
                <input
                    type="text"
                    placeholder="Buscar pergunta..."
                    value={searchTerm}
                    onChange={handleChange}
                    className="search-input"
                    id="faq-search"
                />
                <SearchIcon className="search-icon" sx={ICON_STYLES} />
                {searchTerm && (
                    <button
                        onClick={handleClear}
                        className="clear-button"
                        aria-label="Limpar pesquisa"
                    >
                        <CloseIcon sx={ICON_STYLES} />
                    </button>
                )}
            </div>
        </SearchContainer>
    );
};