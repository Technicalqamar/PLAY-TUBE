import { useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { Header } from './Components/Header/Header'
import { Sidebar } from './Components/Sidebar/Sidebar'
import { Home } from './pages/Home/Home'
import { Search } from './pages/Search/Search'
import { VideoPlayer } from './pages/VideoPlayer/VideoPlayer'
import { Saved } from './pages/Saved/Saved'
import './app.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <div className="app-shell">
      <Header onMenuToggle={() => setSidebarOpen((open) => !open)} />

      <div className="app-body">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        {sidebarOpen && <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />}

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search key={location.search} />} />
            <Route path="/video/:id" element={<VideoPlayer />} />
            <Route path="/saved" element={<Saved />} />
          </Routes>
        </main>
      </div>

      <nav className="mobile-bottom-nav">
        <button type="button" className={`bottom-nav-item ${isActive('/') ? 'active' : ''}`} onClick={() => navigate('/')}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 10.5 12 3l9 7.5" />
            <path d="M5 9.5V21h5v-6h4v6h5V9.5" />
          </svg>
          <span>Home</span>
        </button>
        <button type="button" className="bottom-nav-item" onClick={() => navigate('/search?q=history')}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 1 0 2.5-6.3L3 8" />
            <path d="M3 3v5h5" />
            <path d="M12 7v5l3 2" />
          </svg>
          <span>History</span>
        </button>
        <button type="button" className={`bottom-nav-item ${isActive('/saved') ? 'active' : ''}`} onClick={() => navigate('/saved')}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 3h12v18l-6-4-6 4z" />
          </svg>
          <span>Collection</span>
        </button>
        <button type="button" className="bottom-nav-item" onClick={() => navigate('/search?q=subscribers')}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="8" r="3.5" />
            <path d="M2.5 20c0-3.5 3-5.5 6.5-5.5s6.5 2 6.5 5.5" />
            <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18.5 14.6c2 .9 3 2.5 3 4.4" />
          </svg>
          <span>Subscribers</span>
        </button>
      </nav>
    </div>
  )
}

export default App
