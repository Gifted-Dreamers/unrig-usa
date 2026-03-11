/*
 * UNRIG USA — Take Action Page
 * "The Action Ladder"
 */

import { Link } from "wouter";
import { ArrowRight, ExternalLink } from "lucide-react";

const LADDER_RUNGS = [
  {
    num: "01",
    title: "Start Where You Are",
    tagline: "You don't have to be ready. You just have to start.",
    desc: "The most important step is the one you can take today, from wherever you are. You don't need to understand everything. You don't need to have a plan. You need to take one step.",
    actions: [
      { label: "Sign up for our email list", href: "#signup", internal: true },
      { label: "Share this website with one person", href: "#share", internal: true },
      { label: "Read the 20 Safeguards", href: "/safeguards", internal: true },
    ],
  },
  {
    num: "02",
    title: "Know Your Rights",
    tagline: "Knowledge is not passive. It is the foundation of everything else.",
    desc: "Understanding your constitutional rights is not optional — it is the minimum condition for defending them. Organizations across the country offer free know-your-rights training.",
    actions: [
      { label: "ACLU Know Your Rights", href: "https://www.aclu.org/know-your-rights", internal: false },
      { label: "National Lawyers Guild", href: "https://www.nlg.org", internal: false },
      { label: "Electronic Frontier Foundation", href: "https://www.eff.org", internal: false },
    ],
  },
  {
    num: "03",
    title: "Build Local Relationships",
    tagline: "Your neighborhood is your first line of defense and your first source of power.",
    desc: "The most effective political organizing happens at the local level — city councils, school boards, county commissions. These are the structures closest to your daily life and most accessible to citizen influence.",
    actions: [
      { label: "Attend a city council meeting", href: "#local", internal: true },
      { label: "Join or start a mutual aid network", href: "https://www.mutualaidhub.org", internal: false },
      { label: "Find your local civic organizations", href: "https://www.vote.org", internal: false },
    ],
  },
  {
    num: "04",
    title: "Register and Vote",
    tagline: "Voting is not sufficient. But it is necessary.",
    desc: "Voting alone cannot fix a structurally rigged system. But not voting guarantees that the people who benefit from the rigged system will continue to run it. Register. Vote. And then do more.",
    actions: [
      { label: "Check your registration", href: "https://www.vote.org/am-i-registered-to-vote/", internal: false },
      { label: "Register to vote", href: "https://www.vote.org/register-to-vote/", internal: false },
      { label: "Find your polling place", href: "https://www.vote.org/polling-place-locator/", internal: false },
    ],
  },
  {
    num: "05",
    title: "Contact Your Representatives",
    tagline: "They work for you. Remind them.",
    desc: "Constituent contact — especially phone calls — is one of the most effective tools available to ordinary citizens. It is not glamorous. It is not sufficient. But it works, especially at the local and state level.",
    actions: [
      { label: "Find your representatives", href: "https://www.congress.gov/members/find-your-member", internal: false },
      { label: "Call your senators", href: "https://www.senate.gov/senators/senators-contact.htm", internal: false },
      { label: "5 Calls — scripted calls made easy", href: "https://5calls.org", internal: false },
    ],
  },
  {
    num: "06",
    title: "Support the Safeguards",
    tagline: "Advocate for structural reform, not just better people.",
    desc: "The 20 Safeguards are the destination. Advocacy for structural reform — ranked choice voting, independent redistricting, public campaign financing — is how you get there. Organizations are working on each of these right now.",
    actions: [
      { label: "FairVote — Ranked Choice Voting", href: "https://www.fairvote.org", internal: false },
      { label: "RepresentUs — Anti-Corruption", href: "https://represent.us", internal: false },
      { label: "End Citizens United", href: "https://endcitizensunited.org", internal: false },
    ],
  },
  {
    num: "07",
    title: "Donate",
    tagline: "Money is speech. Direct it toward structural change.",
    desc: "Support organizations working on structural reform. Support independent journalism. Support legal defense funds. Your money is a vote for the kind of system you want to live in.",
    actions: [
      { label: "Donate to Unrig USA (coming soon)", href: "#donate", internal: true, placeholder: true },
      { label: "Support independent journalism", href: "https://www.propublica.org/donate", internal: false },
      { label: "Support the ACLU", href: "https://www.aclu.org/donate", internal: false },
    ],
  },
  {
    num: "08",
    title: "Run for Office",
    tagline: "The people who run for school board are the people who control the curriculum.",
    desc: "Local office is accessible. It is consequential. And it is where the structural changes that matter most are made. You don't need to be a politician. You need to be a citizen who shows up.",
    actions: [
      { label: "Run for Something", href: "https://www.runforsomething.net", internal: false },
      { label: "Vote Run Lead", href: "https://voterunlead.org", internal: false },
      { label: "Emily's List", href: "https://www.emilyslist.org", internal: false },
    ],
  },
];

const MUTUAL_AID = [
  { title: "Mutual Aid Hub", desc: "Find or start a mutual aid network in your community.", href: "https://www.mutualaidhub.org" },
  { title: "Food Not Bombs", desc: "Community food sharing and anti-war organizing.", href: "https://foodnotbombs.net" },
  { title: "Little Free Library", desc: "Community book sharing — and a model for local mutual aid.", href: "https://littlefreelibrary.org" },
  { title: "Community Fridges", desc: "Find or start a community fridge in your neighborhood.", href: "https://www.communityfridges.org" },
];

export default function Action() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "5rem 0 4rem" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="section-label">Take Action</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F5F0E8", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              The Action Ladder
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#A8BFCC", lineHeight: 1.75, maxWidth: "600px" }}>
              Start wherever you are. Every rung matters. The goal is not perfection — it is movement.
            </p>
          </div>
        </div>
      </section>

      <div className="red-rule" />

      {/* Ladder */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "4rem 0" }}>
        <div className="container">
          <div className="max-w-3xl mb-8">
            <p style={{ color: "#A8BFCC", lineHeight: 1.75 }}>
              The most common reason people don't act is that they don't know where to start. This ladder is designed to answer that question — not with a single answer, but with eight entry points, each appropriate for a different level of capacity and commitment. Start at the rung that fits where you are today. Move up when you're ready.
            </p>
          </div>

          <div style={{ maxWidth: "800px" }}>
            {LADDER_RUNGS.map((rung) => (
              <div key={rung.num} className="ladder-rung" style={{ marginBottom: "0.75rem" }}>
                <div className="flex items-start gap-4">
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "1.25rem", color: "rgba(196,30,58,0.3)", fontWeight: 700, flexShrink: 0, lineHeight: 1 }}>
                    {rung.num}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", color: "#F5F0E8", marginBottom: "0.25rem" }}>
                      {rung.title}
                    </h3>
                    <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem", color: "#D4A84B", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>
                      {rung.tagline}
                    </div>
                    <p style={{ color: "#A8BFCC", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1rem" }}>
                      {rung.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {rung.actions.map((action) => (
                        action.internal ? (
                          action.href.startsWith("/") ? (
                            <Link
                              key={action.label}
                              href={action.href}
                              style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 500,
                                fontSize: "0.8rem",
                                color: action.placeholder ? "#8FA3B8" : "#D4A84B",
                                textDecoration: "none",
                                border: `1px solid ${action.placeholder ? "rgba(255,255,255,0.1)" : "rgba(212,168,75,0.3)"}`,
                                padding: "0.375rem 0.75rem",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.25rem",
                                transition: "all 0.2s",
                              }}
                            >
                              {action.label} <ArrowRight size={12} />
                            </Link>
                          ) : (
                            <span
                              key={action.label}
                              style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 500,
                                fontSize: "0.8rem",
                                color: action.placeholder ? "#8FA3B8" : "#D4A84B",
                                border: `1px solid ${action.placeholder ? "rgba(255,255,255,0.1)" : "rgba(212,168,75,0.3)"}`,
                                padding: "0.375rem 0.75rem",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.25rem",
                              }}
                            >
                              {action.label}
                            </span>
                          )
                        ) : (
                          <a
                            key={action.label}
                            href={action.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              fontFamily: "'Space Grotesk', sans-serif",
                              fontWeight: 500,
                              fontSize: "0.8rem",
                              color: "#D4A84B",
                              textDecoration: "none",
                              border: "1px solid rgba(212,168,75,0.3)",
                              padding: "0.375rem 0.75rem",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.25rem",
                              transition: "all 0.2s",
                            }}
                          >
                            {action.label} <ExternalLink size={11} />
                          </a>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mutual Aid */}
      <section style={{ backgroundColor: "#080F1A", padding: "4rem 0" }}>
        <div className="container">
          <div className="max-w-3xl mb-8">
            <div className="section-label">Community Infrastructure</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", color: "#F5F0E8", marginBottom: "1rem" }}>
              Mutual Aid: The Buffer You Build Yourself
            </h2>
            <p style={{ color: "#A8BFCC", lineHeight: 1.75 }}>
              Mutual aid is not charity. It is the community-built buffer that replaces the institutional buffers the system has depleted. It is also the most effective community-building tool available — because it creates real relationships around real needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MUTUAL_AID.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#162236",
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "1.25rem 1.5rem",
                  textDecoration: "none",
                  display: "block",
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                className="hover:border-amber-600 group"
              >
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "#F5F0E8", marginBottom: "0.375rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  {item.title}
                  <ExternalLink size={14} style={{ color: "#8FA3B8" }} />
                </div>
                <div style={{ color: "#8FA3B8", fontSize: "0.875rem" }}>
                  {item.desc}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Donate placeholder */}
      <section id="donate" style={{ backgroundColor: "#0D1B2A", padding: "4rem 0", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="container">
          <div className="max-w-2xl">
            <div className="section-label">Support the Work</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", color: "#F5F0E8", marginBottom: "1rem" }}>
              Donate to Unrig USA
            </h2>
            <p style={{ color: "#A8BFCC", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Online donations are coming soon. In the meantime, the most valuable thing you can do is share this work with people who need it.
            </p>
            <div
              style={{
                backgroundColor: "#162236",
                border: "1px solid rgba(255,255,255,0.06)",
                borderLeft: "3px solid #D4A84B",
                padding: "1.5rem",
              }}
            >
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#D4A84B", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Coming Soon
              </div>
              <p style={{ color: "#A8BFCC", fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Secure online donation processing is being set up. Check back soon, or contact us directly to discuss other ways to support the work.
              </p>
              <Link href="/contact" style={{ color: "#D4A84B", fontSize: "0.875rem", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.25rem", marginTop: "0.75rem" }}>
                Contact Us <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
