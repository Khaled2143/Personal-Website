import { useState } from "react";
import "./Contact.css";

type Contact = {
  glyph: string;
  label: string;
  value: string;
  iconBg: string;
  iconColor: string;
  href: string | null;
};

const contactData: Contact[] = [
  {
    glyph: "</>",
    label: "GitHub",
    value: "github.com/Khaled2143",
    iconBg: "linear-gradient(#2a2014,#15100a)",
    iconColor: "#e7dcc4",
    href: "https://github.com/Khaled2143",
  },
  {
    glyph: "in",
    label: "LinkedIn",
    value: "Connect professionally",
    iconBg: "linear-gradient(#143a4a,#0e2730)",
    iconColor: "#7cc4ff",
    href: "https://www.linkedin.com/in/khaled-ahmed1/",
  },
  {
    glyph: "@",
    label: "Email",
    value: "Khaledahmedd2001@gmail.com",
    iconBg: "linear-gradient(#4a3c1e,#2e2410)",
    iconColor: "#f7e6b0",
    href: "mailto:Khaledahmedd2001@gmail.com",
  },
  {
    glyph: "\u2302",
    label: "Queens College",
    value: "B.A. Computer Science, 2024",
    iconBg: "linear-gradient(#2e3a1e,#1e2712)",
    iconColor: "#9fd27a",
    href: null,
  },
];

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = async () => {
    if (!name.trim() || !email.trim() || !msg.trim()) {
      setError("Fill in all fields to complete the trade.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("That email doesn't look right.");
      return;
    }
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "b246dff9-2e3c-4786-b551-66e6b2bc13f7",
          name,
          email,
          message: msg,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setError("Something went wrong. Try again.");
      }
    } catch {
      setError("Network error. Try again.");
    }
  };

  const reset = () => {
    setName("");
    setEmail("");
    setMsg("");
    setSent(false);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <div className="contact-header">
          <div className="contact-eyebrow">The Trade Window</div>
          <h2 className="contact-title">Let&rsquo;s Make a Trade</h2>
        </div>

        <div className="trade-window">
          {/* Title bar */}
          <div className="trade-bar">
            <div className="trade-bar-title">Trading with: Khaled Ahmed</div>
            <span className="trade-bar-dot" />
          </div>

          <div className="trade-body">
            {/* LEFT: Khaled's offer (contact links) */}
            <div className="trade-offer">
              <div className="trade-col-label">Khaled&rsquo;s Offer</div>
              <div className="trade-contacts">
                {contactData.map((c) => {
                  const inner = (
                    <>
                      <div
                        className="trade-icon"
                        style={{ background: c.iconBg, color: c.iconColor }}
                      >
                        {c.glyph}
                      </div>
                      <div className="trade-contact-meta">
                        <div className="trade-contact-label">{c.label}</div>
                        <div className="trade-contact-value">{c.value}</div>
                      </div>
                    </>
                  );
                  return c.href ? (
                    <a
                      key={c.label}
                      className="trade-contact link"
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={c.label} className="trade-contact">
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT: message form */}
            <div className="trade-message">
              <div className="trade-col-label">Your Message</div>

              {sent ? (
                <div className="trade-success">
                  <div className="trade-check">✓</div>
                  <div className="trade-success-title">Trade Accepted!</div>
                  <p className="trade-success-msg">
                    Message received. I&rsquo;ll get back to you soon.
                  </p>
                  <button className="trade-again" onClick={reset}>
                    Send another
                  </button>
                </div>
              ) : (
                <div className="trade-form">
                  <input
                    className="trade-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Display name"
                  />
                  <input
                    className="trade-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                  />
                  <textarea
                    className="trade-input trade-textarea"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="What quest shall we embark on together?"
                    rows={4}
                  />
                  {error && <div className="trade-error">{error}</div>}
                  <button className="trade-send" onClick={handleSend}>
                    <span className="sweep" />
                    Send Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <span className="contact-footer-name">Khaled Ahmed</span> · B.A.
          Computer Science, CUNY Queens College 2024 · A RuneScape-inspired
          tribute, unaffiliated with Jagex.
        </div>
      </div>
    </section>
  );
}

export default Contact;
