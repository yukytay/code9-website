import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Our Story", description: "Discover the philosophy and purpose behind Code9." };

export default function About() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Our story</p>
        <h1>Where wisdom meets<br /><em>modern expression.</em></h1>
        <p>Code9 was created to make ancient insight feel personal, beautiful and relevant to the life you live today.</p>
      </section>
      <section className="story section">
        <div className="section-label">01 / Why Code9</div>
        <div className="story-grid">
          <h2>Every number<br />tells a <em>story.</em></h2>
          <div>
            <p className="lead">We see numerology not as a fixed answer, but as a language for deeper self-understanding.</p>
            <p>By combining Digital Numerology with thoughtful contemporary design, Code9 creates experiences and objects that reflect each person’s unique journey. Every consultation is handled with care. Every recommendation is personal. Every finished piece has a reason behind it.</p>
            <p>Our name honours the number nine—a symbol of completion, wisdom and the threshold of a new beginning.</p>
          </div>
        </div>
      </section>
      <section className="values section">
        {[
          ["01", "Wisdom", "We respect the depth of numerology while presenting it with clarity and contemporary relevance."],
          ["02", "Intention", "Every recommendation, material and detail is considered—not chosen at random."],
          ["03", "Craft", "We believe personal meaning deserves thoughtful, beautiful and enduring execution."],
          ["04", "Trust", "We guide with warmth, discretion and honesty, without making unrealistic promises."],
        ].map(([n,t,d]) => <div className="value" key={t}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
      </section>
      <section className="split-feature section">
        <div className="split-art"><span>易</span><i>Change begins with understanding</i></div>
        <div className="split-copy">
          <div className="section-label">02 / Our Philosophy</div>
          <h2>Reflection first.<br /><em>Creation follows.</em></h2>
          <p>Digital numerology offers a way to reflect on the patterns and transitions that shape our lives. Our approach translates those ideas into a personal, accessible conversation.</p>
          <p>The insights become a starting point for reflection and, if you choose, a source of inspiration for a customized bracelet or watch.</p>
          <Link className="button button-primary" href="/services">Explore the consultation <span>→</span></Link>
        </div>
      </section>
    </>
  );
}
