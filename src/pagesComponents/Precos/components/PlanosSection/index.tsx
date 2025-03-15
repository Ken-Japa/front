import { PLANOS } from "../../constants/planos";
import { BaseSection, ContentWrapper } from "../../styled";
import { PlanosGrid, PlanoCard } from "./styled";
import { CustomButton } from "@/components/Custom/Button";

export const PlanosSection = () => (
    <BaseSection>
        <ContentWrapper spacing={6}>
            <h2 className="text-3xl text-[#FF4081]">Escolha seu Plano</h2>
            <PlanosGrid>
                {PLANOS.map((plano) => (
                    <PlanoCard key={plano.tipo}>
                        <h3 className="plano-tipo">{plano.tipo}</h3>
                        <p className="plano-preco">{plano.preco}</p>
                        <p className="plano-periodo">{plano.periodo}</p>
                        {plano.desconto && (
                            <p className="plano-desconto">{plano.desconto}</p>
                        )}
                        <CustomButton
                            value={plano.buttonText}
                            customColor="#0056b3"
                            textColor="#FFFFFF"
                            fullWidth
                        />
                    </PlanoCard>
                ))}
            </PlanosGrid>
        </ContentWrapper>
    </BaseSection>
);