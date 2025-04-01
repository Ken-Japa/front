import { EmpresaDetalhada, Codigo } from "../../../types";

// Função para buscar dados de uma empresa específica por slug (código ou nome)
export const getEmpresaBySlug = async (
  slug: string
): Promise<EmpresaDetalhada | null> => {
  try {
    // Importar dados mock (será substituído por chamada API)
    const empresasResponse = await import(
      "@/pagesComponents/Logado/components/EmpresaView/mockdata_example/empresas.json"
    );
    const sumarioResponse = await import(
      "@/pagesComponents/Logado/components/EmpresaView/mockdata_example/sumario.json"
    );
    const dividendosResponse = await import(
      "@/pagesComponents/Logado/components/EmpresaView/mockdata_example/dividendosEmpresas.json"
    );

    // Tratamento seguro para os dados de empresas e sumário
    const empresas = empresasResponse.default?.empresas || 
                    empresasResponse.empresas || 
                    [];
                    
    const sumario = sumarioResponse.default?.sumario || 
                   sumarioResponse.sumario || 
                   [];

    // Tratamento seguro para os dados de dividendos
    let dividendosData: any[] = [];

    // Usar type assertion para tratar dividendosResponse como um objeto com propriedades dinâmicas
    const dividendosObj = dividendosResponse as any;

    // Verificar se dividendosResponse é um array
    if (Array.isArray(dividendosObj)) {
      dividendosData = dividendosObj;
    } 
    // Verificar se dividendosResponse.default é um array
    else if (Array.isArray(dividendosObj.default)) {
      dividendosData = dividendosObj.default;
    } 
    // Verificar se dividendosResponse.dividendosEmpresas existe e é um array
    else if (dividendosObj.dividendosEmpresas && Array.isArray(dividendosObj.dividendosEmpresas)) {
      dividendosData = dividendosObj.dividendosEmpresas;
    }
    // Verificar se dividendosResponse.default.dividendosEmpresas existe e é um array
    else if (dividendosObj.default?.dividendosEmpresas && Array.isArray(dividendosObj.default.dividendosEmpresas)) {
      dividendosData = dividendosObj.default.dividendosEmpresas;
    }
    // Verificar outras possíveis estruturas
    else {
      // Tentar encontrar o array em diferentes propriedades
      const possibleArrays = [
        // Verificar propriedades específicas
        dividendosObj.default?.dividendos,
        dividendosObj.dividendos,
        dividendosObj.default?.data,
        dividendosObj.data,
      ].filter(Boolean); // Remover valores null/undefined

      for (const arr of possibleArrays) {
        if (Array.isArray(arr)) {
          dividendosData = arr;
          break;
        }
      }

      // Se ainda não encontrou, tentar usar o objeto diretamente
      if (dividendosData.length === 0) {
        // Converter objeto em array se necessário
        if (typeof dividendosObj === 'object' && dividendosObj !== null) {
          const tempArray = Object.values(dividendosObj).filter(Array.isArray);
          if (tempArray.length > 0) {
            dividendosData = tempArray[0];
          }
        }
      }
    }

    // Buscar por código
    let empresa = empresas.find((emp: any) =>
      emp.codigos.some(
        (cod: any) => cod.codigo.toLowerCase() === slug.toLowerCase()
      )
    );

    // Se não encontrou por código, buscar por nome
    if (!empresa) {
      empresa = empresas.find(
        (emp: any) => emp.nome.toLowerCase() === slug.toLowerCase()
      );
    }

    if (!empresa) return null;

    // Buscar dividendos da empresa
    const dividendosEmpresa = dividendosData.find(
      (div: any) =>
        div.nomeEmpresa &&
        div.nomeEmpresa.toLowerCase() === empresa.nome.toLowerCase()
    );

    // Buscar informações adicionais do sumário
    let valorMercado = 0;
    let participacao = 0;

    for (const industria of sumario) {
      for (const segmento of industria.segmentos) {
        const empresaDetalhe = segmento.empresasDetalhes.find(
          (emp: any) => emp.empresa.toLowerCase() === empresa.nome.toLowerCase()
        );

        if (empresaDetalhe) {
          valorMercado = empresaDetalhe.valorMercado;
          participacao = empresaDetalhe.participacao;
          break;
        }
      }
    }

    // Mapear códigos para o formato correto
    const codigosMapeados: Codigo[] = empresa.codigos.map((cod: any) => ({
      codigo: cod.codigo,
      derivativos:
        typeof cod.derivativos === "string"
          ? cod.derivativos === "true"
          : Boolean(cod.derivativos),
      preco: cod.preco || 0,
      variacao: cod.variacao || 0,
      "data inicial": cod["data inicial"] || "",
      "valor mercado": cod["valor mercado"] || 0,
      precoAnterior: cod.precoAnterior || 0,
      derivativo: cod.derivativo || [],
    }));

    // Construir objeto com todos os detalhes
    const empresaDetalhada: EmpresaDetalhada = {
      nome: empresa.nome,
      setor: empresa.setor,
      subsetor: empresa.subsetor,
      descricao: empresa.descricao || "",
      site: empresa.site || "",
      valorMercado,
      participacao,
      codigos: codigosMapeados,
      dividendos: dividendosEmpresa?.dividendos || [],
      temDerivativo: Boolean(empresa.derivativos),
    };

    return empresaDetalhada;
  } catch (error) {
    console.error("Erro ao buscar dados da empresa:", error);
    return null;
  }
};

// Função para buscar o código principal da empresa (geralmente ON)
export const getCodigoPrincipal = (codigos: Codigo[]): string => {
  if (!codigos || codigos.length === 0) return "";

  // Preferência para ações ON (terminadas em 3)
  const codigoON = codigos.find((cod) => cod.codigo.endsWith("3"));
  if (codigoON) return codigoON.codigo;

  // Se não encontrar ON, retorna o primeiro código
  return codigos[0].codigo;
};
