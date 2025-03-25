export interface EmpresaDetalhe {
  empresa: string;
  valorMercado: number;
  participacao: number;
}

export interface Segmento {
  segmento: string;
  valorMercado: number;
  empresasDetalhes: EmpresaDetalhe[];
}

export interface IndustriaData {
  industria: string;
  valorMercadoTotal: number;
  segmentos: Segmento[];
}

export interface SumarioData {
  sumarioTotal: {
    valorMercadoTotalGeral: number;
    qtdIndustriasTotal: number;
    qtdEmpresasTotal: number;
    qtdSegmentosTotal: number;
  };
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
