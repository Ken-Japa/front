import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { SearchContainer } from "./styled";

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

export const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
    return (
        <SearchContainer>
            <div className="search-wrapper">
                <input
                    type="text"
                    placeholder="Buscar pergunta..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                    id="faq-search"
                />
                <SearchIcon className="search-icon" sx={{ fontSize: 20 }} />
                {searchTerm && (
                    <button
                        onClick={() => setSearchTerm('')}
                        className="clear-button"
                        aria-label="Limpar pesquisa"
                    >
                        <CloseIcon sx={{ fontSize: 20 }} />
                    </button>
                )}
            </div>
        </SearchContainer>
    );
};