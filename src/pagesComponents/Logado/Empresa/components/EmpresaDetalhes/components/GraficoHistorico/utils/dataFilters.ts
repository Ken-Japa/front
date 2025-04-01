import { PeriodType } from '../components/PeriodSelector';

interface HistoricalDataPoint {
    data: string;
    valor: number;
    [key: string]: any;
}

export function filterDataByPeriod(
    allData: HistoricalDataPoint[], 
    period: PeriodType
): HistoricalDataPoint[] {
    const hoje = new Date();
    let dataInicial = new Date();
    let dadosFiltrados: HistoricalDataPoint[] = [];

    // Define start date based on period
    switch (period) {
        case '1M':
            dataInicial.setMonth(hoje.getMonth() - 1);
            break;
        case '6M':
            dataInicial.setMonth(hoje.getMonth() - 6);
            break;
        case '1A':
            dataInicial.setFullYear(hoje.getFullYear() - 1);
            break;
        case '5A':
            dataInicial.setFullYear(hoje.getFullYear() - 5);
            break;
        case 'MAX':
            // Use all available data
            dadosFiltrados = [...allData];
            break;
    }

    // Filter data by period (except for 'MAX' which was already handled)
    if (period !== 'MAX') {
        dadosFiltrados = allData.filter(item =>
            new Date(item.data) >= dataInicial
        );
    }

    // Reduce number of points for long periods to improve performance
    if ((period === '5A' || period === 'MAX') && dadosFiltrados.length > 365) {
        // For long periods, show one point per week or month
        const intervalo = period === 'MAX' && dadosFiltrados.length > 730 ? 30 : 7;
        dadosFiltrados = dadosFiltrados.filter((_, index) => index % intervalo === 0);
    } else if (period === '1A' && dadosFiltrados.length > 180) {
        // For 1 year, show one point every 3 days
        dadosFiltrados = dadosFiltrados.filter((_, index) => index % 3 === 0);
    }

    // Format dates for more readable display
    return dadosFiltrados.map(item => {
        const data = new Date(item.data);
        let dataFormatada;

        if (period === '1M') {
            // Day/month format for short periods
            dataFormatada = data.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
        } else {
            // Complete format for long periods
            dataFormatada = data.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' });
        }

        return {
            ...item,
            dataFormatada
        };
    });
}