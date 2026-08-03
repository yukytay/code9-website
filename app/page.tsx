"use client";

import Link from "next/link";
import { useState } from "react";

const offerings = [
  {
    number: "01",
    title: "Customized Destiny Bracelet",
    text: "A meaningful composition of natural stones, selected through your personal numerology profile.",
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
  ["What is Numerology?", "It is a personalized interpretation of the numerical patterns connected to your birth details. At DeCode9, the consultation is used as a reflective guide for your life path and to inspire meaningful product personalization."],
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
          <p className="eyebrow">Decode Your Destiny<span className="zh-line" lang="zh">数字的力量</span></p>
          <h1>Your story is written<br />in the <em>numbers.</em></h1>
          <p className="hero-copy">Personalized guidance, destiny-inspired accessories and meaningful gifts—crafted to honour the energy that makes you uniquely you.</p>
          <p className="zh-copy hero-zh" lang="zh">每个人都拥有独一无二的数字组合，它映照你的内在性格与外在表达，也记录着专属于你的人生节奏。</p>
          <div className="hero-actions">
            <Link className="button button-outline" href="/contact">Begin your journey <span>↗</span></Link>
            <Link className="button button-primary" href="/products">Explore the collection <span>→</span></Link>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="halo halo-one" />
          <div className="halo halo-two" />
          <div className="inner-shimmers">
            <span /><span /><span /><span /><span /><span /><span />
          </div>
          <div className="number-orbits">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
              <span className="orbit-number" key={number}><i>{number}</i></span>
            ))}
          </div>
          <div className="gem gem-one" />
          <div className="gem gem-two" />
          <div className="gem gem-three" />
          <div className="heart-nine-mark"><img src="https://code9-destiny.yukytay.chatgpt.site/heart9-pastel.png" alt="DeCode9 Heart 9 symbol" /></div>
          <div className="hero-lockup"><strong>DeCode<span>9</span></strong><small>Decode Your Destiny</small></div>
          <div className="hero-star star-one">✦</div><div className="hero-star star-two">✧</div><div className="hero-star star-three">·</div>
        </div>
        <p className="bottom-left-mantra" lang="zh">万事万物都会有相互影响、相互制衡的能量磁场</p>
        <div className="scroll-cue"><span /> Scroll to discover</div>
      </section>

      <section className="philosophy section">
        <div className="section-label">01 / Our Philosophy</div>
        <div className="philosophy-grid">
          <h2>Ancient wisdom,<br /><em>beautifully personal.</em></h2>
          <div>
            <p className="lead">We believe every individual carries a unique numerical blueprint—a quiet language of potential, rhythm and possibility.</p>
            <p>DeCode9 brings the timeless language of numerology into the present through thoughtful consultation and contemporary craftsmanship. The result is not simply an accessory, but a piece with personal meaning.</p>
            <p className="zh-copy" lang="zh">每个人的数字命盘都不相同。命盘中的数字代表你与生俱来的特质、思维方式与行动模式；未出现的数字并非缺陷，而是提醒你在人生中需要学习、补足与成长的方向。</p>
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
        <p className="zh-copy light-zh section-zh" lang="zh">从数字了解自己，再把专属能量融入日常。每一件作品，都以你的独特数字组合为灵感。</p>
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
        <div className="section-label">03 / The DeCode9 Journey</div>
        <div className="process-intro">
          <h2>From insight<br />to <em>intention.</em></h2>
          <p>Every journey is personal. Ours is designed to feel considered, transparent and entirely yours.</p>
        </div>
        <p className="zh-copy section-zh" lang="zh">我们从你的出生数字出发，解读内在特质、外在表现，以及命盘中尚待发展的能量，让你更完整地认识自己。</p>
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
          <p>Share a few details and begin a conversation about your personal numerical blueprint. Your full reading is always guided by a DeCode9 consultant.</p>
        </div>
        <p className="zh-copy light-zh" lang="zh">提供出生资料，让我们为你梳理独一无二的数字命盘，认识已有的优势，也看见缺失数字所提示的人生课题。</p>
        <form className="destiny-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          {submitted ? (
            <div className="form-success"><span>✦</span><h3>Your journey has begun.</h3><p>Thank you. We’ll be in touch to arrange your personal consultation.</p></div>
          ) : (
            <>
              <label>YOUR NAME<input required name="name" placeholder="How shall we address you?" /></label>
              <div className="form-row">
                <label>DATE OF BIRTH<input required type="date" name="birthdate" /></label>
                <label className="birth-time-tick">
                  <input type="checkbox" name="bornBetween11And1159pm" />
                  <span>If you are born between 11.00pm - 11.59pm please tick</span>
                </label>
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
        <p className="zh-copy centered-zh" lang="zh">认识自己的数字，不是为人生设限，而是更清楚地看见自己的内在、外在与成长方向。</p>
        <p className="quote-author">— A DeCode9 Client · Singapore</p>
        <div className="quote-dots"><span /><span /><span /></div>
      </section>

      <section className="faq section">
        <div className="faq-title">
          <div className="section-label">06 / Questions, Answered</div>
          <h2>A little more<br /><em>clarity.</em></h2>
          <p>Still curious? We’re always happy to have a conversation.</p>
          <p className="zh-copy" lang="zh">想知道某个数字为何反复出现，或缺失数字代表什么？我们会用清晰、易懂的方式为你说明。</p>
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
        <p className="zh-copy centered-zh" lang="zh">读懂你的数字，看见真实的自己。</p>
        <Link className="button button-primary" href="/contact">Book a consultation <span>↗</span></Link>
      </section>
    </>
  );
}
