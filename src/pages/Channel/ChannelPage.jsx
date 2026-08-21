import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getChannelById, getChannelVideos } from '../../data/media'
import { ChannelBanner } from './components/ChannelBanner/ChannelBanner'
import { ChannelInfo } from './components/ChannelInfo/ChannelInfo'
import { ChannelTabs } from './components/ChannelTabs/ChannelTabs'
import { ChannelVideoGrid } from './components/ChannelVideoGrid/ChannelVideoGrid'
import './ChannelPage.css'

export const ChannelPage = () => {
  const { channelId } = useParams()
  const channel = getChannelById(channelId)
  const [activeTab, setActiveTab] = useState('Videos')

  if (!channel) {
    return (
      <div className="ch-not-found">
        <h2>Channel not found</h2>
        <p>The channel you&apos;re looking for doesn&apos;t exist.</p>
      </div>
    )
  }

  const videos = getChannelVideos(channelId)

  return (
    <div className="ch-page">
      <div className="ch-banner-wrapper">
        <ChannelBanner />
      </div>
      <div className="ch-content">
        <ChannelInfo channel={channel} />
        <ChannelTabs activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === 'Videos' && <ChannelVideoGrid videos={videos} channelName={channel.name} />}
        {activeTab === 'Playlists' && (
          <div className="ch-tab-placeholder">
            <p>No playlists available.</p>
          </div>
        )}
        {activeTab === 'About' && (
          <div className="ch-about">
            <div className="ch-about-section">
              <h3 className="ch-about-heading">Description</h3>
              <p className="ch-about-text">{channel.description}</p>
            </div>
            <div className="ch-about-section">
              <h3 className="ch-about-heading">Stats</h3>
              <div className="ch-about-stats">
                <div className="ch-about-stat">
                  <span className="ch-about-stat-label">Joined</span>
                  <span className="ch-about-stat-value">{channel.joined}</span>
                </div>
                <div className="ch-about-stat">
                  <span className="ch-about-stat-label">Total views</span>
                  <span className="ch-about-stat-value">{channel.totalViews}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
