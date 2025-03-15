"use client";

import { Container, Typography, Box, Chip } from "@mui/material";
import type { BlogPost as BlogPostType } from "../../constants/blogPosts";
import { motion } from "framer-motion";
import ReactMarkdown from 'react-markdown';
import { PostContainer, PostContent } from "./styled";

interface BlogPostProps {
    post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
    return (
        <PostContainer>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Box className="mb-8">
                        <Typography variant="h1" className="text-4xl md:text-5xl font-bold mb-4">
                            {post.title}
                        </Typography>
                        <Box className="flex items-center gap-4 mb-6">
                            <Typography variant="body2" color="text.secondary">
                                {post.author}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {new Date(post.date).toLocaleDateString('pt-BR')}
                            </Typography>
                            {post.readTime && (
                                <Typography variant="body2" color="text.secondary">
                                    {post.readTime}
                                </Typography>
                            )}
                        </Box>
                        {post.tags && (
                            <Box className="flex gap-2 flex-wrap">
                                {post.tags.map(tag => (
                                    <Chip key={tag} label={tag} size="small" />
                                ))}
                            </Box>
                        )}
                    </Box>
                    <PostContent>
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </PostContent>
                </motion.div>
            </Container>
        </PostContainer>
    );
}