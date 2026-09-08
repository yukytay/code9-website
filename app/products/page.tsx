import type { Metadata } from "next";
import Image from "next/image";
import PhotoRotator from "./photo-rotator";

export const metadata: Metadata = { title: "Numerology Jewellery", description: "Explore DeCode9 Numerology-guided rings, pendants, bracelets and watches, personalized to support your individual energy profile." };

const bracelets = [
  { sku:"DB001", id:"destiny-numbers-bracelet", zhTitle:"数运随行", title:"Destiny Numbers", zh:"数有所寓，运有所随；吉数相连，福运相伴。", desc:"A meaningful sequence of personal numbers, designed to reflect your strengths and accompany your journey with balance and good fortune.", images:["/products/bracelets/DB001-Destiny-Numbers-Final.png","/products/bracelets/DB001-Destiny-Numbers-Final-02.png"] },
  { sku:"DB002", id:"blessing-signature-bracelet", zhTitle:"福运密码", title:"Blessing Signature", zh:"数字有意，福运有迹；戴上属于你的福运密码。", desc:"Your own signature code of meaningful numbers, created to express inner strength, prosperity and auspicious energy.", images:["/products/bracelets/DB002-Blessing-Signature-Final-01.jpeg","/products/bracelets/DB002-Blessing-Signature-Final-02.jpeg","/products/bracelets/DB002-Blessing-Signature-Final-03.jpeg","/products/bracelets/DB002-Blessing-Signature-Final-04.jpeg"] },
  { sku:"DB003", id:"golden-brilliance-bracelet", zhTitle:"金福密码", title:"Golden Brilliance", zh:"金色数字象征财富、丰盛、成就与尊荣。", desc:"The black-and-gold combination represents strength, stability, prosperity and achievement.", images:["/products/bracelets/DB003-Golden-Brilliance-Final-01.jpeg","/products/bracelets/DB003-Golden-Brilliance-Final-02.jpeg"] },
  { sku:"DB004", id:"timeless-prosperity-bracelet", zhTitle:"数运恒昌", title:"Timeless Prosperity", zh:"吉数相连，福运相承；财运亨通，恒久昌盛。", desc:"Symbolizes fortune flowing forward, blessings continuing, and opportunities unfolding.", images:["/products/bracelets/DB004-Timeless-Prosperity-Final-01.jpeg","/products/bracelets/DB004-Timeless-Prosperity-Final-02.jpeg"] },
];

const watches = [
  { sku:"DW001", id:"eclat-28-watch", zhTitle:"璀光 28", title:"Éclat 28", size:"28 mm", zh:"代表璀璨、光芒与自信。数字元素象征个人独特的特质与人生密码；圆形表盘寓意圆满、和谐与循环不息；金银双色象征平衡与丰盛。", desc:"The personalised numbers symbolize individuality and personal strengths, while the circular design represents balance, harmony and continuity. The sparkling details signify brilliance, confidence and achievement.", blessing:"Shine with confidence. Honour your path. Let every moment reveal your brilliance.", images:["/products/watches/dw001-eclat-28-final-01.jpeg","/products/watches/dw001-eclat-28-final-02.jpeg"] },
  { sku:"DW002", id:"celestial-harmony-dw002-watch", zhTitle:"乾坤有序", title:"Celestial Harmony", size:"38 mm", zh:"太极与八卦寓意阴阳协调、万物有序；镂空机械不断运转，则象征时光流转、生生不息、人生持续向前、财气汇聚。乾坤有序，阴阳相和；时光流转，万事和鸣。", desc:"Individual strengths and life direction. The Yin-Yang and Bagua elements represent balance and harmony, while the open-heart mechanical movement symbolizes continuous motion, vitality and progress.", blessing:"Align your numbers. Balance your path. Let prosperity grow with time.", images:["/products/watches/dw002-celestial-harmony-final-01.png","/products/watches/dw002-celestial-harmony-final-02.png"] },
  { sku:"DW003", id:"celestial-harmony-dw003-watch", zhTitle:"乾坤有序", title:"Celestial Harmony", size:"38 mm", zh:"太极与八卦寓意阴阳协调、万物有序；镂空机械不断运转，则象征时光流转、生生不息、人生持续向前、财气汇聚。乾坤有序，阴阳相和；时光流转，万事和鸣。", desc:"Individual strengths and life direction. The Yin-Yang and Bagua elements represent balance and harmony, while the open-heart mechanical movement symbolizes continuous motion, vitality and progress.", blessing:"Align your numbers. Balance your path. Let prosperity grow with time.", images:["/products/watches/dw003-celestial-harmony-final-01.png","/products/watches/dw003-celestial-harmony-final-02.png"] },
  { sku:"DW004", id:"harmony-of-time-watch", zhTitle:"数悦时光", title:"Harmony of Time", size:"36 mm", zh:"寓意数字平衡、阴阳协调、生活顺遂；璀璨表圈象征光芒、圆满与财富循环，亦代表丰盛、成就与财气生辉。提升财运、汇聚财富机遇、贵人相助、事业增长、聚财守财。", desc:"A symbolic timepiece inspired by wealth, balance and continuous growth. Enhanced wealth opportunities, steady financial growth, successful career development and lasting prosperity.", blessing:"Balance your path. Seize opportunities. Let prosperity grow with time.", images:["/products/watches/dw004-harmony-of-time-temporary.jpeg"] },
];

const rings = [
  {
    sku: "DR001",
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
    sku: "DR004",
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
    sku: "DR002",
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
    sku: "DR003",
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

const coupleRingCollection = {
  zhTitle: "玖缘同心 · 数字情侣戒",
  title: "Eternal Harmony Numerology Couple Rings",
  zh: "戒指可根据两人的数字组合，分别配置各自所需的号码。设计上，让彼此的数字形成互补，寓意：补其所缺 · 合其所长 · 两心相合 · 圆满相伴。镶嵌数字不仅是个人专属符号，也象征情侣之间互相补足、互相扶持。两枚戒指成双成对，寓意：数字互补，缘分相合；甜甜蜜蜜，长长久久。",
  desc: "Designed as a pair, each ring can be personalized with the numerology numbers its wearer needs, symbolizing two individuals who complement and strengthen one another. The numbers represent each person’s unique energy, while the matching rings symbolize two hearts in harmony—completing what the other may lack and growing stronger together.",
  symbolism: "Complete Your Numbers · Complement Each Other · Sweet Love · Everlasting Togetherness",
};

const coupleRings = [
  { sku:"DCR001", id:"starlight-promise-couple-ring", zhTitle:"星辰之约", title:"Starlight Promise", image:"/products/couple-rings/DCR001-Starlight-Promise.jpeg" },
  { sku:"DCR002", id:"soul-in-harmony-couple-ring", zhTitle:"同心相伴", title:"Soul in Harmony", image:"/products/couple-rings/DCR002-Soul-in-Harmony.jpeg" },
  { sku:"DCR003", id:"forever-as-one-couple-ring", zhTitle:"一生同心", title:"Forever as One", image:"/products/couple-rings/DCR003-Forever-as-One.jpeg" },
  { sku:"DCR004", id:"radiance-in-harmony-couple-ring", zhTitle:"曜影同心", title:"Radiance in Harmony", image:"/products/couple-rings/DCR004-Radiance-in-Harmony.jpeg" },
  { sku:"DCR005", id:"destined-together-couple-ring", zhTitle:"缘数同行", title:"Destined Together", image:"/products/couple-rings/DCR005-Destined-Together.jpeg" },
  { sku:"DCR006", id:"radiant-togetherness-couple-ring", zhTitle:"金缘相守", title:"Radiant Togetherness", image:"/products/couple-rings/DCR006-Radiant-Togetherness.jpeg" },
  { sku:"DCR007", id:"eternal-promise-couple-ring", zhTitle:"永恒之约", title:"Eternal Promise", image:"/products/couple-rings/DCR007-Eternal-Promise.jpeg" },
];

const pendants = [
  {
    sku: "DP001",
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
    sku: "DP002",
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
                <div className="product-sku">SKU: {ring.sku}</div>
                <p className="ring-zh-title" lang="zh">{ring.zhTitle}</p>
                <h3>{ring.title}</h3>
                <p className="zh-copy" lang="zh">{ring.zh}</p>
                <p>{ring.desc}</p>
                <blockquote>“{ring.blessing}”</blockquote>
              </div>
            </article>
          ))}
        </div>
        <div className="couple-ring-series" id="couple-ring-series">
          <div className="couple-ring-series-head">
            <div className="section-label">Couple Ring Series</div>
            <p className="couple-collection-zh" lang="zh">{coupleRingCollection.zhTitle}</p>
            <h2>{coupleRingCollection.title}</h2>
            <p className="zh-copy couple-collection-description" lang="zh">{coupleRingCollection.zh}</p>
            <p className="couple-collection-description">{coupleRingCollection.desc}</p>
            <blockquote>“{coupleRingCollection.symbolism}”</blockquote>
          </div>
          <div className="ring-grid couple-ring-grid">
            {coupleRings.map((ring, index) => (
              <article className="ring-card couple-ring-card" id={ring.id} key={ring.sku}>
                <div className="ring-card-image couple-ring-image">
                  <Image
                    src={ring.image}
                    alt={`${ring.title} personalized numerology couple rings`}
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                  />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="ring-card-copy couple-ring-copy">
                  <div className="product-sku">SKU: {ring.sku}</div>
                  <p className="ring-zh-title" lang="zh">{ring.zhTitle}</p>
                  <h3>{ring.title}</h3>
                </div>
              </article>
            ))}
          </div>
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
                <div className="product-sku">SKU: {pendant.sku}</div>
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
      <section className="product-catalogue-section section" id="bracelet">
        <div className="pendant-collection-head">
          <div className="section-label">Destiny Bracelets</div>
          <h2>Meaning in every link.<br /><em>Fortune worn daily.</em></h2>
          <p>Personal number bracelets created to express balance, brilliance, prosperity and lasting blessings.</p>
        </div>
        <div className="ring-grid product-gallery-grid">
          {bracelets.map((bracelet, index) => (
            <article className="ring-card bracelet-card" id={bracelet.id} key={bracelet.sku}>
              <PhotoRotator
                images={bracelet.images}
                alt={`${bracelet.title} bracelet`}
                className={`bracelet-photo-rotator count-${bracelet.images.length}`}
                initialDelayMs={index * 1800}
              />
              <div className="ring-card-copy">
                <div className="product-sku">SKU: {bracelet.sku}</div>
                <p className="ring-zh-title" lang="zh">{bracelet.zhTitle}</p>
                <h3>{bracelet.title}</h3>
                <p className="zh-copy" lang="zh">{bracelet.zh}</p>
                <p>{bracelet.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="pendant-collection-head" id="watch">
          <div className="section-label">Destiny Watches</div>
          <h2>Your time, aligned.<br /><em>Your story, revealed.</em></h2>
          <p>Distinctive watches with meaningful numerical details, created around balance, confidence and continuous growth.</p>
        </div>
        <div className="ring-grid product-gallery-grid">
          {watches.map((watch, index) => (
            <article className="ring-card watch-card" id={watch.id} key={watch.sku}>
              <PhotoRotator
                images={watch.images}
                alt={`${watch.title} watch`}
                className={`watch-photo-rotator count-${watch.images.length}`}
                initialDelayMs={index * 1800}
              />
              <div className="ring-card-copy">
                <div className="product-sku">SKU: {watch.sku} · Diameter: {watch.size}</div>
                <p className="ring-zh-title" lang="zh">{watch.zhTitle}</p>
                <h3>{watch.title}</h3>
                <p className="zh-copy" lang="zh">{watch.zh}</p>
                <p>{watch.desc}</p>
                {watch.blessing ? <blockquote>“{watch.blessing}”</blockquote> : null}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="collection-contact section">
        <div><p className="eyebrow">Your personal creation</p><h2>Discover what your<br /><em>numbers reveal.</em></h2><p>Begin with a Numerology consultation and let us create a meaningful piece designed around your individual energy profile.</p></div>
        <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Chat with us on WhatsApp <span>↗</span></a>
      </section>
    </>
  );
}
