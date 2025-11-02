'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call here
    alert('Thank you for your message! We will get back to you within 2 hours.');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <header className="site-header d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Homepage</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact Form
                  </li>
                </ol>
              </nav>
              <h2 className="text-white">Contact Form</h2>
            </div>
          </div>
        </div>
      </header>

      <section className="section-padding section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h3 className="mb-4 pb-2">We&apos;d love to hear from you</h3>
            </div>

            <div className="col-lg-6 col-12">
              <form
                onSubmit={handleSubmit}
                className="custom-form contact-form"
                role="form"
              >
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <label htmlFor="name">Name</label>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-floating">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        className="form-control"
                        placeholder="Email address"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <label htmlFor="email">Email address</label>
                    </div>
                  </div>

                  <div className="col-lg-12 col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="form-control"
                        placeholder="Subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>

                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder="Tell me about your project"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      <label htmlFor="message">Tell me about your project</label>
                    </div>
                  </div>

                  <div className="col-lg-4 col-12 ms-auto">
                    <button type="submit" className="form-control">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-5 col-12 mx-auto mt-5 mt-lg-0">
              <iframe
                className="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38869.842149328045!2d-128.6054478!3d54.5161117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5489f6d8b0f0b0b1%3A0x9b3b9b3b9b3b9b3b!2sTerrace%2C%20BC!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kaizen Strategic AI Location"
              ></iframe>

              <h5 className="mt-4 mb-2">Kaizen Strategic AI</h5>
              <p>Terrace, BC, Canada</p>
              <p>Northern British Columbia</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

