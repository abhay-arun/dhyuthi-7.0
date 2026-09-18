function EventCard({ number, title, description }) {
  return (
    <article className="card-reveal event-card">
      <span className="event-number">{number}</span>

      <h3>{title}</h3>

      <p>{description}</p>
    </article>
  );
}

export default EventCard;