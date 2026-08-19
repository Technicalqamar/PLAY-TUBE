import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Card } from '../../Components/Card/Card'
import { searchVideos } from '../../data/media'
import './Search.css'

export const Search = ({ searchQuery: initialQuery }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query] = useState(initialQuery ?? searchParams.get('q') ?? '')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [results, setResults] = useState([])
  const [completedQuery, setCompletedQuery] = useState('')

  const trimmedQuery = query.trim()
  const isSearching = trimmedQuery !== '' && trimmedQuery !== completedQuery

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 250)
    return () => clearTimeout(timer)
  }, [query])

  useEffect(() => {
    const q = debouncedQuery.trim()
    const timer = setTimeout(
      () => {
        if (!q) {
          setResults([])
          setCompletedQuery('')
          return
        }
        setResults(searchVideos(q))
        setCompletedQuery(q)
      },
      q ? 300 : 0,
    )
    return () => clearTimeout(timer)
  }, [debouncedQuery])

  return (
    <div className="search">
      {isSearching ? (
        <div className="loading-state">
          <div className="loader" />
          <p>Searching PLAY...</p>
        </div>
      ) : trimmedQuery === '' ? (
        <div className="empty-state">
          <div className="empty-icon">
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>
          <h2>What do you want to watch?</h2>
          <p>Search for videos, channels, or playlists to get started.</p>
        </div>
      ) : results.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M10.3 4.3a4 4 0 0 1 5.6 5.6M8 8a4 4 0 0 0 5.6 5.6M3 3l18 18" />
            </svg>
          </div>
          <h2>No results found</h2>
          <p>
            We couldn't find anything for <strong>"{trimmedQuery}"</strong>.
          </p>
          <p>Try different keywords or check the spelling.</p>
          <button
            type="button"
            className="empty-action"
            onClick={() => setSearchParams({}, { replace: true })}
          >
            Clear search
          </button>
        </div>
      ) : (
        <>
          <div className="results-heading">
            <h2>
              Search results for <span className="results-query">"{trimmedQuery}"</span>
            </h2>
            <p className="results-count">{results.length} videos found</p>
          </div>
          <div className="videos-grid">
            {results.map((video) => (
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
        </>
      )}
    </div>
  )
}
