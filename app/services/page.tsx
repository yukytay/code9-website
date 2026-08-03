import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Numerology Consultation", description: "Explore your personal numerical blueprint with a private DeCode9 consultation." };

export default function Services() {
  const themes = ["Personal blueprint", "Career & business", "Wealth potential", "Relationships", "Well-being", "Lucky numbers", "Supportive colours", "Auspicious dates"];
  return (
    <>
      <section className="page-hero service-hero">
        <p className="eyebrow">Numerology Consultation<span className="zh-line" lang="zh">数字命理咨询</span></p>
        <h1>Clarity for the path<br /><em>ahead.</em></h1>
        <p>A private, thoughtful consultation designed to help you better understand your natural patterns, strengths and possibilities.</p>
        <p className="zh-copy light-zh" lang="zh">透过你的出生数字，认识内在性格、外在表现与潜在优势，并理解缺失数字所提示的成长方向。</p>
        <Link className="button button-primary" href="/contact">Book your consultation <span>↗</span></Link>
      </section>
      <section className="service-overview section">
        <div>
          <div className="section-label">01 / Your Consultation</div>
          <h2>A conversation<br />centred on <em>you.</em></h2>
        </div>
        <div>
          <p className="lead">Your birth details hold a personal numerical pattern. Together, we explore what that pattern may illuminate.</p>
          <p>The experience is calm, confidential and easy to understand. You leave with practical reflections, supportive directions and—if desired—recommendations for a personalized DeCode9 creation.</p>
          <p className="zh-copy" lang="zh">你的数字组合只属于你。我们会解读命盘中已有数字的能量，也说明未出现的数字可能对应哪些尚待培养的人生能力与经验。</p>
        </div>
      </section>
      <section className="theme-grid section">
        {themes.map((theme, i) => <div className="theme" key={theme}><span>{String(i+1).padStart(2,"0")}</span><h3>{theme}</h3><p className="zh-copy" lang="zh">{["个人命盘","事业与工作","财富潜能","人际关系","身心平衡","幸运数字","助力颜色","吉祥日期"][i]}</p></div>)}
      </section>
      <section className="consultation-flow section">
        <div className="section-label light">02 / What To Expect</div>
        <h2>Simple, personal,<br /><em>considered.</em></h2>
        <div className="flow-grid">
          {[
            ["Before", "Share your birth date, preferred contact details and the areas of life you would like to explore.", "提供出生日期与希望了解的人生方向。"],
            ["During", "Your consultant guides you through your personal profile in clear, grounded language with space for questions.", "逐步解读你的数字组合、内外特质与缺失数字。"],
            ["After", "Receive your key insights and, where relevant, tailored colour, number and product recommendations.", "带走清晰重点，以及适合你的数字、颜色与建议。"],
          ].map(([t,d,z],i) => <div key={t}><b>0{i+1}</b><h3>{t}</h3><p>{d}</p><p className="zh-copy light-zh" lang="zh">{z}</p></div>)}
        </div>
      </section>
      <section className="center-cta section"><p className="eyebrow">Begin with understanding</p><h2>Your next chapter<br />starts with <em>one conversation.</em></h2><p className="zh-copy centered-zh" lang="zh">从读懂自己的数字开始，走向更完整的人生。</p><Link className="button button-primary" href="/contact">Reserve a consultation <span>→</span></Link></section>
    </>
  );
}
