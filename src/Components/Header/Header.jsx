import './Header.css'
import { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const getInitialTheme = () => {
  try {
    const stored = localStorage.getItem('playtube-theme')
    if (stored === 'light' || stored === 'dark') return stored
  } catch { /* ignore */ }
  return 'dark'
}

export const Header = ({ onSearch, onMenuToggle }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const [dotsOpen, setDotsOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)
  const dotsRef = useRef(null)
  const navigate = useNavigate()

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', next)
      try { localStorage.setItem('playtube-theme', next) } catch { /* ignore */ }
      return next
    })
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', getInitialTheme())
  }, [])

  useEffect(() => {
    if (!dotsOpen) return
    const handleClick = (e) => {
      if (dotsRef.current && !dotsRef.current.contains(e.target)) {
        setDotsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [dotsOpen])

  const handleSearch = (e) => {
    e.preventDefault()
    const q = searchQuery.trim()
    if (!q) return
    if (onSearch) onSearch(q)
    navigate(`/search?q=${encodeURIComponent(q)}`)
    setMobileSearchOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div
            className="logo"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/')}
            onKeyDown={(e) => e.key === 'Enter' && navigate('/')}
          >
            <span className="logo-mark">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5.14v13.72c0 .9.98 1.45 1.75.98l11.1-6.86a1.14 1.14 0 0 0 0-1.96L9.75 4.16A1.14 1.14 0 0 0 8 5.14z" />
              </svg>
            </span>
            <h1>PlayTube</h1>
          </div>
        </div>

        <div className={`mobile-search-overlay ${mobileSearchOpen ? 'open' : ''}`}>
          <form className="mobile-search-form" onSubmit={handleSearch}>
            <button type="button" className="mobile-search-back" onClick={() => setMobileSearchOpen(false)} aria-label="Close search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <input
              type="text"
              className="mobile-search-input"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus={mobileSearchOpen}
            />
            <button type="submit" className="mobile-search-submit" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </form>
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
          <button type="button" className="mobile-search-btn" onClick={() => setMobileSearchOpen(true)} aria-label="Search">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>

          <div className="dots-wrapper" ref={dotsRef}>
            <button type="button" className="menu-dots" aria-label="More options" onClick={() => setDotsOpen((o) => !o)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="5" r="1.6" />
                <circle cx="12" cy="12" r="1.6" />
                <circle cx="12" cy="19" r="1.6" />
              </svg>
            </button>
            <div className="dots-dropdown dots-dropdown--mobile-only">
              <button type="button" className="dots-dropdown-item" onClick={() => { setDotsOpen(false) }}>Login</button>
              <button type="button" className="dots-dropdown-item dots-dropdown-accent" onClick={() => { setDotsOpen(false) }}>Sign up</button>
              <div className="dots-dropdown-divider" />
              <button type="button" className="dots-dropdown-item" onClick={() => { toggleTheme(); setDotsOpen(false) }}>
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>

          <button type="button" className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button type="button" className="login-btn">
            Login
          </button>
          <button type="button" className="signup-btn">
            Sign up
          </button>

          <button
            type="button"
            className="menu-button menu-button-right"
            onClick={onMenuToggle}
            aria-label="Toggle navigation menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
