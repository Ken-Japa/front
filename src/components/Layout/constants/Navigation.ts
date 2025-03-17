interface NavigationItem {
  name: string;
  path: string;
  icon?: React.ElementType;
  highlight?: boolean;
}

export const publicNavigation: NavigationItem[] = [
  { name: "Início", path: "/" },
  { name: "Quem Somos", path: "/quem-somos" },
  { name: "Soluções", path: "/recursos" },
  { name: "FAQ", path: "/faq" },
  { name: "Preços", path: "/precos", highlight: true },
  { name: "Contato", path: "/contato" },
  { name: "Blog", path: "/blog" },
];

export const authNavigation: NavigationItem[] = [
  { name: "Início", path: "/" },
  { name: "Dashboard", path: "/dashboard" },

  { name: "Blog", path: "/blog" },
];
