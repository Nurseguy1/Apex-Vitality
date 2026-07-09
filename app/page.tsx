const services = [
  {
    title: "Weight loss for men and women",
    copy: "Medical weight-management visits for adults, including GLP-1 eligibility review, lifestyle strategy, side-effect education, and follow-up support.",
  },
  {
    title: "Testosterone care for men",
    copy: "Telehealth evaluation for low energy, libido changes, strength, mood, sleep, and other symptoms that may be related to low testosterone.",
  },
  {
    title: "Men's health optimization",
    copy: "A practical plan for men who want to improve performance, vitality, body composition, and long-term health with clinician guidance.",
  },
];

const steps = [
  {
    title: "Measure",
    copy: "Start with your goals, symptoms, medical history, and baseline lab markers.",
  },
  {
    title: "Personalize",
    copy: "Review options with a clinician and choose a plan that fits your health profile.",
  },
  {
    title: "Optimize",
    copy: "Begin treatment only when appropriate, with clear guidance and expectations.",
  },
  {
    title: "Track",
    copy: "Monitor progress, labs, side effects, and dose adjustments over time.",
  },
];

const highlights = [
  "Weight loss for adults",
  "Clinician-guided",
  "Testosterone-focused",
  "Telehealth visits",
];

const biomarkers = [
  "A1C and glucose",
  "Weight-loss eligibility",
  "Thyroid",
  "Lipids",
  "Testosterone",
  "Liver and kidney health",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Apex Vitality home">
          <span className="brand-mark">A</span>
          <span>Apex Vitality</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#programs">Care</a>
          <a href="#labs">Labs</a>
          <a href="#process">Method</a>
          <a href="#visit">Start</a>
        </nav>
        <a className="header-action" href="#visit">
          Book consult
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Telehealth weight loss and men's health</p>
          <h1>Medical weight loss for men and women. Testosterone care for men.</h1>
          <p className="hero-lede">
            Apex Vitality helps men and women pursue medical weight loss with
            clinician-led telehealth care, then supports men with focused
            testosterone evaluation and men's health optimization.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#visit">
              Book private consult
            </a>
            <a className="secondary-button" href="#programs">
              View programs
            </a>
          </div>
          <div className="trust-row" aria-label="Clinic highlights">
            {highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Telehealth consultation">
          <img
            src="/telehealth-consult.png"
            alt="Man and woman meeting with a clinician through a secure telehealth visit"
          />
          <div className="visit-card">
            <span>Private telehealth</span>
            <strong>Weight loss or men's health consult</strong>
            <p>Health history, goals, labs, and treatment-fit review.</p>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Clinic proof points">
        <div>
          <strong>Adults</strong>
          <span>medical weight loss for men and women</span>
        </div>
        <div>
          <strong>Men</strong>
          <span>testosterone evaluation and men's health optimization</span>
        </div>
        <div>
          <strong>Labs</strong>
          <span>screening and follow-up when clinically appropriate</span>
        </div>
      </section>

      <section className="service-band" id="programs">
        <div className="section-heading">
          <p className="eyebrow">Focused care paths</p>
          <h2>Simple, specific, medically guided.</h2>
          <p>
            No oversized menu of treatments. Just focused telehealth care for
            medical weight loss for adults, plus testosterone and men's health
            for men.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lab-section" id="labs">
        <div className="lab-copy">
          <p className="eyebrow">Labs and screening</p>
          <h2>Use the right data before starting treatment.</h2>
          <p>
            When labs are appropriate, your clinician can review key markers
            that help connect weight, metabolic patterns, treatment
            eligibility, and testosterone status. The goal is practical
            clarity, not a wall of numbers.
          </p>
        </div>
        <div className="marker-grid" aria-label="Example biomarker categories">
          {biomarkers.map((marker) => (
            <span key={marker}>{marker}</span>
          ))}
        </div>
      </section>

      <section className="split-section" id="process">
        <div>
          <p className="eyebrow">The method</p>
          <h2>Measure, personalize, optimize, track.</h2>
          <p>
            A premium, focused telehealth experience built around clear
            screening, appropriate treatment, and follow-through.
          </p>
        </div>
        <ol className="step-list">
          {steps.map((step) => (
            <li key={step.title}>
              <strong>{step.title}</strong>
              <span>{step.copy}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-copy">
          <p className="eyebrow">Start online</p>
          <h2>Book a confidential optimization consult.</h2>
          <p>
            Share your goals, symptoms, medications, and health history. A
            clinician will help determine whether GLP-1 weight-loss care, labs,
            testosterone evaluation, or a non-medication plan may be a fit for
            your goals.
          </p>
        </div>
        <form className="intake-form">
          <label>
            Full name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Main interest
            <select name="interest" defaultValue="">
              <option value="" disabled>
                Choose one
              </option>
              <option>Weight loss for men and women</option>
              <option>Testosterone care for men</option>
              <option>Men's health optimization</option>
              <option>Not sure yet</option>
            </select>
          </label>
          <button type="submit">Request visit</button>
          <p className="form-note">
            This demo form does not submit medical information. Treatment is
            available only when clinically appropriate and permitted in your
            location.
          </p>
        </form>
      </section>

      <footer>
        <strong>Apex Vitality</strong>
        <p>
          Telehealth men's health and medical weight-loss services for adults.
          This website is educational and does not replace medical advice,
          diagnosis, or emergency care.
        </p>
      </footer>
    </main>
  );
}
