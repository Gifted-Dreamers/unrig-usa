/*
 * UNRIG USA — About Page
 * "Not Left. Not Right. Structural."
 */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "5rem 0 4rem" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="section-label">About Unrig USA</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F5F0E8", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Not Left. Not Right.{" "}
              <span style={{ color: "#C41E3A" }}>Structural.</span>
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#A8BFCC", lineHeight: 1.75, maxWidth: "600px" }}>
              Unrig USA exists because the American system of self-governance has a design flaw — and design flaws require design solutions.
            </p>
          </div>
        </div>
      </section>

      <div className="red-rule" />

      {/* Who We Are */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "4rem 0" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-label">Who We Are</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#F5F0E8", marginBottom: "1.25rem" }}>
                A 501(c)(4) nonpartisan social welfare organization.
              </h2>
              <p style={{ color: "#A8BFCC", lineHeight: 1.75, marginBottom: "1rem" }}>
                Unrig USA is a 501(c)(4) nonpartisan social welfare organization. We don't endorse candidates. We don't take sides in partisan debates. We take sides against corruption itself — the structural conditions that make corruption possible regardless of which party holds power.
              </p>
              <p style={{ color: "#A8BFCC", lineHeight: 1.75 }}>
                We were founded by Americans who recognized that the same abuses keep repeating — not because the wrong people are in charge, but because the structure of governance incentivizes abuse and lacks the mechanisms to stop it.
              </p>
            </div>
            <div style={{ backgroundColor: "#162236", border: "1px solid rgba(255,255,255,0.06)", padding: "2rem" }}>
              <div className="section-label mb-4">What We're Not</div>
              {[
                { label: "Not partisan.", desc: "Authoritarian control is not a left-right phenomenon. It is a structural pattern." },
                { label: "Not anti-government.", desc: "Pro-governance that functions as designed, with enforceable limits." },
                { label: "Not conspiracy theorists.", desc: "Every structural failure we name is documented. Every safeguard is grounded in existing law, constitutional precedent, or peer-reviewed research." },
                { label: "Structurally curious.", desc: "We ask why the system produces these outcomes before we argue about what the outcomes should be." },
              ].map((item) => (
                <div key={item.label} style={{ marginBottom: "1.25rem", paddingBottom: "1.25rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "#F5F0E8", marginBottom: "0.25rem" }}>
                    {item.label}
                  </div>
                  <div style={{ color: "#8FA3B8", fontSize: "0.875rem", lineHeight: 1.65 }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section style={{ backgroundColor: "#080F1A", padding: "4rem 0" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="section-label">What Makes Us Different</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#F5F0E8", marginBottom: "1.25rem" }}>
              We think in systems, not symptoms.
            </h2>
            <p style={{ color: "#A8BFCC", lineHeight: 1.75, marginBottom: "1rem" }}>
              Most civic organizations fight at the level of individual policies — arguing about what the numbers should be within a system designed to produce bad numbers. That's like adjusting the thermostat in a building with no insulation.
            </p>
            <p style={{ color: "#A8BFCC", lineHeight: 1.75, marginBottom: "1rem" }}>
              Unrig operates differently. Our 20 Safeguards target the structural levels where change actually compounds — the rules, the information flows, the feedback loops, and the goals of the system. We don't just propose policy. We name the structural pattern that makes all the individual abuses possible, and we intervene where the leverage is highest.
            </p>
            <p style={{ color: "#A8BFCC", lineHeight: 1.75 }}>
              And we do something else most organizations don't: we give you the vocabulary to see it for yourself. Because you can't fight what you can't name — and naming is the first step to finding your people.
            </p>
          </div>
        </div>
      </section>

      {/* Three Layers */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "4rem 0" }}>
        <div className="container">
          <div className="section-label">Our Approach</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#F5F0E8", marginBottom: "0.5rem" }}>
            Three Layers, One Fight
          </h2>
          <p style={{ color: "#8FA3B8", marginBottom: "2.5rem", fontStyle: "italic" }}>
            Institutional reform. Structural literacy. Personal defense.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                num: "01",
                title: "Institutional Safeguards",
                desc: "20 structural reforms that change the rules, incentives, and accountability mechanisms of governance.",
                link: "/safeguards",
                linkLabel: "Read the Safeguards",
              },
              {
                num: "02",
                title: "Structural Literacy",
                desc: "The vocabulary and frameworks that let citizens understand why the system produces the outcomes it does. You can't fight what you can't name.",
                link: "/the-problem",
                linkLabel: "Understand the Problem",
              },
              {
                num: "03",
                title: "Personal & Community Defense",
                desc: "Tools to recognize authoritarian control patterns, protect yourself and your community, and connect with others who see what you see.",
                link: "/recognize",
                linkLabel: "Recognize It",
              },
            ].map((layer) => (
              <div
                key={layer.num}
                style={{
                  backgroundColor: "#162236",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderTop: "3px solid #C41E3A",
                  padding: "1.75rem",
                }}
              >
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "2rem", color: "rgba(196,30,58,0.2)", fontWeight: 700, marginBottom: "0.75rem" }}>
                  {layer.num}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", color: "#F5F0E8", marginBottom: "0.75rem" }}>
                  {layer.title}
                </h3>
                <p style={{ color: "#8FA3B8", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                  {layer.desc}
                </p>
                <Link href={layer.link} style={{ color: "#D4A84B", fontSize: "0.8rem", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                  {layer.linkLabel} <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>

          <p style={{ color: "#8FA3B8", fontSize: "0.875rem", marginTop: "1.5rem", fontStyle: "italic" }}>
            Most organizations work at only one level. All three, together, is how you change a paradigm.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#080F1A", padding: "4rem 0", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#F5F0E8", marginBottom: "0.5rem" }}>
                Ready to meet the people behind this?
              </h3>
              <p style={{ color: "#8FA3B8", fontSize: "0.9375rem" }}>
                Americans committed to structural accountability — not partisan advantage.
              </p>
            </div>
            <Link href="/team" className="btn-primary flex items-center gap-2 whitespace-nowrap">
              Meet the Team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
