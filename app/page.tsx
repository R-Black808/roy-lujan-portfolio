import ElectricBorder from "./components/ElectricBorder";

const projects = [
  {
    index: "01",
    type: "Commerce system",
    title: "RetroHall Retail POS",
    summary:
      "A retail operating system that connects customer-facing workflows, persistent data, and payment setup in one product foundation.",
    proof: "11 commits · active build",
    stack: ["TypeScript", "Supabase", "Stripe"],
    href: "https://github.com/R-Black808/RetroHall-retail-pos",
    featured: true,
  },
  {
    index: "02",
    type: "Creative tool",
    title: "CA Vibe",
    summary:
      "A focused lyric-generation experience designed for fast creative iteration and a clear, low-friction interface.",
    proof: "TypeScript product UI",
    stack: ["TypeScript", "React", "Tailwind"],
    href: "https://github.com/R-Black808/CA_Vibe",
  },
  {
    index: "03",
    type: "Data utility",
    title: "Weather Wizard",
    summary:
      "A practical weather application joining web presentation, server-side PHP, subscriptions, and structured SQL data.",
    proof: "Full-stack fundamentals",
    stack: ["HTML", "PHP", "SQL"],
    href: "https://github.com/R-Black808/Weather_wizard",
  },
];

const capabilities = [
  ["Product engineering", "Ambiguity → shipped workflows"],
  ["Full-stack delivery", "React · PHP · SQL · Supabase"],
  ["Payments & data", "Stripe · relational systems"],
  ["Engineering range", "TypeScript · Java · Git"],
];

export default function Home() {
  return (
    <main id="top">
      <div className="shell">
        <header className="topbar">
          <a className="brand" href="#top" aria-label="Roy Lujan home">
            <span className="brandMark" aria-hidden="true">RL</span>
            <span>Roy Lujan</span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#about">About</a>
          </nav>
          <a className="availability" href="https://github.com/R-Black808" target="_blank" rel="noreferrer">
            <span aria-hidden="true" /> Open to opportunities
          </a>
        </header>

        <section className="hero" aria-labelledby="hero-title">
          <div className="heroCopy">
            <p className="eyebrow">Software engineer · product-minded builder</p>
            <h1 id="hero-title">
              I turn ambiguous ideas into <em>reliable, useful software.</em>
            </h1>
            <p className="lead">
              I build across the product stack—from interface and workflows to data and payments—so teams get software that is clear for users and practical for the business behind it.
            </p>
            <div className="actions">
              <a className="button primary" href="#work">Explore my work <span aria-hidden="true">↘</span></a>
              <a className="button" href="https://github.com/R-Black808" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <ElectricBorder color="#84CC16" speed={1} chaos={0.12} thickness={2} borderRadius={18} className="electric-system">
            <aside className="systemMap" aria-label="Full-stack product architecture">
              <p className="mapLabel">SYSTEMS / PRODUCT MAP</p>
              <div className="mapGrid">
                <div className="node nodeOne"><strong>Experience layer</strong><span>React · TypeScript</span></div>
                <div className="node nodeTwo"><strong>Business logic</strong><span>Product workflows</span></div>
                <div className="node nodeThree"><strong>Data layer</strong><span>Supabase · SQL</span></div>
                <div className="node nodeFour"><strong>Revenue layer</strong><span>Stripe integration</span></div>
                <div className="wire horizontal" aria-hidden="true" />
                <div className="wire vertical" aria-hidden="true" />
                <div className="hub" aria-hidden="true">SHIP</div>
              </div>
              <div className="signal" aria-hidden="true"><i /><i /><i /></div>
            </aside>
          </ElectricBorder>
        </section>

        <section className="proofStrip" id="capabilities" aria-label="Core engineering capabilities">
          {capabilities.map(([title, detail]) => (
            <div className="proof" key={title}>
              <strong>{title}</strong>
              <span>{detail}</span>
            </div>
          ))}
        </section>

        <section className="work" id="work" aria-labelledby="work-title">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="work-title">Systems with a reason to exist.</h2>
            </div>
            <p className="sectionNote">03 builds / product, platform, utility</p>
          </div>
          <div className="projectGrid">
            {projects.map((project) => (
              <ElectricBorder color="#84CC16" speed={1} chaos={0.12} thickness={2} borderRadius={14} className="electric-project" key={project.title}>
                <a
                  className={`project${project.featured ? " featured" : ""}`}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <div className="projectTop">
                    <span>{project.index} / {project.type}</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="projectProof">{project.proof}</div>
                  <div className="stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                </a>
              </ElectricBorder>
            ))}
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <p className="eyebrow">What I bring</p>
          <div className="aboutGrid">
            <h2 id="about-title">More than a list of technologies.</h2>
            <div>
              <p>I approach software as a connected system: the user experience, the data model, the business rules, and the path to delivery all matter.</p>
              <p>My work spans modern TypeScript products, relational data, payments, PHP utilities, and Java cryptography coursework—range I use to choose practical solutions instead of forcing every problem into one stack.</p>
            </div>
          </div>
          <div className="principles">
            <span>01 · Understand the real problem</span>
            <span>02 · Design the system clearly</span>
            <span>03 · Ship, learn, improve</span>
          </div>
        </section>

        <section className="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Let&apos;s build something useful</p>
          <h2 id="contact-title">Have a product, role, or difficult problem in mind?</h2>
          <a className="button primary" href="https://github.com/R-Black808" target="_blank" rel="noreferrer">Start on GitHub <span aria-hidden="true">↗</span></a>
        </section>

        <footer>
          <span><strong>Roy Lujan</strong> · Software Engineer</span>
          <span>TypeScript · React · Supabase · SQL · Java</span>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </div>
    </main>
  );
}
