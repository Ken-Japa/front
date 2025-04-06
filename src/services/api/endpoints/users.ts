import apiClient from '../client';
import { User, ApiSuccessResponse } from '../types';

// Endpoints padronizados
const ENDPOINTS = {
  CREATE: '/user/create',
  READ: '/user/read',
  UPDATE: '/user/update',
  DELETE: '/user/delete',
  UPDATE_PASSWORD: '/user/update-password'
};

export const userApi = {
  // Create a new user
  createUser: async (userData: Partial<User>): Promise<User> => {
    try {
      const response = await apiClient.post<ApiSuccessResponse<User>>(ENDPOINTS.CREATE, userData);
      return response.data.data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error('Failed to create user. Please check your information and try again.');
    }
  },
  
  // Get user by ID
  getUserById: async (userId: string): Promise<User> => {
    try {
      const response = await apiClient.get<ApiSuccessResponse<User>>(`${ENDPOINTS.READ}/${userId}`);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching user with ID ${userId}:`, error);
      throw new Error('Failed to retrieve user information. Please try again later.');
    }
  },
  
  // Update user
  updateUser: async (userId: string, userData: Partial<User>): Promise<User> => {
    try {
      const response = await apiClient.put<ApiSuccessResponse<User>>(`${ENDPOINTS.UPDATE}/${userId}`, userData);
      return response.data.data;
    } catch (error) {
      console.error(`Error updating user with ID ${userId}:`, error);
      throw new Error('Failed to update user information. Please try again later.');
    }
  },
  
  // Delete user
  deleteUser: async (userId: string): Promise<void> => {
    try {
      await apiClient.delete<ApiSuccessResponse<void>>(`${ENDPOINTS.DELETE}/${userId}`);
    } catch (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);
      throw new Error('Failed to delete user. Please try again later.');
    }
  },
  
  // Update user password
  updatePassword: async (userId: string, oldPassword: string, newPassword: string): Promise<void> => {
    try {
      await apiClient.put<ApiSuccessResponse<void>>(`${ENDPOINTS.UPDATE_PASSWORD}/${userId}`, {
        oldPassword,
        newPassword
      });
    } catch (error) {
      console.error('Error updating password:', error);
      throw new Error('Failed to update password. Please check your current password and try again.');
    }
  }
};