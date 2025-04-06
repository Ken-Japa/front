import apiClient from '../client';
import { LoginRequest, LoginResponse, User, ApiSuccessResponse } from '../types';
import { clearAuthData } from '@/utils/auth';

// Endpoints padronizados com o NextAuth
const ENDPOINTS = {
  LOGIN: '/login',
  LOGOUT: '/logout',
  GOOGLE_LOGIN: '/login/google',
  REGISTER: '/auth/register',
  CURRENT_USER: '/auth/me'
};

export const authApi = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    try {
      const response = await apiClient.post<ApiSuccessResponse<LoginResponse>>(ENDPOINTS.LOGIN, credentials);
      
      if (response.data.success && response.data.data.token) {
        localStorage.setItem('authToken', response.data.data.token);
        
        if (response.data.data.user && response.data.data.user._id) {
          localStorage.setItem('userId', response.data.data.user._id);
        }
      }
      
      return response.data.data;
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Authentication failed. Please check your credentials and try again.');
    }
  },
  
  logout: async (): Promise<void> => {
    try {
      // Server-side logout
      await apiClient.post<ApiSuccessResponse<void>>(ENDPOINTS.LOGOUT);
    } catch (error) {
      console.error('Error during server logout:', error);
    } finally {
      // Usar a função centralizada para limpar dados de autenticação
      clearAuthData();
    }
  },
  
  getCurrentUser: async (): Promise<User> => {
    try {
      const response = await apiClient.get<ApiSuccessResponse<User>>(ENDPOINTS.CURRENT_USER);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching current user:', error);
      throw new Error('Failed to retrieve user profile. Please try logging in again.');
    }
  },
  
  register: async (userData: { name: string; email: string; password: string }): Promise<User> => {
    try {
      const response = await apiClient.post<ApiSuccessResponse<User>>(ENDPOINTS.REGISTER, userData);
      return response.data.data;
    } catch (error) {
      console.error('Registration failed:', error);
      throw new Error('Registration failed. Please check your information and try again.');
    }
  },
  
  googleLogin: async (token: string): Promise<LoginResponse> => {
    try {
      const response = await apiClient.post<ApiSuccessResponse<LoginResponse>>(
        ENDPOINTS.GOOGLE_LOGIN, 
        { token }
      );
      
      if (response.data.success && response.data.data.token) {
        localStorage.setItem('authToken', response.data.data.token);
        
        if (response.data.data.user && response.data.data.user._id) {
          localStorage.setItem('userId', response.data.data.user._id);
        }
      }
      
      return response.data.data;
    } catch (error) {
      console.error('Google login failed:', error);
      throw new Error('Google authentication failed. Please try again.');
    }
  }
};