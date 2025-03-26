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
import { TableSortLabel, Checkbox, FormControlLabel, CircularProgress } from '@mui/material';
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
    segmentos,
    hideSegmentos
}) => {
    const [open, setOpen] = useState(false);

    const empresas = hideSegmentos
        ? segmentos.flatMap(seg =>
            seg.empresasDetalhes.map(empresa => ({
                ...empresa,
                segmento: seg.segmento
            }))
        )
        : [];

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
                            {hideSegmentos ? (
                                <EmpresasTable
                                    empresas={empresas}
                                    valorMercadoTotal={valorMercadoTotal}
                                    showIndustryParticipation={true}
                                />
                            ) : (
                                segmentos.map((segmento, index) => (
                                    <SegmentoSection
                                        key={index}
                                        segmento={segmento}
                                        valorMercadoIndustria={valorMercadoTotal}
                                        valorMercadoTotal={valorMercadoGeral}
                                    />
                                ))
                            )}
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
};

// New component to handle empresa rows consistently
// Fix EmpresasTable component
const EmpresasTable: React.FC<{
    empresas: EmpresaDetalhe[];
    valorMercadoTotal: number;
    showIndustryParticipation: boolean;
}> = ({ empresas, valorMercadoTotal, showIndustryParticipation }) => {
    const [orderBy, setOrderBy] = useState<string>('valorMercado');
    const [order, setOrder] = useState<'asc' | 'desc'>('desc');

    const handleSort = (property: string) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const sortedEmpresas = [...empresas].sort((a, b) => {
        if (orderBy === 'valorMercado') {
            return order === 'desc' ? b.valorMercado - a.valorMercado : a.valorMercado - b.valorMercado;
        }

        const codigoA = a.codigos[0];
        const codigoB = b.codigos[0];

        if (orderBy === 'preco') {
            return order === 'desc' ? codigoB.preco - codigoA.preco : codigoA.preco - codigoB.preco;
        }

        if (orderBy === 'variacao') {
            const variacaoA = codigoA.variacao ?? -Infinity;
            const variacaoB = codigoB.variacao ?? -Infinity;
            return order === 'desc' ? variacaoB - variacaoA : variacaoA - variacaoB;
        }

        return 0;
    });

    return (
        <>
            <Table size="small" sx={{ width: '100%', tableLayout: 'fixed' }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Empresa</TableCell>
                        <TableCell align="right">
                            <TableSortLabel
                                active={orderBy === 'valorMercado'}
                                direction={order}
                                onClick={() => handleSort('valorMercado')}
                            >
                                Valor de Mercado
                            </TableSortLabel>
                        </TableCell>
                        {showIndustryParticipation && (
                            <TableCell align="right">Participação</TableCell>
                        )}
                        <TableCell>Códigos</TableCell>
                        <TableCell align="right">
                            <TableSortLabel
                                active={orderBy === 'preco'}
                                direction={order}
                                onClick={() => handleSort('preco')}
                            >
                                Preço
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="right">
                            <TableSortLabel
                                active={orderBy === 'variacao'}
                                direction={order}
                                onClick={() => handleSort('variacao')}
                            >
                                Variação
                            </TableSortLabel>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedEmpresas.map((empresa, index) => (
                        <React.Fragment key={index}>
                            {empresa.codigos.map((codigo, cIndex) => (
                                <TableRow key={`${index}-${cIndex}`}>
                                    {cIndex === 0 && (
                                        <>
                                            <TableCell rowSpan={empresa.codigos.length}>
                                                {empresa.empresa}
                                            </TableCell>
                                            <TableCell align="right" rowSpan={empresa.codigos.length}>
                                                {formatCurrency(empresa.valorMercado)}
                                            </TableCell>
                                            {showIndustryParticipation && (
                                                <TableCell align="right" rowSpan={empresa.codigos.length}>
                                                    {`${((empresa.valorMercado / valorMercadoTotal) * 100).toFixed(2)}%`}
                                                </TableCell>
                                            )}
                                        </>
                                    )}
                                    <TableCell>{codigo.codigo}</TableCell>
                                    <TableCell align="right">
                                        {`R$ ${codigo.preco.toFixed(2)}`.replace('.', ',')}
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        sx={{
                                            color: codigo.variacao
                                                ? codigo.variacao > 0
                                                    ? 'success.main'
                                                    : 'error.main'
                                                : 'text.primary'
                                        }}
                                    >
                                        {codigo.variacao
                                            ? `${codigo.variacao > 0 ? '+' : ''}${codigo.variacao.toFixed(2)}%`
                                            : '-'
                                        }
                                    </TableCell>
                                </TableRow>
                            ))}
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </>
    );
};

// Update SegmentoSection to use the new EmpresasTable component
// Complete SegmentoSection component
const SegmentoSection: React.FC<SegmentoSectionProps> = ({ segmento, valorMercadoIndustria, valorMercadoTotal }) => {
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
                        <Box sx={{ ml: 4, width: '100%' }}>
                            <Table size="small" sx={{ width: '100%' }}>
                                <EmpresasTable
                                    empresas={segmento.empresasDetalhes}
                                    valorMercadoTotal={valorMercadoTotal}
                                    showIndustryParticipation={true}
                                />
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
    const [hideIndustrias, setHideIndustrias] = useState(false);
    const [hideSegmentos, setHideSegmentos] = useState(false);
    const [orderBy, setOrderBy] = useState<string>('valorMercado');
    const [order, setOrder] = useState<'asc' | 'desc'>('desc');


    const handleSort = (property: string) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const sortData = (a: any, b: any, property: string) => {
        if (order === 'desc') {
            return b[property] - a[property];
        }
        return a[property] - b[property];
    };

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

    const renderContent = () => {
        if (hideIndustrias && hideSegmentos) {
            const allEmpresas = data!.sumario.flatMap(industria =>
                industria.segmentos.flatMap(segmento =>
                    segmento.empresasDetalhes.map(empresa => ({
                        ...empresa,
                        industria: industria.industria,
                        segmento: segmento.segmento
                    }))
                )
            );

            const sortedEmpresas = [...allEmpresas].sort((a, b) => {
                if (orderBy === 'valorMercado') {
                    return order === 'desc' ? b.valorMercado - a.valorMercado : a.valorMercado - b.valorMercado;
                }

                const codigoA = a.codigos[0];
                const codigoB = b.codigos[0];

                if (orderBy === 'preco') {
                    return order === 'desc' ? codigoB.preco - codigoA.preco : codigoA.preco - codigoB.preco;
                }

                if (orderBy === 'variacao') {
                    const variacaoA = codigoA.variacao ?? -Infinity;
                    const variacaoB = codigoB.variacao ?? -Infinity;
                    return order === 'desc' ? variacaoB - variacaoA : variacaoA - variacaoB;
                }

                return 0;
            });

            return (
                <Table sx={{ width: '100%', tableLayout: 'fixed' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Empresa</TableCell>
                            <TableCell>Indústria</TableCell>
                            <TableCell>Segmento</TableCell>
                            <TableCell align="right">
                                <TableSortLabel
                                    active={orderBy === 'valorMercado'}
                                    direction={order}
                                    onClick={() => handleSort('valorMercado')}
                                >
                                    Valor de Mercado
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="right">Participação Total</TableCell>
                            <TableCell>Códigos</TableCell>
                            <TableCell align="right">
                                <TableSortLabel
                                    active={orderBy === 'preco'}
                                    direction={order}
                                    onClick={() => handleSort('preco')}
                                >
                                    Preço
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="right">
                                <TableSortLabel
                                    active={orderBy === 'variacao'}
                                    direction={order}
                                    onClick={() => handleSort('variacao')}
                                >
                                    Variação
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedEmpresas.map((empresa, index) => (
                            <React.Fragment key={index}>
                                {empresa.codigos.map((codigo, cIndex) => (
                                    <TableRow key={`${index}-${cIndex}`}>
                                        {cIndex === 0 && (
                                            <>
                                                <TableCell rowSpan={empresa.codigos.length}>
                                                    {empresa.empresa}
                                                </TableCell>
                                                <TableCell rowSpan={empresa.codigos.length}>
                                                    {empresa.industria}
                                                </TableCell>
                                                <TableCell rowSpan={empresa.codigos.length}>
                                                    {empresa.segmento}
                                                </TableCell>
                                                <TableCell align="right" rowSpan={empresa.codigos.length}>
                                                    {formatCurrency(empresa.valorMercado)}
                                                </TableCell>
                                                <TableCell align="right" rowSpan={empresa.codigos.length}>
                                                    {`${((empresa.valorMercado / data!.sumarioTotal.valorMercadoTotalGeral) * 100).toFixed(2)}%`}
                                                </TableCell>
                                            </>
                                        )}
                                        <TableCell>{codigo.codigo}</TableCell>
                                        <TableCell align="right">
                                            {`R$ ${codigo.preco.toFixed(2)}`.replace('.', ',')}
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            sx={{
                                                color: codigo.variacao
                                                    ? codigo.variacao > 0
                                                        ? 'success.main'
                                                        : 'error.main'
                                                    : 'text.primary'
                                            }}
                                        >
                                            {codigo.variacao
                                                ? `${codigo.variacao > 0 ? '+' : ''}${codigo.variacao.toFixed(2)}%`
                                                : '-'
                                            }
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
            );
        } else if (hideIndustrias) {
            const allSegments = data!.sumario.flatMap(industria =>
                industria.segmentos.map(segmento => ({
                    ...segmento,
                    industria: industria.industria
                }))
            ).sort((a, b) => b.valorMercado - a.valorMercado);

            return (
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
                        {allSegments.map((segmento, index) => (
                            <SegmentoSection
                                key={index}
                                segmento={segmento}
                                valorMercadoIndustria={data!.sumarioTotal.valorMercadoTotalGeral}
                                valorMercadoTotal={data!.sumarioTotal.valorMercadoTotalGeral}
                            />
                        ))}
                    </TableBody>
                </Table>
            );
        } else {
            // Default view or only segments hidden
            return (
                <Table sx={{ width: '100%', tableLayout: 'fixed' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell width={50} />
                            <TableCell>Nome</TableCell>
                            <TableCell align="right">Valor de Mercado</TableCell>
                            <TableCell align="right">Número de Empresas</TableCell>
                            <TableCell align="right">Participação</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedIndustrias.map((industria, index) => (
                            <IndustriaRow
                                key={index}
                                industria={industria.industria}
                                valorMercadoTotal={industria.valorMercadoTotal}
                                valorMercadoGeral={data!.sumarioTotal.valorMercadoTotalGeral}
                                segmentos={industria.segmentos}
                                hideSegmentos={hideSegmentos}
                            />
                        ))}
                    </TableBody>
                </Table>
            );
        }
    };

    return (
        <StyledTableContainer>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
                <Typography variant="subtitle1" fontWeight="bold">
                    Mercado Brasileiro - {formatCurrency(data!.sumarioTotal.valorMercadoTotalGeral)}
                </Typography>
            </Box>
            <TableContainer component={Paper}>
                {renderContent()}
            </TableContainer>
        </StyledTableContainer>
    );
};