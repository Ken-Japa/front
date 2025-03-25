import { SumarioData } from "../TabelaView/types";
import { IndustryData, SegmentData, CompanyData } from "./types";
import * as d3 from "d3";

export const transformData = (data: any): IndustryData[] => {
  const industries = data.sumario || [];

  return industries.map((ind: any): IndustryData => {
    // Sort segments by market value
    const sortedSegments = ind.segmentos.sort(
      (a: any, b: any) => b.valorMercado - a.valorMercado
    );

    return {
      name: ind.industria,
      totalMarketValue: ind.valorMercadoTotal,
      segments: sortedSegments.map((seg: any): SegmentData => {
        // Sort companies by market value
        const sortedCompanies = seg.empresasDetalhes.sort(
          (a: any, b: any) => b.valorMercado - a.valorMercado
        );

        return {
          name: seg.segmento,
          marketValue: seg.valorMercado,
          companies: sortedCompanies.map(
            (emp: any): CompanyData => ({
              codigo: emp.codigos[0].codigo,
              nome: emp.empresa,
              marketValue: emp.valorMercado,
              variacao: emp.codigos[0].variacao,
            })
          ),
        };
      }),
    };
  });
};

export const getColor = (variacao: number): string => {
  if (variacao > 0) {
    return d3.interpolateRgb(
      "#137333",
      "#34a853"
    )(Math.min(Math.abs(variacao) / 10, 1));
  } else if (variacao < 0) {
    return d3.interpolateRgb(
      "#a50e0e",
      "#ea4335"
    )(Math.min(Math.abs(variacao) / 10, 1));
  }
  return "#888888";
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatPercentage = (value: number | undefined): string => {
  if (value === undefined || isNaN(value)) return "0.00%";
  return `${value > 0 ? "+" : ""}${value.toFixed(2)}%`;
};
