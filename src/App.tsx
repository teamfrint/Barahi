import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Footer from './components/layout/Footer'
import SEO from './components/layout/SEO'
import MenuPage from './pages/Menu.tsx'
import ContactPage from './pages/Contact.tsx'
import { defaultConfig } from './config/siteConfigs'
import { applyTheme } from './utils/themeHelper'
import './i18n'
import { useTranslation } from 'react-i18next'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  const { i18n } = useTranslation()
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
              </main>
            } />
            <Route path="/menu" element={<MenuPage config={config.menu} />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>

          <Footer {...config.footer} />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
