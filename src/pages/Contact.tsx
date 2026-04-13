import { useTranslation } from 'react-i18next';
import ContactForm from '../components/sections/ContactForm';
import '../styles/Contact.css';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>{t('contact.title')}</h1>
          <p className="subtitle">{t('contact.subtitle')}</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-section">
              <div className="info-card">
                <h3>{t('contact.info.visit')}</h3>
                <p>Laippatie 1</p>
                <p>00880 Helsinki</p>
                <p>Finland</p>
              </div>
              <div className="info-card">
                <h3>{t('contact.info.hours')}</h3>
                <p>{t('contact.info.mon_fri')}: 10:00 – 21:00</p>
                <p>{t('contact.info.sat')}: 12:00 – 21:00</p>
                <p>{t('contact.info.sun')}: 12:00 – 21:00</p>
              </div>
              <div className="info-card">
                <h3>{t('contact.info.contact')}</h3>
                <p>Email: info@talbarahi.fi</p>
                <p>Tel: 040 5582600</p>
              </div>
            </div>

            <div className="contact-form-section">
              <h3>{t('contact.form.title')}</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map">
        <div className="map-container">
          <iframe
            title="Barahi Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.341517454238!2d25.044031677353!3d60.19163777494541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692095cc1a4595d%3A0x6b872322305377f!2sPulttitie%205%2C%2000880%20Helsinki!5e0!3m2!1sen!2sfi!4v1712345678901!5m2!1sen!2sfi"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
