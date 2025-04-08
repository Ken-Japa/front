import React, { useState, useEffect } from 'react';
import {
  Paper,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  CircularProgress,
  Alert
} from '@mui/material';
import { api } from '@/services/api';

interface DerivativoItem {
  "COD Opcao": string;
  "Call ou Put": string;
  "Tipo": string;
  "ON ou PN": string;
  "Strike": string;
  "Vencimento": string;
  "Ultimo Preco": number;
  "Data Negocio": string | null;
  "Hora Negocio": string;
  "Oferta Compra": number;
  "Oferta Venda": number;
  "Volume": number;
  "Contratos": number;
  "_id": string;
}

interface DerivativosResponse {
  success?: boolean;
  data?: {
    _id: string;
    Empresa: string;
    "COD Empresa": string;
    totalDerivativos: number;
    Derivativos: DerivativoItem[];
    pagination: {
      offset: number;
      limit: number;
      total: number;
      page: number;
      pages: number;
    };
  };
  _id?: string;
  Empresa?: string;
  "COD Empresa"?: string;
  totalDerivativos?: number;
  Derivativos?: DerivativoItem[];
  pagination?: {
    offset: number;
    limit: number;
    total: number;
    page: number;
    pages: number;
  };
}

interface DerivativosTabProps {
  codigoBase: string;
}

export const DerivativosTab: React.FC<DerivativosTabProps> = ({ codigoBase }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [derivativos, setDerivativos] = useState<DerivativoItem[]>([]);
  const [totalDerivativos, setTotalDerivativos] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [hasDerivatives, setHasDerivatives] = useState(true);

  useEffect(() => {
    const fetchDerivativos = async () => {
      if (!codigoBase) {
        setError('Código de ativo não fornecido');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response: DerivativosResponse = await api.derivatives.getDerivatives({
          cod_empresa: codigoBase,
          page,
          pageSize: rowsPerPage
        });

        if (response.Derivativos && Array.isArray(response.Derivativos)) {
          setDerivativos(response.Derivativos);
          setTotalDerivativos(response.totalDerivativos || 0);
          setHasDerivatives((response.totalDerivativos || 0) > 0);
        }
        // Check if response has success/data structure
        else if (response.success && response.data) {
          setDerivativos(response.data.Derivativos || []);
          setTotalDerivativos(response.data.totalDerivativos || 0);
          setHasDerivatives((response.data.totalDerivativos || 0) > 0);
        } else {
          setHasDerivatives(false);
          setError('Dados de derivativos não disponíveis');
        }
      } catch (err) {
        console.error('Erro ao buscar derivativos:', err);
        setHasDerivatives(false);
        setError('Não foi possível carregar os dados de derivativos. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchDerivativos();
  }, [codigoBase, page, rowsPerPage]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const formatarVencimento = (data: string) => {
    if (!data) return '-';
    // Formato esperado: YYYYMMDD
    const ano = data.substring(0, 4);
    const mes = data.substring(4, 6);
    const dia = data.substring(6, 8);
    return `${dia}/${mes}/${ano}`;
  };

  const formatCurrency = (value: number | string): string => {
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(numValue);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Derivativos para {codigoBase}
      </Typography>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : derivativos.length === 0 ? (
        <Alert severity="info">Não há derivativos disponíveis para este ativo.</Alert>
      ) : (
        <>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Código</TableCell>
                  <TableCell>Tipo</TableCell>
                  <TableCell>Classe</TableCell>
                  <TableCell>Strike</TableCell>
                  <TableCell>Vencimento</TableCell>
                  <TableCell>Último Preço</TableCell>
                  <TableCell>Volume</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {derivativos.map((derivativo) => (
                  <TableRow key={derivativo._id}>
                    <TableCell>{derivativo["COD Opcao"]}</TableCell>
                    <TableCell>{derivativo["Call ou Put"]}</TableCell>
                    <TableCell>{derivativo["Tipo"]}</TableCell>
                    <TableCell>{formatCurrency(derivativo["Strike"])}</TableCell>
                    <TableCell>{formatarVencimento(derivativo["Vencimento"])}</TableCell>
                    <TableCell>
                      {derivativo["Ultimo Preco"] > 0
                        ? formatCurrency(derivativo["Ultimo Preco"])
                        : '-'}
                    </TableCell>
                    <TableCell>{derivativo["Volume"].toLocaleString('pt-BR')}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[10, 25, 50, 100]}
            component="div"
            count={totalDerivativos}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage="Itens por página:"
            labelDisplayedRows={({ from, to, count }) =>
              `${from}-${to} de ${count !== -1 ? count : `mais de ${to}`}`
            }
          />
        </>
      )}
    </Paper>
  );
};