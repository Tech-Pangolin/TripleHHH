'use client';

import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const text = await response.text();
      if (!response.ok || text.trim() !== 'OK') {
        throw new Error(text || 'Form submission failed.');
      }
      setForm(initialForm);
      setStatus('sent');
    } catch (err) {
      setError(err.message || 'Unable to send your message right now.');
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>For more information, please reach out to us below.</p>
        </div>

        <div className="row contact-info">
          <div className="col-md-4">
            <div className="contact-address">
              <i className="bi bi-geo-alt" />
              <h3>Address</h3>
              <address> 6000 Columbus Ave 1906, Plano, TX 75024 USA</address>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-phone">
              <i className="bi bi-phone" />
              <h3>Phone Number</h3>
              <p>
                <a href="tel:3105960500">(310) 596-0500</a>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-email">
              <i className="bi bi-envelope" />
              <h3>Email</h3>
              <p>
                <a href="mailto:infotriplehhealthcareservices@gmail.com">
                  infotriplehhealthcareservices@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="form">
          <form onSubmit={handleSubmit} className="php-email-form">
            <div className="row">
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={updateField}
                  required
                />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={updateField}
                  required
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={updateField}
                required
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                value={form.message}
                onChange={updateField}
                required
              />
            </div>
            <div className="my-3">
              <div className={`loading${status === 'loading' ? ' d-block' : ''}`}>Loading</div>
              <div className={`error-message${status === 'error' ? ' d-block' : ''}`}>{error}</div>
              <div className={`sent-message${status === 'sent' ? ' d-block' : ''}`}>
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit" disabled={status === 'loading'}>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
