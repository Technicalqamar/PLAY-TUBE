import { useState } from 'react'
import './ChannelInfo.css'

export const ChannelInfo = ({ channel }) => {
  const [subscribed, setSubscribed] = useState(false)
  const avatarLetter = channel.name.charAt(0).toUpperCase()

  return (
    <div className="ch-info">
      <div className="ch-info-avatar">
        {avatarLetter}
      </div>

      <div className="ch-info-body">
        <div className="ch-info-header">
          <div className="ch-info-name-row">
            <h1 className="ch-info-name">{channel.name}</h1>
            <span className="ch-info-verified" title="Verified">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1l3.09 3.09L18.18 1l1.73 5.18L25 10l-5.09 3.09L21.82 19l-5.18 1.73L15 25l-3.09-5.09L8.82 26l-1.73-5.18L2 19l5.09-3.09L5.36 10l5.18-1.73z" transform="scale(0.83) translate(2,2)" />
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </span>
          </div>
          <p className="ch-info-handle">
            {channel.name} · {channel.subscribers} subscribers · {channel.videoCount} videos
          </p>
        </div>

        <p className="ch-info-description">{channel.description}</p>

        <div className="ch-info-actions">
          <button
            type="button"
            className={`ch-info-subscribe ${subscribed ? 'ch-info-subscribed' : ''}`}
            onClick={() => setSubscribed(!subscribed)}
          >
            {subscribed ? 'Subscribed' : 'Subscribe'}
          </button>
          <button type="button" className="ch-info-bell" aria-label="Notifications">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
