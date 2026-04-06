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
          <div className="social-links">
            {socials?.facebook && (
              <a href={socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            )}
            {socials?.instagram && (
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            )}
            {socials?.tiktok && (
              <a href={socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.1.74.01 1.51.35 2.18.51.8 1.4 1.34 2.34 1.4 1.05.07 2.13-.39 2.76-1.25.32-.45.49-1 .49-1.54V.02z"></path></svg>
              </a>
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
