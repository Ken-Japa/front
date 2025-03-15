"use client";

import { Card, CardContent, CardMedia, Typography, Box, Chip } from "@mui/material";
import { CalendarToday, Person } from "@mui/icons-material";
import { motion } from "framer-motion";
import { CardContainer, CardOverlay, CategoryChip } from "./styled";
import Link from "next/link";

interface BlogCardProps {
    title: string;
    description: string;
    image: string;
    category: string;
    author: string;
    date: string;
    slug: string;
}

export const BlogCard = ({ title, description, image, category, author, date, slug }: BlogCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            <Link href={`/blog/${slug}`} style={{ textDecoration: 'none' }}>
                <CardContainer>
                    <CardMedia
                        component="img"
                        height="200"
                        image={image}
                        alt={title}
                    />
                    <CardOverlay />
                    <CardContent>
                        <CategoryChip label={category} />
                        <Typography variant="h5" className="font-bold text-xl mb-2 text-white">
                            {title}
                        </Typography>
                        <Typography variant="body2" className="text-white/80 mb-4">
                            {description}
                        </Typography>
                        <Box className="flex items-center gap-4 text-white/60">
                            <Box className="flex items-center gap-1">
                                <Person fontSize="small" />
                                <Typography variant="caption">{author}</Typography>
                            </Box>
                            <Box className="flex items-center gap-1">
                                <CalendarToday fontSize="small" />
                                <Typography variant="caption">{date}</Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </CardContainer>
            </Link>
        </motion.div>
    );
};