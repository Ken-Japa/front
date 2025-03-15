export interface BlogPost {
  id?: string;
  title: string;
  description: string;
  content: string;
  image?: string;
  category: string;
  author: string;
  date: string;
  slug: string;
  tags?: string[];
  readTime?: string;
  relatedPosts?: string[];
}

// Define the context type
declare const require: {
  context: (
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp
  ) => {
    keys(): string[];
    (id: string): any;
  };
};

const context = require.context("@/content/blog", false, /\.ts$/);

export const blogPosts: BlogPost[] = context
  .keys()
  .filter((key: string) => key !== "./index.ts")
  .map((key: string) => {
    const postModule = context(key);
    return postModule.post;
  })
  .sort(
    (a: BlogPost, b: BlogPost) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  return blogPosts;
};
