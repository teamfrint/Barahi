export type Language = 'en' | 'fi';

export interface SiteConfig {
  name: string;
  industry: string;
  theme: {
    primary: string;
    secondary: string;
    cta: string;
    fontHeading: string;
    fontBody: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
    googleMapsUrl?: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    tiktok?: string;
    linkedin?: string;
  };
  navigation: {
    id: string;
    label: Record<Language, string>;
    path: string;
  }[];
  sections: {
    hero: {
      title: Record<Language, string>;
      subtitle: Record<Language, string>;
      cta: Record<Language, string>;
    };
    services: {
      title: Record<Language, string>;
      items: {
        id: string;
        icon: string;
        title: Record<Language, string>;
        description: Record<Language, string>;
      }[];
    };
    // Add other sections as needed (About, Testimonials, FAQ)
  };
}

export const siteConfig: SiteConfig = {
  name: "Landing Kit Pro",
  industry: "Consulting",
  theme: {
    primary: "#2563EB",
    secondary: "#3B82F6",
    cta: "#F97316",
    fontHeading: "Playfair Display SC",
    fontBody: "Karla",
  },
  contact: {
    email: "info@landingkitpro.com",
    phone: "+358 40 123 4567",
    address: "Innovation Street 1, Helsinki, Finland",
  },
  social: {
    facebook: "https://facebook.com/landingkit",
    instagram: "https://instagram.com/landingkit",
  },
  navigation: [
    { id: 'hero', label: { en: 'Home', fi: 'Etusivu' }, path: '/' },
    { id: 'services', label: { en: 'Services', fi: 'Palvelut' }, path: '#services' },
    { id: 'contact', label: { en: 'Contact', fi: 'Ota yhteyttä' }, path: '#contact' },
  ],
  sections: {
    hero: {
      title: {
        en: "High-End Landing Pages for Small Businesses",
        fi: "Laadukkaat Laskeutumissivut Pienyrityksille"
      },
      subtitle: {
        en: "Boost your local business with an SEO-optimized, lightning-fast website.",
        fi: "Kasvata paikallista liiketoimintaasi SEO-optimoidulla, salamannopealla verkkosivustolla."
      },
      cta: {
        en: "Get Started",
        fi: "Aloita heti"
      }
    },
    services: {
      title: {
        en: "Our Services",
        fi: "Palvelumme"
      },
      items: [
        {
          id: 'web-design',
          icon: 'Layout',
          title: { en: 'Web Design', fi: 'Verkkosivujen suunnittelu' },
          description: { en: 'Beautiful and functional designs.', fi: 'Kauniit ja toimivat suunnitelmat.' }
        },
        {
          id: 'seo',
          icon: 'Search',
          title: { en: 'SEO Optimization', fi: 'SEO-optimointi' },
          description: { en: 'Get found on Google.', fi: 'Löydy Googlen hakutuloksista.' }
        }
      ]
    }
  }
};
