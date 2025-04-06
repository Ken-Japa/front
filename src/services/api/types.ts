// Common API response types
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiSuccessResponse<T> {
  success: boolean;
  data: T;
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

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

// Company related types
export interface CompanyCode {
  codigo: string;
  derivativos: boolean;
  dataInicial: string;
  preco: number | null;
  valorMercado: number | null;
}

export interface Company {
  _id: string;
  nome: string;
  setor: string;
  subsetor: string;
  descricao: string;
  site: string;
  derivativos: boolean;
  codigos: CompanyCode[];
}

export interface CompanyPagination {
  offset: number;
  limit: number;
  total: number;
  page: number;
  pages: number;
}

export interface CompanyListResponse {
  success: boolean;
  data: {
    companies: Company[];
    pagination: CompanyPagination;
  };
}

export interface CompanyFilter {
  nome?: string;
  setor?: string;
  subsetor?: string;
  page?: number;
  pageSize?: number;
}

export interface CompanyHistoricalData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  adjustedClose?: number;
}

export interface CompanyDividend {
  id: string;
  companyId: string;
  exDate: string;
  paymentDate: string;
  recordDate?: string;
  amount: number;
  type: 'DIVIDEND' | 'JCP' | 'STOCK_SPLIT' | 'OTHER';
  currency: string;
}

// Legacy Company types (keeping for backward compatibility)
export interface LegacyCompany {
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
