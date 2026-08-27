import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Engraved Gifts",
  description: "Explore personalized laser engraved gifts for corporate events, weddings, celebrations and meaningful everyday moments.",
};

const categories = [
  { number: "01", title: "Corporate Gifts", text: "Branded keepsakes, appreciation gifts and event pieces personalized with company logos, names or messages.", note: "Teams · Clients · Events" },
  { number: "02", title: "Wedding Gifts", text: "Thoughtful favours and keepsakes engraved with names, dates and details that make the celebration uniquely yours.", note: "Couples · Guests · Bridal parties" },
  { number: "03", title: "Special Occasions", text: "Personal gifts for birthdays, anniversaries, graduations and milestones, created to preserve the meaning of the moment.", note: "Milestones · Celebrations · Memories" },
  { number: "04", title: "Personal Keepsakes", text: "One-of-a-kind pieces engraved with a name, message, artwork or date for someone important to you.", note: "Names · Messages · Artwork" },
];

const whatsappUrl = "https://wa.me/6588651341?text=Hello%20DeCode9%2C%20I%27d%20like%20to%20enquire%20about%20a%20personalized%20laser%20engraving%20gift.";

export default function Engraving() {
  return (
    <>
      <section className="page-hero engraving-page-hero">
        <p className="eyebrow">Personalized Laser Engraving<span className="zh-line" lang="zh">专属激光雕刻礼品</span></p>
        <h1>Made personal.<br /><em>Made memorable.</em></h1>
        <p>Meaningful gifts for companies, weddings and special occasions—engraved with the details that turn an object into a lasting memory.</p>
        <p className="zh-copy light-zh" lang="zh">为企业、婚礼与特别时刻打造专属雕刻礼品，以名字、日期、祝福语、图案或企业标志，留下值得珍藏的记忆。</p>
      </section>

      <section className="engraving-intro section">
        <div>
          <div className="section-label">The DeCode9 Gifting Studio</div>
          <h2>For every person,<br /><em>place and occasion.</em></h2>
        </div>
        <div>
          <p>Laser engraving is a dedicated part of DeCode9, serving personal celebrations, weddings and corporate gifting. It has its own growing catalogue and does not require a Numerology consultation. Choose an item, share your personalization idea and we’ll guide you through the available materials, design and quantity options.</p>
          <p className="zh-copy" lang="zh">激光雕刻是 DeCode9 的专属礼品业务，为个人庆典、婚礼与企业赠礼服务，并拥有独立扩展的产品系列，无需数字命理咨询。选择心仪的产品并告诉我们你的雕刻构想，我们会协助确认材质、设计与数量。</p>
        </div>
      </section>

      <section className="engraving-catalogue section">
        <div className="engraving-catalogue-head">
          <div className="section-label light">Browse by occasion</div>
          <h2>A growing collection of<br /><em>personal possibilities.</em></h2>
        </div>
        <div className="engraving-category-grid">
          {categories.map((category) => (
            <article className="engraving-category" key={category.number}>
              <span className="engraving-category-number">{category.number}</span>
              <div>
                <h3>{category.title}</h3>
                <p>{category.text}</p>
                <small>{category.note}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="engraving-process section">
        <div className="section-label">How it works</div>
        <div className="engraving-steps">
          <div><span>01</span><h3>Choose</h3><p>Select a gift or tell us what you have in mind.</p></div>
          <div><span>02</span><h3>Personalize</h3><p>Share the name, date, message, artwork or logo.</p></div>
          <div><span>03</span><h3>Confirm</h3><p>Review the design, quantity, quotation and timing.</p></div>
          <div><span>04</span><h3>Create</h3><p>Your gifts are engraved and prepared with care.</p></div>
        </div>
      </section>

      <section className="collection-contact section">
        <div><p className="eyebrow">Personal orders and bulk enquiries</p><h2>What would you like<br /><em>to make memorable?</em></h2><p>Tell us the occasion, preferred quantity and personalization idea. We’ll help you plan the details.</p></div>
        <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Enquire on WhatsApp <span>↗</span></a>
      </section>
    </>
  );
}
