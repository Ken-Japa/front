// Add this interface to your types.ts file
export interface DividendoExtended extends Dividendo {
    date?: string | Date;
    value?: number;
    amount?: number;
}