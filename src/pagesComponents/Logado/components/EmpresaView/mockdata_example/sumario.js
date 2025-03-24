const fs = require("fs").promises;

async function gerarSumario(caminhoArquivoJson) {
  try {
    // Ler o JSON existente
    const json = JSON.parse(await fs.readFile(caminhoArquivoJson, "utf-8"));

    const sumario = {};
    let valorMercadoTotalGeral = 0;
    let qtdEmpresasTotal = 0;
    let qtdSegmentosTotal = 0;

    // Iterar sobre as empresas no JSON
    for (const empresa of json) {
      const industria = empresa.industria;
      const segmento = empresa.segmento;

      // Verificar se o valor de mercado existe e é válido
      if (empresa["valor mercado"]) {
        const valorMercado = parseFloat(
          empresa["valor mercado"]
            .replace(/[^\d,.-]/g, "") // Remove tudo exceto dígitos
            .replace(/\./g, "") // Remove todos os pontos
            .replace(/,/g, ".") // Substitui todas as vírgulas por pontos
        );

        if (!sumario[industria]) {
          sumario[industria] = {
            valorMercadoTotal: 0,
            empresas: 0,
            segmentos: {},
            qtdSegmentos: 0,
          };
        }

        // Adicionar valores ao sumário
        sumario[industria].valorMercadoTotal += valorMercado;
        sumario[industria].empresas += 1;
        valorMercadoTotalGeral += valorMercado;
        qtdEmpresasTotal += 1;

        if (!sumario[industria].segmentos[segmento]) {
          sumario[industria].segmentos[segmento] = {
            valorMercado: 0,
            empresas: 0,
            empresasDetalhes: [],
          };
          sumario[industria].qtdSegmentos += 1;
          qtdSegmentosTotal += 1;
        }

        sumario[industria].segmentos[segmento].valorMercado += valorMercado;
        sumario[industria].segmentos[segmento].empresas += 1;
        sumario[industria].segmentos[segmento].empresasDetalhes.push({
          empresa: empresa.nomeEmpresa,
          valorMercado: valorMercado,
          participacao: 0, // Será calculado mais tarde
        });
      }
    }

    // Calcular participações
    for (const industria in sumario) {
      const industriaData = sumario[industria];
      industriaData.participacao =
        (industriaData.valorMercadoTotal / valorMercadoTotalGeral) * 100;

      for (const segmento in industriaData.segmentos) {
        const segmentoData = industriaData.segmentos[segmento];
        segmentoData.participacao =
          (segmentoData.valorMercado / industriaData.valorMercadoTotal) * 100;

        for (const empresa of segmentoData.empresasDetalhes) {
          empresa.participacao =
            (empresa.valorMercado / segmentoData.valorMercado) * 100;
        }
      }
    }

    // Converter o sumário em um array para fácil leitura e manipulação
    const sumarioArray = Object.keys(sumario).map((industria) => ({
      industria: industria,
      valorMercadoTotal: sumario[industria].valorMercadoTotal,
      participacao: sumario[industria].participacao,
      qtdSegmentos: sumario[industria].qtdSegmentos,
      empresas: sumario[industria].empresas,
      segmentos: Object.keys(sumario[industria].segmentos).map((segmento) => ({
        segmento: segmento,
        valorMercado: sumario[industria].segmentos[segmento].valorMercado,
        empresas: sumario[industria].segmentos[segmento].empresas,
        participacao: sumario[industria].segmentos[segmento].participacao,
        empresasDetalhes:
          sumario[industria].segmentos[segmento].empresasDetalhes,
      })),
    }));

    const industriasSet = new Set(json.map((item) => item.industria));
    const qtdIndustriasT = industriasSet.size;
    // Adicionar sumário total
    const sumarioTotal = {
      valorMercadoTotalGeral: valorMercadoTotalGeral,
      qtdIndustriasTotal: qtdIndustriasT,
      qtdEmpresasTotal: qtdEmpresasTotal,
      qtdSegmentosTotal: qtdSegmentosTotal,
      industrias: [...industriasSet],
    };

    const resultadoFinal = {
      sumarioTotal: sumarioTotal,
      sumario: sumarioArray,
    };

    // Caminho para o arquivo de sumário JSON
    const caminhoSumarioJson = "sumario.json";

    // Salvar o sumário em um novo arquivo JSON
    await fs.writeFile(
      caminhoSumarioJson,
      JSON.stringify(resultadoFinal, null, 2),
      "utf-8"
    );

    console.log(
      `Arquivo de sumário JSON criado com sucesso. Salvo em: ${caminhoSumarioJson}`
    );
  } catch (error) {
    console.error(`Erro ao gerar o sumário: ${error.message}`);
  }
}

// Caminho para o arquivo JSON original
const caminhoArquivoJson = "empresasPreco.json";

// Chamar a função para gerar o sumário
gerarSumario(caminhoArquivoJson).catch(console.error);
