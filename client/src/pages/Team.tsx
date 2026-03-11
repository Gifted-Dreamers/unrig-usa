/*
 * UNRIG USA — Team Page
 * "The People Behind the Work"
 * Design: Democratic Modernism — dark navy, crimson accents, Playfair Display headings
 */

import { Link } from "wouter";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663417942949/KiUG5xHiTpMVK9Gs3TakrN";

const TEAM = [
  {
    name: "Jacob Pagano",
    title: "Co-founder & Chief Executive Officer",
    photo: null,
    bio: `Jacob Pagano is the co-founder and Chief Executive Officer of Unrig USA. [Full bio coming soon.]`,
    social: {},
  },
  {
    name: "Brittany Martin",
    title: "Co-founder, Vice President & Director of Development",
    photo: `${CDN}/Unrig-Brittany_bcc10297.jpeg`,
    bio: `Brittany Martin is the co-founder, Vice President, and Director of Development at Unrig USA. She is the architect of the Anti-Corruption Ecosystem Revolution project focused on building real accountability infrastructure in the United States. As a die-hard independent and career civic advocate, she has represented and supported high-impact campaigns for organizations including Amnesty International, the ACLU, The Humane Society of the United States, Doctors Without Borders, and the ASPCA, helping power mission-driven fundraising and organizing that confront abuses of power and demand transparency.

Her work sits at the intersection of organizing, nonprofit operations, and legal support, with a focus on turning outrage about corruption into disciplined, lawful civic action. Through Unrig USA, Brittany is focused on defending constitutional democracy by educating the public, mobilizing people around a comprehensive set of Anti-Corruption Safeguards, and pressuring public officials to face real consequences when they betray the public trust.

Unrig USA is one wing of the Anti-Corruption Ecosystem she is building — a long-term project to remove incentives for corruption and authoritarian behavior, regardless of party, and to give everyday people the tools they need to unrig the system and defend their own rights.`,
    social: {},
  },
  {
    name: "Matthew Demers",
    title: "Chief Operating Officer",
    photo: null,
    bio: `Matt Demers is the Chief Operating Officer of Unrig USA. He believes that political corruption isn't just one issue among many — it's the linchpin underlying every issue. Behind every failure to address pertinent issues, there's a powerful interest working to keep things exactly as they are. Until that changes, nothing else will. That conviction is what brought him to Unrig USA.

Matt brings a rare combination of legal training, financial expertise, and operational discipline to the fight. He holds a Juris Doctor from Chicago-Kent College of Law and a Bachelor of Science in Economics & Finance from the University of Texas at Dallas, both of which provide a foundation that gives him a precise understanding of the systems that enable corruption and the regulatory frameworks meant to constrain it.

His career has taken him through various roles and industries where he developed deep expertise in compliance, regulatory adherence, and operational leadership. He knows how powerful institutions operate from the inside, and he's ready to use that knowledge to hold them accountable from the outside. As COO of Unrig USA, Matt is committed to building an organization as relentless and rigorous as the forces it's up against.`,
    social: {},
  },
  {
    name: "Kevin Coronado",
    title: "Chief Financial Officer & Treasurer",
    photo: `${CDN}/Unrig-JC_95365b3d.jpeg`,
    bio: `Kevin Coronado is the Chief Financial Officer and Treasurer of Unrig USA. He is a financial advisor who focuses on supporting people of color, women, LGBTQ+ individuals, and other communities who have historically been underserved by the financial system. His background also includes years of advocacy work with marginalized groups including impoverished communities, queer and trans folks, people struggling with addiction, and immigrant families — helping them navigate complex systems with dignity and support.

Alongside his professional work, Kevin has been active in civic and political spaces, serving as treasurer for several campaigns across the country, advocating for equitable policy, and chairing the Lawrence-Douglas County Public Health Board. He also sits on the boards of Sporting Kaw Valley and serves as treasurer of the Board of Kansas Holistic Defenders, a local public defender's office.

This cause matters deeply to Kevin because he believes our children deserve to grow up in a world where integrity is the norm, and public systems operate with transparency and honesty. Building that kind of environment isn't optional — it's essential. And it requires all of us to stay engaged, push for accountability, and champion the values that protect the next generation.`,
    social: {},
  },
];

const BOARD: typeof TEAM = [
  {
    name: "Joy McCormick",
    title: "Board Member",
    photo: `${CDN}/Unrig-Joy_08b6633a.jpeg`,
    social: {},
    bio: `Joy McCormick is a Board Member at Unrig USA. She's a mother of three, born and raised Texan, and a United States Air Force veteran. She now resides in the Austin, TX area where she organizes with communities to help advocate for central Texans and veterans. She also holds a B.A. in philosophy and a longstanding passion for politics and history.

She joined this movement because she knows it's paramount that our children are taught the fundamental principles of the Constitution and understand why it's essential to the heartbeat of democracy to pay attention to politics as voters. She realizes our current state and federal leaders have failed the American people for decades, and it has directly led to the consequential circumstances Americans find themselves experiencing today. She continues to fight against the corruption in our political institutions to build a better world for our children.`,
  },
  {
    name: "JC Gonzalez-Ramirez",
    title: "Board Member",
    photo: `${CDN}/Unrig-JC_95365b3d.jpeg`,
    social: {},
    bio: `JC Gonzalez-Ramirez is a Board Member at Unrig USA. He is part of a family with five generations of American roots and Mexican upbringing. Emigrating to the U.S. wasn't immigration in the traditional sense — it was coming home to a country that was already his.

That dual identity shaped everything. He learned early how to move between worlds, read different rooms, and bring people together across cultural and ideological lines. He put that to work in politics, organizing, consulting, and running programs across the Midwest. His work spanned candidate campaigns, ballot initiatives, and independent expenditures. Starting in 2020, he was among the practitioners pioneering digital organizing as a serious field program strategy, not just a supplement to door-knocking.

From there, he brought the same instincts to enterprise technology, building pipelines in 3D commerce and AI at tech company startups before the category had a mainstream name. JC is the person you bring in when the gap between what's possible and what people are ready to believe needs closing.`,
  },
  {
    name: "Terri Petz",
    title: "Board Member",
    photo: null,
    social: {},
    bio: `Terri Petz is a Board Member at Unrig USA. [Full bio coming soon.]`,
  },
];

function TeamMember({ member, index }: { member: typeof TEAM[0]; index: number }) {
  const isEven = index % 2 === 0;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 260px) 1fr",
        gap: "3rem",
        alignItems: "start",
        marginBottom: "4rem",
        paddingBottom: "4rem",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
      className="team-member-grid"
    >
      {/* Photo */}
      <div>
        <div style={{ position: "relative", paddingBottom: "125%", overflow: "hidden", backgroundColor: "#162236" }}>
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
          ) : (
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "#243350", margin: "0 auto 0.75rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#8FA3B8", fontWeight: 700 }}>
                    {member.name.charAt(0)}
                  </span>
                </div>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#8FA3B8", letterSpacing: "0.08em" }}>PHOTO COMING SOON</span>
              </div>
            </div>
          )}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(13,27,42,0.9) 0%, transparent 100%)" }} />
        </div>
        <div style={{ backgroundColor: "#162236", padding: "1rem 1.25rem", borderTop: "2px solid #C41E3A" }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#F5F0E8", fontSize: "1rem" }}>
            {member.name}
          </div>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#D4A84B", letterSpacing: "0.05em", marginTop: "0.25rem" }}>
            {member.title}
          </div>
        </div>
      </div>

      {/* Bio */}
      <div style={{ paddingTop: "0.5rem" }}>
        {member.bio.split("\n\n").map((para, j) => (
          <p
            key={j}
            style={{
              color: j === 0 ? "#C8C0B4" : "#8FA3B8",
              fontSize: j === 0 ? "1rem" : "0.9375rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "5rem 0 4rem" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="section-label">The Team</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F5F0E8", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              The People Behind the Work
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#A8BFCC", lineHeight: 1.75, maxWidth: "600px" }}>
              Unrig USA is built by people who believe that democracy is not a spectator sport — and that the most important political act is the one you take today.
            </p>
          </div>
        </div>
      </section>

      <div className="red-rule" />

      {/* Leadership Team */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "4rem 0" }}>
        <div className="container">
          <div className="section-label mb-8">Leadership</div>
          {TEAM.map((member, i) => (
            <TeamMember key={member.name} member={member} index={i} />
          ))}
        </div>
      </section>

      {/* Board of Directors */}
      <section style={{ backgroundColor: "#080F1A", padding: "4rem 0" }}>
        <div className="container">
          <div className="section-label mb-2">Board of Directors</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", color: "#F5F0E8", marginBottom: "3rem" }}>
            The Board
          </h2>
          {BOARD.map((member, i) => (
            <TeamMember key={member.name} member={member} index={i} />
          ))}
        </div>
      </section>

      {/* Join the Team */}
      <section style={{ backgroundColor: "#0D1B2A", padding: "4rem 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container">
          <div className="max-w-2xl">
            <div className="section-label">Join Us</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", color: "#F5F0E8", marginBottom: "1rem" }}>
              We're Building Something That Matters
            </h2>
            <p style={{ color: "#A8BFCC", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Unrig USA is a lean, mission-driven organization that moves fast and takes the work seriously. We are always looking for people who combine deep expertise with genuine commitment to structural change.
            </p>
            <p style={{ color: "#8FA3B8", lineHeight: 1.75, marginBottom: "2rem" }}>
              If you have expertise in constitutional law, electoral systems, campaign finance, community organizing, civic technology, communications, or fundraising — and you believe that structural reform is the only way out of this — we want to hear from you.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
