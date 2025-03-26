import React, { useState } from 'react';
import {
    TableRow, TableCell, IconButton, Collapse,
    Typography, Box
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IndustriaRowProps } from '../types';
import { formatCurrency } from '../../utils/currency';
import { EmpresasTable } from './EmpresasTable';
import { SegmentoSection } from './SegmentoSection';

export const IndustriaRow: React.FC<IndustriaRowProps> = ({
    industria,
    valorMercadoTotal,
    valorMercadoGeral,
    segmentos,
    hideSegmentos
}) => {
    const [open, setOpen] = useState(false);
    const allEmpresas = segmentos.flatMap(seg => seg.empresasDetalhes);

    const sortedSegmentos = [...segmentos].sort((a, b) => b.valorMercado - a.valorMercado);

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
                        <Box sx={{ m: 0 }}>
                            {hideSegmentos ? (
                                <EmpresasTable
                                    empresas={allEmpresas}
                                    valorMercadoTotal={valorMercadoTotal}
                                    showIndustryParticipation={true}
                                    useIndustryTotal={true}
                                />
                            ) : (
                                sortedSegmentos.map((segmento, index) => (
                                    <SegmentoSection
                                        key={index}
                                        segmento={segmento}
                                        valorMercadoIndustria={valorMercadoTotal}
                                        valorMercadoTotal={segmento.valorMercado}
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