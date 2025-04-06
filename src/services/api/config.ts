// API base URL
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api-servidor-yupg.onrender.com";

export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    LOGIN: "/login",
    LOGOUT: "/logout",
    GOOGLE_LOGIN: "/login/google",
    REGISTER: "/auth/register",
    CURRENT_USER: "/auth/me",
  },

  // User endpoints
  USER: {
    CREATE: "/user/create",
    READ: "/user/read",
    UPDATE: "/user/update",
    DELETE: "/user/delete",
    UPDATE_PASSWORD: "/user/update-password",
  },

  // Company endpoints
  COMPANY: {
    PAGINATION: "/company/pagination",
    DETAIL: "/company",
  },
  // Historical data endpoints
  HISTORIC: {
    PAGINATION: "/historic/pagination",
  },
  // Outros grupos de endpoints...
};

export function getFullEndpointUrl(endpoint: string): string {
  return `${API_BASE_URL}${endpoint}`;
}
