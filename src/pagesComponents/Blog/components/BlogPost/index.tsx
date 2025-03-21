"use client";

import { type FC, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Container, Box } from "@mui/material";
import { motion } from "framer-motion";

import { OptimizedImage } from "@/components/OptimizedImage";

import { PostContainer, PostContent } from "./styled";
import { BlogPostSkeleton } from "./BlogPostSkeleton";
import { blogPosts } from "../../constants/blogPosts";
import type { BlogPost as BlogPostType } from "../../constants/blogPosts";

import { BlogPostHeader } from "./components/BlogPostHeader";
import { ShareSection } from "./components/ShareSection";
import { RelatedPosts } from "./components/RelatedPosts";
import { BlogMarkdown } from "./components/BlogMarkdown";

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
                        <BlogPostHeader post={post} />
                        <PostContent>
                            <BlogMarkdown content={post.content} />
                        </PostContent>

                        <ShareSection title={post.title} description={post.description} />
                        <RelatedPosts posts={relatedPostsData} />

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
            )
            }
        </PostContainer >
    );
};

export default BlogPost;