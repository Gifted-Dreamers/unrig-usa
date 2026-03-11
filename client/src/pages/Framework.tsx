/*
 * UNRIG USA — Why Systems / Framework Page
 * "You Can't Google What You Can't Name"
 */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const LP_SCALE = [
  { code: "LP12", label: "Parameters", example: '"I can\'t afford anything"', focus: false },
  { code: "LP11", label: "Buffer sizes", example: '"I have no cushion"', focus: false },
  { code: "LP10", label: "Material stocks & flows", example: '"My phone is listening"', focus: false },
  { code: "LP9", label: "Delays", example: '"Nothing works fast enough"', focus: false },
  { code: "LP8", label: "Negative feedback loops", example: '"The courts can\'t stop this"', focus: true },
  { code: "LP7", label: "Positive feedback loops", example: '"Things keep getting worse"', focus: true },
  { code: "LP6", label: "Information flows", example: '"I can\'t tell what\'s real"', focus: true },
  { code: "LP5", label: "Rules of the system", example: '"The rules don\'t apply anymore"', focus: true },
  { code: "LP4", label: "Power to change rules", example: '"Nobody\'s coming to save us"', focus: true },
  { code: "LP3", label: "Goals of the system", example: '"What are we even fighting for?"', focus: true },
  { code: "LP2", label: "Paradigm", example: "The shared assumptions that create the system", focus: false },
  { code: "LP1", label: "Transcending paradigms", example: "The ability to see beyond any single paradigm", focus: false },
];

const SEARCH_EXAMPLES = [
  { search: '"why can\'t I afford anything"', got: "Budgeting tips, side hustle guides", needed: "Parameter failure — the system's numbers were set against you", code: "LP12" },
  { search: '"why does nothing I do matter"', got: "Motivational quotes, burnout articles", needed: "Asymmetric delays — destruction is fast, correction is slow", code: "LP9" },
  { search: '"I feel like I\'m going crazy"', got: "Anxiety checklists, meditation apps", needed: "Paradigm collapse — you're not sick, you're seeing clearly", code: "LP2" },
];

export default function Framework() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "5rem 0 4rem" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="section-label">Why Systems</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F5F0E8", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              You Can't Google What You Can't Name
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#A8BFCC", lineHeight: 1.75, maxWidth: "600px" }}>
              Why vocabulary is infrastructure — and how naming what's broken is the first step to fixing it.
            </p>
          </div>
        </div>
      </section>

      <div className="red-rule" />

      {/* The Search That Fails */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "4rem 0" }}>
        <div className="container">
          <div className="max-w-3xl mb-10">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", color: "#F5F0E8", marginBottom: "1rem" }}>
              The Search That Fails Before It Starts
            </h2>
            <p style={{ color: "#A8BFCC", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              You know something is wrong. You open a search engine. You stare at the blinking cursor because you don't know what to type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {SEARCH_EXAMPLES.map((ex) => (
              <div
                key={ex.code}
                style={{
                  backgroundColor: "#162236",
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "1.5rem",
                  overflow: "hidden",
                }}
              >
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#8FA3B8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  You search for
                </div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "#F5F0E8", fontSize: "0.9375rem", marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  {ex.search}
                </div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#8FA3B8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.375rem" }}>
                  You get
                </div>
                <div style={{ color: "#8FA3B8", fontSize: "0.875rem", marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  {ex.got}
                </div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#D4A84B", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.375rem" }}>
                  The word you needed
                </div>
                <div style={{ color: "#D4A84B", fontSize: "0.875rem", lineHeight: 1.5 }}>
                  {ex.needed}
                </div>
              </div>
            ))}
          </div>

          <p style={{ color: "#8FA3B8", fontStyle: "italic", fontSize: "0.9375rem" }}>
            The search engine works fine. The problem is upstream of the search engine. You need the word before you can find the help.
          </p>
        </div>
      </section>

      {/* Leverage Points */}
      <section style={{ backgroundColor: "#080F1A", padding: "4rem 0" }}>
        <div className="container">
          <div className="max-w-3xl mb-8">
            <div className="section-label">Donella Meadows — 1999</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", color: "#F5F0E8", marginBottom: "1rem" }}>
              Not all interventions are equal.
            </h2>
            <p style={{ color: "#A8BFCC", lineHeight: 1.75 }}>
              Systems scientist Donella Meadows identified twelve places where you can intervene in a complex system — ranked from least to most effective. This explains why most political energy is wasted, and where Unrig focuses instead.
            </p>
          </div>

          <div style={{ maxWidth: "700px" }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#8FA3B8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem", display: "flex", justifyContent: "space-between" }}>
              <span>← Least Effective</span>
              <span>Most Effective →</span>
            </div>
            {LP_SCALE.map((lp, i) => (
              <div
                key={lp.code}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "0.625rem 1rem",
                  marginBottom: "0.25rem",
                  backgroundColor: lp.focus ? "rgba(196,30,58,0.1)" : "rgba(22,34,54,0.5)",
                  border: lp.focus ? "1px solid rgba(196,30,58,0.3)" : "1px solid rgba(255,255,255,0.04)",
                  borderLeft: lp.focus ? "3px solid #C41E3A" : "3px solid transparent",
                  opacity: lp.focus ? 1 : 0.6,
                }}
              >
                <span className="lp-badge" style={{ minWidth: "40px", textAlign: "center" }}>{lp.code}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: lp.focus ? 600 : 400, color: lp.focus ? "#F5F0E8" : "#8FA3B8", fontSize: "0.875rem" }}>
                    {lp.label}
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: lp.focus ? "#A8BFCC" : "#6B7E8F", fontSize: "0.75rem" }}>
                    {lp.example}
                  </div>
                </div>
                {lp.focus && (
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "#C41E3A", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                    Unrig Focus
                  </div>
                )}
              </div>
            ))}
          </div>

          <p style={{ color: "#8FA3B8", fontSize: "0.875rem", marginTop: "1.5rem", maxWidth: "600px" }}>
            99% of political energy goes to LP12 — arguing about what the numbers should be. Unrig's safeguards intervene at LP3 through LP8 — the rules, information flows, feedback loops, and goals that determine what the parameters will be in the first place.
          </p>
        </div>
      </section>

      {/* TRI Example */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "4rem 0" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="section-label">Case Study — 1986</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", color: "#F5F0E8", marginBottom: "1rem" }}>
              What happens when you change information flows instead of parameters.
            </h2>
            <div style={{ backgroundColor: "#162236", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #D4A84B", padding: "1.75rem", marginBottom: "1.5rem" }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.125rem", color: "#F5F0E8", lineHeight: 1.7, marginBottom: "1rem" }}>
                In 1986, Congress required factories to publicly report their toxic emissions. No new regulations. No fines. No enforcement. Just: tell the public what you're putting in their air and water.
              </p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.5rem", color: "#D4A84B", marginBottom: "0.5rem" }}>
                Toxic emissions dropped 40% in the first year.
              </p>
              <p style={{ color: "#8FA3B8", fontSize: "0.875rem" }}>
                This is a Leverage Point 6 intervention. Change the information flow, and the system corrects itself. This is how Unrig thinks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Names Become Communities */}
      <section style={{ backgroundColor: "#080F1A", padding: "4rem 0" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="section-label">Etienne Wenger — Communities of Practice</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", color: "#F5F0E8", marginBottom: "1rem" }}>
              The naming is the infrastructure.
            </h2>
            <p style={{ color: "#A8BFCC", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Sociologist Etienne Wenger showed that people independently working on the same problem don't become a community until someone names what they share. Before the name, you have scattered individuals. After it, you have a group that can see itself.
            </p>
            <p style={{ color: "#A8BFCC", lineHeight: 1.75, marginBottom: "2rem" }}>
              This is why vocabulary matters more than strategy. Strategy tells you what to do. Vocabulary tells you <em>who else is doing it</em> — and makes it possible to find them.
            </p>

            {/* Pipeline visual */}
            <div style={{ backgroundColor: "#162236", border: "1px solid rgba(255,255,255,0.06)", padding: "1.5rem", marginBottom: "2rem" }}>
              <div className="flex flex-wrap items-center gap-2">
                {["Felt sense", "Name", "Search term", "Research trail", "Community", "Action"].map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    {i > 0 && <span style={{ color: "#C41E3A", fontSize: "0.875rem" }}>→</span>}
                    <span style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.75rem",
                      letterSpacing: "0.08em",
                      color: i === 0 ? "#8FA3B8" : i === 5 ? "#D4A84B" : "#A8BFCC",
                      textTransform: "uppercase",
                    }}>
                      {step}
                    </span>
                  </span>
                ))}
              </div>
              <p style={{ color: "#8FA3B8", fontSize: "0.8rem", marginTop: "0.75rem" }}>
                That pipeline is this entire website. Every page is a stage in it.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/recognize" className="btn-primary flex items-center gap-2">
                Assess It <ArrowRight size={16} />
              </Link>
              <Link href="/safeguards" className="btn-outline flex items-center gap-2">
                Read the Safeguards <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
