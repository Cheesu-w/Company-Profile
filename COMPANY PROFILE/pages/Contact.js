const Contact = () => (
  <>
    {/* MAP SECTION */}
    <div className="map-container">
      <iframe
        title="Ridgewood Towers Map"
        src="https://www.google.com/maps?q=Ridgewood%20Towers%20Taguig&z=16&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

    {/* CONTACT SECTION */}
    <div className="contact-wrapper">
      <div className="contact-grid">

        {/* LEFT */}
        <div className="contact-left">
          <p className="contact-label">CONTACT US</p>
          <h1 className="contact-title">Get In Touch With Us</h1>

          <p className="contact-description">
            We’re here to help! Whether you have questions about our products,
            need assistance with an order, or simply want to say hello.
          </p>

          <div className="contact-info">

            <div className="info-card">
              <div className="icon-box">
                <img src="/icons/building.png" alt="Office" />
              </div>
              <div>
                <h4>Ridgewood</h4>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=GF+Unit+102+Tower+3+The+Ridgewood+Towers+Philippines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  GF unit 102 Tower 3,<br />
                  The Ridgewood Towers,<br />
                  Philippines
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-box">
                <img src="/icons/city.png" alt="City" />
              </div>
              <div>
                <h4>Taguig City</h4>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=C5+Road+Ususan+Taguig+City+Philippines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  C5 Road (Ususan),<br />
                  Taguig City,<br />
                  Philippines
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-box">
                <img src="/icons/phone.png" alt="Phone" />
              </div>
              <div>
                <h4>Phone Call</h4>
                <p>
                  0949-740-2779<br />
                  0917-465-5234<br />
                  028-824-4562
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-box">
                <img src="/icons/email.png" alt="Email" />
              </div>
              <div>
                <h4>Send Us A Message</h4>
                <a href="mailto:sales@vtic.ph" className="map-link">
                  sales@vtic.ph
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <div className="box">
            <form className="contact-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message" />
              <button className="primary-cta">Send Message</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </>
);

export default Contact;
