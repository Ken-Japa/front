'use client';

import { useState } from 'react';
import { Typography, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { UploadContainer, DropZone } from './styled';

export const FileUpload = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
        }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            setFile(event.dataTransfer.files[0]);
        }
    };

    return (
        <UploadContainer>
            <DropZone
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
            >
                <CloudUploadIcon sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                    Arraste e solte seu arquivo aqui
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ou
                </Typography>
                <Button
                    component="label"
                    variant="contained"
                    sx={{ mt: 2 }}
                >
                    Selecionar Arquivo
                    <input
                        type="file"
                        hidden
                        onChange={handleFileChange}
                        accept=".xlsx,.xls,.csv"
                    />
                </Button>
                {file && (
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Arquivo selecionado: {file.name}
                    </Typography>
                )}
            </DropZone>
        </UploadContainer>
    );
};