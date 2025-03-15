"use client";

import { Box, Typography } from "@mui/material";
import { CategoryButton, CategoriesContainer } from "./styled";
import { motion } from "framer-motion";

interface BlogCategoriesProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

const categories = [
    { id: "all", label: "Todos" },
    { id: "analise-tecnica", label: "Análise Técnica" },
    { id: "fundamentalista", label: "Análise Fundamentalista" },
    { id: "economia", label: "Economia" },
    { id: "notícias", label: "Notícias" },
    { id: "educacional", label: "Educacional" },
    { id: "alertas", label: "Alertas" }
];

export const BlogCategories = ({ selectedCategory, onCategoryChange }: BlogCategoriesProps) => {
    return (
        <CategoriesContainer>
            <Typography variant="h6" className="font-bold text-white mb-4">
                Categorias
            </Typography>
            <Box className="flex flex-col gap-2">
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