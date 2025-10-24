import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Home, 
  Search, 
  Plus, 
  Heart, 
  User, 
  Bell, 
  Camera, 
  Image as ImageIcon,
  MessageSquare,
  Settings,
  Palette,
  TrendingUp,
  Users,
  Star,
  Share2,
  Bookmark,
  Filter,
  Grid3X3,
  List,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Wifi,
  Battery,
  Signal
} from 'lucide-react';

interface MobileArtwork {
  id: number;
  title: string;
  artist: string;
  image: string;
  likes: number;
  views: number;
  isLiked: boolean;
  isBookmarked: boolean;
}

interface FeaturedArtist {
  id: number;
  name: string;
  avatar: string;
  specialty: string;
  verified: boolean;
  followers: number;
}

const mockMobileArtworks: MobileArtwork[] = [
  {
    id: 1,
    title: "Neon Dreams",
    artist: "Alex Chen",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop&auto=format",
    likes: 892,
    views: 15420,
    isLiked: true,
    isBookmarked: false
  },
  {
    id: 2,
    title: "Cosmic Landscape",
    artist: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop&auto=format",
    likes: 1247,
    views: 8920,
    isLiked: false,
    isBookmarked: true
  },
  {
    id: 3,
    title: "Digital Portraits",
    artist: "Mike Chen",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=400&fit=crop&auto=format",
    likes: 567,
    views: 6780,
    isLiked: false,
    isBookmarked: false
  },
  {
    id: 4,
    title: "Fantasy Characters",
    artist: "Emma Rodriguez",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=400&fit=crop&auto=format",
    likes: 2156,
    views: 12340,
    isLiked: true,
    isBookmarked: true
  }
];

const mockFeaturedArtists: FeaturedArtist[] = [
  {
    id: 1,
    name: "Alex Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
    specialty: "Character Design",
    verified: true,
    followers: 12400
  },
  {
    id: 2,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format",
    specialty: "Environment Art",
    verified: true,
    followers: 8920
  },
  {
    id: 3,
    name: "Mike Chen",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
    specialty: "Concept Art",
    verified: true,
    followers: 15600
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format",
    specialty: "Fantasy Art",
    verified: true,
    followers: 9800
  }
];

export default function MobileAppMockup() {
  const [activeTab, setActiveTab] = useState<'home' | 'search' | 'create' | 'activity' | 'profile'>('home');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedArtwork, setSelectedArtwork] = useState<MobileArtwork | null>(null);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Mobile Device Frame */}
      <div className="relative">
        {/* iPhone Frame */}
        <div className="w-80 h-[700px] bg-black rounded-[3rem] p-2 shadow-2xl">
          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] overflow-hidden relative">
            
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-black/20 backdrop-blur-sm flex items-center justify-between px-6 text-white text-xs z-50">
              <div className="flex items-center space-x-1">
                <span className="font-semibold">9:41</span>
              </div>
              <div className="flex items-center space-x-1">
                <Signal className="h-3 w-3" />
                <Wifi className="h-3 w-3" />
                <Battery className="h-3 w-3" />
              </div>
            </div>

            {/* App Content */}
            <div className="pt-8 h-full flex flex-col">
              
              {/* Header */}
              <div className="px-4 py-3 bg-black/20 backdrop-blur-sm border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Palette className="h-4 w-4 text-white" />
                    </div>
                    <h1 className="text-lg font-bold text-white">Futurescape</h1>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-white p-2">
                      <Bell className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white p-2">
                      <MessageSquare className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Featured Artists Section */}
              <div className="px-4 py-3 border-b border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-white">Featured Artists</h3>
                  <Button variant="ghost" size="sm" className="text-purple-400 text-xs p-1">
                    View All
                  </Button>
                </div>
                <div className="flex space-x-3 overflow-x-auto">
                  {mockFeaturedArtists.map((artist) => (
                    <div key={artist.id} className="flex-shrink-0 w-16 text-center">
                      <div className="relative w-14 h-14 mx-auto mb-1">
                        <Avatar className="w-full h-full">
                          <AvatarImage src={artist.avatar} alt={artist.name} />
                          <AvatarFallback className="bg-purple-500 text-white text-xs">
                            {artist.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {artist.verified && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <Star className="h-2 w-2 text-white fill-current" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 truncate">{artist.name}</p>
                      <p className="text-xs text-purple-400">{artist.specialty}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 overflow-y-auto">
                {activeTab === 'home' && (
                  <div className="p-4">
                    {/* View Mode Toggle */}
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-semibold text-white">Discover</h2>
                      <div className="flex items-center space-x-1 bg-white/10 rounded-lg p-1">
                        <Button
                          variant={viewMode === 'grid' ? 'default' : 'ghost'}
                          size="sm"
                          onClick={() => setViewMode('grid')}
                          className="text-white p-1 h-8 w-8"
                        >
                          <Grid3X3 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant={viewMode === 'list' ? 'default' : 'ghost'}
                          size="sm"
                          onClick={() => setViewMode('list')}
                          className="text-white p-1 h-8 w-8"
                        >
                          <List className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Artworks Grid/List */}
                    <div className={viewMode === 'grid' ? 'grid grid-cols-2 gap-3' : 'space-y-3'}>
                      {mockMobileArtworks.map((artwork) => (
                        <div
                          key={artwork.id}
                          className={`bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden ${
                            viewMode === 'list' ? 'flex' : ''
                          }`}
                          onClick={() => setSelectedArtwork(artwork)}
                        >
                          <div className={`${viewMode === 'grid' ? 'aspect-[3/4]' : 'w-24 h-24'} relative`}>
                            <img
                              src={artwork.image}
                              alt={artwork.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = 'https://via.placeholder.com/300x400/4f46e5/ffffff?text=Artwork';
                              }}
                            />
                            <div className="absolute top-2 right-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                className={`p-1 h-6 w-6 ${
                                  artwork.isBookmarked ? 'text-yellow-400' : 'text-white/70'
                                }`}
                              >
                                <Bookmark className={`h-3 w-3 ${artwork.isBookmarked ? 'fill-current' : ''}`} />
                              </Button>
                            </div>
                          </div>
                          <div className={`p-3 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                            <h3 className="text-sm font-semibold text-white mb-1 truncate">{artwork.title}</h3>
                            <p className="text-xs text-gray-400 mb-2">{artwork.artist}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="flex items-center space-x-1">
                                  <Heart className={`h-3 w-3 ${artwork.isLiked ? 'text-red-400 fill-current' : 'text-gray-400'}`} />
                                  <span className="text-xs text-gray-400">{formatNumber(artwork.likes)}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <ImageIcon className="h-3 w-3 text-gray-400" />
                                  <span className="text-xs text-gray-400">{formatNumber(artwork.views)}</span>
                                </div>
                              </div>
                              <Button variant="ghost" size="sm" className="text-white p-1 h-6 w-6">
                                <MoreHorizontal className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'search' && (
                  <div className="p-4">
                    <div className="relative mb-4">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search artists, artworks, styles..."
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-3">Popular Categories</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {['Character Design', 'Environment Art', 'Concept Art', 'Fantasy Art', 'Sci-Fi', 'Portraits'].map((category) => (
                            <Badge key={category} variant="outline" className="text-xs text-gray-400 border-gray-600">
                              {category}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-3">Trending Artworks</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {mockMobileArtworks.slice(0, 2).map((artwork) => (
                            <div key={artwork.id} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
                              <div className="aspect-[3/4] relative">
                                <img
                                  src={artwork.image}
                                  alt={artwork.title}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.currentTarget.src = 'https://via.placeholder.com/300x400/4f46e5/ffffff?text=Artwork';
                                  }}
                                />
                                <div className="absolute top-2 left-2">
                                  <Badge className="bg-red-500 text-white text-xs">
                                    <TrendingUp className="h-2 w-2 mr-1" />
                                    Trending
                                  </Badge>
                                </div>
                              </div>
                              <div className="p-3">
                                <h4 className="text-sm font-semibold text-white mb-1">{artwork.title}</h4>
                                <p className="text-xs text-gray-400">{artwork.artist}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'create' && (
                  <div className="p-4">
                    <div className="text-center py-8">
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Create New Artwork</h3>
                      <p className="text-gray-400 text-sm mb-6">Upload your AI-generated artwork to share with the community</p>
                      <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                        <Plus className="h-4 w-4 mr-2" />
                        Upload Artwork
                      </Button>
                    </div>
                  </div>
                )}

                {activeTab === 'activity' && (
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-white mb-4">Activity</h2>
                    <div className="space-y-3">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format" />
                              <AvatarFallback className="bg-purple-500 text-white">AC</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <p className="text-sm text-white">
                                <span className="font-semibold">Alex Chen</span> liked your artwork
                              </p>
                              <p className="text-xs text-gray-400">2 hours ago</p>
                            </div>
                            <Button variant="ghost" size="sm" className="text-white p-1">
                              <Heart className="h-4 w-4 text-red-400" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'profile' && (
                  <div className="p-4">
                    <div className="text-center mb-6">
                      <Avatar className="h-20 w-20 mx-auto mb-3">
                        <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format" />
                        <AvatarFallback className="bg-purple-500 text-white text-lg">AC</AvatarFallback>
                      </Avatar>
                      <h2 className="text-xl font-bold text-white mb-1">Alex Chen</h2>
                      <p className="text-gray-400 text-sm mb-4">AI Artist • Pro Member</p>
                      <div className="flex items-center justify-center space-x-4 mb-4">
                        <div className="text-center">
                          <p className="text-lg font-bold text-white">24</p>
                          <p className="text-xs text-gray-400">Artworks</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-bold text-white">1.2K</p>
                          <p className="text-xs text-gray-400">Followers</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-bold text-white">892</p>
                          <p className="text-xs text-gray-400">Following</p>
                        </div>
                      </div>
                      <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                        Edit Profile
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Navigation */}
              <div className="bg-black/20 backdrop-blur-sm border-t border-white/10 px-4 py-2">
                <div className="flex items-center justify-around">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveTab('home')}
                    className={`p-2 ${activeTab === 'home' ? 'text-purple-400' : 'text-gray-400'}`}
                  >
                    <Home className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveTab('search')}
                    className={`p-2 ${activeTab === 'search' ? 'text-purple-400' : 'text-gray-400'}`}
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveTab('create')}
                    className={`p-2 ${activeTab === 'create' ? 'text-purple-400' : 'text-gray-400'}`}
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveTab('activity')}
                    className={`p-2 ${activeTab === 'activity' ? 'text-purple-400' : 'text-gray-400'}`}
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveTab('profile')}
                    className={`p-2 ${activeTab === 'profile' ? 'text-purple-400' : 'text-gray-400'}`}
                  >
                    <User className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Device Info */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-white text-sm font-medium">iPhone 14 Pro Mockup</p>
          <p className="text-gray-400 text-xs">Futurescape Mobile App Interface</p>
        </div>
      </div>
    </div>
  );
}
