export interface ActionProps {
  text: string;
  onClick?: () => void;
  href?: string;
}

export interface HeroProps {
  title: string;
  titleHighlight?: string;
  description: string;
  primaryAction?: ActionProps;
  secondaryAction?: ActionProps;
}

export interface ServiceItem {
  icon?: string;
  title: string;
  description: string;
}

export interface ServicesProps {
  title: string;
  subtitle?: string;
  services: ServiceItem[];
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

export interface SiteConfig {
  siteTitle: string;
  seo?: SEOConfig;
  theme: ThemeConfig;
  hero: HeroProps;
  services: ServicesProps;
  footer: FooterProps;
}
