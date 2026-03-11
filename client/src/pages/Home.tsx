/*
 * UNRIG USA — Home Page
 * Design: "Civic Intelligence" — Dark navy, constitutional document hero background
 * Pipeline: Feel it → Name it → Search it → Find your people → Act together
 */

import { Link } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663417942949/KiUG5xHiTpMVK9Gs3TakrN/hero-bg_760e0518.png";
const ACTION_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663417942949/KiUG5xHiTpMVK9Gs3TakrN/hero-bg_760e0518.png";

const FEELING_CARDS = [
  {
    felt: '"I can\'t afford anything and nobody cares."',
    name: "Parameter Failure",
    code: "LP12",
    body: "You stop blaming yourself. You find the economists and organizers who've studied this for decades.",
    hope: "The numbers were set against you. The structure that produces them can be changed.",
  },
  {
    felt: '"The courts can\'t stop this."',
    name: "Feedback Loop Failure",
    code: "LP8",
    body: "You stop waiting for institutions to self-correct. You find the movements building new accountability mechanisms.",
    hope: "When official feedback loops fail, people build new ones. They're being built right now.",
  },
  {
    felt: '"I can\'t tell what\'s real anymore."',
    name: "Information Capture",
    code: "LP6",
    body: "You stop arguing about individual headlines. You start asking who controls the information flow.",
    hope: "The information flow can be reopened. When it is, the system corrects itself.",
  },
];

const SAFEGUARD_CATEGORIES = [
  { num: "I", title: "Democratic Structure & Electoral Integrity", tagline: "Changes who gets to participate." },
  { num: "II", title: "Money, Corruption & Power", tagline: "Changes who gets heard." },
  { num: "III", title: "Accountability & Oversight", tagline: "Changes who faces consequences." },
  { num: "IV", title: "Free & Independent Information", tagline: "Changes what you're allowed to know." },
  { num: "V", title: "Budget & Spending Reform", tagline: "Changes how money flows." },
  { num: "VI", title: "Human Rights & Rule of Law", tagline: "Changes what standards apply." },
  { num: "VII", title: "Economic Justice", tagline: "Changes who benefits." },
  { num: "VIII", title: "End Profit from Incarceration", tagline: "Changes who profits from suffering." },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section
        className="hero-section relative"
        style={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.55,
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,27,42,0.3) 0%, rgba(13,27,42,0.7) 60%, rgba(13,27,42,1) 100%)" }} />
        <div className="container relative z-10 py-24">
          <div className="max-w-3xl">
            {/* Pipeline indicator */}
            <div className="flex items-center gap-2 mb-6 animate-fade-up">
              {["Feel it", "Name it", "Find your people", "Act together"].map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  {i > 0 && <span style={{ color: "#C41E3A", fontSize: "0.75rem" }}>→</span>}
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: "#8FA3B8", textTransform: "uppercase" }}>
                    {step}
                  </span>
                </span>
              ))}
            </div>

            <h1
              className="animate-fade-up animate-fade-up-delay-1"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                color: "#F5F0E8",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              Democracy Has Guardrails.
              <br />
              <span style={{ color: "#C41E3A" }}>We Enforce Them.</span>
            </h1>

            <p
              className="animate-fade-up animate-fade-up-delay-2"
              style={{
                fontSize: "1.125rem",
                color: "#C8C0B4",
                lineHeight: 1.75,
                maxWidth: "600px",
                marginBottom: "2rem",
              }}
            >
              You're not imagining it. What you're feeling has a structure — and a name. Unrig USA is a nonpartisan structural reform organization. We name the patterns that make corruption possible, propose the safeguards that make it structurally difficult, and connect the people who are ready to do something about it.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up animate-fade-up-delay-3">
              <Link href="/the-problem" className="btn-primary flex items-center gap-2">
                I'm Ready to Understand <ArrowRight size={16} />
              </Link>
              <Link href="/action" className="btn-outline flex items-center gap-2">
                I'm Ready to Act <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NAME WHAT YOU FEEL */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "5rem 0" }}>
        <div className="container">
          <div className="max-w-2xl mb-12">
            <div className="section-label">The On-Ramp</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "#F5F0E8", marginBottom: "1rem" }}>
              It's 2am. You can't sleep. Something is deeply wrong and you can't name it.
            </h2>
            <p style={{ color: "#A8BFCC", lineHeight: 1.75 }}>
              You've tried to explain it to people you love. The words come out wrong, or not at all. Here's what's happening:{" "}
              <strong style={{ color: "#F5F0E8" }}>what you're feeling has a structural source, and there are words for it.</strong>{" "}
              When you have the word, you have a search term. When you have a search term, you find the research. When you find the research, you find the people. And when you find the people, you're not alone anymore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {FEELING_CARDS.map((card) => (
              <div key={card.name} className="feeling-card">
                <p className="felt-quote">"{card.felt.replace(/^"|"$/g, '')}"</p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="structural-name">{card.name}</span>
                  <span className="lp-badge">{card.code}</span>
                </div>
                <p style={{ color: "#A8BFCC", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "0.75rem" }}>
                  {card.body}
                </p>
                <div className="hope-line">
                  {card.hope}
                </div>
              </div>
            ))}
          </div>

          <p style={{ color: "#8FA3B8", fontSize: "0.9375rem", fontStyle: "italic", marginBottom: "1.5rem" }}>
            Every structural failure has a name. Every name is a search term. Every search term leads to a community that's already working on it. That's not hope as wishful thinking. That's hope as infrastructure.
          </p>

          <Link href="/the-problem" className="btn-outline flex items-center gap-2 w-fit">
            See the Full Pattern <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* RED RULE */}
      <div className="red-rule" />

      {/* 20 SAFEGUARDS */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "5rem 0" }}>
        <div className="container">
          <div className="max-w-2xl mb-12">
            <div className="section-label">The Platform</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "#F5F0E8", marginBottom: "1rem" }}>
              Not wishes. Architecture.
            </h2>
            <p style={{ color: "#A8BFCC", lineHeight: 1.75 }}>
              Most reform organizations argue about what the numbers should be — minimum wage, tax rates, spending levels. Unrig asks a different question:{" "}
              <em>why does the system keep producing bad numbers?</em>{" "}
              And then we change the structure that produces them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {SAFEGUARD_CATEGORIES.map((cat) => (
              <Link
                key={cat.num}
                href="/safeguards"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    backgroundColor: "#162236",
                    border: "1px solid rgba(255,255,255,0.06)",
                    padding: "1.25rem",
                    height: "100%",
                    transition: "border-color 0.2s, transform 0.2s",
                    cursor: "pointer",
                  }}
                  className="hover:border-red-700 group"
                >
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#C41E3A", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                    SAFEGUARD {cat.num}
                  </div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.875rem", color: "#F5F0E8", marginBottom: "0.5rem", lineHeight: 1.4 }}>
                    {cat.title}
                  </div>
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem", color: "#D4A84B", letterSpacing: "0.05em" }}>
                    {cat.tagline}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link href="/safeguards" className="btn-primary flex items-center gap-2 w-fit">
            Read the Full Platform <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* DECLARATION QUOTE */}
      <section style={{ backgroundColor: "#080F1A", padding: "5rem 0" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="red-rule-thick mx-auto mb-8" />
            <blockquote
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                color: "#C8C0B4",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              "But when a long train of abuses and usurpations, pursuing invariably the same Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty, to throw off such Government, and to provide new Guards for their future security."
            </blockquote>
            <cite style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", color: "#8FA3B8", textTransform: "uppercase", fontStyle: "normal" }}>
              — Declaration of Independence
            </cite>
            <div className="red-rule-thick mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* YOU'RE NOT ALONE */}
      <section
        style={{
          position: "relative",
          padding: "5rem 0",
          overflow: "hidden",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${ACTION_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25,
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(13,27,42,0.95) 0%, rgba(13,27,42,0.7) 100%)" }} />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="section-label">The Connection</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "#F5F0E8", marginBottom: "1rem" }}>
              The system depends on your isolation. Break it.
            </h2>
            <p style={{ color: "#A8BFCC", lineHeight: 1.75, marginBottom: "1rem" }}>
              The most effective tool of control isn't surveillance or censorship. It's loneliness — the manufactured conviction that you are the only one who sees what's happening. That nobody else is awake at 2am. That nobody else cares.
            </p>
            <p style={{ color: "#A8BFCC", lineHeight: 1.75, marginBottom: "2rem" }}>
              That conviction is wrong. And we can prove it. Every movement that ever changed anything started with the same thing: two people discovering they shared a problem, and deciding to do something about it together. Not a manifesto. Not a platform. Two people. And then three. And then a room.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/action" className="btn-primary flex items-center gap-2">
                Find Your People <ArrowRight size={16} />
              </Link>
              <a
                href="https://x.com/unrigusa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2"
              >
                Follow Us <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PIPELINE FOOTER */}
      <section style={{ backgroundColor: "#080F1A", padding: "3rem 0", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["Felt sense", "Name", "Search term", "Research trail", "Community", "Action"].map((step, i) => (
              <span key={step} className="flex items-center gap-3">
                {i > 0 && <span style={{ color: "#C41E3A" }}>→</span>}
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", color: "#8FA3B8", textTransform: "uppercase" }}>
                  {step}
                </span>
              </span>
            ))}
          </div>
          <p style={{ textAlign: "center", color: "#8FA3B8", fontSize: "0.8rem", marginTop: "0.75rem", fontStyle: "italic" }}>
            That pipeline is this entire website. Every page is a stage in it.
          </p>
        </div>
      </section>
    </div>
  );
}
