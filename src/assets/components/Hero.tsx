import "./Hero.css";

function Hero() {
  const embers = Array.from({ length: 16 }, () => ({
    left: Math.random() * 100,
    size: 3 + Math.random() * 5,
    drift: (Math.random() - 0.5) * 80,
    dur: 4 + Math.random() * 4,
    delay: Math.random() * 6,
  }));
  return (
    <section id="hero" className="hero">
      <div className="swe-container">
        <span className="dot"></span>
        <p className="swe-title">Software Engineer · Combat Level 126</p>
      </div>

      <p className="hi">Hi! I'm</p>
      <h1 className="hero-title">Khaled Ahmed</h1>
      <p className="my-bio">
        I love this. The ability to create anything I imagine, then actually
        ship it. Native apps, AI agents, full-stack platforms. AI is a tool I
        wield to amplify my craft, not a shortcut around it.
      </p>

      <div>
        <button className="project-button">
          <div className="sweep"></div>
          <p className="project-button-title">Login</p>
          <p className="project-button-subtitle">View Projects</p>
        </button>

        <button className="contact-me-button">
          <p className="contact-me-button-title">Create Account</p>
          <p className="contact-me-button-subtitle">Contact Me</p>
        </button>
      </div>

      <div className="ember-layer">
        {embers.map((e, i) => (
          <div
            key={i}
            className="ember"
            style={{
              left: `${e.left}%`,
              width: `${e.size}px`,
              height: `${e.size}px`,
              ["--dx" as string]: `${e.drift}px`,
              animationDuration: `${e.dur}s`,
              animationDelay: `${e.delay}s`,
            }}
          />
        ))}
      </div>
      <div className="flame-glow"></div>
    </section>
  );
}

export default Hero;
