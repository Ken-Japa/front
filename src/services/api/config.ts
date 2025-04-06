// API base URL
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api-servidor-yupg.onrender.com";

// Endpoints centralizados para toda a aplicação
export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    LOGIN: '/login',
    LOGOUT: '/logout',
    GOOGLE_LOGIN: '/login/google',
    REGISTER: '/auth/register',
    CURRENT_USER: '/auth/me'
  },
  
  // User endpoints
  USER: {
    CREATE: '/user/create',
    READ: '/user/read',
    UPDATE: '/user/update',
    DELETE: '/user/delete',
    UPDATE_PASSWORD: '/user/update-password'
  },
  
  // Outros grupos de endpoints...
};

// Função auxiliar para obter URL completa (para uso no NextAuth)
export function getFullEndpointUrl(endpoint: string): string {
  return `${API_BASE_URL}${endpoint}`;
}