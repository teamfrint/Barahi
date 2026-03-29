import '../../styles/Services.css'
import { ServicesProps } from '../../types'

function Services({ title, subtitle, services }: ServicesProps) {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
