import { SumarioData } from "../types";

// This will be replaced with actual API calls in the future
const fetchMockData = async (): Promise<SumarioData> => {
  const response = await import(
    "@/pagesComponents/Logado/components/EmpresaView/mockdata_example/sumario.json"
  );
  return response.default;
};

// This will be the actual API call in the future
const fetchApiData = async (): Promise<SumarioData> => {
  // Example of future implementation:
  // const response = await fetch('/api/sumario');
  // return response.json();

  // For now, use mock data
  return fetchMockData();
};

export const sumarioService = {
  getSumarioData: fetchApiData,
};
