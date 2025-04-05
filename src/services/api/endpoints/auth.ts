import apiClient from '../client';
import { LoginRequest, LoginResponse, User } from '../types';

export const authApi = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>('/auth/login', credentials);
    // Store token in localStorage
    localStorage.setItem('authToken', response.data.token);
    return response.data;
  },
  
  logout: async (): Promise<void> => {
    await apiClient.post<void>('/auth/logout');
    localStorage.removeItem('authToken');
  },
  
  getCurrentUser: async (): Promise<User> => {
    const response = await apiClient.get<User>('/auth/me');
    return response.data;
  },
  
  register: async (userData: { name: string; email: string; password: string }): Promise<User> => {
    const response = await apiClient.post<User>('/auth/register', userData);
    return response.data;
  }
};