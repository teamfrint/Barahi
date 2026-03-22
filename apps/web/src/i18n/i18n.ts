import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { siteConfig } from '../config/siteConfig';

const resources = {
  en: {
    translation: {
      // Global translations can go here
      nav: Object.fromEntries(siteConfig.navigation.map(n => [n.id, n.label.en])),
      hero: {
        title: siteConfig.sections.hero.title.en,
        subtitle: siteConfig.sections.hero.subtitle.en,
        cta: siteConfig.sections.hero.cta.en,
      },
      services: {
        title: siteConfig.sections.services.title.en,
        items: Object.fromEntries(siteConfig.sections.services.items.map(s => [s.id, { title: s.title.en, desc: s.description.en }]))
      }
    },
  },
  fi: {
    translation: {
      nav: Object.fromEntries(siteConfig.navigation.map(n => [n.id, n.label.fi])),
      hero: {
        title: siteConfig.sections.hero.title.fi,
        subtitle: siteConfig.sections.hero.subtitle.fi,
        cta: siteConfig.sections.hero.cta.fi,
      },
      services: {
        title: siteConfig.sections.services.title.fi,
        items: Object.fromEntries(siteConfig.sections.services.items.map(s => [s.id, { title: s.title.fi, desc: s.description.fi }]))
      }
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
