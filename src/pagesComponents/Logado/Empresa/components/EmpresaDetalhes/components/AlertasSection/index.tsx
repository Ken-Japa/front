import { Paper, Typography, Grid, TextField, Button } from '@mui/material';
import { useState } from 'react';

interface AlertasSectionProps {
    codigoAtivo: string;
}

export const AlertasSection: React.FC<AlertasSectionProps> = ({ codigoAtivo }) => {
    const [buyPrice, setBuyPrice] = useState('');
    const [sellPrice, setSellPrice] = useState('');

    const handleCreateBuyAlert = () => {
        // Implementar criação de alerta de compra
        console.log(`Criando alerta de compra para ${codigoAtivo} a R$ ${buyPrice}`);
    };

    const handleCreateSellAlert = () => {
        // Implementar criação de alerta de venda
        console.log(`Criando alerta de venda para ${codigoAtivo} a R$ ${sellPrice}`);
    };

    return (
        <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
                Configurar Alertas para {codigoAtivo}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Alerta de Compra"
                        type="number"
                        value={buyPrice}
                        onChange={(e) => setBuyPrice(e.target.value)}
                        InputProps={{
                            startAdornment: 'R$'
                        }}
                        helperText="Notificar quando o preço estiver abaixo deste valor"
                    />
                    <Button 
                        variant="contained" 
                        color="primary"
                        fullWidth 
                        sx={{ mt: 2 }}
                        onClick={handleCreateBuyAlert}
                        disabled={!buyPrice}
                    >
                        Criar Alerta de Compra
                    </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Alerta de Venda"
                        type="number"
                        value={sellPrice}
                        onChange={(e) => setSellPrice(e.target.value)}
                        InputProps={{
                            startAdornment: 'R$'
                        }}
                        helperText="Notificar quando o preço estiver acima deste valor"
                    />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth
                        sx={{ mt: 2 }}
                        onClick={handleCreateSellAlert}
                        disabled={!sellPrice}
                    >
                        Criar Alerta de Venda
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};