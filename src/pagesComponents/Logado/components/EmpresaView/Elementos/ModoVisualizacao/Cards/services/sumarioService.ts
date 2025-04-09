import { SumarioData } from "../../TabelaView/types";

/**
 * Busca dados mock para desenvolvimento
 */
const fetchMockData = async (): Promise<SumarioData> => {
  const response = await import(
    "@/pagesComponents/Logado/components/EmpresaView/mockdata_example/sumario.json"
  );
  return response.default;
};

/**
 * Busca dados da API
 * Será implementado quando a API estiver disponível
 */
const fetchApiData = async (): Promise<SumarioData> => {
  // Implementação futura:
  // const response = await fetch('/api/sumario');
  // return response.json();

  // Por enquanto, usamos dados mock
  return fetchMockData();
};

export const sumarioService = {
  getSumarioData: fetchApiData,
};