import { TERMS_SECTIONS } from "../../constants/termsContent";
import { ContentContainer } from "./styled";

export const TermsContent = () => (
    <ContentContainer>
        {TERMS_SECTIONS.map((section, index) => (
            <div key={index} className="terms-section" id={section.id}>
                <h2 className="section-title">{section.title}</h2>
                {section.content}
            </div>
        ))}
    </ContentContainer>
);