import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

interface ScrollToTopProps {
    show: boolean;
    onClick: () => void;
}

export const ScrollToTop = ({ show, onClick }: ScrollToTopProps) => (
    show ? (
        <button
            onClick={onClick}
            className="fixed bottom-8 right-8 bg-[#0D95F9] p-3 rounded-full shadow-lg hover:bg-[#0D95F9]/80 transition-all duration-300"
            aria-label="Voltar ao topo"
        >
            <ArrowUpwardIcon />
        </button>
    ) : null
);