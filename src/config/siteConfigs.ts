import { SiteConfig } from '../types';

export const defaultConfig: SiteConfig = {
  siteTitle: 'Landing Kit | Modern Foundation',
  seo: {
    title: 'hero.title',
    description: 'hero.description',
    ogType: 'website',
  },
  theme: {
    primary: '#e95a17',
    primaryHover: '#d14d12',
    secondary: '#e95a17',
    accent: '#f97316',
    background: '#ffffff',
    textMain: '#0f172a',
    textMuted: '#64748b',
  },
// ... (rest of the config)
  hero: {
    title: 'hero.title',
    titleHighlight: 'hero.titleHighlight',
    description: 'hero.description',
    backgroundImage: '/graphics/hero.jpg',
    primaryAction: { text: 'hero.cta_primary', href: '/menu' },
  },
  menu: {
    title: 'menu.title',
    subtitle: 'menu.subtitle',
    backgroundImage: '/graphics/chickenRice.jpeg',
    categories: [
       {
        title: 'menu.categories.lunch',
        items: [
          { name: 'menu.items.mon.name', description: 'menu.items.mon.desc', price: '13.50 €' },
          { name: 'menu.items.tue.name', description: 'menu.items.tue.desc', price: '13.50 €' },
          { name: 'menu.items.wed.name', description: 'menu.items.wed.desc', price: '13.50 €' },
          { name: 'menu.items.thu.name', description: 'menu.items.thu.desc', price: '13.50 €' },
          { name: 'menu.items.fri.name', description: 'menu.items.fri.desc', price: '13.50 €' },
        ],
      },
      {
        title: 'menu.categories.kids',
        items: [
          { name: 'menu.items.kids_desc.name', description: 'menu.items.kids_desc.desc', price: '8.90 €' },
        ],
      },
      {
        title: 'menu.categories.lamb',
        items: [
          { name: 'menu.items.lamb_curry.name', description: 'menu.items.lamb_curry.desc', price: '18.50 €' },
          { name: 'menu.items.lamb_korma.name', description: 'menu.items.lamb_korma.desc', price: '18.50 €' },
          { name: 'menu.items.lamb_chilli.name', description: 'menu.items.lamb_chilli.desc', price: '18.90 €' },
          { name: 'menu.items.lamb_talbarahi.name', description: 'menu.items.lamb_talbarahi.desc', price: '18.90 €' },
          { name: 'menu.items.lamb_roganjuice.name', description: 'menu.items.lamb_roganjuice.desc', price: '18.50 €' },
          { name: 'menu.items.lamb_masala.name', description: 'menu.items.lamb_masala.desc', price: '18.50 €' },
          { name: 'menu.items.garlic_lamb.name', description: 'menu.items.garlic_lamb.desc', price: '18.50 €' },
          { name: 'menu.items.lamb_sekuwa.name', description: 'menu.items.lamb_sekuwa.desc', price: '20.90 €' },
          { name: 'menu.items.special_mix.name', description: 'menu.items.special_mix.desc', price: '24.90 €' },
          { name: 'menu.items.mix_sizzler.name', description: 'menu.items.mix_sizzler.desc', price: '20.50 €' },
          { name: 'menu.items.lamb_kofta.name', description: 'menu.items.lamb_kofta.desc', price: '18.50 €' },
          { name: 'menu.items.lamb_momo.name', description: 'menu.items.lamb_momo.desc', price: '17.50 €' },
        ],
      },
      {
        title: 'menu.categories.chicken',
        items: [
          { name: 'menu.items.chicken_curry.name', description: 'menu.items.chicken_curry.desc', price: '16.50 €' },
          { name: 'menu.items.chicken_tikka.name', description: 'menu.items.chicken_tikka.desc', price: '17.50 €' },
          { name: 'menu.items.chicken_korma.name', description: 'menu.items.chicken_korma.desc', price: '16.50 €' },
          { name: 'menu.items.chicken_tikka_masala.name', description: 'menu.items.chicken_tikka_masala.desc', price: '17.50 €' },
          { name: 'menu.items.chicken_chilli.name', description: 'menu.items.chicken_chilli.desc', price: '17.50 €' },
          { name: 'menu.items.chicken_talbarahi.name', description: 'menu.items.chicken_talbarahi.desc', price: '17.50 €' },
          { name: 'menu.items.chicken_sizzler.name', description: 'menu.items.chicken_sizzler.desc', price: '18.50 €' },
          { name: 'menu.items.chicken_garlic.name', description: 'menu.items.chicken_garlic.desc', price: '17.50 €' },
          { name: 'menu.items.butter_chicken.name', description: 'menu.items.butter_chicken.desc', price: '17.50 €' },
          { name: 'menu.items.mix_fry_rice.name', description: 'menu.items.mix_fry_rice.desc', price: '17.90 €' },
        ],
      },
      {
        title: 'menu.categories.starter',
        items: [
          { name: 'menu.items.samosa.name', description: 'menu.items.samosa.desc', price: '6.00 €' },
          { name: 'menu.items.fry_momo.name', description: 'menu.items.fry_momo.desc', price: '6.00 €' },
          { name: 'menu.items.paneer_tikka_starter.name', description: 'menu.items.paneer_tikka_starter.desc', price: '5.00 €' },
          { name: 'menu.items.veg_pakauda.name', description: 'menu.items.veg_pakauda.desc', price: '5.00 €' },
          { name: 'menu.items.kebab_tikka.name', description: 'menu.items.kebab_tikka.desc', price: '6.00 €' },
          { name: 'menu.items.shrimps_pakauda.name', description: 'menu.items.shrimps_pakauda.desc', price: '6.00 €' },
          { name: 'menu.items.lamb_sekuwa_starter.name', description: 'menu.items.lamb_sekuwa_starter.desc', price: '6.00 €' },
          { name: 'menu.items.papad_masala.name', description: 'menu.items.papad_masala.desc', price: '5.00 €' },
          { name: 'menu.items.mix_salad.name', description: 'menu.items.mix_salad.desc', price: '5.00 €' },
        ],
      },
      {
        title: 'menu.categories.veg_vegan',
        items: [
          { name: 'menu.items.alu_gobi.name', description: 'menu.items.alu_gobi.desc', price: '14.50 €' },
          { name: 'menu.items.palak_paneer.name', description: 'menu.items.palak_paneer.desc', price: '15.50 €' },
          { name: 'menu.items.paneer_tikka_masala.name', description: 'menu.items.paneer_tikka_masala.desc', price: '15.90 €' },
          { name: 'menu.items.paneer_tikka_main.name', description: 'menu.items.paneer_tikka_main.desc', price: '15.50 €' },
          { name: 'menu.items.butter_paneer.name', description: 'menu.items.butter_paneer.desc', price: '15.90 €' },
          { name: 'menu.items.malai_kofta.name', description: 'menu.items.malai_kofta.desc', price: '16.50 €' },
          { name: 'menu.items.mix_veg.name', description: 'menu.items.mix_veg.desc', price: '16.90 €' },
          { name: 'menu.items.dal_makhani.name', description: 'menu.items.dal_makhani.desc', price: '15.50 €' },
          { name: 'menu.items.mutter_paneer.name', description: 'menu.items.mutter_paneer.desc', price: '16.50 €' },
          { name: 'menu.items.paneer_chilli.name', description: 'menu.items.paneer_chilli.desc', price: '15.50 €' },
          { name: 'menu.items.veg_fry_rice.name', description: 'menu.items.veg_fry_rice.desc', price: '14.90 €' },
        ],
      },
      {
        title: 'menu.categories.fish_prawn',
        items: [
          { name: 'menu.items.butter_salmon.name', description: 'menu.items.butter_salmon.desc', price: '20.50 €' },
          { name: 'menu.items.prawn_tikka.name', description: 'menu.items.prawn_tikka.desc', price: '21.50 €' },
          { name: 'menu.items.fish_korma.name', description: 'menu.items.fish_korma.desc', price: '18.50 €' },
          { name: 'menu.items.fish_curry.name', description: 'menu.items.fish_curry.desc', price: '18.50 €' },
          { name: 'menu.items.salmon_masala.name', description: 'menu.items.salmon_masala.desc', price: '20.50 €' },
          { name: 'menu.items.butter_prawn.name', description: 'menu.items.butter_prawn.desc', price: '21.90 €' },
          { name: 'menu.items.shrimps_chilli.name', description: 'menu.items.shrimps_chilli.desc', price: '18.90 €' },
          { name: 'menu.items.garlic_prawn.name', description: 'menu.items.garlic_prawn.desc', price: '21.50 €' },
        ],
      },
      {
        title: 'menu.categories.desserts',
        items: [
          { name: 'menu.items.ice_cream.name', description: 'menu.items.ice_cream.desc', price: '6.50 €' },
          { name: 'menu.items.kulfi.name', description: 'menu.items.kulfi.desc', price: '6.50 €' },
          { name: 'menu.items.gulab_jamun.name', description: 'menu.items.gulab_jamun.desc', price: '5.50 €' },
          { name: 'menu.items.talbarahi_special_dessert.name', description: 'menu.items.talbarahi_special_dessert.desc', price: '7.50 €' },
          { name: 'menu.items.nepali_tea.name', description: 'menu.items.nepali_tea.desc', price: '4.50 €' },
          { name: 'menu.items.nepali_coffee.name', description: 'menu.items.nepali_coffee.desc', price: '4.50 €' },
          { name: 'menu.items.mango_lassi.name', description: 'menu.items.mango_lassi.desc', price: '3.50 €' },
          { name: 'menu.items.banana_lassi.name', description: 'menu.items.banana_lassi.desc', price: '3.50 €' },
          { name: 'menu.items.mustikka_lassi.name', description: 'menu.items.mustikka_lassi.desc', price: '3.90 €' },
        ],
      },
      {
        title: 'menu.categories.beer_drinks',
        items: [
          { name: 'menu.items.tikka_gold.name', description: 'menu.items.tikka_gold.desc', price: '8.00 €' },
          { name: 'menu.items.kingfisher.name', description: 'menu.items.kingfisher.desc', price: '6.50 €' },
          { name: 'menu.items.gorkha.name', description: 'menu.items.gorkha.desc', price: '8.00 €' },
          { name: 'menu.items.nepal_ice.name', description: 'menu.items.nepal_ice.desc', price: '6.50 €' },
          { name: 'menu.items.sherpa.name', description: 'menu.items.sherpa.desc', price: '8.00 €' },
          { name: 'menu.items.karhu.name', description: 'menu.items.karhu.desc', price: '8.00 €' },
          { name: 'menu.items.long_drink.name', description: 'menu.items.long_drink.desc', price: '6.00 €' },
          { name: 'menu.items.cider.name', description: 'menu.items.cider.desc', price: '6.00 €' },
        ],
      },
      {
        title: 'menu.categories.soft_drinks',
        items: [
          { name: 'menu.items.coca_cola.name', description: 'menu.items.coca_cola.desc', price: '3.00 €' },
          { name: 'menu.items.sprite.name', description: 'menu.items.sprite.desc', price: '3.00 €' },
          { name: 'menu.items.jaffa.name', description: 'menu.items.jaffa.desc', price: '3.00 €' },
        ],
      },
      {
        title: 'menu.categories.wine',
        items: [
          { name: 'menu.items.wine_12cl.name', description: 'menu.items.wine_12cl.desc', price: '7.50 €' },
          { name: 'menu.items.wine_16cl.name', description: 'menu.items.wine_16cl.desc', price: '9.50 €' },
          { name: 'menu.items.wine_75cl.name', description: 'menu.items.wine_75cl.desc', price: '39.50 €' },
          { name: 'menu.items.sangria.name', description: 'menu.items.sangria.desc', price: '34.99 €' },
        ],
      },

      {
        title: 'menu.categories.extra',
        items: [
          { name: 'menu.items.rice.name', description: 'menu.items.rice.desc', price: '3.00 €' },
          { name: 'menu.items.naan.name', description: 'menu.items.naan.desc', price: '2.50 €' },
          { name: 'menu.items.garlic_naan.name', description: 'menu.items.garlic_naan.desc', price: '3.00 €' },
          { name: 'menu.items.raita.name', description: 'menu.items.raita.desc', price: '1.50 €' },
        ],
      },
    ],
  },
  footer: {
    brand: {
      logoUrl: '/graphics/barahi_logo.png',
      logoText: 'Barahi',
      logoHighlight: 'Restaurant',
      description: 'footer.brand_description',
    },
    linkGroups: [
      {
        title: 'footer.nav_title',
        links: [
          { text: 'nav.home', href: '#' },
          { text: 'menu.title', href: '#menu' },
          { text: 'nav.contact', href: '#contact' },
        ],
      },
    ],
    address: 'footer.address',
    openingHours: 'footer.opening_hours',
    socials: {
      facebook: 'https://facebook.com/barahi',
      instagram: 'https://instagram.com/barahi',
      tiktok: 'https://tiktok.com/@barahi',
    },
    copyright: 'footer.copyright',
  },
};
