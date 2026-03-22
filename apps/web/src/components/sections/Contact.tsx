'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call to our backend
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-heading font-bold text-slate-900 mb-8">{t('nav.contact')}</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Email</p>
                  <p className="text-lg text-slate-800">{siteConfig.contact.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Phone</p>
                  <p className="text-lg text-slate-800">{siteConfig.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Address</p>
                  <p className="text-lg text-slate-800">{siteConfig.contact.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Name</label>
                    <input required className="w-full px-4 py-3 bg-slate-50 border-transparent focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all rounded-xl outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email</label>
                    <input type="email" required className="w-full px-4 py-3 bg-slate-50 border-transparent focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all rounded-xl outline-none" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea rows={4} required className="w-full px-4 py-3 bg-slate-50 border-transparent focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all rounded-xl outline-none resize-none" placeholder="How can we help?"></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                  <Send className="w-5 h-5" />
                </button>
                {status === 'success' && <p className="text-green-600 text-center font-bold">Thank you! We will get back to you shortly.</p>}
                {status === 'error' && <p className="text-red-600 text-center font-bold">Something went wrong. Please try again.</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
