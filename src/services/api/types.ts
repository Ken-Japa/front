// Common response type
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// User related types
export interface User {
  _id?: string;
  name?: string;
  email?: string;
  password?: string;
  googleId?: string;
  picture?: string;
  createdAt?: string;
  updatedAt?: string;
  phone?: string;
  cpf?: string;
  isActive?: boolean;
  preferences?: {
    defaultDashboard?: string;
    defaultPositionType?: "real" | "simulated";
    notifications?: boolean;
    theme?: "light" | "dark";
  };
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

// Company related types
export interface Company {
  id: string;
  name: string;
  ticker: string;
  sector: string;
  description?: string;
  marketCap?: number;
  logoUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CompanyDetails extends Company {
  financialData?: FinancialData;
  news?: NewsItem[];
}

// Financial data types
export interface FinancialData {
  revenue: number;
  profit: number;
  assets: number;
  liabilities: number;
  period: string;
}

// News related types
export interface NewsItem {
  id: string;
  title: string;
  content: string;
  source: string;
  url: string;
  publishedAt: string;
  relatedCompanies: string[];
}

export interface ApiSuccessResponse<T> {
  success: boolean;
  data: T;
}
