import { Button, Box, CircularProgress, SvgIconTypeMap } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import { ButtonPropsColorOverrides } from '@mui/material';

type Props = {
    value: string;
    Icon?: any;
    color?: OverridableStringUnion<
        'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
        ButtonPropsColorOverrides
    >;
    margin?: string;
    align?: string;
    onClick?: () => void;
    className?: string;
}

export const CustomButton = ({ value, Icon, color = "primary", margin = "20px", align = "start", onClick, className }: Props) => {
    return (
        <Button
            variant="contained"
            color={color}
            onClick={onClick}
            className={className}
            sx={{
                margin: margin,
                alignSelf: align,
                textTransform: 'none',
                borderRadius: '100px',
                padding: '10px 30px'
            }}
            startIcon={Icon && <Icon />}
        >
            {value}
        </Button>
    );
}