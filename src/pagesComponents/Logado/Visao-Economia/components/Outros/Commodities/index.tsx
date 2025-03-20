"use client";

import { useState } from 'react';
import { SuspenseWrapper } from '@/components/SuspenseWrapper';
import { ContentSkeleton } from '../../../../../../components/Skeletons/ContentSkeleton';
import { IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchDialog } from './components/SearchDialog';
import {
    CommoditiesContainer,
    ChartContainer,
    CommodityInfo,
    CommodityName,
    CommodityValue,
    CommodityVariation
} from './styled';

// Mock data - will be replaced with API data
const mockCommodities = [
    {
        id: 'OIL',
        name: 'Petróleo Brent',
        value: 82.43,
        variation: -0.8,
        history: [85, 83, 84, 82, 82.43]
    },
    {
        id: 'GOLD',
        name: 'Ouro',
        value: 2024.15,
        variation: 1.2,
        history: [2000, 2010, 2015, 2020, 2024.15]
    },
    {
        id: 'SILVER',
        name: 'Prata',
        value: 23.45,
        variation: 0.5,
        history: [23, 23.2, 23.3, 23.4, 23.45]
    },
];

export const Commodities = () => {
    const [selectedCommodity, setSelectedCommodity] = useState(mockCommodities[0]);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <SuspenseWrapper
            fallback={<ContentSkeleton height={480} />}
        >
            <CommoditiesContainer>
                <IconButton
                    size="small"
                    onClick={() => setIsSearchOpen(true)}
                    sx={{ position: 'absolute', top: 8, right: 8 }}
                >
                    <SearchIcon fontSize="small" />
                </IconButton>

                <CommodityInfo>
                    <CommodityName>{selectedCommodity.name}</CommodityName>
                    <CommodityValue>
                        US$ {selectedCommodity.value.toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}
                    </CommodityValue>
                    <CommodityVariation $isPositive={selectedCommodity.variation >= 0}>
                        {selectedCommodity.variation >= 0 ? '+' : ''}{selectedCommodity.variation}%
                    </CommodityVariation>
                </CommodityInfo>

                <ChartContainer>
                    {/* Chart placeholder - will be replaced with actual chart */}
                    <Box sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'text.secondary',
                        fontStyle: 'italic'
                    }}>
                        Gráfico será implementado
                    </Box>
                </ChartContainer>

                <SearchDialog
                    open={isSearchOpen}
                    onClose={() => setIsSearchOpen(false)}
                    onSelect={(commodity) => {
                        setSelectedCommodity(commodity);
                        setIsSearchOpen(false);
                    }}
                    commodities={mockCommodities}
                />
            </CommoditiesContainer>
        </SuspenseWrapper>
    );
};