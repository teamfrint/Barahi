export interface ActionProps {
  text: string;
  onClick?: () => void;
  href?: string;
}

export interface HeroProps {
  title: string;
  titleHighlight?: string;
  description: string;
  backgroundImage?: string;
  primaryAction?: ActionProps;
  secondaryAction?: ActionProps;
}

export interface FooterLink {
  text: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  brand: {
    logoText: string;
    logoHighlight: string;
    description: string;
  };
  linkGroups: FooterLinkGroup[];
  copyright: string;
}

export interface ThemeConfig {
  primary: string;
  primaryHover: string;
  secondary: string;
  accent: string;
  background: string;
  textMain: string;
  textMuted: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  image?: string;
  tags?: string[];
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface MenuProps {
  title: string;
  subtitle?: string;
  categories: MenuCategory[];
}

export interface SiteConfig {
  siteTitle: string;
  seo?: SEOConfig;
  theme: ThemeConfig;
  hero: HeroProps;
  menu: MenuProps;
  footer: FooterProps;
}
