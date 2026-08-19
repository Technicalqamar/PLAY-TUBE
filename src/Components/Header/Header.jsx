import './Header.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Header = ({ onSearch, onMenuToggle }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    const q = searchQuery.trim()
    if (!q) return
    if (onSearch) onSearch(q)
    navigate(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <button
            type="button"
            className="menu-button"
            onClick={onMenuToggle}
            aria-label="Toggle navigation menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div
            className="logo"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/')}
            onKeyDown={(e) => e.key === 'Enter' && navigate('/')}
          >
            <span className="logo-mark">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5.14v13.72c0 .9.98 1.45 1.75.98l11.1-6.86a1.14 1.14 0 0 0 0-1.96L9.75 4.16A1.14 1.14 0 0 0 8 5.14z" />
              </svg>
            </span>
            <h1>PLAY</h1>
          </div>
        </div>

        <form className="search-form" onSubmit={handleSearch}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="search-icon">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Search videos, channels, playlists..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-submit" aria-label="Search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </form>

        <div className="header-actions">
          <button type="button" className="menu-dots" aria-label="More options">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="5" r="1.6" />
              <circle cx="12" cy="12" r="1.6" />
              <circle cx="12" cy="19" r="1.6" />
            </svg>
          </button>
          <button type="button" className="login-btn">
            Login
          </button>
          <button type="button" className="signup-btn">
            Sign up
          </button>
        </div>
      </div>
    </header>
  )
}
