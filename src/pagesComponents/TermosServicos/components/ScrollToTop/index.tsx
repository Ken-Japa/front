import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { ScrollButton } from "./styled";

interface ScrollToTopProps {
    show: boolean;
    onClick: () => void;
}

export const ScrollToTop = ({ show, onClick }: ScrollToTopProps) => (
    show ? (
        <ScrollButton onClick={onClick}>
            <ArrowUpwardIcon sx={{ color: "white" }} />
        </ScrollButton>
    ) : null
);