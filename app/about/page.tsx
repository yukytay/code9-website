import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Our Story", description: "Discover the philosophy and purpose behind DeCode9." };

export default function About() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Our story<span className="zh-line" lang="zh">数字里的故事</span></p>
        <h1>Where wisdom meets<br /><em>modern expression.</em></h1>
        <p>DeCode9 was created to make ancient insight feel personal, beautiful and relevant to the life you live today.</p>
        <p className="zh-copy light-zh" lang="zh">数字是认识自己的语言。每个人的组合独一无二，映照内心本质，也呈现与世界互动的方式。</p>
      </section>
      <section className="story section">
        <div className="section-label">01 / Why DeCode9</div>
        <div className="story-grid">
          <h2>Every number<br />tells a <em>story.</em></h2>
          <div>
            <p className="lead">We see numerology not as a fixed answer, but as a language for deeper self-understanding.</p>
            <p>By combining Numerology with thoughtful contemporary design, DeCode9 creates experiences and objects that reflect each person’s unique journey. Every consultation is handled with care. Every recommendation is personal. Every finished piece has a reason behind it.</p>
            <p>Our name honours the number nine—a symbol of completion, wisdom and the threshold of a new beginning.</p>
            <p className="zh-copy" lang="zh">完整的数字命盘让我们看见一个人的内在与外在。缺失的数字则像一面镜子，提示尚未充分发展、需要用经历去学习与补足的人生面向。</p>
          </div>
        </div>
      </section>
      <section className="values section">
        {[
          ["01", "Wisdom", "We respect the depth of numerology while presenting it with clarity and contemporary relevance.", "以清晰而现代的方式，传递数字智慧。"],
          ["02", "Intention", "Every recommendation, material and detail is considered—not chosen at random.", "每一个建议与细节，都源自你的专属数字。"],
          ["03", "Craft", "We believe personal meaning deserves thoughtful, beautiful and enduring execution.", "把个人意义化为精致、长久的作品。"],
          ["04", "Trust", "We guide with warmth, discretion and honesty, without making unrealistic promises.", "以真诚、尊重与保密原则陪伴每一次解读。"],
        ].map(([n,t,d,z]) => <div className="value" key={t}><span>{n}</span><h3>{t}</h3><p>{d}</p><p className="zh-copy" lang="zh">{z}</p></div>)}
      </section>
      <section className="split-feature section">
        <div className="split-art"><span>易</span><i>Change begins with understanding</i></div>
        <div className="split-copy">
          <div className="section-label">02 / Our Philosophy</div>
          <h2>Reflection first.<br /><em>Creation follows.</em></h2>
          <p>Numerology offers a way to reflect on the patterns and transitions that shape our lives. Our approach translates those ideas into a personal, accessible conversation.</p>
          <p>The insights become a starting point for reflection and, if you choose, a source of inspiration for a customized bracelet or watch.</p>
          <p className="zh-copy" lang="zh">数字解读不是为你下定论，而是帮助你理解已有的天赋、惯常的表达方式，以及缺失数字所带来的学习课题。</p>
          <Link className="button button-primary" href="/services">Explore the consultation <span>→</span></Link>
        </div>
      </section>
    </>
  );
}
