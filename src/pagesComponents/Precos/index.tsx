"use client";

import { Stack } from "@mui/material";
import { SectionPricing } from "./styled";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import { Plans } from "@/pagesComponents/Home/Plans";

export const Pricing = () => {
    return (
        <SectionPricing>
            <div className="opacity p-10">
                <Stack alignItems="center" spacing={6}>
                    <MatrixRainText 
                        text="Escolha seu plano" 
                        className="text-white text-3xl font-bold"
                    />
                    <Plans />
                </Stack>
            </div>
        </SectionPricing>
    );
};