import Navbar from "./components/Navbar";
import EventCard from "./components/EventCard";
import TrackCard from "./components/TrackCard";
import PreEvents from "./components/PreEvents";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Venue from "./components/Venue";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
function App() {
  return (
    <div>
      <Navbar />

      <main id="top">
        <section className="hero">
          <div className="hero-content">
            <p className="hero-label">IEEE SCT STUDENT BRANCH PRESENTS</p>

            <h1>
              DHYUTHI <span>7.0</span>
            </h1>

            <p className="hero-tagline">
              Where ideas ignite. Technology evolves.
            </p>

            <div className="hero-buttons">
              <a href="#events" className="primary-button">
                Explore Events
              </a>

              <a href="#about" className="secondary-button">
                Discover Dhyuthi
              </a>
            </div>
          </div>
        </section>
        <section className="about" id="about">
          <div className="section-label">01 — ABOUT</div>

          <div className="about-content">
            <h2 className="split-heading">
              <span className="highlight-text">A celebration of</span>
              <span className="muted-text"> technology & innovation.</span>
            </h2>

            <p>
              Dhyuthi is the flagship event of IEEE SCT Student Branch,
              bringing together students, technology enthusiasts, innovators,
              and creators through a series of engaging technical experiences.
            </p>
          </div>
        </section>
        <section className="events" id="events">
          <div className="section-label">02 — HIGHLIGHTS</div>

          <div className="events-header">
            <h2 className="split-heading">
              <span className="highlight-text">Something for</span>
              <span className="muted-text"> every kind of creator.</span>
            </h2>
          </div>

          <div className="events-grid">
            <EventCard
              number="01"
              title="Workshops"
              description="Learn, build and experiment with hands-on technical sessions."
            />

            <EventCard
              number="02"
              title="Competitions"
              description="Put your skills to the test through exciting technical challenges."
            />

            <EventCard
              number="03"
              title="Talks"
              description="Connect with ideas, perspectives and people shaping technology."
            />

            <EventCard
              number="04"
              title="Experiences"
              description="Explore interactive experiences designed around innovation."
            />
          </div>
        </section>
        <section className="tracks" id="tracks">
  <div className="section-label">03 — TRACKS</div>

  <div className="tracks-header">
    <h2 className="split-heading">
      <span className="highlight-text">Four directions.</span>
      <span className="muted-text"> One experience.</span>
    </h2>

    <p>
      Explore the different technical experiences that make up Dhyuthi 7.0.
    </p>
  </div>

  <div className="tracks-list">
    <TrackCard
      number="01"
      title="Track One"
      description="Official track details will be added here."
    />

    <TrackCard
      number="02"
      title="Track Two"
      description="Official track details will be added here."
    />

    <TrackCard
      number="03"
      title="Track Three"
      description="Official track details will be added here."
    />

    <TrackCard
      number="04"
      title="Track Four"
      description="Official track details will be added here."
    />
  </div>
</section>
<section className="schedule" id="schedule">
  <div className="section-label">04 — SCHEDULE</div>

  <div className="schedule-header">
    <h2 className="split-heading">
      <span className="highlight-text">Plan your</span>
      <span className="muted-text"> Dhyuthi experience.</span>
    </h2>
  </div>

  <div className="schedule-list">
    <div className="schedule-item">
      <span>09:00</span>
      <div>
        <h3>Registration</h3>
        <p>Check in and get ready for the day.</p>
      </div>
    </div>

    <div className="schedule-item">
      <span>10:00</span>
      <div>
        <h3>Opening Ceremony</h3>
        <p>The official beginning of Dhyuthi 7.0.</p>
      </div>
    </div>

    <div className="schedule-item">
      <span>11:00</span>
      <div>
        <h3>Events Begin</h3>
        <p>Workshops, competitions and experiences begin.</p>
      </div>
    </div>
  </div>
</section>
<Reveal>
  <PreEvents />
</Reveal>

<Reveal>
  <Gallery />
</Reveal>

<Reveal>
  <FAQ />
</Reveal>

<Reveal>
  <Venue />
</Reveal>

<Reveal>
  <Contact />
</Reveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;