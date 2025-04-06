import apiClient from '../client';
import { User, ApiSuccessResponse } from '../types';
import { API_ENDPOINTS } from '../config';
import { ErrorCode, handleApiError } from '../errorHandler';

// Helper function for consistent error handling
const handleUserApiError = (error: any, operation: string, userId?: string): never => {
  const userIdInfo = userId ? ` with ID ${userId}` : '';
  console.error(`Error ${operation} user${userIdInfo}:`, error);
  
  // Use the centralized error handler but with a specific error code
  throw handleApiError(error, ErrorCode.USER_NOT_FOUND);
};

export const userApi = {
  // Create a new user
  createUser: async (userData: Partial<User>): Promise<User> => {
    try {
      const response = await apiClient.post<ApiSuccessResponse<User>>(
        API_ENDPOINTS.USER.CREATE, 
        userData
      );
      return response.data.data;
    } catch (error) {
      return handleUserApiError(error, 'creating');
    }
  },
  
  // Get user by ID
  getUserById: async (userId: string): Promise<User> => {
    try {
      const response = await apiClient.get<ApiSuccessResponse<User>>(
        `${API_ENDPOINTS.USER.READ}/${userId}`
      );
      return response.data.data;
    } catch (error) {
      return handleUserApiError(error, 'fetching', userId);
    }
  },
  
  // Update user
  updateUser: async (userId: string, userData: Partial<User>): Promise<User> => {
    try {
      const response = await apiClient.put<ApiSuccessResponse<User>>(
        `${API_ENDPOINTS.USER.UPDATE}/${userId}`,
        userData
      );
      return response.data.data;
    } catch (error) {
      return handleUserApiError(error, 'updating', userId);
    }
  },
  
  // Delete user
  deleteUser: async (userId: string): Promise<void> => {
    try {
      await apiClient.delete<ApiSuccessResponse<void>>(
        `${API_ENDPOINTS.USER.DELETE}/${userId}`
      );
    } catch (error) {
      handleUserApiError(error, 'deleting', userId);
    }
  },
  
  // Update password
  updatePassword: async (userId: string, oldPassword: string, newPassword: string): Promise<void> => {
    try {
      await apiClient.put<ApiSuccessResponse<void>>(
        `${API_ENDPOINTS.USER.UPDATE_PASSWORD}/${userId}`,
        { oldPassword, newPassword }
      );
    } catch (error) {
      // For password updates, use a more specific error code
      console.error(`Error updating password for user with ID ${userId}:`, error);
      throw handleApiError(error, ErrorCode.INVALID_CREDENTIALS);
    }
  }
};