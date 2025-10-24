import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Image as ImageIcon, 
  Search, 
  Filter, 
  Heart, 
  Eye, 
  Share2,
  Star,
  MapPin,
  Users,
  Palette,
  Sparkles,
  TrendingUp,
  Award,
  Grid3X3,
  List,
  MoreHorizontal
} from 'lucide-react'
import { mockArtists, mockArtworks } from '@/data/mockData'

const PublicGallery = () => {
  const [activeTab, setActiveTab] = useState('featured')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('masonry') // masonry or grid
  const [artists] = useState(mockArtists)
  const [artworks] = useState(mockArtworks)

  const tabs = [
    { id: 'featured', label: 'Featured', icon: Star },
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'recent', label: 'Recent', icon: Sparkles },
    { id: 'artists', label: 'Artists', icon: Users }
  ]

  const categories = [
    { id: 'all', name: 'All Artwork', count: artworks.length },
    { id: 'digital-art', name: 'Digital Art', count: 25 },
    { id: 'character-design', name: 'Character Design', count: 18 },
    { id: 'landscapes', name: 'Landscapes', count: 32 },
    { id: 'abstract', name: 'Abstract', count: 15 },
    { id: 'futuristic', name: 'Futuristic', count: 22 }
  ]

  // Generate more mock artworks for Pinterest-like layout
  const generateMockArtworks = () => {
    const baseArtworks = [...artworks]
    const additionalArtworks = []
    
    // Use different Unsplash image IDs for variety
    const imageIds = [
      '1518709268805-4e9042af2176', // Neon/cyberpunk
      '1441974231531-c6227db76b6e', // Forest
      '1506905925346-21bda4d32df4', // Mountains
      '1519904981063-0a6acf2c2c0c', // Abstract
      '1518837695005-2083093ee35b', // Space
      '1518709268805-4e9042af2176', // City
      '1441974231531-c6227db76b6e', // Nature
      '1506905925346-21bda4d32df4', // Landscape
      '1519904981063-0a6acf2c2c0c', // Digital art
      '1518837695005-2083093ee35b', // Futuristic
      '1518709268805-4e9042af2176', // Abstract
      '1441974231531-c6227db76b6e', // Fantasy
      '1506905925346-21bda4d32df4', // Sci-fi
      '1519904981063-0a6acf2c2c0c', // Surreal
      '1518837695005-2083093ee35b', // Minimalist
      '1518709268805-4e9042af2176', // Colorful
      '1441974231531-c6227db76b6e'  // Artistic
    ]
    
    for (let i = 4; i <= 20; i++) {
      const randomArtist = artists[Math.floor(Math.random() * artists.length)]
      const heights = [200, 250, 300, 350, 400] // Different heights for masonry
      const randomHeight = heights[Math.floor(Math.random() * heights.length)]
      const imageId = imageIds[(i - 4) % imageIds.length]
      
      additionalArtworks.push({
        id: i,
        title: `AI Artwork ${i}`,
        artist: randomArtist,
        image: `https://images.unsplash.com/photo-${imageId}?w=300&h=${randomHeight}&fit=crop&auto=format`,
        description: `This is a stunning AI-generated artwork created using advanced machine learning techniques. The piece showcases the intersection of technology and creativity.`,
        category: 'Digital Art',
        tags: ['ai', 'digital', 'art', 'creative'],
        techniques: ['Midjourney', 'Photoshop'],
        status: 'approved',
        views: Math.floor(Math.random() * 2000) + 100,
        likes: Math.floor(Math.random() * 200) + 10,
        createdAt: `2024-01-${Math.floor(Math.random() * 30) + 1}`,
        isAvailableForCollaboration: true,
        price: Math.floor(Math.random() * 1000) + 100,
        height: randomHeight
      })
    }
    
    return [...baseArtworks, ...additionalArtworks]
  }

  const allArtworks = generateMockArtworks()
  const filteredArtworks = allArtworks.filter(artwork => 
    artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || artwork.category.toLowerCase().includes(selectedCategory))
  )

  const MasonryCard = ({ artwork }: { artwork: any }) => (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 group cursor-pointer">
      <div className="relative">
        <img 
          src={artwork.image} 
          alt={artwork.title}
          className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
          style={{ height: artwork.height || 250 }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://via.placeholder.com/300/${artwork.height || 250}/6366f1/ffffff?text=${encodeURIComponent(artwork.title)}`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover overlay with actions */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm">
              <Heart className="h-4 w-4 text-white" />
            </Button>
            <Button variant="ghost" size="sm" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm">
              <Share2 className="h-4 w-4 text-white" />
            </Button>
            <Button variant="ghost" size="sm" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm">
              <MoreHorizontal className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>

        {/* Bottom overlay with info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center space-x-3">
            <img 
              src={artwork.artist.avatar} 
              alt={artwork.artist.name}
              className="w-8 h-8 rounded-full object-cover border-2 border-white"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://via.placeholder.com/32/6366f1/ffffff?text=${encodeURIComponent(artwork.artist.name.charAt(0))}`;
              }}
            />
            <div className="flex-1">
              <h3 className="text-white font-semibold text-sm truncate">{artwork.title}</h3>
              <p className="text-gray-200 text-xs">by {artwork.artist.name}</p>
            </div>
            <div className="flex items-center space-x-2 text-white text-xs">
              <span className="flex items-center">
                <Eye className="h-3 w-3 mr-1" />
                {artwork.views}
              </span>
              <span className="flex items-center">
                <Heart className="h-3 w-3 mr-1" />
                {artwork.likes}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const GridCard = ({ artwork }: { artwork: any }) => (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 group">
      <div className="relative">
        <img 
          src={artwork.image} 
          alt={artwork.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://via.placeholder.com/300/192/6366f1/ffffff?text=${encodeURIComponent(artwork.title)}`;
          }}
        />
        <div className="absolute top-4 right-4">
          <Button variant="ghost" size="sm" className="bg-white/20 hover:bg-white/30">
            <Heart className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2 truncate">{artwork.title}</h3>
        <p className="text-gray-300 text-sm mb-2">by {artwork.artist.name}</p>
        <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
          <div className="flex items-center space-x-3">
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
            View
          </Button>
          <Button variant="gradient" size="sm">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <ImageIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-xl font-bold text-white">AI Art Gallery</h1>
                <p className="text-xs sm:text-sm text-gray-300">Discover Amazing AI-Generated Art</p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-lg font-bold text-white">Gallery</h1>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search artwork..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 w-48 lg:w-64"
                />
              </div>
              <Button variant="gradient" size="sm" className="text-xs sm:text-sm">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Submit Artwork</span>
                <span className="sm:hidden">Submit</span>
              </Button>
            </div>
          </div>
          {/* Mobile Search */}
          <div className="sm:hidden mt-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search artwork..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 sticky top-20 sm:top-24">
              <nav className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ${
                        activeTab === tab.id
                          ? 'bg-orange-500 text-white'
                          : 'text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span>{tab.label}</span>
                    </button>
                  )
                })}
              </nav>

              {/* View Mode Toggle */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3">View Mode</h3>
                <div className="flex space-x-1 sm:space-x-2">
                  <Button
                    variant={viewMode === 'masonry' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('masonry')}
                    className="flex-1 text-xs sm:text-sm"
                  >
                    <Grid3X3 className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    <span className="hidden sm:inline">Masonry</span>
                    <span className="sm:hidden">M</span>
                  </Button>
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="flex-1 text-xs sm:text-sm"
                  >
                    <List className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    <span className="hidden sm:inline">Grid</span>
                    <span className="sm:hidden">G</span>
                  </Button>
                </div>
              </div>

              {/* Categories */}
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3">Categories</h3>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="truncate">{category.name}</span>
                    <span className="text-xs opacity-70 ml-2">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'featured' && (
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">Featured Artwork</h2>
                  <div className="flex items-center space-x-2 sm:space-x-4 text-sm text-gray-400">
                    <span>{filteredArtworks.length} artworks</span>
                  </div>
                </div>

                {viewMode === 'masonry' ? (
                  <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
                    {filteredArtworks.map((artwork) => (
                      <MasonryCard key={artwork.id} artwork={artwork} />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredArtworks.map((artwork) => (
                      <GridCard key={artwork.id} artwork={artwork} />
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'trending' && (
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white">Trending Now</h2>
                {viewMode === 'masonry' ? (
                  <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
                    {filteredArtworks
                      .sort((a, b) => b.likes - a.likes)
                      .map((artwork) => (
                        <MasonryCard key={artwork.id} artwork={artwork} />
                      ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredArtworks
                      .sort((a, b) => b.likes - a.likes)
                      .map((artwork) => (
                        <GridCard key={artwork.id} artwork={artwork} />
                      ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'recent' && (
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white">Recently Added</h2>
                {viewMode === 'masonry' ? (
                  <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
                    {filteredArtworks
                      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                      .map((artwork) => (
                        <MasonryCard key={artwork.id} artwork={artwork} />
                      ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredArtworks
                      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                      .map((artwork) => (
                        <GridCard key={artwork.id} artwork={artwork} />
                      ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'artists' && (
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white">Featured Artists</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {artists.map((artist) => (
                    <div key={artist.id} className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                      <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                        <img 
                          src={artist.avatar} 
                          alt={artist.name}
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://via.placeholder.com/64/6366f1/ffffff?text=${encodeURIComponent(artist.name.charAt(0))}`;
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-1 sm:space-x-2 mb-1">
                            <h3 className="text-base sm:text-lg font-bold text-white truncate">{artist.name}</h3>
                            {artist.verified && (
                              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                                <Star className="h-2 w-2 sm:h-3 sm:w-3 text-white" />
                              </div>
                            )}
                          </div>
                          <p className="text-gray-300 text-xs sm:text-sm truncate">{artist.username}</p>
                          <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-400">
                            <MapPin className="h-3 w-3" />
                            <span className="truncate">{artist.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{artist.bio}</p>
                      
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                        {artist.specialties.slice(0, 3).map((specialty, index) => (
                          <span key={index} className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">
                            {specialty}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                        <span className="flex items-center">
                          <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          {artist.followers.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <Palette className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          {artist.artworks} artworks
                        </span>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1 text-xs sm:text-sm">
                          <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          <span className="hidden sm:inline">View Portfolio</span>
                          <span className="sm:hidden">View</span>
                        </Button>
                        <Button variant="gradient" size="sm">
                          <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
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

export default PublicGallery