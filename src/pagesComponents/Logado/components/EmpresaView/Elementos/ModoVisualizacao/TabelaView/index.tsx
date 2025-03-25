import React, { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Collapse,
    Typography,
    Box
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { formatCurrency } from '../utils/currency';
import { CircularProgress } from '@mui/material';
import { TableContainer as StyledTableContainer } from './styled';
import { IndustriaRowProps, SegmentoSectionProps, EmpresaDetalhe, SumarioData } from './types';

// Update the header to include the percentage column
<TableHead>
    <TableRow>
        <TableCell width={50} />
        <TableCell>Nome</TableCell>
        <TableCell align="right">Valor de Mercado</TableCell>
        <TableCell align="right">Número de Empresas</TableCell>
        <TableCell align="right">%</TableCell>
    </TableRow>
</TableHead>

const IndustriaRow: React.FC<IndustriaRowProps> = ({
    industria,
    valorMercadoTotal,
    valorMercadoGeral,
    segmentos
}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    <Typography variant="subtitle1" fontWeight="bold">
                        {industria}
                    </Typography>
                </TableCell>
                <TableCell align="right">
                    <Typography variant="subtitle1" fontWeight="bold">
                        {formatCurrency(valorMercadoTotal)}
                    </Typography>
                </TableCell>
                <TableCell align="right">
                    <Typography variant="subtitle1" fontWeight="bold">
                        {segmentos.reduce((acc, seg) => acc + seg.empresasDetalhes.length, 0)}
                    </Typography>
                </TableCell>
                <TableCell align="right">
                    <Typography variant="subtitle1" fontWeight="bold">
                        {((valorMercadoTotal / valorMercadoGeral) * 100).toFixed(2)}%
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Table>

                                <TableBody>
                                    {segmentos.map((segmento, index) => (
                                        <SegmentoSection
                                            key={index}
                                            segmento={segmento}
                                            valorMercadoIndustria={valorMercadoTotal}
                                        />
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
};

// Update SegmentoSection to include industry percentage
const SegmentoSection: React.FC<SegmentoSectionProps> = ({ segmento, valorMercadoIndustria }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow>
                <TableCell>
                    <IconButton size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell>
                    <Typography variant="subtitle2" color="primary">
                        {segmento.segmento}
                    </Typography>
                </TableCell>
                <TableCell align="right">
                    <Typography variant="subtitle2">
                        {formatCurrency(segmento.valorMercado)}
                    </Typography>
                </TableCell>
                <TableCell align="right">
                    <Typography variant="subtitle2">
                        {segmento.empresasDetalhes.length}
                    </Typography>
                </TableCell>
                <TableCell align="right">
                    <Typography variant="subtitle2">
                        {((segmento.valorMercado / valorMercadoIndustria) * 100).toFixed(2)}%
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ ml: 4 }}>
                            <Table size="small">
                                <TableBody>
                                    {segmento.empresasDetalhes
                                        .sort((a, b) => b.valorMercado - a.valorMercado)
                                        .map((empresa, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{empresa.empresa}</TableCell>
                                                <TableCell align="right">{formatCurrency(empresa.valorMercado)}</TableCell>
                                                <TableCell align="right">{`${((empresa.valorMercado / segmento.valorMercado) * 100).toFixed(2)}%`}</TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
};

export const TabelaView = () => {
    const [data, setData] = useState<SumarioData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                // Using mock data temporarily
                const response = await import('@/pagesComponents/Logado/components/EmpresaView/mockdata_example/sumario.json');
                setData(response.default);
            } catch (error) {
                setError('Falha ao carregar os dados');
                console.error('Error loading data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) return <CircularProgress />;
    if (error) return <Typography color="error">{error}</Typography>;
    if (!data) return null;

    const sortedIndustrias = [...data.sumario].sort(
        (a, b) => b.valorMercadoTotal - a.valorMercadoTotal
    );

    return (
        <StyledTableContainer>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell width={50} />
                            <TableCell>Nome</TableCell>
                            <TableCell align="right">Valor de Mercado</TableCell>
                            <TableCell align="right">Número de Empresas</TableCell>
                            <TableCell align="right">Participação</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell width={50} />
                            <TableCell>
                                <Typography variant="h6">Mercado Brasileiro</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="h6">{formatCurrency(data.sumarioTotal.valorMercadoTotalGeral)}</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="h6">{data.sumarioTotal.qtdEmpresasTotal} empresas</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="h6">100%</Typography>
                            </TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {sortedIndustrias.map((industria, index) => (
                            <IndustriaRow
                                key={index}
                                industria={industria.industria}
                                valorMercadoTotal={industria.valorMercadoTotal}
                                valorMercadoGeral={data.sumarioTotal.valorMercadoTotalGeral}
                                segmentos={industria.segmentos.sort(
                                    (a, b) => b.valorMercado - a.valorMercado
                                )}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </StyledTableContainer>
    );
};