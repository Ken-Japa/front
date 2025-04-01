import { Paper, Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { LineChart } from '@/components/Charts/LineChart';
import { getHistoricalData } from '../../services/empresaService';

// Removendo as opções de 1D e 5D
type PeriodType = '1M' | '6M' | '1A' | '5A' | 'MAX';

interface GraficoHistoricoProps {
    codigoAtivo: string;
}

export const GraficoHistorico: React.FC<GraficoHistoricoProps> = ({ codigoAtivo }) => {
    // Alterando o período padrão para 1M
    const [period, setPeriod] = useState<PeriodType>('1M');
    const [chartData, setChartData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [allHistoricalData, setAllHistoricalData] = useState<any[]>([]);

    // Buscar todos os dados históricos uma vez quando o componente montar ou o código ativo mudar
    useEffect(() => {
        const fetchAllHistoricalData = async () => {
            if (!codigoAtivo) return;

            setLoading(true);
            try {
                const data = await getHistoricalData(codigoAtivo);

                // Ordenar dados por data (mais antigo para mais recente)
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

    // Filtrar dados com base no período selecionado
    useEffect(() => {
        if (allHistoricalData.length === 0) return;

        setLoading(true);

        try {
            const hoje = new Date();
            let dataInicial = new Date();
            let dadosFiltrados = [];

            // Definir a data inicial com base no período
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
                    // Usar todos os dados disponíveis
                    dadosFiltrados = [...allHistoricalData];
                    break;
            }

            // Filtrar dados pelo período (exceto para 'MAX' que já foi tratado)
            if (period !== 'MAX') {
                dadosFiltrados = allHistoricalData.filter(item =>
                    new Date(item.data) >= dataInicial
                );
            }

            // Reduzir a quantidade de pontos para períodos longos para melhorar a performance
            if ((period === '5A' || period === 'MAX') && dadosFiltrados.length > 365) {
                // Para períodos longos, mostrar um ponto por semana ou por mês
                const intervalo = period === 'MAX' && dadosFiltrados.length > 730 ? 30 : 7;
                dadosFiltrados = dadosFiltrados.filter((_, index) => index % intervalo === 0);
            } else if (period === '1A' && dadosFiltrados.length > 180) {
                // Para 1 ano, mostrar um ponto a cada 3 dias
                dadosFiltrados = dadosFiltrados.filter((_, index) => index % 3 === 0);
            }

            // Formatar as datas para exibição mais legível
            const dadosFormatados = dadosFiltrados.map(item => {
                const data = new Date(item.data);
                let dataFormatada;

                if (period === '1M') {
                    // Formato de dia/mês para períodos curtos
                    dataFormatada = data.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
                } else {
                    // Formato completo para períodos longos
                    dataFormatada = data.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' });
                }

                return {
                    ...item,
                    dataFormatada
                };
            });

            setChartData(dadosFormatados);
        } catch (error) {
            console.error('Erro ao processar dados históricos:', error);
        } finally {
            setLoading(false);
        }
    }, [allHistoricalData, period]);

    return (
        <Paper sx={{ p: 3, mb: 3 }}>
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" >Histórico de Preços</Typography>
                <ToggleButtonGroup
                    value={period}
                    exclusive
                    onChange={(_, newPeriod) => newPeriod && setPeriod(newPeriod)}
                    size="small"
                >
                    {/* Removendo os botões 1D e 5D */}
                    <ToggleButton value="1M">1M</ToggleButton>
                    <ToggleButton value="6M">6M</ToggleButton>
                    <ToggleButton value="1A">1A</ToggleButton>
                    <ToggleButton value="5A">5A</ToggleButton>
                    <ToggleButton value="MAX">MAX</ToggleButton>
                </ToggleButtonGroup>
            </Box>
            <Box sx={{ height: 400 }}>
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
                        tickColor: '#666',
                        legendColor: '#333',
                        tickTextColor: '#333'
                    }}
                    yAxisProps={{
                        width: 70,
                        fontSize: 12,
                        // Usando 2 casas decimais para evitar valores repetidos
                        tickFormatter: (value: number) => `R$ ${value.toFixed(2)}`,
                        tickSize: 10,
                        tickPadding: 8,

                        legendOffset: -50,
                        legendPosition: 'middle',
                        // Controlando o número de ticks para evitar sobreposição
                        tickValues: 5, // Limita a quantidade de valores no eixo Y
                        tickColor: '#666',
                        legendColor: '#333',
                        tickTextColor: '#333'
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
                    // Adicionando propriedades para melhorar a aparência geral do gráfico
                    chartProps={{
                        enableGridX: true,
                        enableGridY: true,
                        gridXColor: '#e0e0e0',
                        gridYColor: '#e0e0e0',
                        lineWidth: 3,
                        enableArea: false,
                        areaOpacity: 0.1,
                        enablePoints: true,
                        pointSize: 6,
                        pointBorderWidth: 2,
                        pointColor: '#ffffff',
                        curve: 'monotoneX',
                        colors: ['#0088cc'],
                        // Aumentando a margem inferior para evitar sobreposição com a legenda
                        margin: { top: 20, right: 30, bottom: 80, left: 90 }
                    }}
                />
            </Box>
        </Paper>
    );
};