"use client";

import { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import { SectionFAQ } from "./styled";
import { OptimizedImage } from "@/components/OptimizedImage";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Header } from "./Header";
import { SearchBar } from "./SearchBar";
import { CategoryTabs } from "./CategoryTabs";
import { QuestionList } from "./QuestionList";
import { ContactSupport } from "./ContactSupport";
import { categorizedQuestions } from "./data/faqData";
import type { CategoryType } from "./data/faqData";

export const FAQ = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState<CategoryType>('todas');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const filteredQuestions = searchTerm
        ? Object.values(categorizedQuestions)
            .flat()
            .filter(q =>
                q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                q.body.toLowerCase().includes(searchTerm.toLowerCase())
            )
        : activeCategory === 'todas'
            ? Object.values(categorizedQuestions).flat()
            : categorizedQuestions[activeCategory];

    return (
        <PageTransition>
            <ErrorBoundary>
                <SectionFAQ>
                    <div className="background-image">
                        <OptimizedImage
                            src="/assets/images/background/BACKGROUND-DEFAULT.jpg"
                            alt="FAQ Background"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="content-container">
                        {isLoading ? (
                            <Stack spacing={3} width="100%">
                                <ContentSkeleton />
                                <ContentSkeleton type="text" />
                                <Stack spacing={2}>
                                    {Array(5).fill(0).map((_, index) => (
                                        <ContentSkeleton key={index} type="card" />
                                    ))}
                                </Stack>
                            </Stack>
                        ) : (
                            <>
                                <Header />
                                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                                {!searchTerm && <CategoryTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />}
                                <QuestionList questions={filteredQuestions} />
                                <ContactSupport />
                            </>
                        )}
                    </div>
                </SectionFAQ>
            </ErrorBoundary>
        </PageTransition>
    );
};