import React, { useState } from 'react';
import {
    TableRow, TableCell, IconButton, Collapse,
    Typography, Box
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { SegmentoSectionProps } from '../types';
import { formatCurrency } from '../../utils/currency';
import { EmpresasTable } from './EmpresasTable';

export const SegmentoSection: React.FC<SegmentoSectionProps> = ({
    segmento,
    valorMercadoIndustria,
    valorMercadoTotal
}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow>
                <TableCell>
                    <IconButton size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell width="30%">
                    <Typography variant="subtitle2" color="primary">
                        {segmento.segmento}
                    </Typography>
                </TableCell>
                <TableCell align="right" width="25%">
                    <Typography variant="subtitle2">
                        {formatCurrency(segmento.valorMercado)}
                    </Typography>
                </TableCell>
                <TableCell align="right" width="20%">
                    <Typography variant="subtitle2">
                        {segmento.empresasDetalhes.length}
                    </Typography>
                </TableCell>
                <TableCell align="right" width="25%">
                    <Typography variant="subtitle2">
                        {((segmento.valorMercado / valorMercadoIndustria) * 100).toFixed(2)}%
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ m: 0, width: '100%' }}>
                            <EmpresasTable
                                empresas={segmento.empresasDetalhes}
                                valorMercadoTotal={segmento.valorMercado}
                                showIndustryParticipation={true}
                            />
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
};