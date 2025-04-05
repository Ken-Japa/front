import apiClient from './client';
import { authApi } from './endpoints/auth';
import { companiesApi } from './endpoints/companies';

// Export all API services
export const api = {
  auth: authApi,
  companies: companiesApi,
  // Add more API services as needed
};

// Export types
export * from './types';

// Export the client for direct use if needed
export { apiClient };

export default api;