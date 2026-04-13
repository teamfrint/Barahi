import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Footer from './components/layout/Footer'
import SEO from './components/layout/SEO'
import MenuSection from './components/sections/MenuSection'
import GallerySection from './components/sections/GallerySection'
import ContactForm from './components/sections/ContactForm'
import { defaultConfig } from './config/siteConfigs'
import { applyTheme } from './utils/themeHelper'
import './i18n'
import { useTranslation } from 'react-i18next'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  const { i18n, t } = useTranslation()
  const config = defaultConfig

  useEffect(() => {
    applyTheme(config.theme)
  }, [config])

  return (
    <HelmetProvider>
      <Router>
        <div className="app-container">
          <SEO config={config.seo} lang={i18n.language} />
          <Header />

          <Routes>

            <Route path="/" element={
              <main>
                <Hero {...config.hero} />
                <MenuSection {...config.menu} />
                <GallerySection {...config.gallery} />
                <section id="contact" className="contact-section">
                  <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '3rem' }}>{t('contact.title')}</h2>
                    <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                      <div className="contact-info">
                        <h3>{t('contact.info.visit')}</h3>
                        <p>Laipatie 1, 00880 Helsinki</p>
                        <h3 style={{ marginTop: '2rem' }}>{t('contact.info.hours')}</h3>
                        <p>{t('contact.info.mon_fri')}: 10:30 – 21:00</p>
                        <p>{t('contact.info.sat')}: 12:00 – 21:00</p>
                        <p>{t('contact.info.sun')}: 12:00 – 21:00</p>
                        <div style={{ marginTop: '2rem' }}>
                          <iframe
                            title="Barahi Location"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Laippatie%201,%2000880%20Helsinki+(Restaurant%20Barahi)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            width="100%"
                            height="250"
                            style={{ border: 0, borderRadius: '8px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                      </div>
                      <div className="contact-form">
                        <ContactForm />
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            } />
            <Route path="/menu" element={<Navigate to="/#menu" replace />} />
            <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          </Routes>

          <Footer {...config.footer} />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
