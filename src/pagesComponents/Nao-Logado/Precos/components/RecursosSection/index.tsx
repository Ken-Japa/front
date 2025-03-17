import Link from "next/link";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import { RECURSOS_LIST } from "../../constants/recursos";
import { BaseSection, ContentWrapper } from "../../styled";
import { RecursosContainer } from "./styled";
import { RecursosSkeleton } from "./RecursosSkeleton";

interface RecursosSectionProps {
    isLoading?: boolean;
}
export const RecursosSection = ({ isLoading }: RecursosSectionProps) => {

    if (isLoading) {
        return <RecursosSkeleton />;
    }
    return (

        <BaseSection>
            <ContentWrapper spacing={4}>
                <MatrixRainText
                    text="Recursos Principais"
                    className="text-3xl text-[#FF4081]"
                />
                <RecursosContainer>
                    <div className="recursos-grid">
                        <ul>
                            {RECURSOS_LIST.slice(0, 3).map((recurso, index) => (
                                <li key={index} className="recurso-item">
                                    <span className="icon">›</span>
                                    {recurso}
                                </li>
                            ))}
                        </ul>
                        <ul>
                            {RECURSOS_LIST.slice(3).map((recurso, index) => (
                                <li key={index + 3} className="recurso-item">
                                    <span className="icon">›</span>
                                    {recurso}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="link-container">
                        <Link href="/visitante/recursos" className="more-link">
                            Conheça todos os recursos →
                        </Link>
                    </div>
                </RecursosContainer>
            </ContentWrapper>
        </BaseSection>
    );
};