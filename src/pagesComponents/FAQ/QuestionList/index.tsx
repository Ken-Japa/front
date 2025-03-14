import { Stack } from "@mui/material";
import { DarkAccordion } from "@/components/Custom/DarkAccordion";
import type { QuestionType } from '../data/faqData';

interface QuestionListProps {
    questions: QuestionType[];
}

export const QuestionList = ({ questions }: QuestionListProps) => {
    return (
        <Stack width="100%" spacing={2}>
            {questions.map((item, index) => (
                <div key={index} className="transform hover:scale-[1.01] transition-all duration-300">
                    <DarkAccordion
                        title={item.title}
                        body={item.body}
                    />
                </div>
            ))}
        </Stack>
    );
};