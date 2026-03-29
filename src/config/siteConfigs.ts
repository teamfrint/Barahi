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
    title: 'Feel the test',
    titleHighlight: 'Landing Kit',
    description: 'The most flexible and reusable React foundation for your modern web projects. Focus on your business, we\'ll handle the architecture.',
    primaryAction: { text: 'Get Started', href: '#' },
    secondaryAction: { text: 'Documentation', href: '#' },
  },
  services: {
    title: 'Everything you need',
    subtitle: 'A comprehensive suite of tools and components to jumpstart your next project.',
    services: [
      {
        icon: '⚡',
        title: 'Fast Performance',
        description: 'Optimized for speed and efficiency, ensuring a smooth user experience.',
      },
      {
        icon: '🧩',
        title: 'Modular Design',
        description: 'Easily swap components and styles to match your brand\'s identity.',
      },
      {
        icon: '📱',
        title: 'Fully Responsive',
        description: 'Looks great on desktops, tablets, and phones without extra effort.',
      },
    ],
  },
  footer: {
    brand: {
      logoText: 'Landing',
      logoHighlight: 'Kit',
      description: 'Empowering developers to build beautiful websites in record time.',
    },
    linkGroups: [
      {
        title: 'Resources',
        links: [
          { text: 'Features', href: '#' },
          { text: 'Pricing', href: '#' },
          { text: 'Tutorials', href: '#' },
        ],
      },
      {
        title: 'Company',
        links: [
          { text: 'About', href: '#' },
          { text: 'Blog', href: '#' },
          { text: 'Contact', href: '#' },
        ],
      },
    ],
    copyright: 'Landing Kit Framework. All rights reserved.',
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
    title: 'Enterprise Solutions for',
    titleHighlight: 'Modern Teams',
    description: 'Scalable, secure, and performant web architecture designed for large-scale operations. Built with reliability in mind.',
    primaryAction: { text: 'Contact Sales', href: '#' },
    secondaryAction: { text: 'Our Methodology', href: '#' },
  },
  services: {
    title: 'Enterprise Capabilities',
    subtitle: 'High-performance tools specialized for professional environments and workflows.',
    services: [
      {
        icon: '🛡️',
        title: 'Security First',
        description: 'Built-in security protocols and best practices for commercial-grade applications.',
      },
      {
        icon: '📊',
        title: 'Analytics Ready',
        description: 'Seamlessly integrate data tracking and business intelligence tools.',
      },
      {
        icon: '☁️',
        title: 'Cloud Optimized',
        description: 'Optimized for modern cloud deployment environments and architectures.',
      },
    ],
  },
  footer: {
    brand: {
      logoText: 'Pro',
      logoHighlight: 'Solutions',
      description: 'Reliable architectural foundations for enterprise-level web applications.',
    },
    linkGroups: [
      {
        title: 'Solutions',
        links: [
          { text: 'Infrastructure', href: '#' },
          { text: 'Security', href: '#' },
          { text: 'Consulting', href: '#' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { text: 'Privacy Policy', href: '#' },
          { text: 'Terms of Service', href: '#' },
          { text: 'Security Statement', href: '#' },
        ],
      },
    ],
    copyright: 'Pro Solutions Architecture Group.',
  },
};
