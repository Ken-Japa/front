import { Stack } from "@mui/material";
import { SectionTermsServices } from "./styled";
import { Link } from "@mui/material";

export const TermsServices = () => {
    return (
        <SectionTermsServices>
            <div className="opacity p-10 text-white">
                <h2 className="text-3xl text-infoMain mb-5 text-center">Termos de Serviço</h2>
                <h2 className="text-3xl text-infoMain mb-8 text-center">Auge Invest</h2>
                <Stack direction="column" maxWidth="1024px" width="100%" marginX="auto" className="text-white">
                    <p className="mb-5">Auge Invest Tecnologia Ltda., uma empresa brasileira inscrita no Cadastro Nacional de Pessoas Jurídicas <span className="text-warningMain">(CNPJ/MF)</span> sob o número <span className="text-warningMain">[seu CNPJ]</span>, com sede à <span className="text-warningMain">[seu endereço]</span>, fornece a você o serviço &quot;Auge Invest&quot;.</p>
                    <div className="mb-5">
                        <h2 className="text-2xl text-infoMain mb-5">1. INFORMAÇÕES GERAIS</h2>
                        <p className="mb-5">A Auge Capital é uma plataforma financeira destinada a auxiliar investidores no mercado financeiro brasileiro, oferecendo análises detalhadas, dados históricos, gráficos e outras ferramentas financeiras. A plataforma é de uso pessoal e não comercial, com o objetivo de fornecer informações para tomadas de decisão no mercado de investimentos</p>
                        <p className="mb-5">Ao utilizar o Auge Capital, você deve estar ciente e concordar com nossos Termos de Serviço. Ao se cadastrar e optar por assinar nossos serviços, consideraremos que você compreendeu e aceitou os presentes Termos de Serviço.</p>
                        <p>Conforme a legislação vigente, você só poderá aceitar estes Termos de Serviço e utilizar o Auge Capital se for maior de 18 anos e legalmente capaz, conforme os artigos 1º, 3º e 4º do Código Civil Brasileiro de 2002.</p>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-2xl text-infoMain mb-5">2. USO DO SERVIÇO, PROPRIEDADE INTELECTUAL E CONTEÚDO DOS SERVIÇOS</h2>
                        <p className="mb-5">Para prestar os serviços oferecidos e aprimorar sua experiência na plataforma, será necessário fornecer alguns dados pessoais, que devem ser sempre exatos, corretos, atualizados e verdadeiros. Esses dados serão tratados conforme nossa <Link href="/privacy-policy" color="info">Política de Privacidade.</Link></p>
                        <p className="mb-5">O conteúdo da plataforma Auge Capital é destinado exclusivamente para uso pessoal. Os direitos de propriedade intelectual pertencem exclusivamente à Auge Capital Tecnologia Ltda. É vedada a comercialização, reprodução, modificação, publicação ou distribuição das informações oferecidas sem autorização expressa.</p>
                        <p>A Auge Capital não presta serviços de consultoria de investimentos nem recomendações específicas sobre rentabilidade, liquidez ou risco. As informações fornecidas têm caráter informativo e não se traduzem em recomendações financeiras, legais ou fiscais.</p>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-2xl text-infoMain mb-5">3. PERÍODO DE UTILIZAÇÃO GRATUITA</h2>
                        <p>Sua assinatura poderá começar com um período de utilização gratuita de trinta dias, destinado a novos e potenciais clientes. A liberação da utilização gratuita é determinada pela Auge Capital a seu exclusivo critério e pode ser revogada a qualquer momento.</p>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-2xl text-infoMain mb-5">4. ASSINATURA</h2>
                        <p>A Auge Capital oferece planos de assinatura mensal e anual. As assinaturas são renovadas automaticamente até que sejam canceladas. Você deve fornecer uma forma de pagamento válida, que pode ser atualizada ocasionalmente. Ao assinar, você concorda que os valores relativos à sua assinatura serão cobrados na forma de pagamento indicada.</p>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-2xl text-infoMain mb-5">5. PREÇOS, FORMAS DE PAGAMENTO E COBRANÇA</h2>
                        <p>Os preços e formas de pagamento para os planos de assinatura são detalhados na plataforma. Alterações nos preços ou nos planos serão notificadas com antecedência mínima de 30 dias.</p>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-2xl text-infoMain mb-5">6. LIMITAÇÃO DE USO</h2>
                        <p>É vedado ao assinante:</p>
                        <ul>
                            <li>Copiar, ceder, sublicenciar, vender ou reproduzir o software da plataforma.</li>
                            <li>Promover engenharia reversa ou desenvolver novo software com base na plataforma.</li>
                            <li>Utilizar o software para práticas nocivas como exploits, spamming ou spoofing.</li>
                            <li>Utilizar o software para fins diversos daqueles para os quais foi disponibilizado.</li>
                        </ul>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-2xl text-infoMain mb-5">7. CANCELAMENTO</h2>
                        <p>Você pode cancelar sua assinatura a qualquer momento. Para assinaturas mensais, o acesso ao serviço continuará até o fim do período de faturamento. Para assinaturas anuais, o reembolso será proporcional ao período utilizado com a aplicação de uma multa de 10% sobre o total contratado.</p>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-2xl text-infoMain mb-5">8. SEGURANÇA DA CONTA E SENHAS DO USUÁRIO</h2>
                        <p>A Auge Capital compromete-se a assegurar que as informações pessoais dos usuários sejam armazenadas de forma segura, garantindo proteção, privacidade e confidencialidade. A segurança das suas informações pessoais também depende da segurança do seu dispositivo e rede.</p>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-2xl text-infoMain mb-5">9. ALTERAÇÕES DOS TERMOS DE SERVIÇO</h2>
                        <p>A Auge Capital poderá revisar e atualizar estes Termos de Serviço periodicamente. É sua responsabilidade manter-se informado sobre as condições aqui estabelecidas.</p>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-2xl text-infoMain mb-5">10. CONTATO</h2>
                        <p>Para dúvidas ou informações adicionais, entre em contato conosco pelo e-mail <Link color="info">capitalauge@gmail.com</Link>.</p>
                    </div>
                </Stack>

            </div>
        </SectionTermsServices>
    );
}