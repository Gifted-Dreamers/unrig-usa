/*
 * UNRIG USA — Privacy Policy Page
 */

export default function Privacy() {
  return (
    <div>
      <section style={{ backgroundColor: "#0D1B2A", padding: "5rem 0 4rem" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="section-label">Legal</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F5F0E8", lineHeight: 1.1, marginBottom: "1rem" }}>
              Privacy Policy
            </h1>
            <p style={{ color: "#8FA3B8", fontSize: "0.875rem" }}>Last updated: March 2026</p>
          </div>
        </div>
      </section>

      <div className="red-rule" />

      <section style={{ backgroundColor: "#0D1B2A", padding: "4rem 0" }}>
        <div className="container">
          <div className="max-w-3xl" style={{ color: "#A8BFCC", lineHeight: 1.8 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {[
                {
                  title: "Information We Collect",
                  content: "Unrig USA collects only the information you voluntarily provide through our contact form and email signup. This includes your name, email address, and any message content you submit. We do not use tracking cookies, behavioral advertising, or third-party analytics that sell your data.",
                },
                {
                  title: "How We Use Your Information",
                  content: "Information you provide is used solely to respond to your inquiry, send you the communications you requested, and improve our ability to serve our mission. We do not sell, rent, or share your personal information with third parties for commercial purposes.",
                },
                {
                  title: "Email Communications",
                  content: "If you join our email list, you will receive analysis, action alerts, and organizational updates. Every email includes an unsubscribe link. You may also unsubscribe by contacting us directly at info@unrigusa.org.",
                },
                {
                  title: "Data Security",
                  content: "We take reasonable technical and organizational measures to protect your personal information. Form submissions are processed through n8n, a secure automation platform. We do not store payment information (donation processing is not yet active).",
                },
                {
                  title: "Third-Party Services",
                  content: "This website uses n8n for form processing and email signup. We may use standard web hosting and CDN services. We do not use Facebook Pixel, Google Analytics, or other behavioral tracking services.",
                },
                {
                  title: "Your Rights",
                  content: "You have the right to access, correct, or delete any personal information we hold about you. To exercise these rights, contact us at info@unrigusa.org. We will respond within 30 days.",
                },
                {
                  title: "Contact",
                  content: "Questions about this privacy policy may be directed to info@unrigusa.org.",
                },
              ].map((section) => (
                <div key={section.title}>
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#F5F0E8", fontSize: "1.125rem", marginBottom: "0.75rem" }}>
                    {section.title}
                  </h2>
                  <p style={{ color: "#A8BFCC" }}>{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
