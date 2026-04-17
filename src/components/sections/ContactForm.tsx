import { useTranslation } from 'react-i18next';
import { useForm, ValidationError } from '@formspree/react';
import '../../styles/Contact.css';

const ContactForm = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("mwvaonqv");

  if (state.succeeded) {
    return (
      <div className="contact-form success-message">
        <p className="form-status success">{t('contact.form.success')}</p>
        <button
          onClick={() => window.location.reload()}
          className="btn btn-primary"
          style={{ marginTop: '1rem' }}
        >
          {t('nav.home')}
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">{t('contact.form.name')}</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder={t('contact.form.name_placeholder')}
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="error-text"
        />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">{t('contact.form.email')}</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder={t('contact.form.email_placeholder')}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="error-text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">{t('contact.form.subject')}</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder={t('contact.form.subject_placeholder')}
          />
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
            className="error-text"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">{t('contact.form.message')}</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder={t('contact.form.message_placeholder')}
          rows={5}
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="error-text"
        />
      </div>
      <button type="submit" className="btn btn-primary submit-btn" disabled={state.submitting}>
        {state.submitting ? 'Submitting...' : t('contact.form.submit')}
      </button>

      {state.errors && (
        <p className="form-status error" style={{ color: '#ea580c', marginTop: '1rem' }}>
          {t('contact.form.error')}
          <span style={{ display: 'block', fontSize: '0.875rem', marginTop: '0.5rem' }}>If the problem persists, please contact us directly.</span>
        </p>
      )}
    </form>
  );
};

export default ContactForm;
