import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Footer from './components/layout/Footer'
import { defaultConfig, professionalConfig } from './config/siteConfigs'
import { applyTheme } from './utils/themeHelper'

function App() {
  const [config, setConfig] = useState(defaultConfig)

  useEffect(() => {
    applyTheme(config.theme)
    document.title = config.siteTitle
  }, [config])

  const toggleTheme = () => {
    setConfig(prev => prev === defaultConfig ? professionalConfig : defaultConfig)
  }

  return (
    <div className="app-container">
      <Header />
      
      {/* Theme Switcher for Demonstration */}
      <div style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000,
        background: 'white',
        padding: '1rem',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        border: '1px solid #e2e8f0'
      }}>
        <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600 }}>Theme Switcher</p>
        <button 
          onClick={toggleTheme}
          style={{
            padding: '0.5rem 1rem',
            background: 'var(--primary)',
            color: 'white',
            borderRadius: '6px',
            fontSize: '0.75rem'
          }}
        >
          Switch to {config === defaultConfig ? 'Professional' : 'Default'}
        </button>
      </div>

      <main>
        <Hero {...config.hero} />
        <Services {...config.services} />
      </main>
      <Footer {...config.footer} />
    </div>
  )
}

export default App
