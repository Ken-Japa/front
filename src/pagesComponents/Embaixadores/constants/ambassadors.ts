interface Ambassador {
  name: string;
  role: string;
  avatar?: string;
  testimonial: string;
}

// Fix the path to point to the correct location in the public folder
export const CROWN = "/assets/icons/Crown.png";

export const ambassadors: Ambassador[] = [
  {
    name: "João Silva",
    role: "Investidor Profissional",
    testimonial:
      "Orgulhoso em apoiar uma plataforma que está revolucionando o mercado financeiro brasileiro.",
  },
];
