"use client";

import { Container, Typography, Box, Chip } from "@mui/material";
import type { BlogPost as BlogPostType } from "../../constants/blogPosts";
import { motion } from "framer-motion";
import ReactMarkdown from 'react-markdown';
import Link from "next/link";
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
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '2rem', md: '3rem' },
                                fontWeight: 700,
                                color: '#0D95F9',
                                textAlign: 'center',
                                marginBottom: '2rem'
                            }}
                        >
                            {post.title}
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '2rem'
                        }}>
                            <Typography variant="body2" color="text.secondary">
                                {post.author} em {new Date(post.date).toLocaleDateString('pt-BR')}
                            </Typography>
                            {post.readTime && (
                                <Typography variant="body2" color="text.secondary">
                                    Tempo de leitura: {post.readTime}
                                </Typography>
                            )}
                        </Box>
                        {post.tags && (
                            <Box sx={{
                                display: 'flex',
                                gap: 1,
                                flexWrap: 'wrap',
                                justifyContent: 'center'
                            }}>
                                {post.tags.map(tag => (
                                    <Chip key={tag} label={tag} size="small" />
                                ))}
                            </Box>
                        )}
                    </Box>
                    <PostContent>
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </PostContent>

                    {post.relatedPosts && post.relatedPosts.length > 0 && (
                        <Box sx={{
                            marginTop: '4rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: '1.75rem',
                                    color: '#0D95F9',
                                    marginBottom: '1.5rem'
                                }}
                            >
                                Posts Relacionados:
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1
                            }}>
                                {post.relatedPosts.map((slug) => (
                                    <Link
                                        key={slug}
                                        href={`/blog/${slug}`}
                                        className="text-white no-underline hover:text-[#0D95F9] transition-colors"
                                    >
                                        {slug.split('-').map(word =>
                                            word.charAt(0).toUpperCase() + word.slice(1)
                                        ).join(' ')}
                                    </Link>
                                ))}
                            </Box>
                        </Box>
                    )}
                </motion.div>
            </Container>
        </PostContainer>
    );
}