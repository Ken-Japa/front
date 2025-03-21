import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/pagesComponents/Blog/constants/blogPosts";
import BlogPost from "@/pagesComponents/Blog/components/BlogPost";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = blogPosts.find(post => post.slug === params.slug);

    if (!post) {
        return {
            title: 'Post não encontrado | Auge Invest'
        };
    }

    return {
        title: `${post.title} | Auge Invest`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description
        }
    };
}

export default function BlogPostPage({ params }: Props) {
    const post = blogPosts.find(post => post.slug === params.slug);

    if (!post) {
        notFound();
    }

    return <BlogPost post={post} />;
}