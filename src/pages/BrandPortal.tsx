import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Building2, 
  Search, 
  Filter, 
  Heart, 
  Eye, 
  MessageSquare,
  Star,
  MapPin,
  Users,
  Palette
} from 'lucide-react'
import { mockArtists, mockArtworks } from '@/data/mockData'

const BrandPortal = () => {
  const [activeTab, setActiveTab] = useState('discover')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [artists] = useState(mockArtists)
  const [artworks] = useState(mockArtworks)

  const tabs = [
    { id: 'discover', label: 'Discover Artists', icon: Users },
    { id: 'browse', label: 'Browse Artwork', icon: Palette },
    { id: 'collaborations', label: 'My Collaborations', icon: MessageSquare },
    { id: 'favorites', label: 'Favorites', icon: Heart }
  ]

  const categories = ['all', 'digital-art', 'character-design', 'landscapes', 'abstract', 'futuristic']

  const filteredArtists = artists.filter(artist => 
    artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artist.bio.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredArtworks = artworks.filter(artwork => 
    artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || artwork.category.toLowerCase().includes(selectedCategory))
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Brand Portal</h1>
                <p className="text-sm text-gray-300">Discover & Collaborate with AI Artists</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="gradient" size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                Start Collaboration
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <nav className="space-y-2 mb-6">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-green-500 text-white'
                          : 'text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{tab.label}</span>
                    </button>
                  )
                })}
              </nav>

              {/* Search & Filters */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search artists or artwork..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-green-400"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-slate-800">
                        {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                      </option>
                    ))}
                  </select>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'discover' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Discover AI Artists</h2>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Sort by Popularity</Button>
                    <Button variant="outline" size="sm">Sort by Rating</Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArtists.map((artist) => (
                    <div key={artist.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                      <div className="flex items-center space-x-4 mb-4">
                        <img 
                          src={artist.avatar} 
                          alt={artist.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-lg font-bold text-white">{artist.name}</h3>
                            {artist.verified && (
                              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                                <Star className="h-3 w-3 text-white" />
                              </div>
                            )}
                          </div>
                          <p className="text-gray-300 text-sm">{artist.username}</p>
                          <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <MapPin className="h-3 w-3" />
                            <span>{artist.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{artist.bio}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {artist.specialties.slice(0, 3).map((specialty, index) => (
                          <span key={index} className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">
                            {specialty}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {artist.followers.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <Palette className="h-4 w-4 mr-1" />
                          {artist.artworks} artworks
                        </span>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="h-4 w-4 mr-1" />
                          View Portfolio
                        </Button>
                        <Button variant="gradient" size="sm">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'browse' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Browse Artwork</h2>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Grid View</Button>
                    <Button variant="outline" size="sm">List View</Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArtworks.map((artwork) => (
                    <div key={artwork.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300">
                      <div className="relative">
                        <img 
                          src={artwork.image} 
                          alt={artwork.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <Button variant="ghost" size="sm" className="bg-white/20 hover:bg-white/30">
                            <Heart className="h-4 w-4 text-white" />
                          </Button>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-white mb-2">{artwork.title}</h3>
                        <p className="text-gray-300 text-sm mb-2">by {artwork.artist.name}</p>
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
                            <Eye className="h-4 w-4 mr-1" />
                            View Details
                          </Button>
                          <Button variant="gradient" size="sm">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Collaborate
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'collaborations' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">My Collaborations</h2>
                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      artist: "Alex Chen",
                      artwork: "Neon Dreams",
                      title: "Product Launch Campaign",
                      status: "in-progress",
                      budget: "$2,000 - $5,000",
                      timeline: "2 weeks",
                      progress: 65
                    },
                    {
                      id: 2,
                      artist: "Maya Rodriguez",
                      artwork: "Cyberpunk Metropolis",
                      title: "Fashion Campaign Visuals",
                      status: "completed",
                      budget: "$1,500 - $3,000",
                      timeline: "3 weeks",
                      progress: 100
                    }
                  ].map((collab) => (
                    <div key={collab.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-white">{collab.title}</h3>
                          <p className="text-gray-300">with {collab.artist}</p>
                          <p className="text-gray-400 text-sm">Artwork: {collab.artwork}</p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          collab.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                          collab.status === 'completed' ? 'bg-green-100 text-green-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {collab.status}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Budget</p>
                          <p className="text-white">{collab.budget}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Timeline</p>
                          <p className="text-white">{collab.timeline}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-400 mb-2">
                          <span>Progress</span>
                          <span>{collab.progress}%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${collab.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">View Details</Button>
                        <Button variant="gradient" size="sm">Message Artist</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'favorites' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">My Favorites</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArtworks.slice(0, 6).map((artwork) => (
                    <div key={artwork.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                      <div className="relative">
                        <img 
                          src={artwork.image} 
                          alt={artwork.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <Button variant="ghost" size="sm" className="bg-red-500/20 hover:bg-red-500/30">
                            <Heart className="h-4 w-4 text-red-400 fill-current" />
                          </Button>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-white mb-2">{artwork.title}</h3>
                        <p className="text-gray-300 text-sm mb-2">by {artwork.artist.name}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium">${artwork.price}</span>
                          <Button variant="gradient" size="sm">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Collaborate
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandPortal
