import { DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { StyledDialog, StyledDialogTitle, StepsList } from './styled';

interface HelpDialogProps {
  open: boolean;
  onClose: () => void;
}

export const HelpDialog = ({ open, onClose }: HelpDialogProps) => {
  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
      <StyledDialogTitle>Guia de Análise Fundamentalista</StyledDialogTitle>
      <DialogContent>
        <Typography paragraph>
          <br />
          Esta ferramenta permite calcular as principais métricas de análise fundamentalista para avaliar empresas.
        </Typography>
        <Typography paragraph>
          Para começar:
        </Typography>
        <StepsList>
          <li>Adicione informações financeiras dos demonstrativos</li>
          <li>As métricas serão calculadas automaticamente, assim que possível</li>
          <br />
        </StepsList>
        <StepsList>
          <li>Os valores devem ser inseridos <span className="highlight">em milhares</span> (ex: para 1 milhão, digite 1000).</li>
          <li>Com exceção para preço da ação e ações em circulação</li>
        </StepsList>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Fechar
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};