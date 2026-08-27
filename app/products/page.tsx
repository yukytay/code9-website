import type { Metadata } from "next";

export const metadata: Metadata = { title: "Numerology Jewellery", description: "Explore DeCode9 Numerology-guided rings, pendants, bracelets and watches, personalized to support your individual energy profile." };

const products = [
  { id:"bracelet", num:"01", title:"Customized Destiny Bracelet", italic:"Intention, worn beautifully.", desc:"A personal composition of natural stones, colours and details inspired by your Numerology profile.", zh:"根据你的独特数字组合与所需补充的能量，搭配天然晶石、颜色与细节。", bullets:["Natural stone selection","Personal colour guidance","Size and style customization","Premium gift presentation"], art:"bracelet" },
  { id:"watch", num:"02", title:"Personalized Destiny Watch", italic:"Your time. Your story.", desc:"A refined timepiece made more meaningful through subtle, personal details connected to your unique numerical blueprint.", zh:"把专属数字、助力颜色与个人寓意融入腕表，让时间承载你的故事。", bullets:["Selected watch styles","Lucky number integration","Personal engraving","Signature gift packaging"], art:"watch" },
];

const rings = [
  {
    id: "silver-bamboo-blessing-ring",
    zhTitle: "银竹呈祥",
    title: "Silver Bamboo Blessing Ring",
    zh: "银白色象征纯净、智慧与守护；圆环相扣，则有福运循环、生生不息。",
    desc: "The silver-white finish represents purity, wisdom and protection, while the continuous circular form symbolizes endless blessings and lasting prosperity.",
    blessing: "Rise with every step, surrounded by blessings, prosperity and good fortune.",
    image: "/products/silver-bamboo-ring.jpeg",
    imageAlt: "Silver Bamboo Blessing Ring displayed on black velvet",
  },
  {
    id: "golden-bamboo-blessing-ring",
    zhTitle: "金竹纳福戒",
    title: "Golden Bamboo Blessing Ring",
    zh: "金竹纳福，节节高升；福财汇聚，贵人相助；竹报平安，富贵长青。",
    desc: "The gold brings blessings and prosperity. Rise higher with every step, attract wealth and benefactors, and enjoy lasting peace, abundance and flourishing fortune.",
    blessing: "Blessings gather, prosperity rises and good fortune flourishes.",
    image: "/products/golden-bamboo-ring.jpeg",
    imageAlt: "Golden Bamboo Blessing Ring displayed on natural stone",
  },
  {
    id: "fortune-halo-ring",
    zhTitle: "幸运之环",
    title: "Fortune Halo Ring",
    zh: "象征圆满、生生不息；福运相随、好运循环、财富汇聚、圆满不断。",
    desc: "Its circular design symbolizes wholeness, harmony and an endless flow of good fortune.",
    blessing: "A circle of blessings, a code of fortune, a lifetime of abundance.",
    image: "/products/fortune-halo-ring.jpeg",
    imageAlt: "Silver Fortune Halo Ring displayed on black velvet",
  },
  {
    id: "eternal-nine-ring",
    zhTitle: "九曜聚福",
    title: "Eternal Nine Ring",
    zh: "圆满与登峰；层层展开的造型象征能量绽放、运势向上、人生不断展开；顶部的宝石如光芒汇聚，寓意吸引机遇、贵人与丰盛。九曜盛放，福运绽放；步步向上，圆满丰盛。",
    desc: "A symbol of longevity, completion and enduring fortune. Its flowing, unfolding design represents continuous growth, rising success and expanding opportunities.",
    blessing: "Endless fortune, lasting prosperity, infinite possibilities.",
    image: "/products/eternal-nine-ring.jpeg",
    imageAlt: "Silver Eternal Nine Ring with gemstone details",
  },
];

const pendants = [
  {
    id: "fortune-bamboo-pendant",
    zhTitle: "福竹呈祥",
    title: "Fortune Bamboo Pendant",
    zh: "节节高升、步步顺遂；双节相连代表福气延续、好事成双。将福气、贵人、好运汇聚于身。",
    desc: "Inspired by the upward growth of bamboo, this pendant symbolizes continuous progress, resilience and rising success. Its two connected bamboo sections represent double blessings, lasting good fortune and prosperity passed from one stage to the next.",
    blessing: "Rise with every step. May blessings continue, fortune flourish, and good luck always be with you.",
    image: "/products/fortune-bamboo-pendant.jpeg",
    imageAlt: "Silver Fortune Bamboo Pendant displayed on white satin",
  },
  {
    id: "bag-of-blessings-pendant",
    zhTitle: "福运满袋",
    title: "Bag of Blessings Pendant",
    zh: "聚福、聚财、守住财富；数字代表每个人独特的幸运密码与能量。把属于自己的吉祥数字融入福袋，寓意将好运、财富与福气汇聚其中。",
    desc: "A symbol of gathering and holding good fortune, happiness and prosperity.",
    blessing: "Carry your fortune. Gather your blessings. Let abundance follow you.",
    image: "/products/bag-of-blessings-pendant.jpeg",
    imageAlt: "Silver Bag of Blessings Pendant displayed on white satin",
  },
];

const whatsappUrl = "https://wa.me/6588651341?text=Hello%20DeCode9%2C%20I%27d%20like%20to%20enquire%20about%20your%20personalization%20services.";

export default function Products() {
  return (
    <>
      <section className="page-hero product-page-hero">
        <p className="eyebrow">The DeCode9 collections<span className="zh-line" lang="zh">数字能量系列</span></p>
        <h1>Created for one.<br /><em>Remembered always.</em></h1>
        <p>Personal pieces and gifts shaped by intention, finished with care and designed to carry a story.</p>
        <p className="zh-copy light-zh" lang="zh">每个人的数字命盘都不同，因此每一件作品也应当独一无二，承载属于你的内在能量与外在表达。</p>
      </section>
      <section className="product-intro section"><div className="section-label">Jewellery guided by your numbers</div><div><p>Every personalized DeCode9 piece begins with a Numerology consultation. Your numerical profile reveals the energies already present and those that may need greater support and balance.</p><p className="zh-copy" lang="zh">每一件 DeCode9 专属作品，都从数字命理咨询开始。我们先了解你命盘中已有的能量与需要补足的方向，再把这份解读融入作品。</p></div></section>
      <section className="numerology-bridge section">
        <div className="numerology-bridge-copy">
          <div className="section-label light">From insight to intention</div>
          <h2>Your numbers guide<br /><em>your creation.</em></h2>
          <p>The consultation helps us understand your natural strengths and missing energies. We then personalize supportive colours, meaningful numbers, materials and design details to create a piece aligned with your individual energy profile.</p>
          <p className="zh-copy light-zh" lang="zh">通过咨询了解你的天赋、特质与命盘中缺失的能量，再以相应的颜色、数字、材质与设计细节，为你打造更具个人意义的专属作品。</p>
        </div>
        <div className="numerology-journey" aria-label="Personalization journey">
          <div><span>01</span><strong>Consult</strong><p>Explore your personal numerical blueprint.</p></div>
          <div><span>02</span><strong>Identify</strong><p>Understand strengths and missing energies.</p></div>
          <div><span>03</span><strong>Personalize</strong><p>Choose supportive colours, numbers and details.</p></div>
          <div><span>04</span><strong>Create</strong><p>Receive a meaningful piece made for you.</p></div>
        </div>
      </section>
      <section className="ring-collection section">
        <div className="ring-collection-head">
          <div><div className="section-label">New / Blessing Rings</div><h2>Symbols of fortune,<br /><em>made to be worn.</em></h2></div>
          <p>Meaningful jewellery created to carry distinct blessings of harmony, prosperity and enduring good fortune.</p>
        </div>
        <div className="ring-grid">
          {rings.map((ring, index) => (
            <article className="ring-card" id={ring.id} key={ring.id}>
              <div className="ring-card-image">
                <img src={ring.image} alt={ring.imageAlt} />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="ring-card-copy">
                <p className="ring-zh-title" lang="zh">{ring.zhTitle}</p>
                <h3>{ring.title}</h3>
                <p className="zh-copy" lang="zh">{ring.zh}</p>
                <p>{ring.desc}</p>
                <blockquote>“{ring.blessing}”</blockquote>
              </div>
            </article>
          ))}
        </div>
        <div className="pendant-collection-head">
          <div className="section-label">New / Blessing Pendants</div>
          <h2>Carry your blessing<br /><em>close to you.</em></h2>
          <p>Personal symbols of progress, abundance and good fortune, designed to accompany every step of your journey.</p>
        </div>
        <div className="ring-grid pendant-grid">
          {pendants.map((pendant, index) => (
            <article className="ring-card" id={pendant.id} key={pendant.id}>
              <div className="ring-card-image pendant-card-image">
                <img src={pendant.image} alt={pendant.imageAlt} />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="ring-card-copy">
                <p className="ring-zh-title" lang="zh">{pendant.zhTitle}</p>
                <h3>{pendant.title}</h3>
                <p className="zh-copy" lang="zh">{pendant.zh}</p>
                <p>{pendant.desc}</p>
                <blockquote>“{pendant.blessing}”</blockquote>
              </div>
            </article>
          ))}
        </div>
      </section>
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
          </div>
        </section>
      ))}
      <section className="collection-contact section">
        <div><p className="eyebrow">Your personal creation</p><h2>Discover what your<br /><em>numbers reveal.</em></h2><p>Begin with a Numerology consultation and let us create a meaningful piece designed around your individual energy profile.</p></div>
        <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Chat with us on WhatsApp <span>↗</span></a>
      </section>
    </>
  );
}
