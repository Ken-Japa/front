import React, { useEffect, useRef, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import * as d3 from 'd3';
import { SumarioData } from '../TabelaView/types';
import { IndustryData, SegmentData, CompanyData } from './types';
import { transformData, getColor, formatCurrency, formatPercentage } from './utils';

export const MapaArvore: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [data, setData] = useState<IndustryData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await import('@/pagesComponents/Logado/components/EmpresaView/mockdata_example/sumario.json');
                console.log('Raw data:', response.default);
                const transformedData = transformData(response.default);
                console.log('Transformed data:', transformedData);
                setData(transformedData);
            } catch (error) {
                setError('Falha ao carregar os dados');
                console.error('Error loading data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (!data.length || !containerRef.current) return;

        const container = containerRef.current;
        const width = container.clientWidth - 40;
        const height = container.clientHeight - 40;
        const industryHeight = 800;

        // Clear previous content
        d3.select(container).selectAll("*").remove();

        const svg = d3.select(container)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(20,20)`);

        let currentY = 0;
        let currentX = 0;

        data.forEach((industry, index) => {
            const relativeWidth = Math.max((industry.totalMarketValue / data[0].totalMarketValue) * width, 200);

            // Check if we need to move to next row
            if (currentX + relativeWidth > width) {
                currentY += industryHeight + 20;
                currentX = 0;
            }

            // Calculate header height based on text length
            const headerText = `${industry.name} - ${formatCurrency(industry.totalMarketValue)}`;
            const headerHeight = headerText.length * 7 > relativeWidth ? 60 : 40;

            const industryGroup = svg.append("g")
                .attr("transform", `translate(${currentX},${currentY})`);

            // Industry header background
            industryGroup.append("rect")
                .attr("width", relativeWidth - 10)
                .attr("height", headerHeight)
                .attr("fill", "#e0e0e0")
                .attr("rx", 4);

            // Wrap header text if needed
            if (headerText.length * 7 > relativeWidth) {
                const [name, value] = headerText.split(" - ");
                industryGroup.append("text")
                    .attr("x", 10)
                    .attr("y", 25)
                    .text(name)
                    .attr("font-size", "14px")
                    .attr("font-weight", "bold");

                industryGroup.append("text")
                    .attr("x", 10)
                    .attr("y", 45)
                    .text(value)
                    .attr("font-size", "14px")
                    .attr("font-weight", "bold");
            } else {
                industryGroup.append("text")
                    .attr("x", 10)
                    .attr("y", 25)
                    .text(headerText)
                    .attr("font-size", "14px")
                    .attr("font-weight", "bold");
            }

            // Render segments with fixed headers
            let segmentY = headerHeight;
            industry.segments.forEach(segment => {
                const segmentHeight = Math.max(
                    (segment.marketValue / industry.totalMarketValue) * (industryHeight - headerHeight),
                    50 // Minimum segment height
                );

                // Always show segment header
                industryGroup.append("rect")
                    .attr("width", relativeWidth - 10)
                    .attr("height", 30)
                    .attr("y", segmentY)
                    .attr("fill", "#f0f0f0");

                industryGroup.append("text")
                    .attr("x", 5)
                    .attr("y", segmentY + 20)
                    .text(`${segment.name} - ${formatCurrency(segment.marketValue)}`)
                    .attr("font-size", "12px")
                    .attr("fill", "#666");

                renderCompanies(industryGroup, segment, {
                    x: 0,
                    y: segmentY + 30,
                    width: relativeWidth - 10,
                    height: Math.max(segmentHeight - 30, 20)
                });

                segmentY += segmentHeight;
            });

            currentX += relativeWidth;
        });

        // Update SVG height
        svg.attr("height", currentY + industryHeight + 40);
    }, [data]);

    const renderCompanies = (
        parent: d3.Selection<SVGGElement, unknown, null, undefined>,
        segment: SegmentData,
        bounds: { x: number; y: number; width: number; height: number }
    ) => {
        const totalValue = segment.marketValue;
        let currentX = bounds.x;

        segment.companies.forEach(company => {
            const width = (company.marketValue / totalValue) * bounds.width;

            const companyGroup = parent.append("g")
                .attr("transform", `translate(${currentX},${bounds.y})`);

            companyGroup.append("rect")
                .attr("width", width)
                .attr("height", bounds.height)
                .attr("fill", getColor(company.variacao))
                .attr("rx", 2);

            // Ajustado para mostrar mais textos
            if (width > 40 || bounds.height > 30) {
                companyGroup.append("text")
                    .attr("x", 5)
                    .attr("y", bounds.height / 2)
                    .text(company.codigo)
                    .attr("fill", "white")
                    .attr("font-size", "11px")
                    .attr("font-weight", "bold")
                    .attr("filter", "drop-shadow(1px 1px 1px rgba(0,0,0,0.5))");

                if (width > 60) {
                    companyGroup.append("text")
                        .attr("x", 5)
                        .attr("y", bounds.height / 2 + 15)
                        .text(formatPercentage(company.variacao))
                        .attr("fill", "white")
                        .attr("font-size", "10px")
                        .attr("font-weight", "bold")
                        .attr("filter", "drop-shadow(1px 1px 1px rgba(0,0,0,0.5))");
                }
            }

            currentX += width;
        });
    };

    if (isLoading) return <CircularProgress />;
    if (error) return <Typography color="error">{error}</Typography>;
    if (!data.length) return null;

    return (
        <Box
            ref={containerRef}
            sx={{
                width: '100%',
                height: '2400px',
                minHeight: '1600px',
                backgroundColor: '#f0f0f0', // Changed to see the container better
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid #ccc', // Added border to see container bounds
                m: 2,
                p: 2
            }}
        />
    );
};