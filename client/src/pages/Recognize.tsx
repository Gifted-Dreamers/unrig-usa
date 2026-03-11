/*
 * UNRIG USA — Recognize It Page
 * "The BITE Model and How to Protect Yourself"
 */

import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ZoomIn } from "lucide-react";

const DIAGRAM_ASSEMBLED_PROFILE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663417942949/KiUG5xHiTpMVK9Gs3TakrN/diagram-assembled-profile_b9e5f186.png";

const BITE_CATEGORIES = [
  {
    letter: "B",
    label: "Behavior Control",
    color: "#C41E3A",
    desc: "Regulating where you go, who you see, what you do, and how you spend your time.",
    national: [
      "Travel bans and passport restrictions",
      "Surveillance of public gatherings",
      "Criminalization of protest",
      "Monitoring of social media activity",
    ],
    personal: [
      "Monitoring employees' personal lives",
      "Restricting who you can associate with",
      "Controlling your schedule and movements",
      "Requiring permission for normal activities",
    ],
  },
  {
    letter: "I",
    label: "Information Control",
    color: "#C41E3A",
    desc: "Controlling what information you can access, share, or believe.",
    national: [
      "Suppression of government data and research",
      "Attacks on independent journalism",
      "Algorithmic manipulation of information feeds",
      "Criminalization of leaks and whistleblowing",
    ],
    personal: [
      "Discouraging critical thinking",
      "Controlling what media you consume",
      "Requiring you to report others' doubts",
      "Punishing questions as disloyalty",
    ],
  },
  {
    letter: "T",
    label: "Thought Control",
    color: "#C41E3A",
    desc: "Shaping what you are allowed to think, believe, or question.",
    national: [
      "Banning books and curricula",
      "Mandatory loyalty pledges",
      "Rewriting history in official accounts",
      "Criminalizing 'wrong' political beliefs",
    ],
    personal: [
      "Loading language that prevents clear thinking",
      "Black-and-white thinking requirements",
      "Confession and self-criticism rituals",
      "Thought-stopping techniques",
    ],
  },
  {
    letter: "E",
    label: "Emotional Control",
    color: "#C41E3A",
    desc: "Manipulating your emotional state to maintain compliance and suppress resistance.",
    national: [
      "Manufactured fear of specific groups",
      "Cycles of crisis to prevent reflection",
      "Shame and humiliation of opponents",
      "Manufactured loyalty through shared enemies",
    ],
    personal: [
      "Alternating praise and punishment",
      "Making you feel responsible for the leader's emotions",
      "Shunning and exclusion as punishment",
      "Guilt for leaving or questioning",
    ],
  },
];

const PROTECTION_STEPS = [
  {
    num: "01",
    title: "Name What You're Seeing",
    desc: "Use the vocabulary. 'This is information control.' 'This is emotional manipulation.' Naming it breaks the spell — it transforms a felt sense into an observable pattern.",
  },
  {
    num: "02",
    title: "Protect Your Information Infrastructure",
    desc: "Use Signal for sensitive communications. Use a VPN. Use privacy-respecting search engines. Your digital life is not private by default — it requires deliberate choices.",
  },
  {
    num: "03",
    title: "Build Your Community Now",
    desc: "Don't wait for a crisis to know your neighbors. Mutual aid networks, community organizations, local civic groups — the relationships you build before you need them are the ones that will matter.",
  },
  {
    num: "04",
    title: "Know Your Rights",
    desc: "Know what you can and cannot be compelled to do. Know what to say (and not say) if approached by law enforcement. Organizations like the ACLU and National Lawyers Guild provide free training.",
  },
  {
    num: "05",
    title: "Maintain Your Connections",
    desc: "Isolation is the primary tool of control. Maintain relationships across political lines. Stay connected to people who think differently. The goal of manufactured division is to make you alone.",
  },
  {
    num: "06",
    title: "Document Everything",
    desc: "Keep records. Screenshot. Archive. The pattern of abuses is only visible in aggregate — and the aggregate requires documentation. Your records may be someone else's evidence.",
  },
];

export default function Recognize() {
  const [activeTab, setActiveTab] = useState<"national" | "personal">("national");

  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "5rem 0 4rem" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="section-label">Recognize It</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F5F0E8", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              The Pattern Has a Name.{" "}
              <span style={{ color: "#C41E3A" }}>Learn It.</span>
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#A8BFCC", lineHeight: 1.75, maxWidth: "600px" }}>
              Authoritarian control operates through four consistent mechanisms. When you can name them, you can see them — and when you can see them, you can resist them.
            </p>
          </div>
        </div>
      </section>

      <div className="red-rule" />

      {/* BITE Model */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "4rem 0" }}>
        <div className="container">
          <div className="max-w-3xl mb-8">
            <div className="section-label">Steven Hassan — The BITE Model</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", color: "#F5F0E8", marginBottom: "1rem" }}>
              Behavior. Information. Thought. Emotion.
            </h2>
            <p style={{ color: "#A8BFCC", lineHeight: 1.75, marginBottom: "1rem" }}>
              Cult expert Steven Hassan developed the BITE Model to describe how coercive control systems operate — whether in cults, abusive relationships, or authoritarian governments. The patterns are identical at every scale.
            </p>
            <p style={{ color: "#A8BFCC", lineHeight: 1.75 }}>
              The BITE Model is not a partisan framework. It describes structural patterns of control. These patterns appear in authoritarian movements of every ideological stripe — left, right, religious, secular. The question is not <em>who</em> is doing it. The question is <em>what</em> is being done.
            </p>
          </div>

          {/* Tab toggle */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab("national")}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                padding: "0.5rem 1.25rem",
                border: "1px solid",
                borderColor: activeTab === "national" ? "#C41E3A" : "rgba(255,255,255,0.15)",
                backgroundColor: activeTab === "national" ? "rgba(196,30,58,0.1)" : "transparent",
                color: activeTab === "national" ? "#F5F0E8" : "#8FA3B8",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              At the National Level
            </button>
            <button
              onClick={() => setActiveTab("personal")}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                padding: "0.5rem 1.25rem",
                border: "1px solid",
                borderColor: activeTab === "personal" ? "#C41E3A" : "rgba(255,255,255,0.15)",
                backgroundColor: activeTab === "personal" ? "rgba(196,30,58,0.1)" : "transparent",
                color: activeTab === "personal" ? "#F5F0E8" : "#8FA3B8",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              In Personal Relationships
            </button>
          </div>

          {/* Assembled Profile Diagram — shown when Information Control tab is active */}
          {activeTab === "national" && (
            <div style={{ marginBottom: "1.5rem", backgroundColor: "#162236", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C41E3A", padding: "1.25rem" }}>
              <div className="section-label mb-2">Information Control in Practice: The Assembled Profile</div>
              <p style={{ color: "#8FA3B8", fontSize: "0.8rem", lineHeight: 1.6, marginBottom: "1rem", maxWidth: "700px" }}>
                This diagram shows how data from 10+ federal systems — SSA, IRS, voter rolls, data brokers, Medicaid, Selective Service, SAVE tool, seized databases, and ICE tools — is assembled into a complete profile of every American. No single warrant covers the assembled picture. No court reviewed it. No oversight body monitors it.
              </p>
              <a href={DIAGRAM_ASSEMBLED_PROFILE} target="_blank" rel="noopener noreferrer" style={{ display: "block", position: "relative" }}>
                <img
                  src={DIAGRAM_ASSEMBLED_PROFILE}
                  alt="How federal data systems are assembled into a complete profile of every American"
                  style={{ width: "100%", display: "block", maxHeight: "400px", objectFit: "contain", objectPosition: "left" }}
                />
                <div style={{ position: "absolute", top: "0.5rem", right: "0.5rem", backgroundColor: "rgba(13,27,42,0.8)", padding: "0.25rem 0.5rem", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                  <ZoomIn size={12} style={{ color: "#D4A84B" }} />
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "#D4A84B", letterSpacing: "0.08em" }}>CLICK TO ENLARGE</span>
                </div>
              </a>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BITE_CATEGORIES.map((cat) => (
              <div
                key={cat.letter}
                style={{
                  backgroundColor: "#162236",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderTop: `3px solid ${cat.color}`,
                  padding: "1.5rem",
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "2rem", color: cat.color, lineHeight: 1 }}>
                    {cat.letter}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#F5F0E8", fontSize: "1rem" }}>
                      {cat.label}
                    </div>
                    <div style={{ color: "#8FA3B8", fontSize: "0.8rem", lineHeight: 1.4 }}>
                      {cat.desc}
                    </div>
                  </div>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {(activeTab === "national" ? cat.national : cat.personal).map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                        padding: "0.375rem 0",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                        color: "#A8BFCC",
                        fontSize: "0.875rem",
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ color: "#C41E3A", flexShrink: 0, marginTop: "0.2rem" }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protect Yourself */}
      <section style={{ backgroundColor: "#080F1A", padding: "4rem 0" }}>
        <div className="container">
          <div className="max-w-3xl mb-8">
            <div className="section-label">Practical Defense</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", color: "#F5F0E8", marginBottom: "1rem" }}>
              Protect Yourself and Your Community
            </h2>
            <p style={{ color: "#A8BFCC", lineHeight: 1.75 }}>
              Recognition is the first step. Defense is the second. These are practical, actionable steps you can take today — not when things get worse, but now, while you still have full capacity to act.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROTECTION_STEPS.map((step) => (
              <div
                key={step.num}
                style={{
                  backgroundColor: "#162236",
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "1.5rem",
                }}
              >
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "1.5rem", color: "rgba(196,30,58,0.25)", fontWeight: 700, marginBottom: "0.75rem" }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#F5F0E8", fontSize: "1rem", marginBottom: "0.625rem" }}>
                  {step.title}
                </h3>
                <p style={{ color: "#8FA3B8", fontSize: "0.875rem", lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "4rem 0", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#F5F0E8", marginBottom: "0.5rem" }}>
                Ready to act on what you now see?
              </h3>
              <p style={{ color: "#8FA3B8", fontSize: "0.9375rem" }}>
                The action ladder starts wherever you are.
              </p>
            </div>
            <Link href="/action" className="btn-primary flex items-center gap-2 whitespace-nowrap">
              Take Action <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
