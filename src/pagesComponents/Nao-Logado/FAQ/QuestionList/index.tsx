import { type FC } from 'react';

import { Stack } from "@mui/material";

import { CustomAccordion } from "@/components/Custom/Accordion";

import type { QuestionType } from '../data/faqData';
import { QuestionListSkeleton } from "./QuestionListSkeleton";

interface QuestionListProps {
    questions: QuestionType[];
    isLoading?: boolean;
}

export const QuestionList: FC<QuestionListProps> = ({ questions, isLoading }) => {
    if (isLoading) {
        return <QuestionListSkeleton />;
    }

    return (
        <Stack width="100%" spacing={2}>
            {questions.map((question, index) => (
                <div 
                    key={`question-${index}-${question.title}`}
                    className="transform hover:scale-[1.01] transition-all duration-300"
                >
                    <CustomAccordion 
                        variant="dark"
                        title={question.title}
                        body={question.body}
                    />
                </div>
            ))}
        </Stack>
    );
};