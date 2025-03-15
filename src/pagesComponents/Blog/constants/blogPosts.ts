import { post as analiseTecnica } from "@/content/blog/analise-tecnica-tendencias";

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;  // Added this line
  image: string;
  category: string;
  author: string;
  date: string;
  slug: string;
  tags?: string[];
  readTime?: string;
  relatedPosts?: string[];
}

export const blogPosts: BlogPost[] = [analiseTecnica];
