/*
 * UNRIG USA — Home Page
 * Design: Bold "THE SYSTEM IS RIGGED" hero, 4 core principle blocks, pipeline to action
 * Colors: Navy, crimson, gold accents
 */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663417942949/KiUG5xHiTpMVK9Gs3TakrN/hero-bg_760e0518.png";

const CORE_PRINCIPLES = [
  {
    num: "I",
    title: "Democratic Structure",
    desc: "Ensure fair representation and breaking the two-party duopoly to give power back to voters.",
    color: "red",
  },
  {
    num: "II",
    title: "Money & Power",
    desc: "Remove the undue influence of dark money and corporate interests from our political system.",
    color: "navy",
  },
  {
    num: "III",
    title: "Executive Accountability",
    desc: "Restore checks and balances to prevent executive overreach and ensure lawful governance.",
    color: "navy",
  },
  {
    num: "IV",
    title: "Judicial Reform",
    desc: "Depoliticize the courts and ensure ethical standards apply to all judges, including the Supreme Court.",
    color: "red",
  },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section
        className="relative"
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#0D1B2A",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,27,42,0.2) 0%, rgba(13,27,42,0.8) 100%)" }} />
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                color: "#F5F0E8",
                lineHeight: 1.1,
                marginBottom: "1rem",
              }}
            >
              THE SYSTEM IS{" "}
              <span style={{ color: "#C41E3A" }}>RIGGED.</span>
            </h1>

            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.125rem",
                color: "#A8BFCC",
                lineHeight: 1.7,
                maxWidth: "600px",
                marginBottom: "2rem",
              }}
            >
              This is the organizer's manual to dismantle corruption. VIII Chapters. 20 Strategic Plays. One Goal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/the-problem"
                className="px-6 py-3 bg-primary text-primary-foreground rounded font-semibold text-base hover:opacity-90 transition-opacity flex items-center gap-2 w-fit"
              >
                I'm Ready to Understand <ArrowRight size={18} />
              </Link>
              <Link
                href="/action"
                className="px-6 py-3 border-2 border-primary text-primary rounded font-semibold text-base hover:bg-primary/10 transition-colors flex items-center gap-2 w-fit"
              >
                I'm Ready to Act <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RED RULE */}
      <div className="h-1 bg-primary" />

      {/* CORE PRINCIPLES GRID */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "4rem 0" }}>
        <div className="container">
          <div className="mb-8">
            <div className="section-label mb-2">Strategic Framework</div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2.5rem",
                fontWeight: 800,
                color: "#0D1B2A",
                marginBottom: "0.5rem",
              }}
            >
              Four Core Principles
            </h2>
            <p style={{ color: "#5A6B7A", fontSize: "1rem", maxWidth: "600px" }}>
              Our structural reform framework is organized around four interconnected principles that address the root causes of corruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CORE_PRINCIPLES.map((principle) => (
              <div
                key={principle.num}
                className="core-principle-box"
                style={{
                  borderColor: principle.color === "red" ? "#C41E3A" : "#0D1B2A",
                  backgroundColor: principle.color === "red" ? "rgba(196,30,58,0.02)" : "rgba(13,27,42,0.02)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: principle.color === "red" ? "#C41E3A" : "#0D1B2A",
                      color: "#F5F0E8",
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 800,
                      fontSize: "1.25rem",
                      borderRadius: "0.25rem",
                    }}
                  >
                    {principle.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "#0D1B2A",
                    }}
                  >
                    {principle.title}
                  </h3>
                </div>
                <p style={{ color: "#5A6B7A", lineHeight: 1.6, fontSize: "0.95rem" }}>
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RED RULE */}
      <div className="h-1 bg-primary" />

      {/* PIPELINE */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "4rem 0" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="section-label mb-3">The Pipeline</div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2rem",
                fontWeight: 800,
                color: "#F5F0E8",
                marginBottom: "2rem",
              }}
            >
              From Recognition to Action
            </h2>

            <div className="space-y-4">
              {[
                { step: "FEEL IT", desc: "You're not imagining it. What you're feeling has a structure — and a name." },
                { step: "NAME IT", desc: "Learn the 12 Leverage Points where intervention is most effective." },
                { step: "FIND YOUR PEOPLE", desc: "Connect with organizers, researchers, and movements already working on this." },
                { step: "ACT TOGETHER", desc: "Implement the 20 Anti-Corruption Safeguards in your district and beyond." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(196,30,58,0.15)",
                      border: "1px solid rgba(196,30,58,0.3)",
                      borderRadius: "0.25rem",
                      flexShrink: 0,
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#C41E3A",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.125rem",
                        fontWeight: 800,
                        color: "#F5F0E8",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {item.step}
                    </div>
                    <p style={{ color: "#A8BFCC", fontSize: "0.95rem", lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "4rem 0" }}>
        <div className="container text-center">
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2rem",
              fontWeight: 800,
              color: "#0D1B2A",
              marginBottom: "1rem",
            }}
          >
            Ready to Unrig America?
          </h2>
          <p style={{ color: "#5A6B7A", fontSize: "1rem", marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
            Start by understanding the system. Then join the movement to change it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/the-problem"
              className="px-6 py-3 bg-primary text-primary-foreground rounded font-semibold text-base hover:opacity-90 transition-opacity flex items-center gap-2 justify-center"
            >
              Learn More <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-primary text-primary rounded font-semibold text-base hover:bg-primary/10 transition-colors flex items-center gap-2 justify-center"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
