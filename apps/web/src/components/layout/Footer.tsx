import { siteConfig } from '@/config/siteConfig';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    linkedin: Linkedin,
    twitter: Twitter,
  };

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-primary">{siteConfig.name}</h3>
            <p className="text-slate-400">
              Building SEO-optimized landing pages that help small businesses thrive in the digital world.
            </p>
            <div className="flex gap-4">
              {Object.entries(siteConfig.social).map(([platform, url]) => {
                const Icon = (socialIcons as any)[platform];
                return url ? (
                  <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-primary transition-colors">
                    <Icon className="w-5 h-5" />
                  </a>
                ) : null;
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              {siteConfig.navigation.map((item) => (
                <li key={item.id}>
                  <Link href={item.path} className="hover:text-primary transition-colors">{item.label.en}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li>{siteConfig.contact.address}</li>
              <li>{siteConfig.contact.phone}</li>
              <li>{siteConfig.contact.email}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-6 text-sm">Get the latest tips on growing your business online.</p>
            <div className="flex gap-2">
              <input className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary w-full" placeholder="Email address" />
              <button className="px-4 py-2 bg-primary rounded-lg text-sm font-bold">Join</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
