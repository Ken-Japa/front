import React, { useEffect, useState } from 'react';
import {
    Table, TableBody, TableCell, TableHead, TableRow,
    Typography, Box, Checkbox, FormControlLabel, CircularProgress
} from '@mui/material';
import { formatCurrency } from '../utils/currency';
import { TableContainer, StyledTable } from './styled';
import { SumarioData } from './types';
import { IndustriaRow } from './components/IndustriaRow';
import { SegmentoSection } from './components/SegmentoSection';
import { FlatTableView } from './components/FlatTableView';
import { useSortableData } from './hooks/useSortableData';
import { sumarioService } from './services/sumarioService';

interface TabelaViewProps {
    onLoadingChange?: (loading: boolean) => void;
}


export const TabelaView: React.FC<TabelaViewProps> = ({ onLoadingChange }) => {
    const [data, setData] = useState<SumarioData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [hideIndustrias, setHideIndustrias] = useState(false);
    const [hideSegmentos, setHideSegmentos] = useState(false);
    const { orderBy, order, handleSort } = useSortableData('valorMercado');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                onLoadingChange?.(true);
                const response = await sumarioService.getSumarioData();
                setData(response);
            } catch (error) {
                setError('Falha ao carregar os dados');
                console.error('Error loading data:', error);
            } finally {
                setIsLoading(false);
                onLoadingChange?.(false);
            }
        };

        fetchData();
    }, [onLoadingChange]);

    if (isLoading) return <CircularProgress />;
    if (error) return <Typography color="error">{error}</Typography>;
    if (!data) return null;

    const sortedIndustrias = [...data.sumario].sort(
        (a, b) => b.valorMercadoTotal - a.valorMercadoTotal
    );

    return (
        <TableContainer>
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={hideIndustrias}
                                onChange={(e) => setHideIndustrias(e.target.checked)}
                            />
                        }
                        label="Ocultar Indústrias"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={hideSegmentos}
                                onChange={(e) => setHideSegmentos(e.target.checked)}
                            />
                        }
                        label="Ocultar Segmentos"
                    />
                </Box>
                <Typography variant="h6">
                    Mercado Brasileiro {data && formatCurrency(data.sumarioTotal.valorMercadoTotalGeral)}
                </Typography>
            </Box>

            {hideIndustrias && hideSegmentos ? (
                <FlatTableView
                    data={data}
                    orderBy={orderBy}
                    order={order}
                    handleSort={handleSort}
                />
            ) : hideIndustrias ? (
                <StyledTable>
                    <Table sx={{ width: '100%', tableLayout: 'fixed' }}>
                        <TableHead>
                            <TableRow>
                                <TableCell width={50} />
                                <TableCell>Segmento</TableCell>
                                <TableCell align="right">Valor de Mercado</TableCell>
                                <TableCell align="right">Número de Empresas</TableCell>
                                <TableCell align="right">Participação</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.sumario
                                .flatMap(industria =>
                                    industria.segmentos.map(segmento => ({
                                        ...segmento,
                                        industria: industria.industria
                                    }))
                                )
                                .sort((a, b) => b.valorMercado - a.valorMercado)
                                .map((segmento, index) => (
                                    <SegmentoSection
                                        key={index}
                                        segmento={segmento}
                                        valorMercadoIndustria={data.sumarioTotal.valorMercadoTotalGeral}
                                        valorMercadoTotal={data.sumarioTotal.valorMercadoTotalGeral}
                                    />
                                ))}
                        </TableBody>
                    </Table>
                </StyledTable>
            ) : (
                <StyledTable>
                    <Table sx={{ width: '100%', tableLayout: 'fixed' }}>
                        <TableHead>
                            <TableRow>
                                <TableCell width={50} />
                                <TableCell>Nome</TableCell>
                                <TableCell align="right">Valor de Mercado</TableCell>
                                <TableCell align="right">Número de Empresas</TableCell>
                                <TableCell align="right">%</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sortedIndustrias.map((industria, index) => (
                                <IndustriaRow
                                    key={index}
                                    industria={industria.industria}
                                    valorMercadoTotal={industria.valorMercadoTotal}
                                    valorMercadoGeral={data.sumarioTotal.valorMercadoTotalGeral}
                                    segmentos={industria.segmentos}
                                    hideSegmentos={hideSegmentos}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </StyledTable>
            )}
        </TableContainer>
    );
};