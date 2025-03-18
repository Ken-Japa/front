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
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { AlertDialog } from '../AlertDialog';
import { Alert } from '../../types';
import { TableWrapper } from './styled';
import { useAlerts } from '../../hooks/useAlerts';

export const AlertsTable = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);
    const { alerts, toggleAlert, deleteAlert } = useAlerts();

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
                                        <strong>{alert.symbol}</strong>
                                        <br />
                                        <small>{alert.name}</small>
                                    </TableCell>
                                    <TableCell align="right">
                                        R$ {alert.currentPrice.toFixed(2)}
                                    </TableCell>
                                    <TableCell align="right">
                                        R$ {alert.buyAlert.price.toFixed(2)}
                                        <br />
                                        <small>(-{alert.buyAlert.percentage}%)</small>
                                    </TableCell>
                                    <TableCell align="right">
                                        R$ {alert.sellAlert.price.toFixed(2)}
                                        <br />
                                        <small>(+{alert.sellAlert.percentage}%)</small>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Switch 
                                            checked={alert.active} 
                                            onChange={() => handleToggle(alert)}
                                        />
                                    </TableCell>
                                    <TableCell align="center">
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