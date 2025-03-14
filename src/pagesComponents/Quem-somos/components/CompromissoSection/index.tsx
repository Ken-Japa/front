import HandshakeIcon from '@mui/icons-material/Handshake';
import { BaseSection, SectionTitle } from "../../styled";
import { CompromissoContainer, Subtitle } from "./styled";

export const CompromissoSection = () => (
    <BaseSection>
        <SectionTitle>
            <HandshakeIcon sx={{ color: '#FF4081', fontSize: 32 }} />
            <h2 className="text-2xl text-[#FF4081]">Nosso Compromisso</h2>
        </SectionTitle>
        <Subtitle>
            Não Vendemos Ferramentas. Entregamos Resultados.
        </Subtitle>
        <CompromissoContainer>
            <p>
                Estamos comprometidos com o crescimento contínuo e a evolução de nossa plataforma. <br /><br />
                Trabalhamos diariamente para trazer novas funcionalidades e melhorias, sempre ouvindo
                o feedback de nossa comunidade.
            </p>
        </CompromissoContainer>
    </BaseSection>
);