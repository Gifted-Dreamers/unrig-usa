/*
 * UNRIG USA — Contact Page
 * n8n webhook: https://n8n.cloudpublica.org/webhook/unrig-contact
 * Email signup: https://n8n.cloudpublica.org/webhook/unrig-signup
 */

import { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const CONTACT_WEBHOOK = "https://n8n.cloudpublica.org/webhook/unrig-contact";
const SIGNUP_WEBHOOK = "https://n8n.cloudpublica.org/webhook/unrig-signup";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [contactState, setContactState] = useState<FormState>("idle");
  const [signupState, setSignupState] = useState<FormState>("idle");
  const [contactData, setContactData] = useState({ name: "", email: "", subject: "", message: "" });
  const [signupEmail, setSignupEmail] = useState("");

  const handleContact = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactState("submitting");
    try {
      const res = await fetch(CONTACT_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...contactData, source: "unrigusa.org/contact", timestamp: new Date().toISOString() }),
      });
      if (res.ok || res.status === 200) {
        setContactState("success");
        setContactData({ name: "", email: "", subject: "", message: "" });
      } else {
        setContactState("error");
      }
    } catch {
      setContactState("error");
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupState("submitting");
    try {
      const res = await fetch(SIGNUP_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: signupEmail, source: "unrigusa.org/contact", timestamp: new Date().toISOString() }),
      });
      if (res.ok || res.status === 200) {
        setSignupState("success");
        setSignupEmail("");
      } else {
        setSignupState("error");
      }
    } catch {
      setSignupState("error");
    }
  };

  const inputStyle = {
    width: "100%",
    backgroundColor: "#0D1B2A",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#F5F0E8",
    padding: "0.75rem 1rem",
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "0.9375rem",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: "0.65rem",
    color: "#8FA3B8",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    display: "block",
    marginBottom: "0.375rem",
  };

  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "5rem 0 4rem" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="section-label">Contact</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F5F0E8", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Get in Touch
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#A8BFCC", lineHeight: 1.75, maxWidth: "600px" }}>
              Whether you want to volunteer, partner, press inquire, or just say you're with us — we want to hear from you.
            </p>
          </div>
        </div>
      </section>

      <div className="red-rule" />

      <section style={{ backgroundColor: "#0D1B2A", padding: "4rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="contact-grid">

            {/* Contact Form */}
            <div>
              <div className="section-label mb-2">Send a Message</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#F5F0E8", marginBottom: "1.5rem" }}>
                Contact Form
              </h2>

              {contactState === "success" ? (
                <div style={{ backgroundColor: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", textAlign: "center" }}>
                  <CheckCircle size={32} style={{ color: "#22c55e" }} />
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#F5F0E8", marginBottom: "0.5rem" }}>
                      Message Received
                    </div>
                    <p style={{ color: "#8FA3B8", fontSize: "0.875rem" }}>
                      Thank you for reaching out. We'll be in touch soon.
                    </p>
                  </div>
                  <button
                    onClick={() => setContactState("idle")}
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.8rem", color: "#D4A84B", background: "none", border: "1px solid rgba(212,168,75,0.3)", padding: "0.375rem 0.75rem", cursor: "pointer" }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContact} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={labelStyle}>Name *</label>
                      <input
                        required
                        type="text"
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        placeholder="Your name"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input
                        required
                        type="email"
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        placeholder="your@email.com"
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Subject</label>
                    <input
                      type="text"
                      value={contactData.subject}
                      onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                      placeholder="What is this about?"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Message *</label>
                    <textarea
                      required
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      placeholder="Tell us what's on your mind..."
                      rows={6}
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </div>

                  {contactState === "error" && (
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#f87171", fontSize: "0.875rem" }}>
                      <AlertCircle size={16} />
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={contactState === "submitting"}
                    className="btn-primary flex items-center gap-2 justify-center"
                    style={{ opacity: contactState === "submitting" ? 0.7 : 1 }}
                  >
                    {contactState === "submitting" ? (
                      <><Loader2 size={16} className="animate-spin" /> Sending...</>
                    ) : (
                      <>Send Message <ArrowRight size={16} /></>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {/* Email Signup */}
              <div style={{ backgroundColor: "#162236", border: "1px solid rgba(255,255,255,0.06)", borderTop: "2px solid #C41E3A", padding: "1.5rem" }}>
                <div className="section-label mb-2">Stay Informed</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", color: "#F5F0E8", marginBottom: "0.75rem" }}>
                  Join the Email List
                </h3>
                <p style={{ color: "#8FA3B8", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                  Analysis, action alerts, and updates. No spam. Unsubscribe anytime.
                </p>

                {signupState === "success" ? (
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#22c55e", fontSize: "0.875rem" }}>
                    <CheckCircle size={20} />
                    <span>You're on the list. Thank you.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSignup} style={{ display: "flex", gap: "0.5rem" }}>
                    <input
                      required
                      type="email"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      placeholder="your@email.com"
                      style={{ ...inputStyle, flex: 1 }}
                    />
                    <button
                      type="submit"
                      disabled={signupState === "submitting"}
                      className="btn-primary"
                      style={{ whiteSpace: "nowrap", padding: "0.75rem 1rem" }}
                    >
                      {signupState === "submitting" ? <Loader2 size={16} className="animate-spin" /> : "Join"}
                    </button>
                  </form>
                )}
              </div>

              {/* Ways to Connect */}
              <div style={{ backgroundColor: "#162236", border: "1px solid rgba(255,255,255,0.06)", padding: "1.5rem" }}>
                <div className="section-label mb-3">Ways to Connect</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {[
                    { label: "General Inquiries", value: "info@unrigusa.org" },
                    { label: "Press & Media", value: "press@unrigusa.org" },
                    { label: "Partnerships", value: "partners@unrigusa.org" },
                    { label: "Volunteer", value: "volunteer@unrigusa.org" },
                  ].map((item) => (
                    <div key={item.label} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", paddingBottom: "0.75rem" }}>
                      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "#8FA3B8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.2rem" }}>
                        {item.label}
                      </div>
                      <a
                        href={`mailto:${item.value}`}
                        style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#D4A84B", fontSize: "0.875rem", textDecoration: "none" }}
                      >
                        {item.value}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div style={{ backgroundColor: "#162236", border: "1px solid rgba(255,255,255,0.06)", padding: "1.5rem" }}>
                <div className="section-label mb-3">Follow Us</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Substack", href: "https://substack.com/@unrigusa" },
                    { label: "YouTube", href: "https://www.youtube.com/@unrigusa" },
                    { label: "TikTok", href: "https://www.tiktok.com/@unrigusa" },
                    { label: "Instagram", href: "https://www.instagram.com/unrigusa" },
                    { label: "X", href: "https://x.com/unrigusa" },
                    { label: "Bluesky", href: "https://bsky.app/profile/unrigusa.bsky.social" },
                    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61588044752677" },
                    { label: "Threads", href: "https://www.threads.com/@unrigusa" },
                    { label: "Reddit", href: "https://www.reddit.com/user/UnrigUSA/" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 500,
                        fontSize: "0.75rem",
                        color: "#A8BFCC",
                        textDecoration: "none",
                        border: "1px solid rgba(255,255,255,0.1)",
                        padding: "0.25rem 0.625rem",
                        transition: "all 0.2s",
                      }}
                      className="hover:border-amber-700 hover:text-amber-400"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
