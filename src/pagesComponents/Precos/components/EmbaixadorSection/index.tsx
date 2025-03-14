import { Button } from "@mui/material";
import { EMBAIXADOR_BENEFICIOS } from "../../constants/embaixador";
import { BaseSection, ContentWrapper } from "../../styled";
import { EmbaixadorCard, Description } from "./styled";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";

export const EmbaixadorSection = () => (
    <BaseSection>
        <ContentWrapper spacing={4}>
            <MatrixRainText
                text="Seja um Embaixador"
                className="text-[#FF4081] text-4xl font-bold"
            />
            <Description>
                Torne-se um embaixador da Auge Invest e faça parte do nosso crescimento.<br /><br />
                Como embaixador, você terá acesso vitalício à plataforma após atingirmos 5.000 usuários,
                além de benefícios exclusivos.
            </Description>
            <EmbaixadorCard>
                <h3 className="card-title">Plano Embaixador</h3>
                <p className="card-price">R$100</p>
                <p className="card-period">/mês</p>
                <ul className="benefits-list">
                    {EMBAIXADOR_BENEFICIOS.map((beneficio, index) => (
                        <li key={index} className="benefit-item">
                            <span className="icon">›</span>
                            {beneficio}
                        </li>
                    ))}
                </ul>
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                >
                    Tornar-se Embaixador
                </Button>
            </EmbaixadorCard>
        </ContentWrapper>
    </BaseSection>
);