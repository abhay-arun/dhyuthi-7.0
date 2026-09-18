function PreEvents() {
  const events = [
    {
      number: "01",
      title: "Pre-Event One",
      description: "Official pre-event details will be added here.",
    },
    {
      number: "02",
      title: "Pre-Event Two",
      description: "Official pre-event details will be added here.",
    },
    {
      number: "03",
      title: "Pre-Event Three",
      description: "Official pre-event details will be added here.",
    },
  ];

  return (
    <section className="pre-events" id="pre-events">
      <div className="section-label">05 — PRE-EVENTS</div>

      <div className="pre-events-header">
        <h2 className="split-heading pre-events-title">
          <span className="highlight-text">The experience</span>
          <span className="muted-text"> starts early.</span>
        </h2>

        <p className="centered-copy">
          Get involved before the main event through Dhyuthi's pre-event
          experiences.
        </p>
      </div>

      <div className="pre-events-grid">
        {events.map((event) => (
          <article className="pre-event-card" key={event.number}>
            <span>{event.number}</span>

            <div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PreEvents;