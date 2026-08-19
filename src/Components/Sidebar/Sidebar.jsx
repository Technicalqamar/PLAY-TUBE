import './Sidebar.css'
import { NavLink } from 'react-router-dom'

const icons = {
  home: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h5v-6h4v6h5V9.5" />
    </svg>
  ),
  liked: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20.5s-7.5-4.7-9.3-9.1C1.4 8 3.2 4.5 6.7 4.5c2.1 0 3.7 1.2 4.3 2.3.6-1.1 2.2-2.3 4.3-2.3 3.5 0 5.3 3.5 4 6.9-1.8 4.4-9.3 9.1-9.3 9.1z" />
    </svg>
  ),
  history: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 2.5-6.3L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  mycontent: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
    </svg>
  ),
  collection: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12v18l-6-4-6 4z" />
    </svg>
  ),
  subscribers: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-3.5 3-5.5 6.5-5.5s6.5 2 6.5 5.5" />
      <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18.5 14.6c2 .9 3 2.5 3 4.4" />
    </svg>
  ),
  support: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2-3 4" />
      <path d="M12 17.5h.01" />
    </svg>
  ),
  settings: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
}

const renderItem = ({ id, label, path, icon }, onClose) =>
  path === '#' ? (
    <a
      key={id}
      href="#"
      className="nav-item"
      onClick={(e) => {
        e.preventDefault()
        onClose()
      }}
    >
      <span className="nav-icon">{icons[icon]}</span>
      <span className="nav-text">{label}</span>
    </a>
  ) : (
    <NavLink
      key={id}
      to={path}
      end={path === '/'}
      className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
      onClick={onClose}
    >
      <span className="nav-icon">{icons[icon]}</span>
      <span className="nav-text">{label}</span>
    </NavLink>
  )

export const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { id: 'home', label: 'Home', path: '/', icon: 'home' },
    { id: 'liked', label: 'Liked Videos', path: '#', icon: 'liked' },
    { id: 'history', label: 'History', path: '#', icon: 'history' },
    { id: 'mycontent', label: 'My Content', path: '#', icon: 'mycontent' },
    { id: 'collection', label: 'Saved Videos', path: '/saved', icon: 'collection' },
    { id: 'subscribers', label: 'Subscribers', path: '#', icon: 'subscribers' },
  ]

  const bottomItems = [
    { id: 'support', label: 'Support', path: '#', icon: 'support' },
    { id: 'settings', label: 'Settings', path: '#', icon: 'settings' },
  ]

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <nav className="sidebar-nav">
        <div className="nav-section">{menuItems.map((item) => renderItem(item, onClose))}</div>

        <div className="nav-section nav-section-bottom">
          {bottomItems.map((item) => renderItem(item, onClose))}
        </div>

        <div className="nav-footer">
          <p>© 2026 PLAY</p>
        </div>
      </nav>
    </div>
  )
}
