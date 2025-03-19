"use client";

import { type FC, useState, lazy } from "react";

import { OptimizedImage } from "@/components/OptimizedImage";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ProgressiveLoad } from "@/components/ProgressiveLoad";
import { SuspenseWrapper } from "@/components/SuspenseWrapper";

import { categorizedQuestions } from "./data/faqData";
import { useQuestionFilter } from "./hooks/useQuestionFilter";
import { SectionFAQ } from "./styled";

const IMAGE_PROPS = {
    src: "/assets/images/background/BACKGROUND-DEFAULT.jpg",
    alt: "FAQ Background",
    fill: true,
    priority: true,
    sizes: "100vw",
    className: "object-cover",
    loadingClassName: "scale-100 blur-xl grayscale",
    quality: 85,
} as const;

const Header = lazy(() => import('./Header').then(mod => ({ default: mod.Header })));
const SearchBar = lazy(() => import('./SearchBar').then(mod => ({ default: mod.SearchBar })));
const CategoryTabs = lazy(() => import('./CategoryTabs').then(mod => ({ default: mod.CategoryTabs })));
const QuestionList = lazy(() => import('./QuestionList').then(mod => ({ default: mod.QuestionList })));
const ContactSupport = lazy(() => import('./ContactSupport').then(mod => ({ default: mod.ContactSupport })));

export const FAQ: FC = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const {
        searchTerm,
        setSearchTerm,
        activeCategory,
        setActiveCategory,
        filteredQuestions
    } = useQuestionFilter(categorizedQuestions);

    return (
        <PageTransition direction="up" duration={0.4} distance={30} className="w-full">
            <ErrorBoundary>
                <SectionFAQ>
                    <div className="background-image">
                        <OptimizedImage
                            {...IMAGE_PROPS}
                            onLoad={() => setImageLoaded(true)}
                            style={{
                                filter: !imageLoaded ? 'grayscale(1)' : 'none',
                                transition: 'filter 0.5s ease-in-out'
                            }}
                        />
                    </div>
                    <div className="content-container">
                        <SuspenseWrapper>
                            <Header isLoading={!imageLoaded} />
                        </SuspenseWrapper>

                        <SuspenseWrapper>
                            <SearchBar
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                isLoading={!imageLoaded}
                            />
                        </SuspenseWrapper>

                        {!searchTerm && (
                            <SuspenseWrapper>
                                <CategoryTabs
                                    activeCategory={activeCategory}
                                    setActiveCategory={setActiveCategory}
                                />
                            </SuspenseWrapper>
                        )}

                        <ProgressiveLoad>
                            <SuspenseWrapper>
                                <QuestionList
                                    questions={filteredQuestions}
                                    isLoading={!imageLoaded}
                                />
                            </SuspenseWrapper>
                        </ProgressiveLoad>

                        <ProgressiveLoad>
                            <SuspenseWrapper>
                                <ContactSupport />
                            </SuspenseWrapper>
                        </ProgressiveLoad>
                    </div>
                </SectionFAQ>
            </ErrorBoundary>
        </PageTransition>
    );
};