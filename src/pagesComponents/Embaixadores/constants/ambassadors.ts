interface Ambassador {
  name: string;
  role: string;
  avatar?: string;
  testimonial: string;
}

export const CROWN = "/assets/icons/Crown.png";

export const ambassadors: Ambassador[] = [
  {
    name: "João Silva",
    role: "Investidor Profissional",
    testimonial:
      "Orgulhoso em apoiar uma plataforma que está revolucionando o mercado financeiro brasileiro.",
  },
];
