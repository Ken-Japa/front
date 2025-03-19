"use client";

import { type FC, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Container, Typography, Box, Chip, Grid } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { motion } from "framer-motion";
import ReactMarkdown from 'react-markdown';

import { OptimizedImage } from "@/components/OptimizedImage";

import { PostContainer, PostContent } from "./styled";
import { BlogPostSkeleton } from "./BlogPostSkeleton";
import { BlogCard } from "../BlogCard";
import { blogPosts } from "../../constants/blogPosts";
import type { BlogPost as BlogPostType } from "../../constants/blogPosts";

interface BlogPostProps {
    post: BlogPostType;
}

const BlogPost: FC<BlogPostProps> = ({ post }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (post.relatedPosts && post.relatedPosts.length > 0) {
            post.relatedPosts.forEach(slug => {
                router.prefetch(`/blog/${slug}`);
            });
        }
    }, [post.relatedPosts, router]);

    const relatedPostsData = post.relatedPosts
        ? blogPosts.filter(p => post.relatedPosts?.includes(p.slug))
        : [];

    return (
        <PostContainer>
            <div className="absolute inset-0 w-full h-full">
                <OptimizedImage
                    src="/assets/images/background/BlogPost.jpg"
                    alt="Blog Post Background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover opacity-15"
                    loadingClassName="scale-100 blur-sm"
                    quality={85}
                    onLoad={() => setImageLoaded(true)}
                />
            </div>
            {!imageLoaded ? (
                <BlogPostSkeleton />
            ) : (
                <Container maxWidth="lg">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/5 backdrop-blur-sm rounded-lg p-8"
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
                                <Typography variant="body2" color="text.secondary" sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1
                                }}>
                                    <PersonIcon fontSize="small" />
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

                        {relatedPostsData.length > 0 && (
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
                                <Grid container spacing={3}>
                                    {relatedPostsData.map((relatedPost) => (
                                        <Grid item xs={12} key={relatedPost.slug}>
                                            <BlogCard {...relatedPost} isLoading={false} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        )}

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '3rem'
                        }}>
                            <Link
                                href="/blog"
                                className="text-[#0D95F9] hover:text-white transition-colors text-lg font-medium"
                            >
                                ← Voltar ao Blog
                            </Link>
                        </Box>
                    </motion.div>
                </Container>
            )}
        </PostContainer>
    );
};

export default BlogPost;