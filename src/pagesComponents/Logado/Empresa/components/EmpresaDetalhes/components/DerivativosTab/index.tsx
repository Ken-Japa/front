import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export const DerivativosTab = () => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Código</TableCell>
                        <TableCell>Tipo</TableCell>
                        <TableCell>Strike</TableCell>
                        <TableCell>Vencimento</TableCell>
                        <TableCell align="right">Último</TableCell>
                        <TableCell align="right">Volume</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Will be populated with API data */}
                </TableBody>
            </Table>
        </TableContainer>
    );
};