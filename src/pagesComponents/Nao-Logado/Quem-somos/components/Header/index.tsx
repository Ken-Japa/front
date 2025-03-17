import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import { HeaderContainer } from "./styled";
import { HeaderSkeleton } from "./HeaderSkeleton";

interface HeaderProps {
    isLoading?: boolean;
}

export const Header = ({ isLoading }: HeaderProps) => {
    if (isLoading) {
        return <HeaderSkeleton />;
    }
    return (

        <HeaderContainer>
            <MatrixRainText
                text="Quem Somos"
                className="title"
            />
        </HeaderContainer>
    );
};