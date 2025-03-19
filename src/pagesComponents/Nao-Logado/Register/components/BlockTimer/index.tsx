import { type FC } from 'react';

import { Typography } from '@mui/material';

import { BlockTimerContainer } from './styled';

interface BlockTimerProps {
    seconds: number;
}

export const BlockTimer: FC<BlockTimerProps> = ({ seconds }) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return (
        <BlockTimerContainer>
            <Typography variant="h6">
                Muitas tentativas. Tente novamente em:
            </Typography>
            <Typography variant="h4">
                {`${minutes}:${remainingSeconds.toString().padStart(2, '0')}`}
            </Typography>
        </BlockTimerContainer>
    );
};