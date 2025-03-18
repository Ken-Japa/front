import { Box, Paper, Typography, FormControlLabel, Switch } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

type NotificationTypes = {
    email: boolean;
    push: boolean;
    priceAlerts: boolean;
};

interface NotificationSettingsProps {
    notifications: NotificationTypes;
    onNotificationChange: (type: keyof NotificationTypes) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NotificationSettings = ({ notifications, onNotificationChange }: NotificationSettingsProps) => {
    return (
        <Paper sx={{ p: 3, mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <NotificationsIcon sx={{ mr: 2 }} />
                <Typography variant="h6">Notificações</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={notifications.email}
                            onChange={onNotificationChange('email')}
                        />
                    }
                    label="Receber alertas por e-mail"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={notifications.push}
                            onChange={onNotificationChange('push')}
                        />
                    }
                    label="Notificações push"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={notifications.priceAlerts}
                            onChange={onNotificationChange('priceAlerts')}
                        />
                    }
                    label="Alertas de preço"
                />
            </Box>
        </Paper>
    );
};