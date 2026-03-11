/*
 * UNRIG USA — Layout Component
 * Design: Dark navy header with logo, hamburger nav, full footer with social links
 * Typography: Space Grotesk for nav, Playfair Display for logo text
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663417942949/KiUG5xHiTpMVK9Gs3TakrN/unrig-logo_681ead19.png";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/the-problem", label: "The Problem" },
  { href: "/framework", label: "Why Systems" },
  { href: "/safeguards", label: "The Safeguards" },
  { href: "/recognize", label: "Recognize It" },
  { href: "/action", label: "Take Action" },
  { href: "/research", label: "Research" },
  { href: "/news", label: "News" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  { href: "https://bsky.app/profile/unrigusa.bsky.social", label: "Bluesky", icon: "bsky" },
  { href: "https://www.facebook.com/profile.php?id=61588044752677", label: "Facebook", icon: "fb" },
  { href: "https://www.instagram.com/unrigusa", label: "Instagram", icon: "ig" },
  { href: "https://www.reddit.com/user/UnrigUSA/", label: "Reddit", icon: "reddit" },
  { href: "https://substack.com/@unrigusa", label: "Substack", icon: "substack" },
  { href: "https://www.threads.com/@unrigusa", label: "Threads", icon: "threads" },
  { href: "https://www.tiktok.com/@unrigusa", label: "TikTok", icon: "tiktok" },
  { href: "https://x.com/unrigusa", label: "X (Twitter)", icon: "x" },
  { href: "https://www.youtube.com/@unrigusa", label: "YouTube", icon: "yt" },
];

function SocialIcon({ icon, href, label }: { icon: string; href: string; label: string }) {
  const icons: Record<string, React.ReactElement> = {
    bsky: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.204-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/>
      </svg>
    ),
    fb: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    ig: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    reddit: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
    ),
    substack: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
      </svg>
    ),
    threads: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"/>
      </svg>
    ),
    tiktok: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
    x: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    yt: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="social-icon w-8 h-8 flex items-center justify-center"
    >
      {icons[icon]}
    </a>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0D1B2A" }}>
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(13,27,42,0.97)" : "#0D1B2A",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,255,255,0.04)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 no-underline">
              <img
                src={LOGO_URL}
                alt="Unrig USA"
                className="w-10 h-10 object-contain"
              />
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.125rem", color: "#F5F0E8", lineHeight: 1.1 }}>
                  UNRIG USA
                </div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em", color: "#8FA3B8", textTransform: "uppercase" }}>
                  501(c)(4) Nonpartisan
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.slice(1, 8).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${location === link.href ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary text-sm py-2 px-4">
                Contact
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
              style={{ color: "#F5F0E8" }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileOpen && (
          <div
            className="lg:hidden"
            style={{
              backgroundColor: "#0D1B2A",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              maxHeight: "calc(100vh - 64px)",
              overflowY: "auto",
            }}
          >
            <div className="container py-4">
              {/* Pipeline indicator */}
              <div className="mb-4 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", color: "#8FA3B8", textTransform: "uppercase" }}>
                  Name → Understand → Act
                </div>
              </div>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between py-3 no-underline"
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    color: location === link.href ? "#F5F0E8" : "#A8BFCC",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: location === link.href ? 600 : 400,
                  }}
                >
                  {link.label}
                  <ChevronRight size={14} style={{ color: "#C41E3A" }} />
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <Link href="/action" className="btn-primary w-full text-center block">
                  Take Action
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Page content — push down by header height */}
      <main className="flex-1" style={{ paddingTop: "64px" }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#080F1A", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        {/* Email signup */}
        <div style={{ backgroundColor: "#0D1B2A", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container py-12">
            <div className="max-w-2xl">
              <div className="section-label">Stay Informed</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#F5F0E8", marginBottom: "0.5rem" }}>
                You're not alone anymore.
              </h3>
              <p style={{ color: "#8FA3B8", fontSize: "0.9375rem", marginBottom: "1.5rem" }}>
                Get the 20 Safeguards PDF and the Vocabulary Guide. Watch your inbox.
              </p>
              <FooterEmailSignup />
            </div>
          </div>
        </div>

        {/* Main footer */}
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo + mission */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={LOGO_URL} alt="Unrig USA" className="w-12 h-12 object-contain" />
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.25rem", color: "#F5F0E8" }}>
                    UNRIG USA
                  </div>
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: "#8FA3B8", textTransform: "uppercase" }}>
                    501(c)(4) Nonprofit
                  </div>
                </div>
              </div>
              <p style={{ color: "#8FA3B8", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "360px" }}>
                A nonpartisan structural reform organization. We name the patterns that make corruption possible, propose safeguards that make it structurally difficult, and connect people ready to act.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {SOCIAL_LINKS.map((s) => (
                  <SocialIcon key={s.icon} {...s} />
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <div className="section-label mb-4">Navigate</div>
              <div className="flex flex-col gap-2">
                {[
                  { href: "/about", label: "About" },
                  { href: "/the-problem", label: "The Problem" },
                  { href: "/framework", label: "Why Systems" },
                  { href: "/safeguards", label: "The Safeguards" },
                  { href: "/recognize", label: "Recognize It" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{ color: "#8FA3B8", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.2s" }}
                    className="hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="section-label mb-4">Act</div>
              <div className="flex flex-col gap-2">
                {[
                  { href: "/action", label: "Take Action" },
                  { href: "/research", label: "Research" },
                  { href: "/news", label: "News & Updates" },
                  { href: "/team", label: "Our Team" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{ color: "#8FA3B8", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.2s" }}
                    className="hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem", color: "#8FA3B8", letterSpacing: "0.05em" }}>
              © 2026 Unrig USA. All rights reserved. Unrig USA is a 501(c)(4) nonprofit social welfare organization.
            </div>
            <div className="flex gap-4">
              <Link href="/privacy" style={{ color: "#8FA3B8", fontSize: "0.75rem", textDecoration: "none" }} className="hover:text-white">
                Privacy Policy
              </Link>
              <a href="https://unrigusa.org" style={{ color: "#8FA3B8", fontSize: "0.75rem", textDecoration: "none" }} className="hover:text-white">
                unrigusa.org
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterEmailSignup() {
  const [form, setForm] = useState({ firstName: "", email: "", zip: "", volunteer: false, nationalAction: false });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://n8n.cloudpublica.org/webhook/unrig-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div style={{ backgroundColor: "rgba(212,168,75,0.1)", border: "1px solid rgba(212,168,75,0.3)", padding: "1rem 1.25rem" }}>
        <p style={{ color: "#D4A84B", fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1rem" }}>
          You're in. Watch your inbox for the 20 Safeguards and the Vocabulary Guide. You're not alone anymore.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className="form-label">First Name *</label>
          <input
            type="text"
            required
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            placeholder="First name"
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Email *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="your@email.com"
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Zip Code</label>
          <input
            type="text"
            value={form.zip}
            onChange={(e) => setForm({ ...form, zip: e.target.value })}
            placeholder="Zip code"
            className="form-input"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={form.volunteer}
            onChange={(e) => setForm({ ...form, volunteer: e.target.checked })}
            style={{ accentColor: "#C41E3A" }}
          />
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem", color: "#8FA3B8", letterSpacing: "0.05em" }}>
            I want to volunteer
          </span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={form.nationalAction}
            onChange={(e) => setForm({ ...form, nationalAction: e.target.checked })}
            style={{ accentColor: "#C41E3A" }}
          />
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem", color: "#8FA3B8", letterSpacing: "0.05em" }}>
            Notify me about national coordinated action
          </span>
        </label>
      </div>
      <div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary"
          style={{ opacity: status === "loading" ? 0.7 : 1 }}
        >
          {status === "loading" ? "Sending..." : "Join the Movement →"}
        </button>
        {status === "error" && (
          <p style={{ color: "#C41E3A", fontSize: "0.8rem", marginTop: "0.5rem" }}>
            Something went wrong. Please try again or email us directly.
          </p>
        )}
      </div>
    </form>
  );
}
