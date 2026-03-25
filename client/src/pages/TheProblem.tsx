/*
 * UNRIG USA — The Problem Page
 * "A Long Train of Abuses"
 */

import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, ChevronUp, ZoomIn } from "lucide-react";

const DIAGRAM_TIMELINE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663417942949/KiUG5xHiTpMVK9Gs3TakrN/diagram-timeline_1e6b1ecf.png";

const STRUCTURAL_FAILURES = [
  {
    name: "Parameter Failure",
    code: "LP12",
    felt: '"I can\'t afford anything."',
    desc: "Wages stagnate while costs rise. Tax cuts flow upward. Nearly all political debate lives here — arguing over numbers within a structure designed to produce these numbers. This is the least effective place to fight. But it's where 99% of attention goes.",
    happening: "Mutual aid networks are providing direct relief while organizers work to change the rules that set the parameters. You don't have to wait for Congress.",
  },
  {
    name: "Buffer Depletion",
    code: "LP11",
    felt: '"I have no cushion."',
    desc: "60% of Americans live paycheck to paycheck. Federal agency capacity is being deliberately drained — not to save money, but to destroy the government's ability to respond to crisis.",
    happening: "Communities are building their own buffers — emergency funds, tool libraries, neighborhood resource networks. The buffers the system took away, people are rebuilding from scratch.",
  },
  {
    name: "Hostile Infrastructure",
    code: "LP10",
    felt: '"My phone is listening."',
    desc: "The digital infrastructure of daily life is owned by entities subject to surveillance, subpoena, and political pressure. AI conversations have no legal privilege. Your thoughts are not yours. Your distrust is rational.",
    happening: "Privacy-respecting alternatives exist and are growing. Encrypted messaging, local-first tools, community-owned infrastructure. You can protect yourself today.",
  },
  {
    name: "Asymmetric Delays",
    code: "LP9",
    felt: '"Nothing works fast enough."',
    desc: "A federal worker is fired by algorithm overnight. A wrongly deported person waits months for a court hearing. Destruction is instant. Correction takes years. This asymmetry is not accidental — it is engineered.",
    happening: "Rapid-response legal networks are closing the gap. Know-your-rights trainings are spreading. Communities are learning to move at the speed of harm.",
  },
  {
    name: "Feedback Loop Failure",
    code: "LP8",
    felt: '"The courts can\'t stop this."',
    desc: "Courts, elections, oversight agencies, the press — every self-correcting mechanism in democracy is being systematically weakened.",
    happening: "When official feedback loops fail, people build new ones. Independent journalism, citizen oversight, accountability tracking tools — the self-correcting mechanisms are being rebuilt outside the institutions that abandoned them.",
  },
  {
    name: "Runaway Concentration",
    code: "LP7",
    felt: '"Things keep getting worse."',
    desc: "Wealth concentrates → buys political influence → writes rules that concentrate more wealth. These are positive feedback loops running without brakes.",
    happening: "Anti-monopoly movements are gaining ground. Cooperative ownership models are spreading. The concentration isn't inevitable — it's a policy choice, and policy choices can be reversed.",
  },
  {
    name: "Information Capture",
    code: "LP6",
    felt: '"I can\'t tell what\'s real."',
    desc: "Public information is suppressed while private data is harvested. The government sees more while the public sees less.",
    happening: "Open-source intelligence tools are making power visible. Journalists are building independent platforms. Whistleblower protections are being fought for. The information flow can be reopened — and when it does, the system corrects itself.",
  },
  {
    name: "Impunity",
    code: "LP5",
    felt: '"The rules don\'t apply anymore."',
    desc: "Qualified immunity shields misconduct. Court orders are defied without consequence. Rules that aren't enforced aren't rules.",
    happening: "Qualified immunity reform is advancing in state legislatures. Civil rights attorneys are building new precedent. The impunity isn't permanent — it's being challenged, case by case, in every jurisdiction.",
  },
  {
    name: "Self-Organization Suppression",
    code: "LP4",
    felt: '"Nobody\'s coming to save us."',
    desc: "Correct. Nobody is coming. But communities are already organizing — mutual aid networks, know-your-rights trainings, civic infrastructure built from scratch.",
    happening: "You're reading this. That means the suppression isn't working. People are building anyway — in living rooms, in group chats, in community gardens, in churches, in union halls.",
  },
  {
    name: "Goal Displacement",
    code: "LP3",
    felt: '"What are we even fighting for?"',
    desc: "The system's stated goal is democratic governance. Its actual goal is the preservation and concentration of power. Recognizing the gap is the first step toward changing it.",
    happening: "Organizations like this one are naming the actual goals of the system — and proposing structural alternatives. When enough people can see the gap, the gap becomes unsustainable.",
  },
];

function FailureCard({ failure }: { failure: typeof STRUCTURAL_FAILURES[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#162236",
        border: "1px solid rgba(255,255,255,0.06)",
        borderLeft: "3px solid #C41E3A",
        marginBottom: "0.75rem",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: "1.25rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <div className="flex items-center gap-3">
          <span className="lp-badge">{failure.code}</span>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "#F5F0E8", fontSize: "0.9375rem" }}>
            {failure.name}
          </span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "#8FA3B8", fontSize: "0.875rem" }}>
            {failure.felt}
          </span>
        </div>
        <span style={{ color: "#C41E3A", flexShrink: 0, marginLeft: "1rem" }}>
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>

      {open && (
        <div style={{ padding: "0 1.5rem 1.5rem" }}>
          <p style={{ color: "#A8BFCC", lineHeight: 1.7, marginBottom: "1rem", fontSize: "0.9375rem" }}>
            {failure.desc}
          </p>
          <div style={{ backgroundColor: "rgba(212,168,75,0.08)", border: "1px solid rgba(212,168,75,0.2)", padding: "0.875rem 1rem" }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: "#D4A84B", textTransform: "uppercase", marginBottom: "0.375rem" }}>
              What's Happening
            </div>
            <p style={{ color: "#C8C0B4", fontSize: "0.875rem", lineHeight: 1.65 }}>
              {failure.happening}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TheProblem() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "5rem 0 4rem" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="section-label">The Problem</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F5F0E8", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              A Long Train of Abuses
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#A8BFCC", lineHeight: 1.75, maxWidth: "600px" }}>
              The founders anticipated this. They wrote instructions.
            </p>
          </div>
        </div>
      </section>

      <div className="red-rule" />

      {/* The Pattern */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "4rem 0" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="section-label" style={{ color: "#D4A84B" }}>The Pattern</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#0D1B2A", marginBottom: "1.5rem" }}>
              The Pattern
            </h2>
            <p style={{ color: "#A8BFCC", lineHeight: 1.75, marginBottom: "1rem" }}>
              What you're feeling has a structure. The sense that something is deeply wrong — that the rules have stopped applying to the people who write them — is not paranoia. It is pattern recognition.
            </p>
            <p style={{ color: "#A8BFCC", lineHeight: 1.75, marginBottom: "1rem" }}>
              The crisis is not one thing. It is a system of reinforcing failures operating across every level of governance. Each failure has a name. Each name is a search term. And each search term leads to decades of research and communities of people who've been working on exactly this problem.
            </p>
            <p style={{ color: "#F5F0E8", fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.125rem" }}>
              You are not alone in this. Not metaphorically. <em>Actually.</em>
            </p>
          </div>

          {/* Structural Failures Accordion */}
          <div className="mb-4">
            <div className="section-label mb-4" style={{ color: "#D4A84B" }}>The Structural Failures</div>
            <p style={{ color: "#5A6B7A", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
              Each failure is named, sourced, and connected to the leverage point where intervention is most effective. Click to expand.
            </p>
            {STRUCTURAL_FAILURES.map((f) => (
              <FailureCard key={f.name} failure={f} />
            ))}
          </div>
        </div>

        {/* Federal Consolidation Timeline */}
        <div style={{ marginTop: "3rem" }}>
          <div className="section-label mb-3">Federal Consolidation Timeline: Jan 2025 – Nov 2026</div>
          <p style={{ color: "#8FA3B8", fontSize: "0.875rem", marginBottom: "1rem", maxWidth: "700px" }}>
            This is the documented chronology of structural changes — executive orders, agency actions, legislative moves, and deployments — that constitute the pattern described above. This is not analysis. This is the record.
          </p>
          <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #D4C8B8", padding: "1rem", overflowX: "auto" }}>
            <a href={DIAGRAM_TIMELINE} target="_blank" rel="noopener noreferrer" style={{ display: "block", position: "relative" }}>
              <img
                src={DIAGRAM_TIMELINE}
                alt="Federal Consolidation Timeline January 2025 to November 2026"
                style={{ width: "100%", minWidth: "800px", display: "block" }}
              />
              <div style={{ position: "absolute", top: "0.5rem", right: "0.5rem", backgroundColor: "rgba(13,27,42,0.8)", padding: "0.25rem 0.5rem", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                <ZoomIn size={12} style={{ color: "#D4A84B" }} />
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "#D4A84B", letterSpacing: "0.08em" }}>CLICK TO ENLARGE</span>
              </div>
            </a>
          </div>
          <p style={{ color: "#8FA3B8", fontSize: "0.75rem", marginTop: "0.5rem", fontStyle: "italic" }}>
            Sources: Congressional records, executive orders, agency announcements, and investigative journalism. Updated as events develop.
          </p>
        </div>
      </section>

      {/* Structural Response */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "4rem 0" }}>
        <div className="container">
          <div className="max-w-3xl">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", color: "#F5F0E8", marginBottom: "1rem" }}>
              Structural problems require structural solutions. And you are the structure.
            </h2>
            <p style={{ color: "#A8BFCC", lineHeight: 1.75, marginBottom: "2rem" }}>
              You cannot fix a rigged system by electing better people into the same structure. You fix it by changing the structure itself — and by connecting with the people who are ready to change it with you. That is what the 20 Anti-Corruption Safeguards are designed to do. And that is what <em>you</em> are designed to do — because every movement that ever changed anything started with two people discovering they shared a problem.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/safeguards" className="btn-primary flex items-center gap-2">
                Read the Safeguards <ArrowRight size={16} />
              </Link>
              <Link href="/action" className="btn-outline flex items-center gap-2">
                Find Your People <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
