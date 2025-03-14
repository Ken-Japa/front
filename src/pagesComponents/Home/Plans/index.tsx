import { Stack } from "@mui/material";
import { SectionPlans } from "./styled";
import { Card } from "./Card";
import { OptimizedImage } from "@/components/OptimizedImage";

export const Plans = () => {
    return (
        <SectionPlans>
            <div className="plans">
                <div className="background-image">
                    <OptimizedImage
                        src="/assets/images/background/Precos.jpg"
                        alt="Background Plans"
                        fill
                        className="object-cover"
                    />
                </div>
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
                                'Acesso antecipado a betas',
                                'Seu nome no Hall da Fama',
                                'Limitado',
                                'Canal de comunicação direto com os desenvolvedores',
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