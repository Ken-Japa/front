import { PriceDataPoint } from "../utils/metricasCalculations";
import { api } from "@/services/api";
import { EmpresaDetalhada, Codigo } from "../../../types";

// Função para buscar dados de uma empresa específica por slug (código ou nome)
export const getEmpresaBySlug = async (
  slug: string
): Promise<{ empresa: EmpresaDetalhada | null; codigoEncontrado?: string }> => {
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

    const empresas = Array.isArray(empresasResponse.default)
      ? empresasResponse.default
      : (empresasResponse.default as any)?.empresas ||
        (empresasResponse as any).empresas ||
        [];

    const sumario =
      sumarioResponse.default?.sumario || sumarioResponse.sumario || [];

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
    else if (
      dividendosObj.dividendosEmpresas &&
      Array.isArray(dividendosObj.dividendosEmpresas)
    ) {
      dividendosData = dividendosObj.dividendosEmpresas;
    }
    // Verificar se dividendosResponse.default.dividendosEmpresas existe e é um array
    else if (
      dividendosObj.default?.dividendosEmpresas &&
      Array.isArray(dividendosObj.default.dividendosEmpresas)
    ) {
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
        if (typeof dividendosObj === "object" && dividendosObj !== null) {
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

    // Armazenar o código usado para encontrar a empresa
    let codigoEncontrado: string | undefined;

    if (empresa) {
      // Se encontrou por código, armazenar qual código foi usado
      codigoEncontrado = slug;
    } else {
      // Se não encontrou por código, buscar por nome
      empresa = empresas.find(
        (emp: any) => emp.nome.toLowerCase() === slug.toLowerCase()
      );
    }

    if (!empresa) return { empresa: null };

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
      preco: cod.preco || 0,
      variacao: cod.variacao || 0,
      "valor mercado": cod["valor mercado"] || 0,
      precoAnterior: cod.precoAnterior || 0,
    }));

    // Construir objeto com todos os detalhes
    const empresaDetalhada: EmpresaDetalhada = {
      nome: empresa.nome,
      industria: empresa.industria || "",
      segmento: empresa.segmento || "",
      valorMercado,
      codigos: codigosMapeados,
      dividendos: dividendosEmpresa?.dividendos || [],
    };

    return { empresa: empresaDetalhada, codigoEncontrado };
  } catch (error) {
    console.error("Erro ao buscar dados da empresa:", error);
    return { empresa: null };
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

export const getHistoricalData = async (
  codigoAtivo: string
): Promise<PriceDataPoint[]> => {
  try {
    const historicalResponse = await api.historical.getHistoricalData({
      codigo: codigoAtivo,
      pageSize: 730, // Approximately 2 years of market data
    });

    console.log("Resposta da API:", historicalResponse);

    const typedResponse = historicalResponse as unknown as {
      _id: string;
      empresa: string;
      codigo: string;
      totalHistoric: number;
      historic: Array<{ data: string; preco: string; volume: number }>;
      pagination: any;
    };

    if (
      typedResponse &&
      typedResponse.historic &&
      Array.isArray(typedResponse.historic)
    ) {
      const mappedData = typedResponse.historic.map((item) => ({
        data: item.data,
        valor: parseFloat(item.preco) || 0,
      }));

      return mappedData;
    }

    console.error(`Não foi achado dados históricos para: ${codigoAtivo}`);
    return [];
  } catch (err) {
    console.error("Erro ao buscar dados históricos:", err);
    return [];
  }
};

// Função para buscar todas as empresas
export const getAllEmpresas = async (): Promise<EmpresaDetalhada[]> => {
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

    // Tratamento seguro para os dados de empresas
    const empresasRaw = Array.isArray(empresasResponse.default)
      ? empresasResponse.default
      : (empresasResponse.default as any)?.empresas ||
        (empresasResponse as any).empresas ||
        [];

    // Tratamento seguro para os dados de sumário
    const sumario =
      sumarioResponse.default?.sumario || sumarioResponse.sumario || [];

    // Tratamento seguro para os dados de dividendos
    let dividendosData: any[] = [];
    const dividendosObj = dividendosResponse as any;

    // Usar a mesma lógica de extração de dividendos do getEmpresaBySlug
    if (Array.isArray(dividendosObj)) {
      dividendosData = dividendosObj;
    } else if (Array.isArray(dividendosObj.default)) {
      dividendosData = dividendosObj.default;
    } else if (
      dividendosObj.dividendosEmpresas &&
      Array.isArray(dividendosObj.dividendosEmpresas)
    ) {
      dividendosData = dividendosObj.dividendosEmpresas;
    } else if (
      dividendosObj.default?.dividendosEmpresas &&
      Array.isArray(dividendosObj.default.dividendosEmpresas)
    ) {
      dividendosData = dividendosObj.default.dividendosEmpresas;
    } else {
      const possibleArrays = [
        dividendosObj.default?.dividendos,
        dividendosObj.dividendos,
        dividendosObj.default?.data,
        dividendosObj.data,
      ].filter(Boolean);

      for (const arr of possibleArrays) {
        if (Array.isArray(arr)) {
          dividendosData = arr;
          break;
        }
      }

      if (
        dividendosData.length === 0 &&
        typeof dividendosObj === "object" &&
        dividendosObj !== null
      ) {
        const tempArray = Object.values(dividendosObj).filter(Array.isArray);
        if (tempArray.length > 0) {
          dividendosData = tempArray[0];
        }
      }
    }

    // Transformar os dados brutos em EmpresaDetalhada[]
    const empresasDetalhadas: EmpresaDetalhada[] = empresasRaw.map(
      (empresa: any) => {
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
              (emp: any) =>
                emp.empresa.toLowerCase() === empresa.nome.toLowerCase()
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
        return {
          nome: empresa.nome,
          industria: empresa.industria || empresa.setor || "",
          segmento: empresa.segmento || empresa.subsetor || "",
          codigos: codigosMapeados,
          dividendos: dividendosEmpresa?.dividendos || [],
        };
      }
    );

    return empresasDetalhadas;
  } catch (error) {
    console.error("Erro ao buscar todas as empresas:", error);
    return [];
  }
};
