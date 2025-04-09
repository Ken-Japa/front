import { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Switch,
    Tooltip,
    Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import { AlertDialog } from '../AlertDialog';
import { Alert } from '../../types';
import { TableWrapper, NoAlertsMessage } from './styled';
import { useAlerts } from '../../hooks/useAlerts';

export const AlertsTable = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);
    const { alerts, toggleAlert, deleteAlert, loading } = useAlerts();

    const handleEdit = (alert: Alert) => {
        setSelectedAlert(alert);
        setOpenDialog(true);
    };

    const handleToggle = async (alert: Alert) => {
        await toggleAlert(alert.id, !alert.active);
    };

    const handleDelete = async (id: number) => {
        await deleteAlert(id);
    };

    if (alerts.length === 0 && !loading) {
        return (
            <NoAlertsMessage>
                <Typography variant="h6">Nenhum alerta encontrado</Typography>
                <Typography variant="body2">
                    Clique em &quot;Adicionar Alerta&quot; para criar seu primeiro alerta de preço.
                </Typography>
            </NoAlertsMessage>
        );
    }

    return (
        <>
            <TableWrapper>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Ativo</TableCell>
                                <TableCell align="right">Preço Atual</TableCell>
                                <TableCell align="right">Alerta de Compra</TableCell>
                                <TableCell align="right">Alerta de Venda</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="center">Ações</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {alerts.map((alert) => (
                                <TableRow key={alert.id}>
                                    <TableCell>
                                        <Typography variant="body1" component="strong">
                                            {alert.symbol}
                                        </Typography>
                                        <br />
                                        <Typography variant="body2" className="asset-name">
                                            {alert.name}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography className="price-value">
                                            R$ {alert.currentPrice.toFixed(2)}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography className="price-value">
                                            R$ {alert.buyAlert.price.toFixed(2)}
                                        </Typography>
                                        <Typography className="percentage">
                                            (-{alert.buyAlert.percentage}%)
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography className="price-value">
                                            R$ {alert.sellAlert.price.toFixed(2)}
                                        </Typography>
                                        <Typography className="percentage">
                                            (+{alert.sellAlert.percentage}%)
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Switch
                                            checked={alert.active}
                                            onChange={() => handleToggle(alert)}
                                        />
                                    </TableCell>
                                    <TableCell align="center">
                                        <div className="action-buttons">
                                            <Tooltip title="Editar">
                                                <IconButton
                                                    size="small"
                                                    onClick={() => handleEdit(alert)}
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Excluir">
                                                <IconButton
                                                    size="small"
                                                    color="error"
                                                    onClick={() => handleDelete(alert.id)}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Notificações">
                                                <IconButton size="small" color="primary">
                                                    <NotificationsActiveIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </TableWrapper>

            <AlertDialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                alert={selectedAlert}
            />
        </>
    );
};