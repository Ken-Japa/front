// ... existing interfaces ...

interface ValuationDetails {
    fluxosCaixa: number[];
    valorPresente: number;
    valorTerminal: number;
    valorPresenteTerminal: number;
    spreadWaccCrescimento: number;
    waccUtilizado: number;  // Add this line
}

export interface ValuationResults {
    precoJusto: number;
    enterpriseValue: number;
    equityValue: number;
    subvalorizacao: number;
    pl: number;
    taxaProjecaoUtilizada: number;
    crescimentoTerminalUtilizado: number;
    detalhes: ValuationDetails;
}

// ... other interfaces ...