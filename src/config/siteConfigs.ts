import { SiteConfig } from '../types';

export const defaultConfig: SiteConfig = {
  siteTitle: 'Landing Kit | Modern Foundation',
  theme: {
    primary: '#2563eb',
    primaryHover: '#1d4ed8',
    secondary: '#64748b',
    accent: '#f97316',
    background: '#ffffff',
    textMain: '#0f172a',
    textMuted: '#64748b',
  },
  hero: {
    title: 'hero.title',
    titleHighlight: 'hero.titleHighlight',
    description: 'hero.description',
    primaryAction: { text: 'hero.cta_primary', href: '#' },
    secondaryAction: { text: 'hero.cta_secondary', href: '#' },
  },
  services: {
    title: 'services.title',
    subtitle: 'services.subtitle',
    services: [
      {
        icon: '⚡',
        title: 'services.items.performance.title',
        description: 'services.items.performance.description',
      },
      {
        icon: '🧩',
        title: 'services.items.modular.title',
        description: 'services.items.modular.description',
      },
      {
        icon: '📱',
        title: 'services.items.responsive.title',
        description: 'services.items.responsive.description',
      },
    ],
  },
  footer: {
    brand: {
      logoText: 'Landing',
      logoHighlight: 'Kit',
      description: 'footer.brand_description',
    },
    linkGroups: [
      {
        title: 'footer.resources',
        links: [
          { text: 'nav.services', href: '#' },
          { text: 'nav.home', href: '#' },
          { text: 'nav.contact', href: '#' },
        ],
      },
      {
        title: 'footer.company',
        links: [
          { text: 'nav.home', href: '#' },
          { text: 'nav.services', href: '#' },
          { text: 'nav.contact', href: '#' },
        ],
      },
    ],
    copyright: 'footer.copyright',
  },
};

export const professionalConfig: SiteConfig = {
  siteTitle: 'Pro Solutions | Enterprise Grade',
  theme: {
    primary: '#1e293b',
    primaryHover: '#0f172a',
    secondary: '#475569',
    accent: '#0ea5e9',
    background: '#f8fafc',
    textMain: '#020617',
    textMuted: '#475569',
  },
  hero: {
    title: 'hero.title',
    titleHighlight: 'hero.titleHighlight',
    description: 'hero.description',
    primaryAction: { text: 'hero.cta_primary', href: '#' },
    secondaryAction: { text: 'hero.cta_secondary', href: '#' },
  },
  services: {
    title: 'services.title',
    subtitle: 'services.subtitle',
    services: [
      {
        icon: '🛡️',
        title: 'services.items.performance.title',
        description: 'services.items.performance.description',
      },
      {
        icon: '📊',
        title: 'services.items.modular.title',
        description: 'services.items.modular.description',
      },
      {
        icon: '☁️',
        title: 'services.items.responsive.title',
        description: 'services.items.responsive.description',
      },
    ],
  },
  footer: {
    brand: {
      logoText: 'Pro',
      logoHighlight: 'Solutions',
      description: 'footer.brand_description',
    },
    linkGroups: [
      {
        title: 'footer.resources',
        links: [
          { text: 'nav.services', href: '#' },
          { text: 'nav.home', href: '#' },
          { text: 'nav.contact', href: '#' },
        ],
      },
      {
        title: 'footer.company',
        links: [
          { text: 'nav.home', href: '#' },
          { text: 'nav.services', href: '#' },
          { text: 'nav.contact', href: '#' },
        ],
      },
    ],
    copyright: 'footer.copyright',
  },
};
