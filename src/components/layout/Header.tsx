import '../../styles/Header.css'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import { useLocation, Link } from 'react-router-dom'

function Header() {
  const { t } = useTranslation()
  const location = useLocation()

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <Link to="/">
            <img src="/graphics/barahi_logo.png" alt="Barahi Logo" className="logo-img" />
          </Link>
        </div>
        <div className="header-right">
          <nav className="nav">
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
