interface NavigationItem {
  name: string;
  path: string;
  icon?: React.ElementType;
  highlight?: boolean;
}

export const publicNavigation: NavigationItem[] = [
  { name: "Início", path: "/" },
  { name: "Quem Somos", path: "/visitante/quem-somos" },
  { name: "Soluções", path: "/visitante/recursos" },
  { name: "FAQ", path: "/visitante/faq" },
  { name: "Preços", path: "/visitante/precos", highlight: true },
  { name: "Contato", path: "/visitante/contato" },
  { name: "Blog", path: "/blog" },
];

export const authNavigation: NavigationItem[] = [
  { name: "Visão Economia", path: "/visao-economia" },
  { name: "Posições", path: "/dashboard" },
  { name: "Empresas", path: "/empresas" },
  { name: "Alertas", path: "/alertas" },
  { name: "Indicadores", path: "/indicadores" },
  { name: "Blog", path: "/blog" },
];
