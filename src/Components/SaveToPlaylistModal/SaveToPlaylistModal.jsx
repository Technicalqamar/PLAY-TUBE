import { useState } from 'react'
import './SaveToPlaylistModal.css'

const DEFAULT_PLAYLISTS = [
  'Beat Mode',
  "Triple I's 36",
  'Hype Beats',
  'Good Vibes',
  'Rap Caviar',
]

export const SaveToPlaylistModal = ({ isOpen, onClose, videoTitle }) => {
  const [playlists, setPlaylists] = useState(DEFAULT_PLAYLISTS)
  const [selected, setSelected] = useState(new Set())
  const [newName, setNewName] = useState('')

  if (!isOpen) return null

  const toggle = (name) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })
  }

  const handleCreate = () => {
    const name = newName.trim()
    if (!name || playlists.includes(name)) {
      setNewName('')
      return
    }
    setPlaylists((prev) => [...prev, name])
    setSelected((prev) => new Set([...prev, name]))
    setNewName('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleCreate()
    }
  }

  return (
    <div className="stpm-overlay" onClick={onClose} role="presentation">
      <div
        className="stpm"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Save to playlist"
      >
        <div className="stpm-header">
          <h2 className="stpm-title">Save to playlist</h2>
          <button
            type="button"
            className="stpm-close"
            onClick={onClose}
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {videoTitle && (
          <p className="stpm-video-label">Saving: <span>{videoTitle}</span></p>
        )}

        <ul className="stpm-list">
          {playlists.map((name) => (
            <li key={name} className="stpm-item">
              <label className="stpm-label">
                <span
                  className={`stpm-checkbox ${selected.has(name) ? 'checked' : ''}`}
                  onClick={() => toggle(name)}
                  role="checkbox"
                  aria-checked={selected.has(name)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault()
                      toggle(name)
                    }
                  }}
                >
                  {selected.has(name) && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </span>
                <span className="stpm-name">{name}</span>
              </label>
            </li>
          ))}
        </ul>

        <div className="stpm-create">
          <input
            type="text"
            className="stpm-input"
            placeholder="Enter playlist name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            type="button"
            className="stpm-create-btn"
            onClick={handleCreate}
          >
            Create New Playlist
          </button>
        </div>
      </div>
    </div>
  )
}
