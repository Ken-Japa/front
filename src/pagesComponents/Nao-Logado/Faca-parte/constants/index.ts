export const ROLES = [
    "Desenvolvedor Frontend",
    "Desenvolvedor Backend",
    "Analista de Dados",
    "Analista de Mercado",
    "Designer UI/UX",
    "Marketing Digital",
    "Outro"
] as const;

export const BLOCK_DURATION = 24 * 60 * 60 * 1000;
export const BLOCK_TIMER_SECONDS = 86400;
export const MAX_JOIN_ATTEMPTS = 2;

export const INITIAL_FORM_DATA = {
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    portfolio: "",
    github: "",
    message: ""
} as const;