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

export default function Blog() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

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
            <BlogContent>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <BlogHeader />
                    <Container maxWidth="lg" sx={{ py: 8 }}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={8}>
                                <Box mb={4}>
                                    <BlogSearch
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                    />
                                </Box>
                                <Grid container spacing={3}>
                                    {filteredPosts.map((post) => (
                                        <Grid item xs={12} key={post.id}>
                                            <BlogCard {...post} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <BlogCategories
                                    selectedCategory={selectedCategory}
                                    onCategoryChange={setSelectedCategory}
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </motion.div>
            </BlogContent>
        </BlogContainer>
    );
}