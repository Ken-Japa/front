import { Button, Box, CircularProgress, SvgIconTypeMap } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import { ButtonPropsColorOverrides } from '@mui/material';

interface CustomButtonProps {
    value: string;
    Icon?: React.ComponentType;
    color?: OverridableStringUnion<
        'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
        ButtonPropsColorOverrides
    >;
    margin?: string;
    align?: string;
    onClick?: () => void;
    className?: string;
    fullWidth?: boolean;
}

export const CustomButton = ({ 
    value, 
    Icon, 
    color = "primary", 
    onClick, 
    fullWidth,
    margin,
    align,
    className 
}: CustomButtonProps) => {
    return (
        <Button 
            onClick={onClick}
            fullWidth={fullWidth}
            variant="contained"
            color={color}
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