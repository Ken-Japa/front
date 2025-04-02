import { Chip, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { CustomAccordion } from "@/components/Custom/Accordion";
import { CustomButton } from "@/components/Custom/Button";
import { ProfileInfo } from "../../styled";
import {
    SubscriptionContainer,
    SubscriptionField,
    LabelRow,
    StyledProfileLabel,
    StyledProfileValue,
    ButtonContainer
} from "./styled";

export const SubscriptionInfo = () => {
    const theme = useTheme();

    return (
        <SubscriptionContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <CustomAccordion
                title="Informações da Assinatura"
                variant={theme.palette.mode === 'dark' ? 'dark' : 'light'}
            >
                <ProfileInfo>
                    <SubscriptionField>
                        <LabelRow>
                            <StyledProfileLabel>Plano Atual</StyledProfileLabel>
                            <Chip
                                label="A ser implementado"
                                color="primary"
                                size="small"
                                sx={{ fontSize: '0.75rem' }}
                            />
                        </LabelRow>
                    </SubscriptionField>

                    <SubscriptionField>
                        <StyledProfileLabel>Status da Assinatura</StyledProfileLabel>
                        <Chip
                            label="Ativo"
                            color="success"
                            size="small"
                            sx={{
                                width: 'fit-content',
                                fontSize: '0.75rem'
                            }}
                        />
                    </SubscriptionField>

                    <SubscriptionField>
                        <StyledProfileLabel>Data de Início</StyledProfileLabel>
                        <StyledProfileValue>A ser implementado</StyledProfileValue>
                    </SubscriptionField>

                    <SubscriptionField>
                        <StyledProfileLabel>Próxima Cobrança</StyledProfileLabel>
                        <StyledProfileValue>A ser implementado</StyledProfileValue>
                    </SubscriptionField>

                    <SubscriptionField>
                        <StyledProfileLabel>Método de Pagamento</StyledProfileLabel>
                        <StyledProfileValue>A ser implementado</StyledProfileValue>
                    </SubscriptionField>

                    <ButtonContainer>
                        <CustomButton
                            variant="contained"
                            color="primary"
                            fullWidth
                            component={motion.button}
                            whilehover={{ scale: 1.02 }}
                            whiletap={{ scale: 0.98 }}
                        >
                            Alterar Plano
                        </CustomButton>
                    </ButtonContainer>
                </ProfileInfo>
            </CustomAccordion>
        </SubscriptionContainer>
    );
};