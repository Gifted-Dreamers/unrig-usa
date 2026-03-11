/*
 * UNRIG USA — Research Page
 * "The Evidence Base"
 */

import { ExternalLink } from "lucide-react";

const RESEARCH_CATEGORIES = [
  {
    title: "Systems Thinking & Leverage Points",
    items: [
      {
        title: "Thinking in Systems: A Primer",
        author: "Donella H. Meadows",
        year: "2008",
        desc: "The foundational text for understanding why complex systems produce the outcomes they do — and where to intervene. The source of the Leverage Points framework that underlies Unrig's entire approach.",
        href: "https://www.chelseagreen.com/product/thinking-in-systems/",
        type: "Book",
      },
      {
        title: "Leverage Points: Places to Intervene in a System",
        author: "Donella H. Meadows",
        year: "1999",
        desc: "The original essay identifying 12 places to intervene in a complex system, ranked from least to most effective. The intellectual foundation of Unrig's platform.",
        href: "https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/",
        type: "Essay",
      },
    ],
  },
  {
    title: "Authoritarian Control & Coercive Systems",
    items: [
      {
        title: "Combating Cult Mind Control",
        author: "Steven Hassan",
        year: "1988/2018",
        desc: "The source of the BITE Model (Behavior, Information, Thought, Emotion control). Hassan's framework for understanding coercive control systems applies at every scale — from cults to authoritarian governments.",
        href: "https://freedomofmind.com/cult-mind-control/",
        type: "Book",
      },
      {
        title: "How Democracies Die",
        author: "Steven Levitsky & Daniel Ziblatt",
        year: "2018",
        desc: "Harvard political scientists document how democracies have historically been dismantled — not through coups, but through the gradual erosion of norms and institutions. Essential reading for understanding the current moment.",
        href: "https://www.penguinrandomhouse.com/books/562246/how-democracies-die-by-steven-levitsky-and-daniel-ziblatt/",
        type: "Book",
      },
      {
        title: "Twilight of Democracy",
        author: "Anne Applebaum",
        year: "2020",
        desc: "A Pulitzer Prize-winning journalist examines why intellectuals and elites support authoritarian movements — and what it means for democratic survival.",
        href: "https://www.penguinrandomhouse.com/books/606499/twilight-of-democracy-by-anne-applebaum/",
        type: "Book",
      },
      {
        title: "On Tyranny: Twenty Lessons from the Twentieth Century",
        author: "Timothy Snyder",
        year: "2017",
        desc: "A Yale historian draws on the history of 20th century authoritarianism to provide practical lessons for defending democracy today.",
        href: "https://www.penguinrandomhouse.com/books/555255/on-tyranny-by-timothy-snyder/",
        type: "Book",
      },
    ],
  },
  {
    title: "Structural Reform & Electoral Systems",
    items: [
      {
        title: "The Case for Ranked Choice Voting",
        author: "FairVote",
        year: "Ongoing",
        desc: "Comprehensive research on ranked choice voting — how it works, where it's been implemented, and what outcomes it produces.",
        href: "https://www.fairvote.org/research",
        type: "Research",
      },
      {
        title: "The Anti-Corruption Act",
        author: "RepresentUs",
        year: "2021",
        desc: "Model legislation combining ranked choice voting, independent redistricting, campaign finance reform, and ethics enforcement. The legislative template for structural reform.",
        href: "https://represent.us/anticorruptionact/",
        type: "Policy",
      },
    ],
  },
  {
    title: "Money in Politics",
    items: [
      {
        title: "Dark Money: The Hidden History of the Billionaires Behind the Rise of the Radical Right",
        author: "Jane Mayer",
        year: "2016",
        desc: "An investigative journalist documents the network of dark money that has shaped American politics over the past four decades. Essential for understanding regulatory capture at scale.",
        href: "https://www.penguinrandomhouse.com/books/225862/dark-money-by-jane-mayer/",
        type: "Book",
      },
      {
        title: "The Price of Democracy",
        author: "Julia Cagé",
        year: "2020",
        desc: "An economist analyzes the relationship between money and political power across democracies — and proposes structural solutions.",
        href: "https://www.hup.harvard.edu/catalog.php?isbn=9780674987654",
        type: "Book",
      },
    ],
  },
  {
    title: "Community & Social Movements",
    items: [
      {
        title: "Communities of Practice: Learning, Meaning, and Identity",
        author: "Etienne Wenger",
        year: "1998",
        desc: "The sociological foundation for understanding how naming shared problems creates communities — and why vocabulary is the infrastructure of social movements.",
        href: "https://www.cambridge.org/core/books/communities-of-practice/",
        type: "Book",
      },
      {
        title: "This Is an Uprising",
        author: "Mark Engler & Paul Engler",
        year: "2016",
        desc: "A rigorous examination of how nonviolent movements succeed — and what distinguishes effective organizing from ineffective activism.",
        href: "https://www.nationbooks.org/products/this-is-an-uprising",
        type: "Book",
      },
    ],
  },
  {
    title: "Economic Inequality & Policy",
    items: [
      {
        title: "The Great Divergence: America's Growing Inequality Crisis",
        author: "Timothy Noah",
        year: "2012",
        desc: "A comprehensive account of how American income inequality grew from the 1970s onward — and the policy choices that produced it.",
        href: "https://www.bloomsbury.com/us/great-divergence-9781608194469/",
        type: "Book",
      },
      {
        title: "Capital in the Twenty-First Century",
        author: "Thomas Piketty",
        year: "2014",
        desc: "The landmark economic analysis showing that wealth concentration is the structural default of capitalism — and what policy interventions can change it.",
        href: "https://www.hup.harvard.edu/catalog.php?isbn=9780674430006",
        type: "Book",
      },
    ],
  },
];

const TYPE_COLORS: Record<string, string> = {
  Book: "#D4A84B",
  Essay: "#8FA3B8",
  Research: "#C41E3A",
  Policy: "#A8BFCC",
};

export default function Research() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "5rem 0 4rem" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="section-label">Research</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F5F0E8", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              The Evidence Base
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#A8BFCC", lineHeight: 1.75, maxWidth: "600px" }}>
              Every structural failure we name is documented. Every safeguard is grounded in existing law, constitutional precedent, or peer-reviewed research. This is the reading list.
            </p>
          </div>
        </div>
      </section>

      <div className="red-rule" />

      {/* Research */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "4rem 0" }}>
        <div className="container">
          <div className="max-w-3xl mb-8">
            <p style={{ color: "#A8BFCC", lineHeight: 1.75 }}>
              Unrig USA is not a think tank. We don't produce original research. What we do is synthesize the best available research into a coherent framework for understanding and acting on structural corruption. The sources below are the intellectual foundation of that framework.
            </p>
          </div>

          {RESEARCH_CATEGORIES.map((cat) => (
            <div key={cat.title} style={{ marginBottom: "3rem" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", color: "#F5F0E8", marginBottom: "1.25rem", paddingBottom: "0.75rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {cat.title}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.items.map((item) => (
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
                    className="hover:border-amber-700 group"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "#F5F0E8", fontSize: "0.9375rem", lineHeight: 1.3 }}>
                        {item.title}
                      </div>
                      <ExternalLink size={14} style={{ color: "#8FA3B8", flexShrink: 0, marginTop: "0.2rem" }} />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#8FA3B8", letterSpacing: "0.05em" }}>
                        {item.author} · {item.year}
                      </span>
                      <span style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.08em",
                        color: TYPE_COLORS[item.type] || "#8FA3B8",
                        backgroundColor: `${TYPE_COLORS[item.type]}15` || "rgba(255,255,255,0.05)",
                        border: `1px solid ${TYPE_COLORS[item.type]}30` || "rgba(255,255,255,0.1)",
                        padding: "0.1rem 0.4rem",
                        textTransform: "uppercase",
                      }}>
                        {item.type}
                      </span>
                    </div>
                    <p style={{ color: "#8FA3B8", fontSize: "0.8rem", lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
