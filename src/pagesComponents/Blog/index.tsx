"use client";

import { Container, Grid, Box } from "@mui/material";
import { useState, ChangeEvent, lazy } from "react";
import { motion } from "framer-motion";
import { blogPosts } from "./constants/blogPosts";
import { BlogContainer, BlogContent } from "./styled";
import { OptimizedImage } from "@/components/OptimizedImage";
import { ProgressiveLoad } from "@/components/ProgressiveLoad";
import { SuspenseWrapper } from "@/components/SuspenseWrapper";

const BlogHeader = lazy(() => import('./components/BlogHeader').then(mod => ({ default: mod.BlogHeader })));
const BlogSearch = lazy(() => import('./components/BlogSearch').then(mod => ({ default: mod.BlogSearch })));
const BlogCard = lazy(() => import('./components/BlogCard').then(mod => ({ default: mod.BlogCard })));
const BlogCategories = lazy(() => import('./components/BlogCategories').then(mod => ({ default: mod.BlogCategories })));
const BlogCardList = lazy(() => import('./components/BlogCardList').then(mod => ({ default: mod.BlogCardList })));

export default function Blog() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const filteredPosts = blogPosts
        .filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
            return matchesSearch && matchesCategory;
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <BlogContainer>
            <div className="absolute inset-0 w-full h-full">
                <OptimizedImage
                    src="/assets/images/background/BlogHeader.jpg"
                    alt="Blog Background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover opacity-60"
                    loadingClassName="scale-100 blur-sm"
                    quality={85}
                    onLoad={() => setImageLoaded(true)}
                />
            </div>
            <BlogContent>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <SuspenseWrapper>
                        <BlogHeader isLoading={!imageLoaded} />
                    </SuspenseWrapper>

                    <Container maxWidth="lg" sx={{ py: 8 }}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={8}>
                                <ProgressiveLoad>
                                    <Box mb={4}>
                                        <SuspenseWrapper>
                                            <BlogSearch
                                                value={searchQuery}
                                                onChange={handleSearchChange}
                                                isLoading={!imageLoaded}
                                            />
                                        </SuspenseWrapper>
                                    </Box>
                                </ProgressiveLoad>

                                <SuspenseWrapper>
                                    <BlogCardList 
                                        posts={filteredPosts}
                                        isLoading={!imageLoaded}
                                    />
                                </SuspenseWrapper>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <ProgressiveLoad rootMargin="100px">
                                    <SuspenseWrapper>
                                        <BlogCategories
                                            selectedCategory={selectedCategory}
                                            onCategoryChange={setSelectedCategory}
                                            isLoading={!imageLoaded}
                                        />
                                    </SuspenseWrapper>
                                </ProgressiveLoad>
                            </Grid>
                        </Grid>
                    </Container>
                </motion.div>
            </BlogContent>
        </BlogContainer>
    );
}