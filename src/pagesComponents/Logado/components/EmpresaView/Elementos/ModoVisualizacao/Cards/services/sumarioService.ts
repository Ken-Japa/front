import { SumarioData } from "../../TabelaView/types";

// Esta função será substituída por chamadas API reais no futuro
const fetchMockData = async (): Promise<SumarioData> => {
  const response = await import(
    "@/pagesComponents/Logado/components/EmpresaView/mockdata_example/sumario.json"
  );
  return response.default;
};

// Esta será a chamada API real no futuro
const fetchApiData = async (): Promise<SumarioData> => {
  // Exemplo de implementação futura:
  // const response = await fetch('/api/sumario');
  // return response.json();

  // Por enquanto, usamos dados mock
  return fetchMockData();
};

export const sumarioService = {
  getSumarioData: fetchApiData,
};