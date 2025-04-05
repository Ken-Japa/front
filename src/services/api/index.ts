import apiClient from './client';
import { authApi } from './endpoints/auth';
import { companiesApi } from './endpoints/companies';
import { userApi } from './endpoints/users';

// Export all API services
export const api = {
  auth: authApi,
  companies: companiesApi,
  users: userApi,
  // Add more API services as needed
};

// Export types
export * from './types';

// Export the client for direct use if needed
export { apiClient };

export default api;