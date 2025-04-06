import { ApiError } from "./client";

// Códigos de erro comuns
export enum ErrorCode {
  AUTHENTICATION_FAILED = "auth/failed",
  USER_NOT_FOUND = "user/not-found",
  INVALID_CREDENTIALS = "auth/invalid-credentials",
  SERVER_ERROR = "server/error",
  NETWORK_ERROR = "network/error",
  UNKNOWN_ERROR = "unknown/error",
  COMPANY_NOT_FOUND = "company/not-found",
  COMPANY_DATA_ERROR = "company/data-error",
  REGISTRATION_FAILED = "auth/registration-failed",
}

// Mapeamento de mensagens de erro amigáveis
const ERROR_MESSAGES: Record<ErrorCode, string> = {
  [ErrorCode.AUTHENTICATION_FAILED]:
    "Falha na autenticação. Por favor, verifique suas credenciais e tente novamente.",
  [ErrorCode.USER_NOT_FOUND]:
    "Usuário não encontrado. Por favor, verifique as informações fornecidas.",
  [ErrorCode.INVALID_CREDENTIALS]:
    "Email ou senha inválidos. Por favor, tente novamente.",
  [ErrorCode.SERVER_ERROR]: "Erro no servidor. Por favor, tente novamente mais tarde.",
  [ErrorCode.NETWORK_ERROR]:
    "Erro de rede. Por favor, verifique sua conexão com a internet.",
  [ErrorCode.UNKNOWN_ERROR]: "Ocorreu um erro inesperado. Por favor, tente novamente.",
  [ErrorCode.COMPANY_NOT_FOUND]:
    "Empresa não encontrada. Por favor, verifique as informações fornecidas.",
  [ErrorCode.COMPANY_DATA_ERROR]:
    "Erro ao processar dados da empresa. Por favor, tente novamente.",
  [ErrorCode.REGISTRATION_FAILED]:
    "Falha no registro. Por favor, verifique as informações e tente novamente.",
};

export function getErrorMessage(code: ErrorCode): string {
  return ERROR_MESSAGES[code] || ERROR_MESSAGES[ErrorCode.UNKNOWN_ERROR];
}

export function handleApiError(
  error: any,
  defaultCode: ErrorCode = ErrorCode.UNKNOWN_ERROR
): ApiError {
  console.error("API Error:", error);

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
    code: errorCode,
  };
}
