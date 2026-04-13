import { ThemeConfig } from '../types';

export const applyTheme = (theme: ThemeConfig) => {
  const root = document.documentElement;
  
  root.style.setProperty('--primary', theme.primary);
  root.style.setProperty('--primary-hover', theme.primaryHover);
  root.style.setProperty('--secondary', theme.secondary);
  root.style.setProperty('--accent', theme.accent);
  root.style.setProperty('--background', theme.background);
  root.style.setProperty('--text-main', theme.textMain);
  root.style.setProperty('--text-muted', theme.textMuted);
};
