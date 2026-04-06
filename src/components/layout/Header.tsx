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
            <img src="/assets/barahi_final.png" alt="Barahi Logo" className="logo-img" />
          </Link>
        </div>
        <div className="header-right">
          <nav className="nav">
            <ul>
              <li>
                <Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''}>
                  {t('menu.title')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                  {t('nav.contact')}
                </Link>
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
