'use client';

import { useTranslation } from 'react-i18next';
import { siteConfig } from '@/config/siteConfig';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-slate-900 mb-4">{t('services.title')}</h2>
          <div className="w-20 h-1 bg-cta mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {siteConfig.sections.services.items.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;
            
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  <IconComponent className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t(`services.items.${service.id}.title`)}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t(`services.items.${service.id}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
