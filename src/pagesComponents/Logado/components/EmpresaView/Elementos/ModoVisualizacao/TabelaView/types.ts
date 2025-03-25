export interface CodigoDetalhe {
  codigo: string;
  preco: number;
  variacao?: number; // Make variacao optional since some codes might not have it
}

export interface EmpresaDetalhe {
  empresa: string;
  valorMercado: number;
  participacao: number;
  codigos: CodigoDetalhe[];
}

export interface Segmento {
  segmento: string;
  valorMercado: number;
  empresas: number;
  participacao: number;
  empresasDetalhes: EmpresaDetalhe[];
}

export interface IndustriaData {
  industria: string;
  valorMercadoTotal: number;
  participacao: number;
  qtdSegmentos: number;
  empresas: number;
  segmentos: Segmento[];
}

export interface SumarioTotal {
  valorMercadoTotalGeral: number;
  qtdIndustriasTotal: number;
  qtdEmpresasTotal: number;
  qtdSegmentosTotal: number;
  industrias: string[];
}

export interface SumarioData {
  sumarioTotal: SumarioTotal;
  sumario: IndustriaData[];
}

export interface IndustriaRowProps {
  industria: string;
  valorMercadoTotal: number;
  valorMercadoGeral: number;
  segmentos: Segmento[];
}

export interface SegmentoSectionProps {
  segmento: Segmento;
  valorMercadoIndustria: number;
}
