/*
 * UNRIG USA — News Page
 */

import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const FEATURED_ARTICLES = [
  {
    source: "The Atlantic",
    title: "The Corruption That's Hiding in Plain Sight",
    date: "2024",
    desc: "An examination of how legal corruption — the kind that doesn't require bribery or backroom deals — has become the structural default of American governance.",
    href: "https://www.theatlantic.com",
    tag: "Structural Corruption",
  },
  {
    source: "ProPublica",
    title: "How the Supreme Court Invented Qualified Immunity",
    date: "2020",
    desc: "An investigation into the judicially created doctrine that shields government officials from civil liability — and the cases it has buried.",
    href: "https://www.propublica.org",
    tag: "Accountability",
  },
  {
    source: "The New Yorker",
    title: "Dark Money and the Reshaping of American Politics",
    date: "2023",
    desc: "How anonymous political spending has become the primary mechanism by which billionaires shape policy without accountability.",
    href: "https://www.newyorker.com",
    tag: "Campaign Finance",
  },
  {
    source: "Vox",
    title: "Gerrymandering Is Worse Than You Think",
    date: "2022",
    desc: "A data-driven examination of how partisan redistricting has made the majority of congressional seats structurally uncompetitive.",
    href: "https://www.vox.com",
    tag: "Electoral Reform",
  },
  {
    source: "The Guardian",
    title: "The Revolving Door Between Government and Industry",
    date: "2023",
    desc: "How the movement of officials between government and the industries they regulate has become the primary mechanism of regulatory capture.",
    href: "https://www.theguardian.com",
    tag: "Revolving Door",
  },
  {
    source: "Washington Post",
    title: "The Inspector General System Is Broken",
    date: "2024",
    desc: "An investigation into how the gutting of federal Inspectors General has eliminated the primary internal accountability mechanism of the executive branch.",
    href: "https://www.washingtonpost.com",
    tag: "Oversight",
  },
];

const SUBSTACK_POSTS = [
  {
    title: "Why Voting Isn't Enough (And What Is)",
    date: "March 2026",
    desc: "A structural analysis of why electoral participation, while necessary, is insufficient for the scale of reform required — and what the evidence says about what actually works.",
    href: "https://substack.com/@unrigusa",
  },
  {
    title: "The BITE Model at the National Level",
    date: "February 2026",
    desc: "Applying Steven Hassan's framework for coercive control to the current political moment — and what it means for how we understand and respond to what is happening.",
    href: "https://substack.com/@unrigusa",
  },
  {
    title: "Leverage Points: Where Change Actually Compounds",
    date: "January 2026",
    desc: "An introduction to Donella Meadows' framework for understanding where to intervene in complex systems — and why most reform efforts target the wrong leverage points.",
    href: "https://substack.com/@unrigusa",
  },
];

const TAG_COLORS: Record<string, string> = {
  "Structural Corruption": "#C41E3A",
  "Accountability": "#D4A84B",
  "Campaign Finance": "#8FA3B8",
  "Electoral Reform": "#A8BFCC",
  "Revolving Door": "#C41E3A",
  "Oversight": "#D4A84B",
};

export default function News() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "5rem 0 4rem" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="section-label">News & Analysis</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F5F0E8", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              The Record
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#A8BFCC", lineHeight: 1.75, maxWidth: "600px" }}>
              Curated journalism, original analysis, and the documented evidence of structural failure. This is not opinion. This is the record.
            </p>
          </div>
        </div>
      </section>

      <div className="red-rule" />

      {/* Substack */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "4rem 0" }}>
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="section-label mb-1">From Our Substack</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#F5F0E8" }}>
                Unrig USA Analysis
              </h2>
            </div>
            <a
              href="https://substack.com/@unrigusa"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.8rem", color: "#D4A84B", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.25rem", border: "1px solid rgba(212,168,75,0.3)", padding: "0.375rem 0.75rem" }}
            >
              View All <ExternalLink size={12} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SUBSTACK_POSTS.map((post) => (
              <a
                key={post.title}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#162236",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderTop: "2px solid #C41E3A",
                  padding: "1.5rem",
                  textDecoration: "none",
                  display: "block",
                  transition: "transform 0.2s, border-color 0.2s",
                }}
                className="hover:border-red-700 group"
              >
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#8FA3B8", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>
                  {post.date}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.0625rem", color: "#F5F0E8", lineHeight: 1.35, marginBottom: "0.75rem" }}>
                  {post.title}
                </h3>
                <p style={{ color: "#8FA3B8", fontSize: "0.8rem", lineHeight: 1.6 }}>
                  {post.desc}
                </p>
                <div style={{ marginTop: "1rem", color: "#D4A84B", fontSize: "0.8rem", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.25rem" }}>
                  Read on Substack <ArrowRight size={12} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Coverage */}
      <section style={{ backgroundColor: "#080F1A", padding: "4rem 0" }}>
        <div className="container">
          <div className="section-label mb-2">Curated Journalism</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#F5F0E8", marginBottom: "0.75rem" }}>
            Essential Reading
          </h2>
          <p style={{ color: "#8FA3B8", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "2rem", maxWidth: "600px" }}>
            These are the investigations, analyses, and reports that document the structural failures Unrig USA exists to address. We curate, not aggregate — every piece here is worth your time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FEATURED_ARTICLES.map((article) => (
              <a
                key={article.title}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#162236",
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "1.25rem 1.5rem",
                  textDecoration: "none",
                  display: "block",
                  transition: "border-color 0.2s",
                }}
                className="hover:border-amber-700"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#8FA3B8", letterSpacing: "0.05em" }}>
                      {article.source} · {article.date}
                    </span>
                    <span style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.08em",
                      color: TAG_COLORS[article.tag] || "#8FA3B8",
                      backgroundColor: `${TAG_COLORS[article.tag]}15` || "rgba(255,255,255,0.05)",
                      border: `1px solid ${TAG_COLORS[article.tag]}30` || "rgba(255,255,255,0.1)",
                      padding: "0.1rem 0.4rem",
                      textTransform: "uppercase",
                    }}>
                      {article.tag}
                    </span>
                  </div>
                  <ExternalLink size={13} style={{ color: "#8FA3B8", flexShrink: 0 }} />
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "#F5F0E8", fontSize: "0.9375rem", lineHeight: 1.35, marginBottom: "0.5rem" }}>
                  {article.title}
                </h3>
                <p style={{ color: "#8FA3B8", fontSize: "0.8rem", lineHeight: 1.6 }}>
                  {article.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "4rem 0", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="container">
          <div className="max-w-2xl">
            <div className="section-label mb-2">Follow the Work</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#F5F0E8", marginBottom: "1rem" }}>
              Stay Connected
            </h2>
            <p style={{ color: "#A8BFCC", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              We publish analysis, updates, and action alerts across all major platforms. Find us where you are.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Substack", href: "https://substack.com/@unrigusa" },
                { label: "YouTube", href: "https://www.youtube.com/@unrigusa" },
                { label: "TikTok", href: "https://www.tiktok.com/@unrigusa" },
                { label: "Instagram", href: "https://www.instagram.com/unrigusa" },
                { label: "X / Twitter", href: "https://x.com/unrigusa" },
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
                    fontSize: "0.8rem",
                    color: "#A8BFCC",
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "0.375rem 0.75rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  className="hover:border-amber-700 hover:text-amber-400"
                >
                  {s.label} <ExternalLink size={11} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
