import { Link } from 'react-router-dom'
import { Card } from '../../Components/Card/Card'
import { homeVideos } from '../../data/media'
import './Saved.css'

const savedVideoIds = [1, 3, 6, 7, 10, 12]
const savedVideos = homeVideos.filter((v) => savedVideoIds.includes(v.id))

export const Saved = () => {
  if (savedVideos.length === 0) {
    return (
      <div className="saved">
        <div className="saved-empty">
          <div className="saved-empty-icon">
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h2>No saved videos yet</h2>
          <p>Save videos to watch them later. They'll show up here.</p>
          <Link to="/" className="saved-empty-btn">Browse videos</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="saved">
      <div className="saved-header">
        <h2 className="saved-heading">Saved Videos</h2>
        <span className="saved-count">{savedVideos.length} videos</span>
      </div>
      <div className="videos-grid">
        {savedVideos.map((video) => (
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
