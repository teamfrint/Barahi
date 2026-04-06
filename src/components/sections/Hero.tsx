import { Link } from 'react-router-dom'
import '../../styles/Hero.css'
import { HeroProps } from '../../types'
import { useTranslation } from 'react-i18next'

function Hero({ title, titleHighlight, description, backgroundImage, primaryAction, secondaryAction }: HeroProps) {
  const { t } = useTranslation()

  const heroStyle = backgroundImage ? {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  } : {}

  return (
    <section id="hero" className="hero" style={heroStyle}>
      <div className="container hero-content">
        <h1>
          {t(title)}
          {titleHighlight && t(titleHighlight) !== "" && (
            <><br/><span>{t(titleHighlight)}</span></>
          )}
        </h1>
        {description && t(description) !== "" && (
          <p>{t(description)}</p>
        )}
        <div className="hero-actions">
          {primaryAction && (
            <Link to={primaryAction.href || '#'} className="btn btn-primary">
              {t(primaryAction.text)}
            </Link>
          )}
          {secondaryAction && secondaryAction.text && t(secondaryAction.text) !== "" && (
            <button className="btn btn-secondary" onClick={secondaryAction.onClick}>
              {t(secondaryAction.text)}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
