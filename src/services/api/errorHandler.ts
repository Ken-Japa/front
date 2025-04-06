import { ApiError } from './client';

// Códigos de erro comuns
export enum ErrorCode {
  AUTHENTICATION_FAILED = 'auth/failed',
  USER_NOT_FOUND = 'user/not-found',
  INVALID_CREDENTIALS = 'auth/invalid-credentials',
  SERVER_ERROR = 'server/error',
  NETWORK_ERROR = 'network/error',
  UNKNOWN_ERROR = 'unknown/error'
}

// Mapeamento de mensagens de erro amigáveis
const ERROR_MESSAGES: Record<ErrorCode, string> = {
  [ErrorCode.AUTHENTICATION_FAILED]: 'Authentication failed. Please check your credentials and try again.',
  [ErrorCode.USER_NOT_FOUND]: 'User not found. Please check the provided information.',
  [ErrorCode.INVALID_CREDENTIALS]: 'Invalid email or password. Please try again.',
  [ErrorCode.SERVER_ERROR]: 'Server error. Please try again later.',
  [ErrorCode.NETWORK_ERROR]: 'Network error. Please check your internet connection.',
  [ErrorCode.UNKNOWN_ERROR]: 'An unexpected error occurred. Please try again.'
};

// Função para obter mensagem de erro amigável
export function getErrorMessage(code: ErrorCode): string {
  return ERROR_MESSAGES[code] || ERROR_MESSAGES[ErrorCode.UNKNOWN_ERROR];
}

// Função para lidar com erros de API
export function handleApiError(error: any, defaultCode: ErrorCode = ErrorCode.UNKNOWN_ERROR): ApiError {
  console.error('API Error:', error);
  
  // Determinar o código de erro com base na resposta
  let errorCode = defaultCode;
  
  if (error.response) {
    const status = error.response.status;
    
    if (status === 401) {
      errorCode = ErrorCode.AUTHENTICATION_FAILED;
    } else if (status === 404) {
      errorCode = ErrorCode.USER_NOT_FOUND;
    } else if (status >= 500) {
      errorCode = ErrorCode.SERVER_ERROR;
    }
  } else if (error.request) {
    errorCode = ErrorCode.NETWORK_ERROR;
  }
  
  return {
    message: getErrorMessage(errorCode),
    status: error.response?.status,
    data: error.response?.data,
    code: errorCode
  };
}