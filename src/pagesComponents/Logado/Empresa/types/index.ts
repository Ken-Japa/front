export interface Codigo {
  codigo: string;
  derivativos: boolean;
  preco: number;
  variacao: number;
  "data inicial"?: string;
  "valor mercado"?: number;
  precoAnterior?: number;
  derivativo?: Array<{
    tipo: string;
    strike: number | null;
    validade: string;
    outro: any;
  }>;
}

export interface Dividendo {
  tipo: string;
  dataAprovacao: string;
  valor: string;
  ratio: string;
  tipoDividendo: string;
  ultimoDiaCom: string;
  valorUltimoDiaCom: string;
}

export interface EmpresaDetalhada {
  nome: string;
  setor: string;
  subsetor: string;
  descricao: string;
  site: string;
  valorMercado: number;
  participacao: number;
  codigos: Codigo[];
  dividendos: Dividendo[];
  temDerivativo: boolean;
}