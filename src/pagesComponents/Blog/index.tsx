"use client";

import { Container, Typography, Grid, Box } from "@mui/material";
import { BlogCard } from "./components/BlogCard/";
import { BlogHeader } from "./components/BlogHeader/";
import { BlogCategories } from "./components/BlogCategories";
import { BlogSearch } from "./components/BlogSearch/";
import { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { blogPosts } from "./constants/blogPosts";
import { BlogContainer, BlogContent } from "./styled";
import { OptimizedImage } from "@/components/OptimizedImage";

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
        .sort((a, b) => {
            // Sort by date in descending order (newest first)
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });

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
                    <BlogHeader isLoading={!imageLoaded} />
                    <Container maxWidth="lg" sx={{ py: 8 }}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={8}>
                                <Box mb={4}>
                                    <BlogSearch
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        isLoading={!imageLoaded}
                                    />
                                </Box>
                                <Grid container spacing={3}>
                                    {filteredPosts.map((post) => (
                                        <Grid item xs={12} key={post.id}>
                                            <BlogCard {...post} isLoading={!imageLoaded} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <BlogCategories
                                    selectedCategory={selectedCategory}
                                    onCategoryChange={setSelectedCategory}
                                    isLoading={!imageLoaded}
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </motion.div>
            </BlogContent>
        </BlogContainer>
    );
}