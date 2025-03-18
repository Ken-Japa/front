export interface Alert {
    id: number;
    symbol: string;
    name: string;
    currentPrice: number;
    buyAlert: {
        price: number;
        percentage: number;
    };
    sellAlert: {
        price: number;
        percentage: number;
    };
    active: boolean;
}