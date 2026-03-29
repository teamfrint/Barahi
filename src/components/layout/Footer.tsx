import '../../styles/Footer.css'
import { FooterProps } from '../../types'
import { useTranslation } from 'react-i18next'

function Footer({ brand, linkGroups, copyright }: FooterProps) {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo">{brand.logoText}<span>{brand.logoHighlight}</span></div>
          <p>{t(brand.description)}</p>
        </div>
        {linkGroups.map((group, groupIndex) => (
          <div key={groupIndex} className={groupIndex === 0 ? "footer-links" : "footer-contact"}>
            <h4>{t(group.title)}</h4>
            <ul>
              {group.links.map((link, linkIndex) => (
                <li key={linkIndex}><a href={link.href}>{t(link.text)}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {t(copyright)}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
