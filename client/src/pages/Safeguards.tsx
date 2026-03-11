/*
 * UNRIG USA — The Safeguards Page
 * "Not Wishes. Architecture."
 */

import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

const SAFEGUARDS = [
  {
    category: "I",
    title: "Democratic Structure & Electoral Integrity",
    tagline: "Changes who gets to participate.",
    color: "#C41E3A",
    items: [
      { num: "1", title: "Ranked Choice Voting", desc: "Eliminate the spoiler effect. Let voters rank candidates in order of preference. Require a majority to win. End the era of voting against your fears instead of for your values.", why: "The current system forces voters to choose between the lesser of two evils, suppressing third-party competition and keeping the duopoly entrenched." },
      { num: "2", title: "Independent Redistricting Commissions", desc: "Remove politicians from the process of drawing their own districts. Require citizen-led, nonpartisan commissions with transparency requirements and judicial review.", why: "Gerrymandering allows politicians to choose their voters instead of voters choosing their politicians. It is the structural root of legislative dysfunction." },
      { num: "3", title: "Automatic Voter Registration", desc: "Register all eligible citizens automatically through government databases. Shift the burden of registration from the citizen to the state.", why: "Voter registration barriers are not neutral — they are designed to suppress participation by people who move frequently, work multiple jobs, or lack stable housing." },
    ],
  },
  {
    category: "II",
    title: "Money, Corruption & Power",
    tagline: "Changes who gets heard.",
    color: "#C41E3A",
    items: [
      { num: "4", title: "Public Campaign Financing", desc: "Small-dollar matching programs, democracy vouchers, or full public financing of elections. Remove the structural dependency of elected officials on large donors.", why: "When politicians spend 30-70% of their time fundraising from wealthy donors, they are structurally incapable of representing everyone else. This is not corruption — it is the system working as designed." },
      { num: "5", title: "Revolving Door Restrictions", desc: "Multi-year cooling-off periods before government officials can lobby their former agencies. Lifetime bans on specific conflicts of interest. Real enforcement.", why: "The revolving door between government and industry is not a bug — it is the mechanism by which regulatory capture operates. You cannot regulate industries you plan to work for." },
      { num: "6", title: "Mandatory Financial Disclosure", desc: "Real-time, machine-readable disclosure of all financial holdings, transactions, and conflicts of interest for all elected officials and senior appointees. No blind trusts that aren't actually blind.", why: "You cannot hold officials accountable for conflicts you cannot see. Disclosure is the minimum condition for accountability." },
    ],
  },
  {
    category: "III",
    title: "Accountability & Oversight",
    tagline: "Changes who faces consequences.",
    color: "#C41E3A",
    items: [
      { num: "7", title: "Independent Special Counsel", desc: "Permanent, statutorily protected independent counsel with authority to investigate the executive branch without presidential interference. Codify Morrison v. Olson.", why: "A justice system where the president can fire the people investigating the president is not a justice system. It is a protection racket." },
      { num: "8", title: "Strengthen Inspectors General", desc: "Restore independence, funding, and subpoena power to all federal Inspectors General. Require Senate confirmation for removal. Protect whistleblowers who report to them.", why: "IGs are the internal accountability mechanism of the executive branch. Gutting them is not efficiency — it is the elimination of oversight." },
      { num: "9", title: "End Qualified Immunity", desc: "Eliminate the judicially created doctrine that shields government officials from civil liability for constitutional violations. Restore the ability to hold officials accountable in court.", why: "Qualified immunity was invented by the Supreme Court in 1982 with no basis in the text of 42 U.S.C. § 1983. It has made accountability for police and official misconduct nearly impossible." },
    ],
  },
  {
    category: "IV",
    title: "Free & Independent Information",
    tagline: "Changes what you're allowed to know.",
    color: "#C41E3A",
    items: [
      { num: "10", title: "Strengthen FOIA", desc: "Automatic declassification timelines. Presumption of disclosure. Criminal penalties for improper withholding. Fund the FOIA offices to actually process requests.", why: "The Freedom of Information Act is the public's primary tool for seeing what the government does in their name. Gutting it is not security — it is the elimination of transparency." },
      { num: "11", title: "Antitrust Enforcement for Media", desc: "Break up media monopolies. Restore local news. Enforce existing antitrust law against the consolidation of information infrastructure.", why: "Six corporations control 90% of American media. This is not a free press — it is a managed press. Information capture is a structural failure, not a content problem." },
      { num: "12", title: "Protect Whistleblowers", desc: "Expand and strengthen federal whistleblower protections. Close loopholes. Fund the Office of Special Counsel. Make retaliation a serious crime.", why: "Whistleblowers are the immune system of democracy. When they are destroyed, the system loses its ability to self-correct." },
    ],
  },
  {
    category: "V",
    title: "Budget & Spending Reform",
    tagline: "Changes how money flows.",
    color: "#C41E3A",
    items: [
      { num: "13", title: "Transparent Budget Process", desc: "End continuing resolutions as a governance tool. Require zero-based budgeting reviews. Make all federal spending machine-readable and publicly accessible in real time.", why: "A government that cannot account for its spending cannot be held accountable for it. Opacity is not efficiency — it is the cover for waste and corruption." },
      { num: "14", title: "End Dark Money", desc: "Require disclosure of all political spending, including 501(c)(4) 'social welfare' organizations. Overturn Citizens United through constitutional amendment or legislative workarounds.", why: "Dark money is the mechanism by which billionaires buy policy without accountability. It is the structural root of regulatory capture at scale." },
    ],
  },
  {
    category: "VI",
    title: "Human Rights & Rule of Law",
    tagline: "Changes what standards apply.",
    color: "#C41E3A",
    items: [
      { num: "15", title: "Restore Habeas Corpus", desc: "Protect the constitutional right to challenge detention in court. End indefinite detention without charge. Require judicial review of all deportations.", why: "Habeas corpus is the oldest protection against arbitrary government power in the Anglo-American legal tradition. Its erosion is the erosion of the rule of law itself." },
      { num: "16", title: "Enforce the Emoluments Clause", desc: "Create a statutory enforcement mechanism for the constitutional prohibition on government officials receiving benefits from foreign governments.", why: "The Emoluments Clause exists precisely to prevent the corruption of government officials by foreign powers. Without enforcement, it is a dead letter." },
    ],
  },
  {
    category: "VII",
    title: "Economic Justice",
    tagline: "Changes who benefits.",
    color: "#C41E3A",
    items: [
      { num: "17", title: "Strengthen Labor Rights", desc: "Card check recognition. Sectoral bargaining. End right-to-work laws. Restore the NLRB's capacity to enforce labor law. Make union organizing structurally possible again.", why: "The decline of union membership is the single best predictor of rising income inequality. This is not coincidence — it is the structural consequence of deliberate policy." },
      { num: "18", title: "Progressive Wealth Taxation", desc: "Annual wealth taxes on net worth above $50 million. Close the stepped-up basis loophole. Tax capital gains as ordinary income. Fund the IRS to audit the wealthy.", why: "The current tax code is a parameter failure — it was written by and for the people it taxes least. Changing it requires changing who writes it, not just the numbers." },
    ],
  },
  {
    category: "VIII",
    title: "End Profit from Incarceration",
    tagline: "Changes who profits from suffering.",
    color: "#C41E3A",
    items: [
      { num: "19", title: "Abolish Private Prisons", desc: "End federal contracts with private prison companies. Prohibit profit from incarceration. Require all detention facilities to be publicly operated and publicly accountable.", why: "When incarceration is profitable, the system has a structural incentive to incarcerate more people. This is not a policy problem — it is a goal displacement problem (LP3)." },
      { num: "20", title: "End Prison Labor Exploitation", desc: "Apply minimum wage laws to prison labor. End the 13th Amendment exception for 'punishment for crime.' Require meaningful consent for labor assignments.", why: "The 13th Amendment explicitly permits slavery as punishment for crime. This is not a metaphor — it is the legal foundation of a system that profits from mass incarceration." },
    ],
  },
];

function SafeguardItem({ item }: { item: { num: string; title: string; desc: string; why: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "0.75rem", marginBottom: "0.75rem" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: "0.5rem 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}
      >
        <div className="flex items-center gap-3">
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#C41E3A", letterSpacing: "0.1em", minWidth: "24px" }}>
            {item.num}
          </span>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "#F5F0E8", fontSize: "0.9375rem" }}>
            {item.title}
          </span>
        </div>
        <span style={{ color: "#C41E3A", flexShrink: 0, marginLeft: "1rem" }}>
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>
      {open && (
        <div style={{ paddingLeft: "2rem", paddingTop: "0.5rem" }}>
          <p style={{ color: "#A8BFCC", fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>
            {item.desc}
          </p>
          <div style={{ backgroundColor: "rgba(196,30,58,0.06)", border: "1px solid rgba(196,30,58,0.15)", padding: "0.75rem 1rem" }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "#C41E3A", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
              Why This Matters
            </div>
            <p style={{ color: "#8FA3B8", fontSize: "0.875rem", lineHeight: 1.65 }}>
              {item.why}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Safeguards() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "5rem 0 4rem" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="section-label">The Platform</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F5F0E8", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              The 20 Anti-Corruption Safeguards
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#A8BFCC", lineHeight: 1.75, maxWidth: "600px" }}>
              Not wishes. Architecture. Eight categories. Twenty structural reforms. Each one changes the rules, not just the numbers.
            </p>
          </div>
        </div>
      </section>

      <div className="red-rule" />

      {/* Intro */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "3rem 0" }}>
        <div className="container">
          <div className="max-w-3xl">
            <p style={{ color: "#A8BFCC", lineHeight: 1.75, marginBottom: "1rem" }}>
              Most reform organizations argue about what the numbers should be — minimum wage, tax rates, spending levels. Unrig asks a different question: <em>why does the system keep producing bad numbers?</em> And then we change the structure that produces them.
            </p>
            <p style={{ color: "#A8BFCC", lineHeight: 1.75 }}>
              These 20 safeguards are not a wish list. They are structural interventions at the leverage points where change actually compounds — the rules, the information flows, the feedback loops, and the goals of the system. Each one is grounded in existing law, constitutional precedent, or peer-reviewed research. Each one has been implemented somewhere. None of them require magic.
            </p>
          </div>
        </div>
      </section>

      {/* Safeguards */}
      <section style={{ backgroundColor: "#080F1A", padding: "3rem 0" }}>
        <div className="container">
          {SAFEGUARDS.map((cat) => (
            <div key={cat.category} style={{ marginBottom: "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#C41E3A", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  SAFEGUARD {cat.category}
                </div>
                <div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", color: "#F5F0E8", lineHeight: 1.2 }}>
                    {cat.title}
                  </h2>
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem", color: "#D4A84B", letterSpacing: "0.05em", marginTop: "0.2rem" }}>
                    {cat.tagline}
                  </div>
                </div>
              </div>
              <div style={{ paddingLeft: "0" }}>
                {cat.items.map((item) => (
                  <SafeguardItem key={item.num} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "4rem 0", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="container">
          <div className="max-w-2xl">
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", color: "#F5F0E8", marginBottom: "1rem" }}>
              Ready to act on these?
            </h3>
            <p style={{ color: "#8FA3B8", lineHeight: 1.75, marginBottom: "2rem" }}>
              The safeguards are the destination. The action ladder is how you get there — starting from wherever you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/action" className="btn-primary flex items-center gap-2">
                Take Action <ArrowRight size={16} />
              </Link>
              <Link href="/recognize" className="btn-outline flex items-center gap-2">
                Recognize the Patterns <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
