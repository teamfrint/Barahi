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
