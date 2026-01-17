import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle|sending|sent

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const eobj = validate()
    if (Object.keys(eobj).length) {
      setErrors(eobj)
      return
    }
    setStatus('sending')
    // simulate async send
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 800)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner single">
        <div className="contact-left">
          <h2>Get in touch</h2>
          <p className="subtitle">Have a project or just want to say hi? Send a message — I'll get back soon.</p>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="row">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" value={form.name} onChange={handleChange} />
                {errors.name && <small className="error">{errors.name}</small>}
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" value={form.email} onChange={handleChange} />
                {errors.email && <small className="error">{errors.email}</small>}
              </div>
            </div>

            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" value={form.subject} onChange={handleChange} />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={6} value={form.message} onChange={handleChange} />
              {errors.message && <small className="error">{errors.message}</small>}
            </div>

            <div className="actions">
              <button type="submit" className="btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'sent' && <span className="success">Message sent — thanks!</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
