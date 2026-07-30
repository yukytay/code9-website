"use client";

import Link from "next/link";
import { useState } from "react";

const offerings = [
  {
    number: "01",
    title: "Customized Destiny Bracelet",
    text: "A meaningful composition of natural stones, selected through your personal digital numerology profile.",
    href: "/products#bracelet",
    visual: "bracelet",
  },
  {
    number: "02",
    title: "Personalized Destiny Watch",
    text: "A distinctive timepiece thoughtfully personalized with the numbers, colours and details that speak to your journey.",
    href: "/products#watch",
    visual: "watch",
  },
  {
    number: "03",
    title: "Laser Engraving Gifts",
    text: "Beautifully engraved keepsakes and corporate gifts, made personal for every milestone and occasion.",
    href: "/products#engraving",
    visual: "gift",
  },
];

const faqs = [
  ["What is Digital Numerology?", "It is a personalized interpretation of the numerical patterns connected to your birth details. At Code9, the consultation is used as a reflective guide for your life path and to inspire meaningful product personalization."],
  ["How is my bracelet or watch personalized?", "We begin with your consultation, then recommend colours, numbers and design details that complement your unique profile. You remain part of the design process before your piece is crafted."],
  ["Can I order an engraved gift without a consultation?", "Yes. Our laser engraving service is available for personal and corporate gifts, with names, dates, messages, logos and selected artwork."],
  ["How long does a custom order take?", "Timing varies by design and quantity. After your enquiry, we will confirm the available options, quotation and estimated completion date before work begins."],
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="hero">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-content">
          <p className="eyebrow">Decode Your Destiny</p>
          <h1>Your story is written<br />in the <em>numbers.</em></h1>
          <p className="hero-copy">Personalized guidance, destiny-inspired accessories and meaningful gifts—crafted to honour the energy that makes you uniquely you.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">Begin your journey <span>↗</span></Link>
            <Link className="text-link" href="/products">Explore the collection <span>→</span></Link>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="halo halo-one" />
          <div className="halo halo-two" />
          <div className="gem gem-one" />
          <div className="gem gem-two" />
          <div className="gem gem-three" />
          <div className="heart-nine-mark"><img src="/heart9-transparent.png" alt="Code9 Heart 9 symbol" /></div>
          <div className="vertical-note">WISDOM · INTENTION · CRAFT</div>
        </div>
        <div className="scroll-cue"><span /> Scroll to discover</div>
      </section>

      <section className="philosophy section">
        <div className="section-label">01 / Our Philosophy</div>
        <div className="philosophy-grid">
          <h2>Ancient wisdom,<br /><em>beautifully personal.</em></h2>
          <div>
            <p className="lead">We believe every individual carries a unique numerical blueprint—a quiet language of potential, rhythm and possibility.</p>
            <p>Code9 brings the timeless language of digital numerology into the present through thoughtful consultation and contemporary craftsmanship. The result is not simply an accessory, but a piece with personal meaning.</p>
            <Link className="text-link dark" href="/about">Discover our story <span>→</span></Link>
          </div>
        </div>
        <div className="signature">Code<span>9</span></div>
      </section>

      <section className="collections section">
        <div className="section-head">
          <div>
            <div className="section-label light">02 / Signature Collections</div>
            <h2>Made with meaning.<br /><em>Worn with purpose.</em></h2>
          </div>
          <p>Three expressions of personalization, each shaped around your story and crafted to become part of it.</p>
        </div>
        <div className="collection-grid">
          {offerings.map((item) => (
            <Link className="collection-card" href={item.href} key={item.title}>
              <div className={`product-art ${item.visual}`}>
                <span className="product-number">{item.number}</span>
                <div className="product-object" />
              </div>
              <div className="collection-info">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="circle-arrow">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="process section">
        <div className="section-label">03 / The Code9 Journey</div>
        <div className="process-intro">
          <h2>From insight<br />to <em>intention.</em></h2>
          <p>Every journey is personal. Ours is designed to feel considered, transparent and entirely yours.</p>
        </div>
        <div className="steps">
          {[
            ["01", "Connect", "Tell us what brings you here and what you hope to discover."],
            ["02", "Decode", "Explore your personal blueprint through a one-to-one consultation."],
            ["03", "Create", "Shape a design guided by your numbers, preferences and intentions."],
            ["04", "Receive", "Welcome a beautifully finished piece made especially for you."],
          ].map(([n, t, d]) => (
            <div className="step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </section>

      <section className="destiny section">
        <div className="destiny-copy">
          <div className="section-label light">04 / A First Step</div>
          <h2>Curious what your<br />numbers may <em>reveal?</em></h2>
          <p>Share a few details and begin a conversation about your personal numerical blueprint. Your full reading is always guided by a Code9 consultant.</p>
        </div>
        <form className="destiny-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          {submitted ? (
            <div className="form-success"><span>✦</span><h3>Your journey has begun.</h3><p>Thank you. We’ll be in touch to arrange your personal consultation.</p></div>
          ) : (
            <>
              <label>YOUR NAME<input required name="name" placeholder="How shall we address you?" /></label>
              <div className="form-row">
                <label>DATE OF BIRTH<input required type="date" name="birthdate" /></label>
                <label>TIME OF BIRTH <small>OPTIONAL</small><input type="time" name="birthtime" /></label>
              </div>
              <label>CONTACT NUMBER<input required type="tel" name="phone" placeholder="+65" /></label>
              <button className="button button-light" type="submit">Discover my destiny <span>→</span></button>
              <small className="privacy-note">Your information is kept private and used only to respond to your enquiry.</small>
            </>
          )}
        </form>
      </section>

      <section className="testimonials section">
        <div className="section-label">05 / Words From Our Clients</div>
        <div className="quote-mark">“</div>
        <blockquote>The consultation felt warm, thoughtful and deeply personal. My bracelet is beautiful—but knowing the meaning behind every detail makes it truly special.</blockquote>
        <p className="quote-author">— A Code9 Client · Singapore</p>
        <div className="quote-dots"><span /><span /><span /></div>
      </section>

      <section className="faq section">
        <div className="faq-title">
          <div className="section-label">06 / Questions, Answered</div>
          <h2>A little more<br /><em>clarity.</em></h2>
          <p>Still curious? We’re always happy to have a conversation.</p>
          <Link className="text-link dark" href="/contact">Speak with us <span>→</span></Link>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a], i) => (
            <div className={`faq-item ${openFaq === i ? "open" : ""}`} key={q}>
              <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}><span>{String(i + 1).padStart(2, "0")}</span>{q}<b>{openFaq === i ? "−" : "+"}</b></button>
              <div className="faq-answer"><p>{a}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta section">
        <div className="cta-symbol">9</div>
        <p className="eyebrow">Your story. Your energy. Your Code.</p>
        <h2>Ready to decode<br /><em>your destiny?</em></h2>
        <Link className="button button-primary" href="/contact">Book a consultation <span>↗</span></Link>
      </section>
    </>
  );
}
