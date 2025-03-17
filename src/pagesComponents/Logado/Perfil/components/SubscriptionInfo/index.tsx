import { CustomAccordion } from "@/components/Custom/Accordion";
import { CustomButton } from "@/components/Custom/Button";
import { ProfileInfo, ProfileLabel, ProfileValue } from "../../styled";
import { motion } from "framer-motion";
import { Chip } from "@mui/material";

export const SubscriptionInfo = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
    >
        <CustomAccordion title="Informações da Assinatura">
            <ProfileInfo>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <ProfileLabel>Plano Atual</ProfileLabel>
                    <Chip
                        label="A ser implementado"
                        color="primary"
                        size="small"
                    />
                </div>

                <ProfileLabel>Status da Assinatura</ProfileLabel>
                <ProfileValue>
                    <Chip
                        label="Ativo"
                        color="success"
                        size="small"
                    />
                </ProfileValue>

                <ProfileLabel>Data de Início</ProfileLabel>
                <ProfileValue>A ser implementado</ProfileValue>

                <ProfileLabel>Próxima Cobrança</ProfileLabel>
                <ProfileValue>A ser implementado</ProfileValue>

                <ProfileLabel>Método de Pagamento</ProfileLabel>
                <ProfileValue>A ser implementado</ProfileValue>

                <CustomButton
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    component={motion.button}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Alterar Plano
                </CustomButton>
            </ProfileInfo>
        </CustomAccordion>
    </motion.div>
);