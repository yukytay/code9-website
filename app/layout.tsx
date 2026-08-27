import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import "./globals.css";
import { SiteChrome } from "./site-chrome";

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") ?? incoming.get("host") ?? "localhost:3000";
  const protocol = incoming.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "DeCode9 | Decode Your Destiny";
  const description = "Personalized Numerology consultations, customized destiny bracelets, personalized watches and laser engraved gifts.";
  return {
    metadataBase: new URL(origin),
    title: { default: title, template: "%s | DeCode9" },
    description,
    icons: { icon: "/code9-logo.png", shortcut: "/code9-logo.png" },
    openGraph: { title, description, type: "website", url: origin, images: [{ url: "https://code9-destiny.yukytay.chatgpt.site/og.png", width: 655, height: 495, alt: "DeCode9 — Decode Your Destiny" }] },
    twitter: { card: "summary_large_image", title, description, images: ["https://code9-destiny.yukytay.chatgpt.site/og.png"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteChrome>
          <main>{children}</main>
          <footer>
            <div className="footer-top">
              <Link href="/" className="brand footer-brand" aria-label="DeCode9 home">
                <img className="footer-mark" src="/heart9-transparent.png" alt="" />
                <span className="footer-wordmark"><strong>DeCode<span>9</span></strong><small>Decode Your Destiny</small></span>
              </Link>
              <div><h4>Explore</h4><Link href="/about">Our Story</Link><Link href="/services">Consultation</Link><Link href="/products">Jewellery</Link><Link href="/engraving">Engraved Gifts</Link><Link href="/contact">Contact</Link></div>
              <div><h4>Collections</h4><Link href="/products#bracelet">Destiny Bracelet</Link><Link href="/products#watch">Destiny Watch</Link><Link href="/products#silver-bamboo-blessing-ring">Blessing Rings</Link><Link href="/products#fortune-bamboo-pendant">Blessing Pendants</Link></div>
              <div><h4>Connect</h4><a href="mailto:info.decode9@gmail.com">info.decode9@gmail.com</a><a href="https://wa.me/6588651341?text=Hello%20DeCode9%2C%20I%27d%20like%20to%20make%20an%20enquiry." target="_blank" rel="noreferrer">WhatsApp · +65 8865 1341</a><span>Instagram · Facebook</span><span>Mon–Sat · 10am–7pm</span></div>
            </div>
            <div className="footer-bottom"><span>© 2026 DeCode9. All rights reserved.</span><span>Singapore · Crafted with intention</span></div>
          </footer>
        </SiteChrome>
      </body>
    </html>
  );
}
