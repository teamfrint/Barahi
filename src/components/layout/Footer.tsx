import '../../styles/Footer.css'
import { FooterProps } from '../../types'
import { useTranslation } from 'react-i18next'

function Footer({ brand, linkGroups, address, openingHours, socials, copyright }: FooterProps) {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Column 1: Left Nav Links (and brand) */}
        <div className="footer-col">
          <div className="footer-brand">
            <img src={brand.logoUrl || "/graphics/barahi_logo.png"} alt="Barahi Logo" className="footer-logo-img" />
          </div>
          <div className="footer-links-group">
            {linkGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h4>{t(group.title)}</h4>
                <ul>
                  {group.links.map((link, linkIndex) => (
                    <li key={linkIndex}><a href={link.href}>{t(link.text)}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Opening Time and Address */}
        <div className="footer-col">
          <h4>{t('contact.info.visit')}</h4>
          <p>{address && t(address)}</p>
          <h4 style={{ marginTop: '1.5rem' }}>{t('contact.info.hours')}</h4>
          <p style={{ whiteSpace: 'pre-line' }}>{openingHours && t(openingHours)}</p>
        </div>

        {/* Column 3: Social Media */}
        <div className="footer-col">
          <h4>{t('footer.social_title')}</h4>
          <div className="social-links-vertical">
            {socials?.facebook && (
              <a href={socials.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            )}
            {socials?.instagram && (
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            )}
            {socials?.tiktok && (
              <a href={socials.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
            )}
          </div>
        </div>
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
