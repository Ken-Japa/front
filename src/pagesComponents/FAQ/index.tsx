"use client";

import { useState, lazy } from "react";
import { SectionFAQ } from "./styled";
import { OptimizedImage } from "@/components/OptimizedImage";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { categorizedQuestions } from "./data/faqData";
import type { CategoryType } from "./data/faqData";
import { ProgressiveLoad } from "@/components/ProgressiveLoad";
import { SuspenseWrapper } from "@/components/SuspenseWrapper";

const Header = lazy(() => import('./Header').then(mod => ({ default: mod.Header })));
const SearchBar = lazy(() => import('./SearchBar').then(mod => ({ default: mod.SearchBar })));
const CategoryTabs = lazy(() => import('./CategoryTabs').then(mod => ({ default: mod.CategoryTabs })));
const QuestionList = lazy(() => import('./QuestionList').then(mod => ({ default: mod.QuestionList })));
const ContactSupport = lazy(() => import('./ContactSupport').then(mod => ({ default: mod.ContactSupport })));

export const FAQ = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState<CategoryType>('todas');
    const [imageLoaded, setImageLoaded] = useState(false);

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
        <PageTransition direction="up" duration={0.4} distance={30} className="w-full">
            <ErrorBoundary>
                <SectionFAQ>
                    <div className="background-image">
                        <OptimizedImage
                            src="/assets/images/background/BACKGROUND-DEFAULT.jpg"
                            alt="FAQ Background"
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover"
                            loadingClassName="scale-100 blur-xl grayscale"
                            quality={85}
                            onLoad={() => setImageLoaded(true)}
                            style={{
                                filter: !imageLoaded ? 'grayscale(1)' : 'none',
                                transition: 'filter 0.5s ease-in-out'
                            }}
                        />
                    </div>
                    <div className="content-container">
                        <>
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
                        </>
                    </div>
                </SectionFAQ>
            </ErrorBoundary>
        </PageTransition>
    );
};