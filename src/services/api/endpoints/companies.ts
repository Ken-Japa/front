import apiClient from '../client';
import { Company, CompanyDetails, PaginatedResponse, ApiSuccessResponse } from '../types';

export const companiesApi = {
  getAll: async (page = 1, limit = 20, filters?: Record<string, any>): Promise<PaginatedResponse<Company>> => {
    try {
      const response = await apiClient.get<ApiSuccessResponse<PaginatedResponse<Company>>>('/companies', {
        params: { page, limit, ...filters }
      });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching companies:', error);
      throw new Error('Failed to fetch companies. Please try again later.');
    }
  },
  
  getById: async (id: string): Promise<CompanyDetails> => {
    try {
      const response = await apiClient.get<ApiSuccessResponse<CompanyDetails>>(`/companies/${id}`);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching company with ID ${id}:`, error);
      throw new Error('Failed to fetch company details. Please try again later.');
    }
  },
  
  getByTicker: async (ticker: string): Promise<CompanyDetails> => {
    try {
      const response = await apiClient.get<ApiSuccessResponse<CompanyDetails>>(`/companies/ticker/${ticker}`);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching company with ticker ${ticker}:`, error);
      throw new Error('Failed to fetch company details. Please try again later.');
    }
  },
  
  search: async (query: string): Promise<Company[]> => {
    try {
      const response = await apiClient.get<ApiSuccessResponse<Company[]>>('/companies/search', {
        params: { q: query }
      });
      return response.data.data;
    } catch (error) {
      console.error(`Error searching companies with query "${query}":`, error);
      throw new Error('Failed to search companies. Please try again later.');
    }
  }
};