import { CustomAccordion } from "@/components/Custom/Accordion";
import { questions } from "@/helpers/questions";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { QuestionsSection } from "./styled";
import { QuestionsSkeleton } from "./QuestionsSkeleton";

interface QuestionsProps {
    isLoading?: boolean;
}
export const Questions = ({ isLoading }: QuestionsProps) => {
    if (isLoading) {
        return <QuestionsSkeleton />;
    }
    return (
        <QuestionsSection>
            <Stack direction="column" alignItems="center" spacing={4}>
                <h2 className="section-title">Perguntas mais frequentes</h2>
                <Typography variant="body1" className="section-subtitle">
                    Segurança, Resultados e Tecnologia - Suas Dúvidas Decifradas
                </Typography>
                <Stack maxWidth="800px" width="100%">
                    {questions.map((item, index) => (
                        <CustomAccordion key={index} body={item.body} title={item.title} />
                    ))}
                </Stack>
            </Stack>
        </QuestionsSection>
    );
};
