import { useState } from "react";
import "./Stats.css";

type Skill = {
  id: string;
  name: string;
  role: string;
  glyph: string;
  color: string;
  color2: string;
  lvl: number;
  desc: string;
  tech: string[];
};

const skillData: Skill[] = [
  {
    id: "ai",
    name: "AI / LLMs",
    role: "Magic",
    glyph: "\u2736",
    color: "#7aa2ff",
    color2: "#c4d2ff",
    lvl: 90,
    desc: "Building and shipping LLM-powered products end-to-end. Agents, pipelines and evals across the major frontier models.",
    tech: ["OpenAI", "Anthropic Claude", "Gemini", "Prompt Engineering"],
  },
  {
    id: "python",
    name: "Python",
    role: "Attack",
    glyph: "\u2694",
    color: "#ff7a7a",
    color2: "#ffc4c4",
    lvl: 80,
    desc: "A reliable second language for backend services, data pipelines, automation and AI tooling.",
    tech: ["Python", "FastAPI", "asyncio", "pytest"],
  },
  {
    id: "js",
    name: "JS / TypeScript",
    role: "Woodcutting",
    glyph: "\u2732",
    color: "#6fcf5b",
    color2: "#bff2a8",
    lvl: 84,
    desc: "Typed, maintainable code across web and native front-of-house.",
    tech: ["TypeScript", "React", "Node"],
  },
  {
    id: "backend",
    name: "Backend & APIs",
    role: "Cooking",
    glyph: "\u229b",
    color: "#f2a35e",
    color2: "#ffd6a8",
    lvl: 82,
    desc: "Designing resilient services and clean API contracts that scale.",
    tech: ["Node.js", "Express", "FastAPI", "REST"],
  },
  {
    id: "frontend",
    name: "Frontend",
    role: "Smithing",
    glyph: "\u2692",
    color: "#b8c2cc",
    color2: "#e8eef4",
    lvl: 90,
    desc: "Forging polished interfaces for web and mobile, native-quality UX.",
    tech: ["React Native", "Next.js", "Tailwind"],
  },
  {
    id: "db",
    name: "Databases",
    role: "Mining",
    glyph: "\u25c8",
    color: "#9aa6e0",
    color2: "#cdd5ff",
    lvl: 81,
    desc: "Modelling, indexing and caching data for speed and correctness.",
    tech: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    id: "devops",
    name: "Tools & DevOps",
    role: "Defence",
    glyph: "\u2756",
    color: "#5fc7e0",
    color2: "#b8edf7",
    lvl: 75,
    desc: "Shipping and observing production systems with confidence.",
    tech: ["Docker", "AWS", "Sentry", "Git"],
  },
  {
    id: "testing",
    name: "AI Test Engineering",
    role: "Slayer",
    glyph: "\u2747",
    color: "#8be06a",
    color2: "#cdf7b8",
    lvl: 99,
    desc: "Operating production AI agents that run test specs across hundreds of physical devices.",
    tech: ["Mobot", "Test Automation", "Agents"],
  },
];

const MAX = 99;
const totalLevel = skillData.reduce((sum, s) => sum + s.lvl, 0);

function Stats() {
  const [selectedId, setSelectedId] = useState("ai");

  const sel = skillData.find((s) => s.id === selectedId) || skillData[0];
  const selPct = Math.round((sel.lvl / MAX) * 100);

  return (
    <section id="about" className="stats">
      <div className="stats-inner">
        <div className="stats-header">
          <div className="stats-eyebrow">The Skill Matrix</div>
          <h2 className="stats-title">Stats &amp; Abilities</h2>
          <p className="stats-sub">
            Tap any skill to inspect the full breakdown. Most maxed at 99. A few
            still grinding XP.
          </p>
        </div>

        <div className="stats-body">
          {/* LEFT: skill grid */}
          <div className="skill-grid">
            {skillData.map((sk) => {
              const active = sk.id === selectedId;
              const pct = Math.round((sk.lvl / MAX) * 100);
              return (
                <div
                  key={sk.id}
                  className={`skill-card${active ? " active" : ""}`}
                  onClick={() => setSelectedId(sk.id)}
                  onMouseEnter={() => setSelectedId(sk.id)}
                >
                  <div className="skill-card-top">
                    <div
                      className="skill-glyph"
                      style={{
                        color: sk.color,
                        textShadow: `0 0 9px ${sk.color}`,
                      }}
                    >
                      {sk.glyph}
                    </div>
                    <div className="skill-meta">
                      <div className="skill-name">{sk.name}</div>
                      <div className="skill-lvl">
                        Lvl <span className="skill-lvl-num">{sk.lvl}</span>/
                        {MAX}
                      </div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: `${pct}%`,
                        background: `linear-gradient(90deg, ${sk.color}, ${sk.color2})`,
                      }}
                    />
                  </div>
                </div>
              );
            })}

            {/* Total Level card */}
            <div className="total-card">
              <div className="total-label">Total Level</div>
              <div className="total-num">{totalLevel}</div>
            </div>
          </div>

          {/* RIGHT: detail panel */}
          <div className="detail-panel">
            <div className="detail-head">
              <div
                className="detail-glyph"
                style={{
                  color: sel.color,
                  textShadow: `0 0 12px ${sel.color}`,
                }}
              >
                {sel.glyph}
              </div>
              <div>
                <div className="detail-name">{sel.name}</div>
                <div className="detail-role">{sel.role}</div>
              </div>
            </div>
            <div className="detail-content">
              <div className="detail-prof-row">
                <span className="detail-prof-label">PROFICIENCY</span>
                <span className="detail-prof-val">
                  {sel.lvl}
                  <span className="detail-prof-max">/{MAX}</span>
                </span>
              </div>
              <div className="detail-bar">
                <div
                  className="detail-bar-fill"
                  style={{
                    width: `${selPct}%`,
                    background: `linear-gradient(90deg, ${sel.color}, ${sel.color2})`,
                    boxShadow: `0 0 12px ${sel.color}`,
                  }}
                />
              </div>
              <p className="detail-desc">{sel.desc}</p>
              <div className="detail-toolkit-label">Toolkit</div>
              <div className="detail-tech">
                {sel.tech.map((t) => (
                  <span key={t} className="detail-tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
