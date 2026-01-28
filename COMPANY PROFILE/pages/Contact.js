const Contact = () => (
  <div style={{ padding: '120px 5%' }}>
    <h1>Contact Us</h1>
    <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px' }}>
      <input type="text" placeholder="Name" style={{ padding: '10px' }} />
      <input type="email" placeholder="Email" style={{ padding: '10px' }} />
      <textarea placeholder="Message" style={{ padding: '10px', height: '100px' }}></textarea>
      <button className="primary-cta">Send Message</button>
    </form>
  </div>
);
export default Contact;