import '../../styles/Hero.css'
import { HeroProps } from '../../types'

function Hero({ title, titleHighlight, description, primaryAction, secondaryAction }: HeroProps) {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <h1>{title}{titleHighlight && <><br/><span>{titleHighlight}</span></>}</h1>
        <p>{description}</p>
        <div className="hero-actions">
          {primaryAction && (
            <button className="btn-primary" onClick={primaryAction.onClick}>
              {primaryAction.text}
            </button>
          )}
          {secondaryAction && (
            <button className="btn-secondary" onClick={secondaryAction.onClick}>
              {secondaryAction.text}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
