import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Shield, 
  CheckCircle, 
  XCircle, 
  Users, 
  Image as ImageIcon,
  BarChart3,
  Settings,
  Eye,
  Clock,
  AlertTriangle,
  TrendingUp,
  UserCheck,
  UserX
} from 'lucide-react'
import { mockArtworks, mockArtists } from '@/data/mockData'

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [artworks] = useState(mockArtworks)
  const [artists] = useState(mockArtists)

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'artwork-review', label: 'Artwork Review', icon: ImageIcon },
    { id: 'user-management', label: 'User Management', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  const pendingArtworks = artworks.filter(artwork => artwork.status === 'pending')
  const approvedArtworks = artworks.filter(artwork => artwork.status === 'approved')
  const rejectedArtworks = artworks.filter(artwork => artwork.status === 'rejected')

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Admin Panel</h1>
                <p className="text-sm text-gray-300">Futurescape Studios Management</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-300">Admin User</p>
                <p className="text-xs text-gray-400">admin@futurescape.com</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-500 text-white'
                          : 'text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{tab.label}</span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && (
              <div className="space-y-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <Clock className="h-8 w-8 text-yellow-400" />
                      <span className="text-2xl font-bold text-white">{pendingArtworks.length}</span>
                    </div>
                    <p className="text-gray-300">Pending Reviews</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <CheckCircle className="h-8 w-8 text-green-400" />
                      <span className="text-2xl font-bold text-white">{approvedArtworks.length}</span>
                    </div>
                    <p className="text-gray-300">Approved Artworks</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <Users className="h-8 w-8 text-blue-400" />
                      <span className="text-2xl font-bold text-white">{artists.length}</span>
                    </div>
                    <p className="text-gray-300">Total Artists</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <TrendingUp className="h-8 w-8 text-purple-400" />
                      <span className="text-2xl font-bold text-white">+24%</span>
                    </div>
                    <p className="text-gray-300">Growth Rate</p>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h3 className="text-xl font-bold text-white mb-6">Recent Submissions</h3>
                    <div className="space-y-4">
                      {artworks.slice(0, 3).map((artwork) => {
                        const StatusIcon = getStatusIcon(artwork.status)
                        return (
                          <div key={artwork.id} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                            <img 
                              src={artwork.image} 
                              alt={artwork.title}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <p className="text-white font-medium">{artwork.title}</p>
                              <p className="text-gray-300 text-sm">by {artwork.artist.name}</p>
                            </div>
                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(artwork.status)}`}>
                              <StatusIcon className="h-3 w-3 inline mr-1" />
                              {artwork.status}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h3 className="text-xl font-bold text-white mb-6">Platform Alerts</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 p-4 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                        <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5" />
                        <div>
                          <p className="text-white font-medium">High Pending Queue</p>
                          <p className="text-gray-300 text-sm">15 artworks awaiting review</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                        <div>
                          <p className="text-white font-medium">System Health</p>
                          <p className="text-gray-300 text-sm">All systems operational</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
                        <TrendingUp className="h-5 w-5 text-blue-400 mt-0.5" />
                        <div>
                          <p className="text-white font-medium">Growth Alert</p>
                          <p className="text-gray-300 text-sm">24% increase in submissions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'artwork-review' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Artwork Review Queue</h2>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Bulk Actions</Button>
                    <Button variant="gradient" size="sm">Export Report</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {artworks.map((artwork) => {
                    const StatusIcon = getStatusIcon(artwork.status)
                    return (
                      <div key={artwork.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          <div className="lg:col-span-1">
                            <img 
                              src={artwork.image} 
                              alt={artwork.title}
                              className="w-full h-48 rounded-lg object-cover"
                            />
                          </div>
                          <div className="lg:col-span-2">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="text-xl font-bold text-white mb-2">{artwork.title}</h3>
                                <p className="text-gray-300 mb-2">by {artwork.artist.name}</p>
                                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(artwork.status)}`}>
                                  <StatusIcon className="h-4 w-4 mr-1" />
                                  {artwork.status}
                                </div>
                              </div>
                            </div>
                            
                            <p className="text-gray-300 mb-4">{artwork.description}</p>
                            
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <p className="text-sm text-gray-400 mb-1">Category</p>
                                <p className="text-white">{artwork.category}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-400 mb-1">Price</p>
                                <p className="text-white">${artwork.price}</p>
                              </div>
                            </div>

                            <div className="mb-4">
                              <p className="text-sm text-gray-400 mb-2">Tags</p>
                              <div className="flex flex-wrap gap-2">
                                {artwork.tags.map((tag, index) => (
                                  <span key={index} className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="flex space-x-3">
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4 mr-1" />
                                View Details
                              </Button>
                              {artwork.status === 'pending' && (
                                <>
                                  <Button variant="gradient" size="sm">
                                    <CheckCircle className="h-4 w-4 mr-1" />
                                    Approve
                                  </Button>
                                  <Button variant="destructive" size="sm">
                                    <XCircle className="h-4 w-4 mr-1" />
                                    Reject
                                  </Button>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {activeTab === 'user-management' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">User Management</h2>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Export Users</Button>
                    <Button variant="gradient" size="sm">Add User</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {artists.map((artist) => (
                    <div key={artist.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={artist.avatar} 
                          alt={artist.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-lg font-bold text-white">{artist.name}</h3>
                            {artist.verified && (
                              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                                <UserCheck className="h-3 w-3 text-white" />
                              </div>
                            )}
                          </div>
                          <p className="text-gray-300 mb-1">{artist.username}</p>
                          <p className="text-gray-400 text-sm mb-2">{artist.bio}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>{artist.followers.toLocaleString()} followers</span>
                            <span>{artist.artworks} artworks</span>
                            <span>{artist.location}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View Profile
                          </Button>
                          <Button variant="gradient" size="sm">
                            <UserCheck className="h-4 w-4 mr-1" />
                            Verify
                          </Button>
                          <Button variant="destructive" size="sm">
                            <UserX className="h-4 w-4 mr-1" />
                            Suspend
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Platform Analytics</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h3 className="text-lg font-bold text-white mb-4">Content Statistics</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Total Artworks</span>
                        <span className="text-white font-bold">{artworks.length}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Approved</span>
                        <span className="text-green-400 font-bold">{approvedArtworks.length}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Pending</span>
                        <span className="text-yellow-400 font-bold">{pendingArtworks.length}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Rejected</span>
                        <span className="text-red-400 font-bold">{rejectedArtworks.length}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h3 className="text-lg font-bold text-white mb-4">User Statistics</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Total Artists</span>
                        <span className="text-white font-bold">{artists.length}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Verified Artists</span>
                        <span className="text-blue-400 font-bold">{artists.filter(a => a.verified).length}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Active This Month</span>
                        <span className="text-green-400 font-bold">{artists.length}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">New This Week</span>
                        <span className="text-purple-400 font-bold">3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Admin Settings</h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-lg font-bold text-white mb-4">Platform Configuration</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Auto-approval Threshold</label>
                      <input 
                        type="number" 
                        defaultValue="85"
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Max Upload Size (MB)</label>
                      <input 
                        type="number" 
                        defaultValue="50"
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Content Moderation Level</label>
                      <select className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400">
                        <option value="strict">Strict</option>
                        <option value="moderate" selected>Moderate</option>
                        <option value="lenient">Lenient</option>
                      </select>
                    </div>
                    <Button variant="gradient">Save Settings</Button>
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

export default AdminPanel
