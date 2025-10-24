import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Upload, 
  BarChart3, 
  MessageSquare, 
  Settings,
  Bell,
  User,
  Palette,
  Eye,
  Heart,
  Share2,
  Edit,
  CheckCircle,
  Clock,
  XCircle
} from 'lucide-react'
import { mockArtworks, mockCollaborations, mockNotifications, mockStats } from '@/data/mockData'

const ArtistDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [artworks] = useState(mockArtworks)
  const [collaborations] = useState(mockCollaborations)
  const [notifications] = useState(mockNotifications)

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'portfolio', label: 'Portfolio', icon: Palette },
    { id: 'collaborations', label: 'Collaborations', icon: MessageSquare },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'text-green-500 bg-green-100'
      case 'pending': return 'text-yellow-500 bg-yellow-100'
      case 'rejected': return 'text-red-500 bg-red-100'
      default: return 'text-gray-500 bg-gray-100'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return CheckCircle
      case 'pending': return Clock
      case 'rejected': return XCircle
      default: return Clock
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <User className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl font-bold text-white truncate">Alex Chen</h1>
                <p className="text-xs sm:text-sm text-gray-300 truncate">@alexchen_ai</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:text-purple-300 p-2">
                <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="gradient" size="sm" className="text-xs sm:text-sm">
                <Upload className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Upload Artwork</span>
                <span className="sm:hidden">Upload</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
              <nav className="space-y-1 sm:space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ${
                        activeTab === tab.id
                          ? 'bg-purple-500 text-white'
                          : 'text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span>{tab.label}</span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-6 sm:space-y-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-2 sm:mb-3 lg:mb-4">
                      <Eye className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-purple-400" />
                      <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{mockStats.totalViews.toLocaleString()}</span>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm lg:text-base">Total Views</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-2 sm:mb-3 lg:mb-4">
                      <Heart className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-pink-400" />
                      <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{mockStats.totalLikes}</span>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm lg:text-base">Total Likes</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-2 sm:mb-3 lg:mb-4">
                      <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-blue-400" />
                      <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{mockStats.totalCollaborations}</span>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm lg:text-base">Collaborations</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-2 sm:mb-3 lg:mb-4">
                      <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">${mockStats.monthlyEarnings.toLocaleString()}</span>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm lg:text-base">Monthly Earnings</p>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
                  <div className="space-y-4">
                    {notifications.slice(0, 3).map((notification) => (
                      <div key={notification.id} className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                        <div className="flex-1">
                          <p className="text-white font-medium">{notification.title}</p>
                          <p className="text-gray-300 text-sm">{notification.message}</p>
                          <p className="text-gray-400 text-xs mt-1">{notification.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'portfolio' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">My Portfolio</h2>
                  <Button variant="gradient">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload New Artwork
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {artworks.map((artwork) => {
                    const StatusIcon = getStatusIcon(artwork.status)
                    return (
                      <div key={artwork.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300">
                        <div className="relative">
                          <img 
                            src={artwork.image} 
                            alt={artwork.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-4 right-4">
                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(artwork.status)}`}>
                              <StatusIcon className="h-3 w-3 inline mr-1" />
                              {artwork.status}
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-white mb-2">{artwork.title}</h3>
                          <p className="text-gray-300 text-sm mb-4 line-clamp-2">{artwork.description}</p>
                          <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                            <div className="flex items-center space-x-4">
                              <span className="flex items-center">
                                <Eye className="h-4 w-4 mr-1" />
                                {artwork.views}
                              </span>
                              <span className="flex items-center">
                                <Heart className="h-4 w-4 mr-1" />
                                {artwork.likes}
                              </span>
                            </div>
                            <span className="font-medium text-white">${artwork.price}</span>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {activeTab === 'collaborations' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Collaboration Requests</h2>
                <div className="space-y-4">
                  {collaborations.map((collab) => (
                    <div key={collab.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-white">{collab.title}</h3>
                          <p className="text-gray-300">{collab.brand}</p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          collab.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          collab.status === 'accepted' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {collab.status}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{collab.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-400">
                          <span>Budget: ${collab.budget.min} - ${collab.budget.max}</span>
                          <span className="mx-2">•</span>
                          <span>Timeline: {collab.timeline}</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View Details</Button>
                          {collab.status === 'pending' && (
                            <>
                              <Button variant="gradient" size="sm">Accept</Button>
                              <Button variant="destructive" size="sm">Decline</Button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Notifications</h2>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 ${
                      !notification.read ? 'border-purple-400/50' : ''
                    }`}>
                      <div className="flex items-start space-x-4">
                        <div className={`w-3 h-3 rounded-full mt-2 ${
                          !notification.read ? 'bg-purple-400' : 'bg-gray-400'
                        }`}></div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white">{notification.title}</h3>
                          <p className="text-gray-300 mb-2">{notification.message}</p>
                          <p className="text-gray-400 text-sm">{notification.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Settings</h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-lg font-bold text-white mb-4">Profile Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Display Name</label>
                      <input 
                        type="text" 
                        defaultValue="Alex Chen"
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
                      <textarea 
                        defaultValue="AI artist specializing in surreal digital landscapes and character design"
                        rows={3}
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                      <input 
                        type="text" 
                        defaultValue="San Francisco, CA"
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                      />
                    </div>
                    <Button variant="gradient">Save Changes</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistDashboard
