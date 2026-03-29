import '../../styles/Footer.css'
import { FooterProps } from '../../types'

function Footer({ brand, linkGroups, copyright }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo">{brand.logoText}<span>{brand.logoHighlight}</span></div>
          <p>{brand.description}</p>
        </div>
        {linkGroups.map((group, groupIndex) => (
          <div key={groupIndex} className={groupIndex === 0 ? "footer-links" : "footer-contact"}>
            <h4>{group.title}</h4>
            <ul>
              {group.links.map((link, linkIndex) => (
                <li key={linkIndex}><a href={link.href}>{link.text}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
