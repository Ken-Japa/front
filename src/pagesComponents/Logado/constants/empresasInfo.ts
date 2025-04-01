interface EmpresaInfo {
  nome: string;
  descricao: string;
  fundacao: string;
  sede: string;
  fatos_relevantes: string[];

  sustentabilidade: {
    esg_score?: number;
    iniciativas: string[];
  };
  concorrentes: string[];
  produtos_principais: string[];
  mercados_atuacao: string[];
  vantagens_competitivas: string[];
  riscos_negocio: string[];
  perspectivas: string;
}

// Exemplo de uso para a Petrobras
export const empresasInfoDicionario: Record<string, EmpresaInfo> = {
  PETROBRAS: {
    nome: "Petrobras",
    descricao:
      "A Petrobras é uma empresa brasileira de capital aberto que atua na exploração, produção, refino, comercialização e transporte de petróleo, gás natural e seus derivados.",
    fundacao: "1953",
    sede: "Rio de Janeiro, Brasil",
    fatos_relevantes: [
      "Maior empresa do Brasil em valor de mercado",
      "Líder em exploração em águas profundas",
      "Responsável por aproximadamente 73% da produção de petróleo e gás natural do Brasil",
      "Possui 13 refinarias no Brasil com capacidade de processamento de 2,2 milhões de barris por dia",
    ],
    sustentabilidade: {
      esg_score: 62,
      iniciativas: [
        "Compromisso com redução de 25% das emissões de gases de efeito estufa até 2030",
        "Investimentos em biocombustíveis e energias renováveis",
        "Programa de recuperação de áreas degradadas",
      ],
    },
    concorrentes: ["Exxon Mobil", "Shell", "BP", "TotalEnergies", "Chevron"],
    produtos_principais: [
      "Petróleo bruto",
      "Gasolina",
      "Diesel",
      "Gás natural",
      "Lubrificantes",
    ],
    mercados_atuacao: [
      "Brasil",
      "América Latina",
      "Estados Unidos",
      "Europa",
      "Ásia",
    ],
    vantagens_competitivas: [
      "Liderança em tecnologia de exploração em águas profundas",
      "Reservas significativas no pré-sal",
      "Integração vertical da cadeia produtiva",
      "Forte presença no mercado doméstico",
    ],
    riscos_negocio: [
      "Volatilidade dos preços internacionais do petróleo",
      "Regulamentação governamental",
      "Riscos ambientais",
      "Transição energética global",
    ],
    perspectivas:
      "A empresa tem focado em desinvestimentos não estratégicos e concentração em ativos de maior rentabilidade, especialmente na exploração do pré-sal. Há planos de expansão da produção de petróleo e gás natural nos próximos anos, com investimentos previstos de US$ 78 bilhões entre 2023 e 2027.",
  },
};
