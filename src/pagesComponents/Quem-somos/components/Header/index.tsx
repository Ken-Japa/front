import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import { HeaderContainer } from "./styled";

export const Header = () => (
    <HeaderContainer>
        <MatrixRainText
            text="Quem Somos"
            className="title"
        />
    </HeaderContainer>
);