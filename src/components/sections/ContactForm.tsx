import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/Contact.css';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'' | 'success' | 'error'>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">{t('contact.form.name')}</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t('contact.form.name_placeholder')}
          required
        />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">{t('contact.form.email')}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t('contact.form.email_placeholder')}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">{t('contact.form.subject')}</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={t('contact.form.subject_placeholder')}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">{t('contact.form.message')}</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t('contact.form.message_placeholder')}
          rows={5}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary submit-btn">
        {t('contact.form.submit')}
      </button>
      {status === 'success' && (
        <p className="form-status success">{t('contact.form.success')}</p>
      )}
      {status === 'error' && (
        <p className="form-status error">{t('contact.form.error')}</p>
      )}
    </form>
  );
};

export default ContactForm;
