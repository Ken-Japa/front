interface PlanoType {
    tipo: string;
    preco: string;
    periodo: string;
    buttonText: string;
    desconto?: string;
}

export const PLANOS: PlanoType[] = [
    {
        tipo: "Mensal",
        preco: "R$30",
        periodo: "/mês",
        buttonText: "Assinar Agora"
    },
    {
        tipo: "Trimestral",
        preco: "R$80",
        periodo: "/trimestre",
        desconto: "12% de desconto",
        buttonText: "Economizar Agora"
    },
    {
        tipo: "Anual",
        preco: "R$280",
        periodo: "/ano",
        desconto: "23% de desconto",
        buttonText: "Maior Economia"
    }
] as const;