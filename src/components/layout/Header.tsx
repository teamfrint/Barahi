import '../../styles/Header.css'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'

function Header() {
  const { t } = useTranslation()

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">Landing<span>Kit</span></div>
        <nav className="nav">
          <ul>
            <li><a href="#hero">{t('nav.home')}</a></li>
            <li><a href="#services">{t('nav.services')}</a></li>
            <li><a href="#footer">{t('nav.contact')}</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Header
