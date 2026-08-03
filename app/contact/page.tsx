"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="page-hero contact-hero">
        <p className="eyebrow">Contact DeCode9<span className="zh-line" lang="zh">与我们联系</span></p>
        <h1>Let’s begin your<br /><em>journey.</em></h1>
        <p>Whether you are ready to book a consultation, create a personal piece or discuss an engraved gift, we would love to hear from you.</p>
        <p className="zh-copy light-zh" lang="zh">想了解自己的独特数字组合、内外特质，或缺失数字所代表的人生课题？欢迎与我们联系。</p>
      </section>
      <section className="contact-section section">
        <div className="contact-details">
          <div className="section-label">Speak with us</div>
          <h2>A personal response,<br /><em>always.</em></h2>
          <p>Send us a note using the form. A member of the DeCode9 team will respond during business hours.</p>
          <p className="zh-copy" lang="zh">告诉我们你希望了解的方向。我们会以简单清晰的方式，陪你从数字中认识自己，并看见可以继续成长与补足的部分。</p>
          <div className="contact-method"><span>01</span><div><b>WhatsApp</b><a href="https://wa.me/">Start a conversation →</a></div></div>
          <div className="contact-method"><span>02</span><div><b>Email</b><a href="mailto:hello@code9.sg">hello@code9.sg</a></div></div>
          <div className="contact-method"><span>03</span><div><b>Business hours</b><p>Monday–Saturday · 10am–7pm</p></div></div>
          <div className="social-line">Follow our journey <span>Instagram · Facebook</span></div>
        </div>
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          {sent ? (
            <div className="form-success dark-success"><span>✦</span><h3>Thank you for reaching out.</h3><p>Your enquiry has been received. We’ll be in touch during our business hours.</p><button type="button" className="text-link dark" onClick={() => setSent(false)}>Send another enquiry →</button></div>
          ) : (
            <>
              <div className="form-row"><label>YOUR NAME<input required name="name" placeholder="Full name" /></label><label>CONTACT NUMBER<input required name="phone" type="tel" placeholder="+65" /></label></div>
              <label>EMAIL ADDRESS<input required name="email" type="email" placeholder="you@example.com" /></label>
              <label>I’M INTERESTED IN<select required name="interest" defaultValue=""><option value="" disabled>Select an option</option><option>Numerology consultation</option><option>Customized destiny bracelet</option><option>Personalized destiny watch</option><option>Laser engraving gifts & services</option><option>Something else</option></select></label>
              <label>YOUR MESSAGE<textarea required name="message" rows={5} placeholder="Tell us a little about what you have in mind..." /></label>
              <button className="button button-primary" type="submit">Send enquiry <span>→</span></button>
              <small className="privacy-note dark-note">By submitting this form, you agree that DeCode9 may contact you about this enquiry.</small>
            </>
          )}
        </form>
      </section>
    </>
  );
}
