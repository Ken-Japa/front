import { Box, Typography, Grid } from "@mui/material";
import { BlogCard } from "../../BlogCard";
import type { BlogPost } from "../../../constants/blogPosts";

interface RelatedPostsProps {
    posts: BlogPost[]; // Changed from BlogPost to BlogPost[]
}

export const RelatedPosts = ({ posts }: RelatedPostsProps) => {
    if (posts.length === 0) return null;

    return (
        <Box sx={{
            marginTop: '2rem',
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
                {posts.map((post) => (
                    <Grid item xs={12} key={post.slug}>
                        <BlogCard {...post} isLoading={false} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};