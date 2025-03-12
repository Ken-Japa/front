import { Stack } from "@mui/material";
import { SectionPlans } from "./styled";
import { Card } from "./Card";

export const Plans = () => {
    return (
        <SectionPlans>
            <div className="plans">
                <Stack direction="column" alignItems="center" width="100%" gap="30px">
                    <Stack width="100%" direction="row" justifyContent="space-around" alignItems="center">
                        <Card
                            title="Trimestral"
                            price="R$80"
                            discount="12%"
                            valueBtn="Eu quero"
                            colorBtn="info"
                        />
                        <Card
                            title="Mensal"
                            price="R$30"
                            list={[
                                'Todos os recursos disponíveis',
                                'Análise de preços',
                                'Dados exclusivos de histórico',
                                'Painel detalhado de economia',
                                'Acompanhamento da posição',
                                'Alerta de preços'
                            ]}
                            valueBtn="Assinar"
                            colorBtn="secondary"
                        />
                        <Card
                            title="Anual"
                            price="R$280"
                            discount="23%"
                            valueBtn="Aproveitar desconto"
                            colorBtn="info"
                        />
                    </Stack>
                    <Stack>
                        <Card
                            title="Embaixador"
                            price="R$100"
                            list={[
                                'Página de agradecimentos',
                                'Limitado',
                                'Assinatura vitalícia (atingindo 5 mil usuários)'
                            ]}
                            valueBtn="Patrocinar"
                            colorBtn="primary"
                        />
                    </Stack>
                </Stack>
            </div>
        </SectionPlans>
    );
}