import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card } from '../../Components/Card/Card'
import { SaveToPlaylistModal } from '../../Components/SaveToPlaylistModal/SaveToPlaylistModal'
import { getVideoById, homeVideos } from '../../data/media'
import './VideoPlayer.css'

export const VideoPlayer = () => {
  const { id } = useParams()
  const video = getVideoById(id)

  const [liked, setLiked] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [descExpanded, setDescExpanded] = useState(false)
  const [saveModalOpen, setSaveModalOpen] = useState(false)

  if (!video) {
    return (
      <div className="vp-not-found">
        <div className="vp-not-found-icon">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M15 9l-6 6M9 9l6 6" />
          </svg>
        </div>
        <h2>Video not found</h2>
        <p>The video you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="vp-not-found-btn">Back to Home</Link>
      </div>
    )
  }

  const related = homeVideos.filter((v) => v.id !== video.id)
  const avatarLetter = video.channel.charAt(0).toUpperCase()

  return (
    <div className="vp">
      <div className="vp-layout">
        <div className="vp-main">
          <div className="vp-player">
            <img src={video.image} alt={video.title} className="vp-player-poster" />
            <div className="vp-player-overlay">
              <button type="button" className="vp-play-btn" aria-label="Play video">
                <svg width="52" height="52" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5.14v13.72c0 .9.98 1.45 1.75.98l11.1-6.86a1.14 1.14 0 0 0 0-1.96L9.75 4.16A1.14 1.14 0 0 0 8 5.14z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="vp-info">
            <h1 className="vp-title">{video.title}</h1>
            <p className="vp-meta">
              <span>{video.views}</span>
              <span className="vp-meta-dot">·</span>
              <span>{video.timestamp}</span>
            </p>
          </div>

          <div className="vp-actions">
            <button
              type="button"
              className={`vp-action-btn ${liked ? 'active' : ''}`}
              onClick={() => setLiked(!liked)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 22V11l-5-1v10a2 2 0 0 0 2 2h3zm0 0h10a3 3 0 0 0 3-2.8l1.2-8A2 2 0 0 0 19.2 7H14l.7-3.2a2 2 0 0 0-1.9-2.6H7" />
              </svg>
              <span>{video.likes || '12K'}</span>
            </button>
            <button type="button" className="vp-action-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 2v11h5l-5 11V12H7" />
              </svg>
              <span>Dislike</span>
            </button>
            <button type="button" className="vp-action-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
              </svg>
              <span>Share</span>
            </button>
            <button type="button" className="vp-action-btn" onClick={() => setSaveModalOpen(true)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                <polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" />
              </svg>
              <span>Save</span>
            </button>
          </div>

          <div className="vp-channel">
            <div className="vp-channel-avatar">{avatarLetter}</div>
            <div className="vp-channel-info">
              <h3 className="vp-channel-name">{video.channel}</h3>
              <p className="vp-channel-subs">{video.subscribers || '50K'} subscribers</p>
            </div>
            <button
              type="button"
              className={`vp-subscribe-btn ${subscribed ? 'subscribed' : ''}`}
              onClick={() => setSubscribed(!subscribed)}
            >
              {subscribed ? 'Subscribed' : 'Subscribe'}
            </button>
          </div>

          <div className={`vp-description ${descExpanded ? 'expanded' : ''}`}>
            <p>{video.description}</p>
            <button
              type="button"
              className="vp-desc-toggle"
              onClick={() => setDescExpanded(!descExpanded)}
            >
              {descExpanded ? 'Show less' : '...more'}
            </button>
          </div>

          <div className="vp-comments">
            <h3 className="vp-comments-title">Comments</h3>
            <div className="vp-comment">
              <div className="vp-comment-avatar">A</div>
              <div className="vp-comment-body">
                <p className="vp-comment-author">Alex Chen <span>2 hours ago</span></p>
                <p className="vp-comment-text">This is exactly the kind of content I've been looking for. Super helpful and well explained. Subscribed!</p>
              </div>
            </div>
            <div className="vp-comment">
              <div className="vp-comment-avatar">M</div>
              <div className="vp-comment-body">
                <p className="vp-comment-author">Maya Patel <span>5 hours ago</span></p>
                <p className="vp-comment-text">Great breakdown. Would love to see a follow-up video diving deeper into the advanced patterns.</p>
              </div>
            </div>
            <div className="vp-comment">
              <div className="vp-comment-avatar">J</div>
              <div className="vp-comment-body">
                <p className="vp-comment-author">Jordan Lee <span>1 day ago</span></p>
                <p className="vp-comment-text">Bookmarked this. Sharing with my whole dev team. Thanks for putting this together!</p>
              </div>
            </div>
          </div>
        </div>

        <aside className="vp-related">
          <h3 className="vp-related-title">Related Videos</h3>
          {related.map((v) => (
            <Link key={v.id} to={`/video/${v.id}`} className="vp-related-card">
              <div className="vp-related-thumb">
                <img src={v.image} alt={v.title} loading="lazy" />
                <span className="vp-related-duration">{v.duration}</span>
              </div>
              <div className="vp-related-info">
                <h4 className="vp-related-name">{v.title}</h4>
                <p className="vp-related-channel">{v.channel}</p>
                <p className="vp-related-meta">{v.views} · {v.timestamp}</p>
              </div>
            </Link>
          ))}
        </aside>
      </div>

      <div className="vp-mobile-related">
        <h3 className="vp-related-title">Related Videos</h3>
        <div className="videos-grid">
          {related.map((v) => (
            <Card
              key={v.id}
              image={v.image}
              title={v.title}
              channel={v.channel}
              views={v.views}
              timestamp={v.timestamp}
              duration={v.duration}
            />
          ))}
        </div>
      </div>

      <SaveToPlaylistModal
        isOpen={saveModalOpen}
        onClose={() => setSaveModalOpen(false)}
        videoTitle={video.title}
      />
    </div>
  )
}
