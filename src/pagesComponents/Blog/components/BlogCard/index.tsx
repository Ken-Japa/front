"use client";

import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { CalendarToday, Person } from "@mui/icons-material";
import { motion } from "framer-motion";
import { CardContainer, CardOverlay } from "./styled";
import Link from "next/link";
import { BlogCardSkeleton } from "./BlogCardSkeleton";

interface BlogCardProps {
    title: string;
    description: string;
    image?: string;
    category: string;
    author: string;
    date: string;
    slug: string;
    isLoading?: boolean;
}

export const BlogCard = ({ title, description, image, author, date, slug, isLoading }: BlogCardProps) => {
    const formattedDate = new Date(date).toLocaleDateString('pt-BR');
    if (isLoading) {
        return <BlogCardSkeleton />;
    }
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            <Link href={`/blog/${slug}`} style={{ textDecoration: 'none' }}>
                <CardContainer>
                    {image && (
                        <>
                            <CardMedia
                                component="img"
                                height="200"
                                image={image}
                                alt=""
                            />
                            <CardOverlay />
                        </>
                    )}
                    <CardContent sx={{ pt: image ? 2 : 3, pb: 3 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontSize: { xs: '1.25rem', md: '1.5rem' },
                                fontWeight: 700,
                                color: '#fff',
                                marginBottom: '1.5rem'
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.8)',
                                marginBottom: '2rem'
                            }}
                        >
                            {description}
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            color: 'rgba(255, 255, 255, 0.6)'
                        }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Person fontSize="small" />
                                <Typography variant="caption">{author}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <CalendarToday fontSize="small" />
                                <Typography variant="caption">{formattedDate}</Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </CardContainer>
            </Link>
        </motion.div>
    );
};