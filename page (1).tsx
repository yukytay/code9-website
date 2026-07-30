"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Products", "/products"], ["Contact", "/contact"]];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header className={`${scrolled ? "scrolled" : ""} ${pathname !== "/" ? "inner-header" : ""}`}>
        <nav className={open ? "open" : ""} aria-label="Main navigation">
          {nav.map(([label, href]) => <Link className={pathname === href ? "active" : ""} href={href} key={href}>{label}</Link>)}
          <Link className="nav-cta" href="/contact">Book consultation <span>↗</span></Link>
        </nav>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}><span /><span /></button>
      </header>
      {children}
      <a className="whatsapp" href="https://wa.me/" aria-label="Chat with Code9 on WhatsApp">✦<span>Chat with us</span></a>
    </>
  );
}
