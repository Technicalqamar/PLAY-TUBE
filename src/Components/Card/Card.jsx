import './Card.css'

export const Card = ({
  image,
  title = 'Card Title',
  description = '',
  channel = 'Channel Name',
  views = '1.2M views',
  timestamp = '2 days ago',
  duration = '12:34',
  className = '',
}) => {
  const avatarLetter = (channel || '?').trim().charAt(0).toUpperCase()

  return (
    <article className={`card ${className}`}>
      <div className="card-thumb">
        {image ? (
          <img src={image} alt={title} className="card-thumb-image" loading="lazy" />
        ) : (
          <div className="card-thumb-placeholder" />
        )}
        <span className="card-duration">{duration}</span>
      </div>

      <div className="card-body">
        <span className="card-avatar" aria-hidden="true">
          {avatarLetter}
        </span>
        <div className="card-info">
          <h3 className="card-title">{title}</h3>
          {description && <p className="card-description">{description}</p>}
          <p className="card-channel">{channel}</p>
          <p className="card-meta">
            <span className="card-views">{views}</span>
            <span className="card-dot">•</span>
            <span className="card-timestamp">{timestamp}</span>
          </p>
        </div>
      </div>
    </article>
  )
}
