import { Paper, Typography, Grid, TextField, Button } from '@mui/material';
import { useState } from 'react';

export const AlertasSection = () => {
    const [buyPrice, setBuyPrice] = useState('');
    const [sellPrice, setSellPrice] = useState('');

    return (
        <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
                Configurar Alertas
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
                    >
                        Criar Alerta de Venda
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};