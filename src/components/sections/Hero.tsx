import '../../styles/Hero.css'
import { HeroProps } from '../../types'
import { useTranslation } from 'react-i18next'

function Hero({ title, titleHighlight, description, primaryAction, secondaryAction }: HeroProps) {
  const { t } = useTranslation()

  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <h1>{t(title)}{titleHighlight && <><br/><span>{t(titleHighlight)}</span></>}</h1>
        <p>{t(description)}</p>
        <div className="hero-actions">
          {primaryAction && (
            <button className="btn-primary" onClick={primaryAction.onClick}>
              {t(primaryAction.text)}
            </button>
          )}
          {secondaryAction && (
            <button className="btn-secondary" onClick={secondaryAction.onClick}>
              {t(secondaryAction.text)}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
