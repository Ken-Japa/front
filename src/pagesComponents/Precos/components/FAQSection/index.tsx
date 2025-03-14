import Link from "next/link";
import { FAQ_ITEMS } from "../../constants/faq";
import { BaseSection, ContentWrapper } from "../../styled";
import { FAQContainer } from "./styled";

export const FAQSection = () => (
    <BaseSection>
        <ContentWrapper spacing={4}>
            <h2 className="text-3xl text-white">Dúvidas Frequentes sobre Planos</h2>
            <FAQContainer>
                {FAQ_ITEMS.map((item, index) => (
                    <div key={index} className="faq-item">
                        <h3 className="question">{item.question}</h3>
                        <p className="answer">{item.answer}</p>
                    </div>
                ))}
            </FAQContainer>
            <Link href="/faq" className="text-[#0D95F9] hover:underline">
                Ver todas as dúvidas →
            </Link>
        </ContentWrapper>
    </BaseSection>
);