import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../../Components/Card/Card'
import { homeVideos } from '../../data/media'
import './Home.css'

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="home">
      <div className="home-header">
        <h2 className="home-heading">Recommended</h2>
      </div>

      {isLoading ? (
        <div className="videos-grid">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="skeleton-card" />
          ))}
        </div>
      ) : (
        <div className="videos-grid">
          {homeVideos.map((video) => (
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
      )}
    </div>
  )
}
