import "./Experience.css";

type Exp = {
  id: string;
  type: "Experience" | "Education";
  role: string;
  org: string;
  date: string;
  body: string[];
  tags: string[];
  node: string;
  link: { label: string; href: string } | null;
};

const experienceData: Exp[] = [
  {
    id: "mobot",
    type: "Experience",
    role: "AI Test Engineer",
    org: "Mobot",
    date: "2024 \u2014 Present",
    body: [
      "Operate a production AI agent running test specs across 270+ physical devices for enterprise clients including DoorDash and Citizen.",
      "Built a Python integration that cut roughly 2 hours of manual setup per run.",
      "Promoted to Senior QA. One of 11 on the team.",
    ],
    tags: ["AI Agents", "Python", "Test Automation"],
    node: "#8be06a",
    link: { label: "Mobot \u2197", href: "https://www.mobot.io" },
  },
  {
    id: "qc",
    type: "Education",
    role: "B.A. Computer Science",
    org: "CUNY Queens College",
    date: "Graduated July 2024",
    body: [
      "Bachelor of Arts in Computer Science.",
      "Foundations across software engineering, algorithms, data structures and systems.",
    ],
    tags: ["Computer Science", "Class of 2024"],
    node: "#7cc4ff",
    link: null,
  },
];

function Experience() {
  return (
    <section id="experience" className="exp">
      <div className="exp-inner">
        <div className="exp-header">
          <div className="exp-eyebrow">The Adventurer&rsquo;s Log</div>
          <h2 className="exp-title">Experience &amp; Lore</h2>
          <p className="exp-sub">
            The roles and training that levelled me up. Newest first.
          </p>
        </div>

        <div className="exp-timeline">
          {experienceData.map((x) => {
            const isEdu = x.type === "Education";
            return (
              <div key={x.id} className="exp-card">
                <div
                  className="exp-node"
                  style={{
                    background: x.node,
                    boxShadow: `0 0 11px ${x.node}, inset 0 0 0 3px #15100a`,
                  }}
                />
                <div className="exp-card-head">
                  <span
                    className="exp-type"
                    style={{
                      color: x.node,
                      background: isEdu
                        ? "rgba(124,196,255,.1)"
                        : "rgba(139,224,106,.1)",
                      border: `1px solid ${isEdu ? "#234450" : "#2f4a2a"}`,
                    }}
                  >
                    {x.type}
                  </span>
                  <span className="exp-date">{x.date}</span>
                </div>
                <div className="exp-role">{x.role}</div>
                <div className="exp-org">{x.org}</div>
                <ul className="exp-body">
                  {x.body.map((line, i) => (
                    <li key={i} className="exp-line">
                      <span className="exp-bullet">◆</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="exp-tags">
                  {x.tags.map((t) => (
                    <span key={t} className="exp-tag">
                      {t}
                    </span>
                  ))}
                  {x.link && (
                    <a
                      className="exp-link"
                      href={x.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {x.link.label}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
