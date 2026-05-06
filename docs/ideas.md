# Unrig USA — Design Ideas

## Design Philosophy Candidates

<response>
<text>

### Idea A: "Constitutional Broadsheet"

**Design Movement:** American Civic Modernism — inspired by the visual language of the Declaration of Independence, the Federalist Papers, and investigative journalism outlets like ProPublica and The Intercept.

**Core Principles:**
1. Authority through restraint — every element earns its place
2. Dark navy as the dominant ground, white as the voice of clarity
3. Red used sparingly as a signal, never decoration
4. Structural asymmetry that mirrors the "rigged" vs. "unrigged" tension

**Color Philosophy:**
- Background: Deep navy `#0D1B2A` — the color of late-night reading, of the Constitution's ink on aged parchment
- Primary text: Off-white `#F5F0E8` — warm, not clinical
- Accent: Crimson `#C41E3A` — the red of urgency, of warning, of the American flag
- Secondary accent: Warm amber `#D4A84B` — gold of civic idealism, used for personal defense layer
- Muted surface: `#1B2A4A` — slightly lighter navy for cards

**Layout Paradigm:**
Asymmetric editorial grid. Headlines break out of columns. Pull quotes span full width. The "feeling cards" are the visual signature — dark cards with large italic serif quotes, structural names in bold caps, and a thin red rule separating the problem from the hope.

**Signature Elements:**
1. Thin red horizontal rule as a section divider — echoes the stripes of the flag
2. Large italic serif for felt-sense quotes — Playfair Display or Libre Baskerville
3. Monospaced text for structural names (LP codes, BITE domains) — signals precision, research

**Interaction Philosophy:**
Deliberate and measured. No gratuitous animation. Hover states reveal depth. Accordion cards expand with a single, smooth transition. The action ladder "builds" as you scroll — each rung fades in as you reach it.

**Animation:**
- Entrance: fade-up with 0.3s ease-out, staggered by 100ms per card
- Hover: subtle lift (translateY -2px) with box-shadow deepening
- Nav: smooth underline slide on hover
- No parallax, no spinning elements — this is a serious site

**Typography System:**
- Display/Hero: Playfair Display Bold — serif authority
- Body: Source Serif Pro Regular — readable, warm, journalistic
- UI/Labels: IBM Plex Mono — precision, data, structural names
- Nav/Buttons: Space Grotesk Medium — modern civic sans

</text>
<probability>0.08</probability>
</response>

<response>
<text>

### Idea B: "Civic Brutalism"

**Design Movement:** New American Brutalism — raw, honest, confrontational. Inspired by protest posters, government documents, and the visual language of accountability journalism.

**Core Principles:**
1. Stark contrast as a political statement
2. Typography as architecture — text IS the design
3. No decoration that doesn't serve meaning
4. The grid is visible, intentional, and occasionally broken

**Color Philosophy:**
- Near-black background `#0A0F1E`
- Pure white text
- Red `#E8192C` used as a structural element, not decoration
- Occasional amber `#F5A623` for the personal defense layer

**Layout Paradigm:**
Full-bleed sections with hard edges. No rounded corners anywhere. Text columns that feel like newspaper columns. The feeling cards are stark — white text on near-black, red structural name, no softening.

**Signature Elements:**
1. Bold oversized numbers for safeguard numbering
2. Red vertical rule on the left of blockquotes
3. All-caps section headers with wide letter-spacing

**Interaction Philosophy:**
Abrupt, intentional. Hover states change color, not position. Click = immediate response.

**Animation:**
Minimal. Text appears. Sections are visible. No fade.

**Typography System:**
- Display: Bebas Neue — confrontational, American
- Body: Libre Baskerville — readable, serious
- Mono: Courier Prime — typewriter, documents, evidence

</text>
<probability>0.05</probability>
</response>

<response>
<text>

### Idea C: "Civic Intelligence" ← SELECTED

**Design Movement:** Democratic Modernism — the visual language of serious civic institutions that are also deeply human. Think: the ACLU's digital presence meets the New York Times editorial design meets a late-night research session.

**Core Principles:**
1. Dark navy as the ground of authority and late-night clarity
2. The "feeling card" as the site's visual signature — dark, intimate, shareable
3. Typography that earns trust before it asks for action
4. Asymmetric layouts that feel researched, not templated

**Color Philosophy:**
- Primary background: Deep navy `#0D1B2A` — authority, depth, the color of serious work
- Card surface: `#162236` — slightly lighter, for depth layering
- Primary text: `#F5F0E8` — warm off-white, not clinical
- Red accent: `#C41E3A` — urgency, the American flag, used for CTAs and structural names
- Amber accent: `#D4A84B` — civic gold, used for the personal defense layer and highlights
- Muted text: `#8FA3B8` — secondary information

**Layout Paradigm:**
Asymmetric editorial grid with intentional column breaks. Hero sections are full-bleed navy with large serif headlines. Content sections alternate between full-width and constrained columns. The feeling cards break out of the grid — they're meant to feel like something you'd screenshot and share.

**Signature Elements:**
1. Feeling cards: dark card with large italic serif quote, thin red rule, structural name in small caps, hope line in amber
2. Red horizontal rule as section divider — 1px, full width
3. LP code badges: monospaced, small, amber — signals the research layer

**Interaction Philosophy:**
Measured and intentional. The site rewards reading. Hover states are subtle (lift + shadow). Accordions expand smoothly. The action ladder builds as you scroll. Nothing moves unless it means something.

**Animation:**
- Entrance: fade-up 0.4s ease-out, staggered 80ms per element
- Hover: translateY(-2px) + box-shadow deepening, 200ms ease
- Accordion: smooth height transition, 300ms ease-in-out
- Nav mobile: slide-in from right, 250ms ease-out
- Scroll-triggered: IntersectionObserver for feeling cards and action ladder rungs

**Typography System:**
- Display/Hero: Playfair Display Bold — serif authority, gravitas
- Subheadings: Playfair Display Italic — the "felt sense" voice
- Body: Source Serif Pro — warm, readable, journalistic
- UI/Labels/Badges: IBM Plex Mono — precision, structural names, LP codes
- Navigation/Buttons: Space Grotesk — modern civic sans

</text>
<probability>0.09</probability>
</response>

## Selected Design: Idea C — "Civic Intelligence"

This design philosophy best serves the site's mission: authoritative enough to be taken seriously, human enough to reach someone at 2am. The dark navy ground creates the late-night reading atmosphere the spec calls for. The feeling cards are the visual signature. The typography system layers authority (Playfair Display), warmth (Source Serif Pro), and precision (IBM Plex Mono) to match the site's three-layer approach.
