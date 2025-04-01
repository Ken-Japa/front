import { Typography, useTheme } from '@mui/material';
import { useState, useEffect } from 'react';
import { LineChart } from '@/components/Charts/LineChart';
import { getHistoricalData } from '../../services/empresaService';
import { GraficoContainer, GraficoHeader, ChartWrapper } from './styled';
import { PeriodSelector, PeriodType } from './components/PeriodSelector';
import { filterDataByPeriod } from './utils/dataFilters';

interface GraficoHistoricoProps {
    codigoAtivo: string;
}

export const GraficoHistorico: React.FC<GraficoHistoricoProps> = ({ codigoAtivo }) => {
    const [period, setPeriod] = useState<PeriodType>('1M');
    const [chartData, setChartData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [allHistoricalData, setAllHistoricalData] = useState<any[]>([]);
    const theme = useTheme();
    
    // Get text color based on current theme
    const textColor = theme.palette.text.primary;
    const gridColor = theme.palette.divider;

    // Fetch all historical data once when component mounts or active code changes
    useEffect(() => {
        const fetchAllHistoricalData = async () => {
            if (!codigoAtivo) return;

            setLoading(true);
            try {
                const data = await getHistoricalData(codigoAtivo);

                // Sort data by date (oldest to newest)
                const sortedData = [...data].sort((a, b) =>
                    new Date(a.data).getTime() - new Date(b.data).getTime()
                );

                setAllHistoricalData(sortedData);
            } catch (error) {
                console.error('Erro ao buscar dados históricos completos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllHistoricalData();
    }, [codigoAtivo]);

    // Filter data based on selected period
    useEffect(() => {
        if (allHistoricalData.length === 0) return;
        
        setLoading(true);
        
        try {
            const filteredData = filterDataByPeriod(allHistoricalData, period);
            setChartData(filteredData);
        } catch (error) {
            console.error('Erro ao processar dados históricos:', error);
        } finally {
            setLoading(false);
        }
    }, [allHistoricalData, period]);

    const handlePeriodChange = (newPeriod: PeriodType) => {
        setPeriod(newPeriod);
    };

    return (
        <GraficoContainer>
            <GraficoHeader>
                <Typography variant="h6">Histórico de Preços</Typography>
                <PeriodSelector value={period} onChange={handlePeriodChange} />
            </GraficoHeader>
            <ChartWrapper>
                <LineChart
                    data={chartData}
                    loading={loading}
                    xKey="dataFormatada"
                    yKey="valor"
                    labelFormat={(value) => `R$ ${value.toFixed(2)}`}
                    xAxisProps={{
                        angle: 45,
                        textAnchor: 'start',
                        height: 60,
                        fontSize: 12,
                        tickSize: 10,
                        tickPadding: 8,
                        legendOffset: 50,
                        legendPosition: 'middle',
                        tickRotation: 45,
                        tickColor: gridColor,
                        legendColor: textColor,
                        tickTextColor: textColor
                    }}
                    yAxisProps={{
                        width: 70,
                        fontSize: 12,
                        tickFormatter: (value: number) => `R$ ${value.toFixed(2)}`,
                        tickSize: 10,
                        tickPadding: 8,
                        legendOffset: -50,
                        legendPosition: 'middle',
                        tickValues: 5,
                        tickColor: gridColor,
                        legendColor: textColor,
                        tickTextColor: textColor
                    }}
                    tooltipProps={{
                        formatter: (value: number) => [`R$ ${value.toFixed(2)}`],
                        labelFormatter: (label: string) => {
                            const item = chartData.find(d => d.dataFormatada === label);
                            if (item) {
                                return new Date(item.data).toLocaleDateString('pt-BR', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric'
                                });
                            }
                            return label;
                        }
                    }}
                    chartProps={{
                        enableGridX: true,
                        enableGridY: true,
                        gridXColor: gridColor,
                        gridYColor: gridColor,
                        lineWidth: 3,
                        enableArea: false,
                        areaOpacity: 0.1,
                        enablePoints: true,
                        pointSize: 6,
                        pointBorderWidth: 2,
                        pointColor: theme.palette.background.paper,
                        curve: 'monotoneX',
                        colors: [theme.palette.primary.main],
                        margin: { top: 20, right: 30, bottom: 80, left: 90 }
                    }}
                />
            </ChartWrapper>
        </GraficoContainer>
    );
};