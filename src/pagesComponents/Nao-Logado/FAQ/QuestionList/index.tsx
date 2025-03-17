import { Stack } from "@mui/material";
import { CustomAccordion } from "@/components/Custom/Accordion";
import type { QuestionType } from '../data/faqData';
import { QuestionListSkeleton } from "./QuestionListSkeleton";

interface QuestionListProps {
    questions: QuestionType[];
    isLoading?: boolean;
}


export const QuestionList = ({ questions, isLoading }: QuestionListProps) => {
    if (isLoading) {
        return <QuestionListSkeleton />;
    }
    return (
        <Stack width="100%" spacing={2}>
            {questions.map((item, index) => (
                <div key={index} className="transform hover:scale-[1.01] transition-all duration-300">
                    <CustomAccordion variant="dark"
                        title={item.title}
                        body={item.body}
                    />
                </div>
            ))}
        </Stack>
    );
};