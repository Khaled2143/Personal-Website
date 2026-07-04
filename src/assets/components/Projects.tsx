import { useState } from "react";
import "./Projects.css";

type Stat = { v: string; l: string };
type Link = { label: string; href: string | null };
type Project = {
  id: string;
  name: string;
  role: string;
  badge: string;
  accent: string;
  glow: string;
  desc: string;
  orientation: "portrait" | "landscape";
  shots: string[];
  stats: Stat[];
  tech: string[];
  links: Link[];
};

const projectData: Project[] = [
  {
    id: "brief",
    name: "Brief: Unbiased News",
    role: "Founder \u00b7 Solo \u00b7 iOS",
    badge: "LIVE \u00b7 APP STORE",
    accent: "#7cc4ff",
    glow: "rgba(124,196,255,.22)",
    desc: "A solo, end-to-end React Native iOS app, live on the App Store. An automated LLM pipeline built on Claude turns dense government and legislative data into clear, plain-English briefings, with autonomous content discovery and Clerk authentication.",
    orientation: "portrait",
    shots: [
      "/projects/Brief-1.PNG",
      "/projects/Brief-2.PNG",
      "/projects/Brief-3.PNG",
    ],
    stats: [
      { v: "Live", l: "App Store" },
      { v: "Solo", l: "End-to-end" },
      { v: "Claude", l: "LLM pipeline" },
    ],
    tech: ["React Native", "Expo", "Node.js", "MongoDB", "Claude", "AWS"],
    links: [
      {
        label: "App Store \u2197",
        href: "https://apps.apple.com/us/app/brief-unbiased-news/id6743771893",
      },
    ],
  },
  {
    id: "realswe",
    name: "Real SWE",
    role: "Full-Stack \u00b7 AI Platform",
    badge: "LIVE \u00b7 100+ USERS",
    accent: "#8be06a",
    glow: "rgba(139,224,106,.2)",
    desc: "An AI-powered interview-prep platform pairing a code-review trainer, a repository analyzer and a problem engine, scaled to 100+ users including paying subscribers.",
    orientation: "landscape",
    shots: [
      "/projects/real-swe-1.png",
      "/projects/real-swe-2.png",
      "/projects/real-swe-3.png",
    ],
    stats: [
      { v: "100+", l: "Users" },
      { v: "Paid", l: "Subscribers" },
      { v: "3-in-1", l: "Toolset" },
    ],
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Monaco", "Judge0", "Stripe"],
    links: [{ label: "Live site \u2197", href: "https://www.real-swe.com/" }],
  },
  {
    id: "bankwatcher",
    name: "BankWatcher",
    role: "Open Source \u00b7 Java",
    badge: "MERGED \u00b7 PLUGIN HUB",
    accent: "#f2c94c",
    glow: "rgba(242,201,76,.2)",
    desc: "An open-source Java plugin that tracks banked OSRS items with real-time value deltas, reviewed and merged into the official RuneLite Plugin Hub.",
    orientation: "landscape",
    shots: ["/projects/bankwatcher-1.png"],
    stats: [
      { v: "Merged", l: "Plugin Hub" },
      { v: "OSS", l: "Open source" },
      { v: "Java", l: "RuneLite" },
    ],
    tech: ["Java", "RuneLite", "Open Source"],
    links: [
      {
        label: "Plugin Hub \u2197",
        href: "https://runelite.net/plugin-hub/show/bank-watcher",
      },
      {
        label: "Source \u2197",
        href: "https://github.com/Khaled2143/bank-watcher",
      },
    ],
  },
];

function Projects() {
  const [activeId, setActiveId] = useState("brief");

  const activeIndex = projectData.findIndex((p) => p.id === activeId);
  const p = projectData[activeIndex] || projectData[0];
  const num = "0" + (activeIndex + 1);
  const indexLabel = num + " / 0" + projectData.length;

  return (
    <section id="projects" className="proj">
      <div className="proj-grid-texture" />

      <div className="proj-inner">
        <div className="proj-header">
          <div className="proj-eyebrow">The Artifact Vault</div>
          <h2 className="proj-title">Projects Forged</h2>
          <p className="proj-sub">Select an artifact to inspect it.</p>
        </div>

        {/* Featured panel */}
        <div
          className="proj-featured"
          style={{
            boxShadow: `inset 0 0 0 1px ${p.accent}33, 0 18px 44px rgba(0,0,0,.5)`,
          }}
        >
          {/* Media column */}
          <div className="proj-media">
            {p.orientation === "portrait" ? (
              // Portrait: three phones side by side
              <div className="proj-phones">
                {p.shots.map((src, i) => (
                  <div
                    key={i}
                    className="phone-frame"
                    style={{
                      boxShadow: `inset 0 0 0 1px ${p.accent}33, 0 0 24px ${p.glow}`,
                    }}
                  >
                    <img
                      className="phone-img"
                      src={src}
                      alt={`${p.name} screenshot ${i + 1}`}
                      loading="lazy"
                    />
                    {i === 0 && (
                      <div
                        className="proj-badge"
                        style={{
                          border: `1px solid ${p.accent}88`,
                          color: p.accent,
                        }}
                      >
                        <span
                          className="proj-badge-dot"
                          style={{
                            background: p.accent,
                            boxShadow: `0 0 7px ${p.accent}`,
                          }}
                        />
                        {p.badge}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              // Landscape: hero + two thumbs
              <>
                <div
                  className="proj-hero-frame"
                  style={{
                    boxShadow: `inset 0 0 0 1px ${p.accent}33, 0 0 30px ${p.glow}`,
                  }}
                >
                  <div
                    className="proj-badge"
                    style={{
                      border: `1px solid ${p.accent}88`,
                      color: p.accent,
                    }}
                  >
                    <span
                      className="proj-badge-dot"
                      style={{
                        background: p.accent,
                        boxShadow: `0 0 7px ${p.accent}`,
                      }}
                    />
                    {p.badge}
                  </div>
                  <img
                    className="proj-frame-img"
                    src={p.shots[0]}
                    alt={`${p.name} main screenshot`}
                    loading="lazy"
                  />
                  <div className="proj-hero-name">{p.name}</div>
                </div>
                {p.shots.length > 1 && (
                  <div className="proj-thumbs">
                    {p.shots.slice(1).map((src, i) => (
                      <div
                        key={i}
                        className="proj-thumb"
                        style={{ boxShadow: `inset 0 0 0 1px ${p.accent}33` }}
                      >
                        <img
                          className="proj-frame-img"
                          src={src}
                          alt={`${p.name} screenshot ${i + 2}`}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Info column */}
          <div className="proj-info">
            <div className="proj-index" style={{ color: p.accent }}>
              {indexLabel}
            </div>
            <div
              className="proj-name"
              style={{ textShadow: `0 0 20px ${p.glow}` }}
            >
              {p.name}
            </div>
            <div className="proj-role" style={{ color: p.accent }}>
              {p.role}
            </div>
            <p className="proj-desc">{p.desc}</p>

            <div className="proj-stats">
              {p.stats.map((s) => (
                <div key={s.l} className="proj-stat">
                  <div className="proj-stat-v" style={{ color: p.accent }}>
                    {s.v}
                  </div>
                  <div className="proj-stat-l">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="proj-forged-label">Forged with</div>
            <div className="proj-tech">
              {p.tech.map((t) => (
                <span key={t} className="proj-tech-tag">
                  {t}
                </span>
              ))}
            </div>

            <div className="proj-links">
              {p.links.map((lk) => {
                const live = !!lk.href;
                return live ? (
                  <a
                    key={lk.label}
                    className="proj-link live"
                    href={lk.href as string}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {lk.label}
                  </a>
                ) : (
                  <span key={lk.label} className="proj-link dead">
                    {lk.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selector rail */}
        <div className="proj-rail">
          {projectData.map((pr, i) => {
            const on = pr.id === activeId;
            return (
              <div
                key={pr.id}
                className={`proj-select${on ? " active" : ""}`}
                onClick={() => setActiveId(pr.id)}
                onMouseEnter={() => setActiveId(pr.id)}
                style={{
                  boxShadow: `inset 0 0 0 1px ${on ? pr.accent : "#234450"}`,
                }}
              >
                <div className="proj-select-num" style={{ color: pr.accent }}>
                  {"0" + (i + 1)}
                </div>
                <div className="proj-select-meta">
                  <div className="proj-select-name">{pr.name}</div>
                  <div className="proj-select-role">{pr.role}</div>
                </div>
                <span
                  className="proj-select-check"
                  style={{ color: on ? pr.accent : "#3a5560" }}
                >
                  ●
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
