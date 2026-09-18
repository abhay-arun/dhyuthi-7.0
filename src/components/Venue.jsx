function Venue() {
  return (
    <section className="venue" id="venue">
      <div className="section-label">08 — VENUE</div>

      <div className="venue-content">
        <div>
          <h2 className="split-heading">
            <span className="highlight-text">Meet us</span>
            <span className="muted-text"> in person.</span>
          </h2>
          <p className="centered-copy">
            Dhyuthi 7.0 will bring together students, creators and technology
            enthusiasts for an immersive experience.
          </p>
        </div>

        <div className="venue-map-card">
          <div className="venue-map-header">
            <h3>SCT Campus</h3>
            <a
              href="https://maps.google.com/?q=Sree+Chitra+Thirunal+College+of+Engineering+Thiruvananthapuram"
              target="_blank"
              rel="noreferrer"
            >
              Open in Maps ↗
            </a>
          </div>

          <iframe
            title="SCT Campus map"
            src="https://www.google.com/maps?q=Sree%20Chitra%20Thirunal%20College%20of%20Engineering%20Thiruvananthapuram&z=15&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export default Venue;