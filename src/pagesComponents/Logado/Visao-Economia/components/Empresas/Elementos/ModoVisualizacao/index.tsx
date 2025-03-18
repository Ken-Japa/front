import { IconButton } from '@mui/material';
import { ViewMode } from '../../types';
import { ViewControls } from './styled';
import GridViewIcon from '@mui/icons-material/GridView';
import TableRowsIcon from '@mui/icons-material/TableRows';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

interface ModoVisualizacaoProps {
    viewMode: ViewMode;
    onChangeView: (mode: ViewMode) => void;
}

export const ModoVisualizacao = ({ viewMode, onChangeView }: ModoVisualizacaoProps) => {
    return (
        <ViewControls>
            <IconButton
                onClick={() => onChangeView('neural')}
                color={viewMode === 'neural' ? 'primary' : 'default'}
            >
                <BubbleChartIcon />
            </IconButton>
            <IconButton
                onClick={() => onChangeView('tabela')}
                color={viewMode === 'tabela' ? 'primary' : 'default'}
            >
                <TableRowsIcon />
            </IconButton>
            <IconButton
                onClick={() => onChangeView('cartao')}
                color={viewMode === 'cartao' ? 'primary' : 'default'}
            >
                <GridViewIcon />
            </IconButton>
            <IconButton
                onClick={() => onChangeView('arvore')}
                color={viewMode === 'arvore' ? 'primary' : 'default'}
            >
                <AccountTreeIcon />
            </IconButton>
        </ViewControls>
    );
};