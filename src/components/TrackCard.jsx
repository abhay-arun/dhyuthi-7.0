function TrackCard({ number, title, description }) {
  return (
    <article className="card-reveal track-card">
      <span className="track-number">{number}</span>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <span className="track-arrow">↗</span>
    </article>
  );
}

export default TrackCard;