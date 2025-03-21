'use client';

import { Box, Container, Typography } from '@mui/material';
import { PageTransition } from '@/components/PageTransition';
import { FileUpload } from './components/FileUpload';

export const AnaliseFundamentalista = () => {
    return (
        <PageTransition>
            <Container maxWidth="lg">
                <Box sx={{ py: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Análise Fundamentalista
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        Faça upload do arquivo da empresa para análise dos indicadores fundamentalistas
                    </Typography>

                    <FileUpload />

                    {/* Results display will go here */}
                </Box>
            </Container>
        </PageTransition>
    );
}