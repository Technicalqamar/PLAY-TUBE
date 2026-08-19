import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './Components/Header/Header'
import { Sidebar } from './Components/Sidebar/Sidebar'
import { Home } from './pages/Home/Home'
import { Search } from './pages/Search/Search'
import { VideoPlayer } from './pages/VideoPlayer/VideoPlayer'
import { Saved } from './pages/Saved/Saved'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

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
    </div>
  )
}

export default App
