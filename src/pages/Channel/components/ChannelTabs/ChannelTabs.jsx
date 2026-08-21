import './ChannelTabs.css'

const tabs = ['Videos', 'Playlists', 'About']

export const ChannelTabs = ({ activeTab = 'Videos', onTabChange }) => {
  return (
    <div className="ch-tabs-wrapper">
      <nav className="ch-tabs" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            className={`ch-tab ${activeTab === tab ? 'ch-tab-active' : ''}`}
            onClick={() => onTabChange && onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  )
}
