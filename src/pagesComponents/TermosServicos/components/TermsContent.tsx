import { Stack, Link } from "@mui/material";
import { TERMS_SECTIONS } from "../constants/termsContent";

export const TermsContent = () => (
    <Stack direction="column" maxWidth="1024px" width="100%" marginX="auto" className="text-white/90">
        <p className="mb-5">
            Auge Invest Tecnologia Ltda., uma empresa brasileira inscrita no Cadastro Nacional de Pessoas Jurídicas sob o número <span className="text-warningMain">[seu CNPJ]</span>, com sede à <span className="text-warningMain">[seu endereço]</span>, fornece a você o serviço &quot;Auge Invest&quot;.
        </p>

        {TERMS_SECTIONS.map((section) => (
            <div key={section.id} id={section.id} className="mb-5 bg-[#ffffff05] p-6 rounded-lg">
                <h2 className="text-2xl text-infoMain mb-5">{section.title}</h2>
                {section.content}
            </div>
        ))}
    </Stack>
);