import '../../styles/Services.css'
import { ServicesProps } from '../../types'
import { useTranslation } from 'react-i18next'

function Services({ title, subtitle, services }: ServicesProps) {
  const { t } = useTranslation()

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2>{t(title)}</h2>
          {subtitle && <p>{t(subtitle)}</p>}
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{t(service.title)}</h3>
              <p>{t(service.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
