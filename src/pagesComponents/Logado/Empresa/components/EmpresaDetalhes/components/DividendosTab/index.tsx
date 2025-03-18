import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export const DividendosTab = () => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Data Com</TableCell>
                        <TableCell>Data Pagamento</TableCell>
                        <TableCell>Tipo</TableCell>
                        <TableCell align="right">Valor</TableCell>
                        <TableCell align="right">Yield</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Will be populated with API data */}
                </TableBody>
            </Table>
        </TableContainer>
    );
};