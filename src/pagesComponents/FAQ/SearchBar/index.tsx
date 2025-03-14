import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

export const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
    return (
        <div className="w-full max-w-md mb-8 relative">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Buscar pergunta..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 pl-10 pr-10 bg-[#ffffff10] text-white rounded-lg 
                             border border-[#ffffff30] focus:border-[#0D95F9] outline-none
                             transition-all duration-300"
                />
                <SearchIcon
                    className="absolute left-3 top-2.5 text-white/70"
                    sx={{ fontSize: 20 }}
                />
                {searchTerm && (
                    <button
                        onClick={() => setSearchTerm('')}
                        className="absolute right-3 top-2.5 text-white/70 hover:text-white transition-colors"
                        aria-label="Limpar pesquisa"
                    >
                        <CloseIcon sx={{ fontSize: 20 }} />
                    </button>
                )}
            </div>
        </div>
    );
};