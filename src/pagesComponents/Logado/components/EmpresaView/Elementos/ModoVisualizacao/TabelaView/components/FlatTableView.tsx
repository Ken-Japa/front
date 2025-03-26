import React from 'react';
import {
    Table, TableHead, TableBody, TableRow,
    TableCell, TableSortLabel
} from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { SumarioData } from '../types';
import { formatCurrency } from '../../utils/currency';

interface FlatTableViewProps {
    data: SumarioData;
    orderBy: string;
    order: 'asc' | 'desc';
    handleSort: (property: string) => void;
}

export const FlatTableView: React.FC<FlatTableViewProps> = ({
    data,
    orderBy,
    order,
    handleSort
}) => {
    const allEmpresas = data.sumario.flatMap(industria =>
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
                            IconComponent={UnfoldMoreIcon}
                        >
                            Valor de Mercado
                        </TableSortLabel>
                    </TableCell>
                    <TableCell align="right">Participação</TableCell>
                    <TableCell>Códigos</TableCell>
                    <TableCell align="right">Preço</TableCell>
                    <TableCell align="right">Variação</TableCell>
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
                                            {`${((empresa.valorMercado / data.sumarioTotal.valorMercadoTotalGeral) * 100).toFixed(2)}%`}
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
};