import { TESTIMONIALS } from "../../constants/testimonials";
import { BaseSection, ContentWrapper } from "../../styled";
import { TestimonialsGrid, TestimonialCard } from "./styled";

export const TestimonialsSection = () => (
    <BaseSection>
        <ContentWrapper spacing={4}>
            <h2 className="text-3xl text-white">O que dizem nossos usuários</h2>
            <TestimonialsGrid>
                {TESTIMONIALS.map((testimonial, index) => (
                    <TestimonialCard key={index}>
                        <p className="testimonial-text">&quot;{testimonial.comment}&quot;</p>
                        <div className="divider" />
                        <p className="testimonial-author">{testimonial.name}</p>
                        <p className="testimonial-role">{testimonial.role}</p>
                    </TestimonialCard>
                ))}
            </TestimonialsGrid>
        </ContentWrapper>
    </BaseSection>
);