import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import '../../styles/Contact.css';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botField: '' // Honeypot field
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'' | 'success' | 'error'>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email with @ is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - if filled, silently fail
    if (formData.botField) {
      setFormData({ name: '', email: '', subject: '', message: '', botField: '' });
      setStatus('success'); // Pretend it succeeded
      return;
    }

    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setStatus('');
    
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check environment variables.');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', botField: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {/* Honeypot field - visually hidden */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <label htmlFor="botField">Do not fill this out if you are human</label>
        <input
          type="text"
          id="botField"
          name="botField"
          value={formData.botField}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">{t('contact.form.name')}</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t('contact.form.name_placeholder')}
        />
        {errors.name && <span style={{ color: '#ea580c', fontSize: '0.875rem', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
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
          />
          {errors.email && <span style={{ color: '#ea580c', fontSize: '0.875rem', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
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
        ></textarea>
        {errors.message && <span style={{ color: '#ea580c', fontSize: '0.875rem', marginTop: '4px', display: 'block' }}>{errors.message}</span>}
      </div>
      <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : t('contact.form.submit')}
      </button>
      {status === 'success' && (
        <p className="form-status success">{t('contact.form.success')}</p>
      )}
      {status === 'error' && (
        <p className="form-status error" style={{ color: '#ea580c', marginTop: '1rem' }}>
          {t('contact.form.error')}
          <span style={{ display: 'block', fontSize: '0.875rem', marginTop: '0.5rem' }}>If the problem persists, please contact us directly.</span>
        </p>
      )}
    </form>
  );
};

export default ContactForm;
