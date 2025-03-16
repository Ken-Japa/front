"use client";

import { Search } from "@mui/icons-material";
import { SearchContainer, SearchInput, SearchIconWrapper } from "./styled";
import { ChangeEvent } from "react";

interface BlogSearchProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const BlogSearch = ({ value, onChange }: BlogSearchProps) => {
    return (
        <SearchContainer>
            <SearchIconWrapper>
                <Search className="text-white/60" />
            </SearchIconWrapper>
            <SearchInput
                placeholder="Pesquisar artigos..."
                value={value}
                onChange={onChange}
                id="blog-search"
            />
        </SearchContainer>
    );
};