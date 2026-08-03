import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Collections", description: "Explore customized destiny bracelets, personalized watches and laser engraving gifts by DeCode9." };

const products = [
  { id:"bracelet", num:"01", title:"Customized Destiny Bracelet", italic:"Intention, worn beautifully.", desc:"A personal composition of natural stones, colours and details inspired by your Numerology profile.", zh:"根据你的独特数字组合与所需补充的能量，搭配天然晶石、颜色与细节。", bullets:["Natural stone selection","Personal colour guidance","Size and style customization","Premium gift presentation"], art:"bracelet" },
  { id:"watch", num:"02", title:"Personalized Destiny Watch", italic:"Your time. Your story.", desc:"A refined timepiece made more meaningful through subtle, personal details connected to your unique numerical blueprint.", zh:"把专属数字、助力颜色与个人寓意融入腕表，让时间承载你的故事。", bullets:["Selected watch styles","Lucky number integration","Personal engraving","Signature gift packaging"], art:"watch" },
  { id:"engraving", num:"03", title:"Laser Engraving Gifts & Services", italic:"Make the moment unmistakably theirs.", desc:"Precise, premium personalization for individual keepsakes, celebrations and thoughtful corporate gifting.", zh:"以名字、日期、数字或祝福，为重要的人与时刻留下独一无二的印记。", bullets:["Names, dates and messages","Logos and approved artwork","Personal and corporate orders","Quotation for bulk quantities"], art:"gift" },
];

export default function Products() {
  return (
    <>
      <section className="page-hero product-page-hero">
        <p className="eyebrow">The DeCode9 collections<span className="zh-line" lang="zh">数字能量系列</span></p>
        <h1>Created for one.<br /><em>Remembered always.</em></h1>
        <p>Personal pieces and gifts shaped by intention, finished with care and designed to carry a story.</p>
        <p className="zh-copy light-zh" lang="zh">每个人的数字命盘都不同，因此每一件作品也应当独一无二，承载属于你的内在能量与外在表达。</p>
      </section>
      <section className="product-intro section"><div className="section-label">Three signature expressions</div><div><p>Whether guided by your numbers or personalized for someone meaningful, every DeCode9 creation begins with a simple idea: the most treasured things feel truly personal.</p><p className="zh-copy" lang="zh">数字展现你的天赋与特质；缺失数字提示需要培养的能量。我们把这份理解转化为可佩戴、可珍藏的个人作品。</p></div></section>
      {products.map((product, i) => (
        <section className={`product-detail section ${i % 2 ? "reverse" : ""}`} id={product.id} key={product.id}>
          <div className={`detail-art ${product.art}`}><span>{product.num}</span><div className="product-object" /></div>
          <div className="detail-copy">
            <div className="section-label">{product.num} / Signature Collection</div>
            <h2>{product.title}</h2>
            <h3>{product.italic}</h3>
            <p>{product.desc}</p>
            <p className="zh-copy" lang="zh">{product.zh}</p>
            <ul>{product.bullets.map(b => <li key={b}><span>✦</span>{b}</li>)}</ul>
            <Link className="button button-primary" href={`/contact?interest=${product.id}`}>{product.id === "engraving" ? "Request a quotation" : "Enquire about this piece"} <span>↗</span></Link>
          </div>
        </section>
      ))}
      <section className="center-cta section"><p className="eyebrow">Made for your story</p><h2>Let’s create something<br /><em>meaningful.</em></h2><p className="zh-copy centered-zh" lang="zh">让你的数字，成为一件真正属于你的作品。</p><Link className="button button-primary" href="/contact">Start an enquiry <span>→</span></Link></section>
    </>
  );
}
