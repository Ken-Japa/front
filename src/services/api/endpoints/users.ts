import apiClient from '../client';
import { User, LoginResponse } from '../types';

export const userApi = {
  // Create a new user
  createUser: async (userData: Partial<User>): Promise<User> => {
    const response = await apiClient.post<User>('/user/create', userData);
    return response.data;
  },
  
  // Get user by ID
  getUserById: async (userId: string): Promise<User> => {
    const response = await apiClient.get<User>(`/user/read/${userId}`);
    return response.data;
  },
  
  // Update user
  updateUser: async (userId: string, userData: Partial<User>): Promise<User> => {
    const response = await apiClient.put<User>(`/user/update/${userId}`, userData);
    return response.data;
  },
  
  // Delete user
  deleteUser: async (userId: string): Promise<void> => {
    await apiClient.delete(`/user/delete/${userId}`);
  },
  
  // Regular login
  login: async (credentials: { email: string; password: string }): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>('/login', credentials);
    // Store token in localStorage
    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
    }
    return response.data;
  },
  
  // Google login
  googleLogin: async (token: string): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>('/login/google', { token });
    // Store token in localStorage
    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
    }
    return response.data;
  },
  
  // Logout
  logout: async (): Promise<void> => {
    localStorage.removeItem('authToken');
    // You can add a server-side logout call here if your API supports it
  },
  
  // Get current user profile
  getCurrentUser: async (): Promise<User> => {
    // This assumes your API has an endpoint to get the current user's profile
    // If not, you might need to store the user ID after login and use getUserById
    const userId = localStorage.getItem('userId'); // You would set this during login
    if (!userId) {
      throw new Error('User not authenticated');
    }
    return await userApi.getUserById(userId);
  }
};