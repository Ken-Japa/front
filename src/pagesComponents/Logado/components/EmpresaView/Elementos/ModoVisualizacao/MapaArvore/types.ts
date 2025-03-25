import { HierarchyNode } from "d3";

export interface IndustryData {
    name: string;
    totalMarketValue: number;
    segments: SegmentData[];
}

export interface SegmentData {
    name: string;
    marketValue: number;
    companies: CompanyData[];
}

export interface CompanyData {
    codigo: string;
    nome: string;
    marketValue: number;
    variacao: number;
}

export interface TreeMapProps {
    width?: number;
    height?: number;
}

export interface HierarchyNodeWithData extends HierarchyNode<IndustryData | SegmentData | CompanyData> {
    x0?: number;
    x1?: number;
    y0?: number;
    y1?: number;
}