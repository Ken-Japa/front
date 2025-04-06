import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { getAuthToken } from "@/utils/auth";

// API response wrapper type
export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
}

// API error type
export interface ApiError {
  message: string;
  status?: number;
  data?: any;
}

class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Request interceptor - Atualizado para usar getAuthToken()
    this.client.interceptors.request.use(
      (config) => {
        // Usar a função centralizada para obter o token
        const token = getAuthToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        // Handle common errors (401, 403, etc.)
        if (error.response?.status === 401) {
          // Handle unauthorized (e.g., redirect to login)
          window.location.href = "/login";
        }

        return Promise.reject(this.handleError(error));
      }
    );
  }

  private handleError(error: AxiosError): ApiError {
    return {
      message: error.message || "An unexpected error occurred",
      status: error.response?.status,
      data: error.response?.data,
    };
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await this.client.get<T>(url, config);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    };
  }

  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await this.client.post<T>(url, data, config);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    };
  }

  async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await this.client.put<T>(url, data, config);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    };
  }

  async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await this.client.delete<T>(url, config);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    };
  }
}

// Create and export the API client instance
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api-servidor-yupg.onrender.com";
export const apiClient = new ApiClient(API_BASE_URL);

export default apiClient;
