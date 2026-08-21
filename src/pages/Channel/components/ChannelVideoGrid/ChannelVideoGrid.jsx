import { Link } from 'react-router-dom'
import { Card } from '../../../../Components/Card/Card'
import './ChannelVideoGrid.css'

export const ChannelVideoGrid = ({ videos, channelName }) => {
  if (!videos || videos.length === 0) {
    return (
      <div className="ch-empty">
        <div className="ch-empty-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
            <path d="m10 8 6 4-6 4z" />
          </svg>
        </div>
        <h3 className="ch-empty-title">No videos yet</h3>
        <p className="ch-empty-text">
          {channelName} hasn&apos;t uploaded any videos yet.
        </p>
      </div>
    )
  }

  return (
    <div className="ch-videos">
      <div className="ch-videos-header">
        <h2 className="ch-videos-title">Videos</h2>
        <span className="ch-videos-count">{videos.length} videos</span>
      </div>
      <div className="videos-grid">
        {videos.map((video) => (
          <Link key={video.id} to={`/video/${video.id}`} className="card-link">
            <Card
              image={video.image}
              title={video.title}
              channel={video.channel}
              views={video.views}
              timestamp={video.timestamp}
              duration={video.duration}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
