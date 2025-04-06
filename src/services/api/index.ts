import apiClient from "./client";
import * as endpoints from "./endpoints";

export const api = {
  auth: endpoints.authApi,
  companies: endpoints.companiesApi,
  users: endpoints.userApi,
};

export * from "./types";

export { apiClient };

export default api;
