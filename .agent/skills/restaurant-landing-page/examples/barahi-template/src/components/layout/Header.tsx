import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../../styles/Header.css'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'

function Header() {
  const { t } = useTranslation()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu on route/hash change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <a href="#hero" className="logo-link">
            <img src="/graphics/barahi_logo.png" alt="Barahi Logo" className="logo-img" />
          </a>
        </div>
        <div className="header-right">
          <button 
            className={`mobile-menu-toggle ${isMenuOpen ? 'open' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <a href="#menu" className={location.hash === '#menu' ? 'active' : ''}>
                  {t('menu.title')}
                </a>
              </li>
              <li>
                <a href="#contact" className={location.hash === '#contact' ? 'active' : ''}>
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </nav>
          <div className="header-actions">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
