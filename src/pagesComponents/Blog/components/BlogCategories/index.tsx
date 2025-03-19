import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { CategoryButton, CategoriesContainer } from "./styled";
import { BlogCategoriesSkeleton } from "./BlogCategoriesSkeleton";

interface BlogCategoriesProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    isLoading?: boolean;
}

const categories = [
    { id: "all", label: "Todos" },
    { id: "analise-tecnica", label: "Análise Técnica" },
    { id: "fundamentalista", label: "Análise Fundamentalista" },
    { id: "economia", label: "Economia" },
    { id: "noticia", label: "Notícias" },
    { id: "educacional", label: "Educacional" },
    { id: "alertas", label: "Alertas" }
];

export const BlogCategories = ({ selectedCategory, onCategoryChange, isLoading }: BlogCategoriesProps) => {
    if (isLoading) {
        return <BlogCategoriesSkeleton />;
    }
    return (
        <CategoriesContainer>
            <Typography variant="h6" className="font-bold text-white mb-8 text-center">
                Categorias
            </Typography>
            <Box className="flex flex-col gap-2 mt-4">
                {categories.map((category) => (
                    <motion.div
                        key={category.id}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                    >
                        <CategoryButton
                            onClick={() => onCategoryChange(category.id)}
                            isSelected={selectedCategory === category.id}
                        >
                            {category.label}
                        </CategoryButton>
                    </motion.div>
                ))}
            </Box>
        </CategoriesContainer>
    );
};