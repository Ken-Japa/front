import apiClient from '../client';
import { Company, CompanyDetails, PaginatedResponse } from '../types';

export const companiesApi = {
  getAll: async (page = 1, limit = 20, filters?: Record<string, any>): Promise<PaginatedResponse<Company>> => {
    const response = await apiClient.get<PaginatedResponse<Company>>('/companies', {
      params: { page, limit, ...filters }
    });
    return response.data;
  },
  
  getById: async (id: string): Promise<CompanyDetails> => {
    const response = await apiClient.get<CompanyDetails>(`/companies/${id}`);
    return response.data;
  },
  
  getByTicker: async (ticker: string): Promise<CompanyDetails> => {
    const response = await apiClient.get<CompanyDetails>(`/companies/ticker/${ticker}`);
    return response.data;
  },
  
  search: async (query: string): Promise<Company[]> => {
    const response = await apiClient.get<Company[]>('/companies/search', {
      params: { q: query }
    });
    return response.data;
  }
};