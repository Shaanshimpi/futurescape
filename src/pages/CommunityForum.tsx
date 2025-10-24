import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Users, 
  MessageSquare, 
  Plus, 
  Search, 
  Filter, 
  Star, 
  Heart, 
  Share2, 
  Bookmark, 
  Flag, 
  MoreVertical,
  TrendingUp,
  Award,
  Calendar,
  Clock,
  UserPlus,
  GraduationCap,
  Lightbulb,
  Palette,
  Camera,
  Video,
  FileText,
  Link,
  ThumbsUp,
  Reply,
  Edit,
  Trash2,
  Pin,
  Lock,
  Globe,
  Eye,
  MessageCircle
} from 'lucide-react';

interface ForumPost {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: 'artist' | 'brand' | 'admin';
    verified: boolean;
    level: string;
  };
  category: string;
  tags: string[];
  likes: number;
  replies: number;
  views: number;
  isPinned: boolean;
  isLocked: boolean;
  createdAt: string;
  lastActivity: string;
  attachments?: Array<{
    type: 'image' | 'video' | 'file';
    name: string;
    url: string;
  }>;
}

interface ForumCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  postCount: number;
  lastPost?: ForumPost;
}

const mockCategories: ForumCategory[] = [
  {
    id: 'general',
    name: 'General Discussion',
    description: 'General AI art discussions and community chat',
    icon: MessageSquare,
    color: 'from-blue-500 to-cyan-500',
    postCount: 1247,
    lastPost: {
      id: 1,
      title: 'Best AI tools for character design?',
      author: { name: 'Alex Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format', role: 'artist', verified: true, level: 'Pro' },
      createdAt: '2 hours ago'
    } as ForumPost
  },
  {
    id: 'techniques',
    name: 'Techniques & Tutorials',
    description: 'Share techniques, tutorials, and learning resources',
    icon: Lightbulb,
    color: 'from-purple-500 to-pink-500',
    postCount: 892,
    lastPost: {
      id: 2,
      title: 'How to create consistent character styles',
      author: { name: 'Sarah Johnson', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format', role: 'artist', verified: true, level: 'Expert' },
      createdAt: '4 hours ago'
    } as ForumPost
  },
  {
    id: 'collaborations',
    name: 'Collaborations',
    description: 'Find collaboration partners and project opportunities',
    icon: UserPlus,
    color: 'from-green-500 to-emerald-500',
    postCount: 456,
    lastPost: {
      id: 3,
      title: 'Looking for concept artist for game project',
      author: { name: 'Mike Chen', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format', role: 'brand', verified: true, level: 'Premium' },
      createdAt: '6 hours ago'
    } as ForumPost
  },
  {
    id: 'showcase',
    name: 'Showcase & Feedback',
    description: 'Showcase your work and get constructive feedback',
    icon: Palette,
    color: 'from-orange-500 to-red-500',
    postCount: 2156,
    lastPost: {
      id: 4,
      title: 'My latest fantasy landscape series',
      author: { name: 'Emma Rodriguez', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format', role: 'artist', verified: true, level: 'Pro' },
      createdAt: '1 hour ago'
    } as ForumPost
  },
  {
    id: 'mentorship',
    name: 'Mentorship Program',
    description: 'Connect with mentors and mentees in the AI art community',
    icon: GraduationCap,
    color: 'from-indigo-500 to-purple-500',
    postCount: 234,
    lastPost: {
      id: 5,
      title: 'Available for mentorship - Character Design focus',
      author: { name: 'David Kim', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format', role: 'artist', verified: true, level: 'Expert' },
      createdAt: '8 hours ago'
    } as ForumPost
  },
  {
    id: 'events',
    name: 'Events & Contests',
    description: 'Community events, contests, and challenges',
    icon: Calendar,
    color: 'from-pink-500 to-rose-500',
    postCount: 178,
    lastPost: {
      id: 6,
      title: 'Monthly AI Art Challenge - February Theme: "Future Cities"',
      author: { name: 'Admin Team', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format', role: 'admin', verified: true, level: 'Admin' },
      createdAt: '1 day ago'
    } as ForumPost
  }
];

const mockPosts: ForumPost[] = [
  {
    id: 1,
    title: 'Best AI tools for character design?',
    content: 'I\'m looking to improve my character design workflow. What AI tools do you recommend for creating consistent character styles? I\'ve tried Midjourney but looking for more control over specific features.',
    author: {
      name: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format',
      role: 'artist',
      verified: true,
      level: 'Pro'
    },
    category: 'general',
    tags: ['character-design', 'ai-tools', 'workflow'],
    likes: 24,
    replies: 8,
    views: 156,
    isPinned: false,
    isLocked: false,
    createdAt: '2 hours ago',
    lastActivity: '30 minutes ago',
    attachments: [
      {
        type: 'image',
        name: 'character-example.jpg',
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&auto=format'
      }
    ]
  },
  {
    id: 2,
    title: 'How to create consistent character styles',
    content: 'Here\'s my comprehensive guide on maintaining character consistency across multiple AI-generated images. I\'ll cover prompt engineering, reference management, and post-processing techniques.',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format',
      role: 'artist',
      verified: true,
      level: 'Expert'
    },
    category: 'techniques',
    tags: ['tutorial', 'character-consistency', 'prompt-engineering'],
    likes: 67,
    replies: 23,
    views: 892,
    isPinned: true,
    isLocked: false,
    createdAt: '4 hours ago',
    lastActivity: '1 hour ago',
    attachments: [
      {
        type: 'image',
        name: 'tutorial-preview.jpg',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format'
      },
      {
        type: 'file',
        name: 'character-guide.pdf',
        url: '#'
      }
    ]
  },
  {
    id: 3,
    title: 'Looking for concept artist for game project',
    content: 'We\'re developing an indie fantasy RPG and need a concept artist who specializes in character and environment design. Budget: $5,000-$8,000. Timeline: 6 weeks. Please share your portfolio!',
    author: {
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format',
      role: 'brand',
      verified: true,
      level: 'Premium'
    },
    category: 'collaborations',
    tags: ['job-opportunity', 'game-dev', 'concept-art', 'fantasy'],
    likes: 12,
    replies: 15,
    views: 234,
    isPinned: false,
    isLocked: false,
    createdAt: '6 hours ago',
    lastActivity: '2 hours ago'
  },
  {
    id: 4,
    title: 'My latest fantasy landscape series',
    content: 'Just finished this 12-piece fantasy landscape series inspired by Tolkien\'s Middle-earth. Each piece took about 3-4 hours using a combination of Midjourney and Photoshop. Would love your feedback!',
    author: {
      name: 'Emma Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format',
      role: 'artist',
      verified: true,
      level: 'Pro'
    },
    category: 'showcase',
    tags: ['fantasy', 'landscape', 'series', 'middle-earth'],
    likes: 89,
    replies: 34,
    views: 1247,
    isPinned: false,
    isLocked: false,
    createdAt: '1 hour ago',
    lastActivity: '15 minutes ago',
    attachments: [
      {
        type: 'image',
        name: 'landscape-1.jpg',
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format'
      },
      {
        type: 'image',
        name: 'landscape-2.jpg',
        url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop&auto=format'
      }
    ]
  }
];

const mockMentors = [
  {
    id: 1,
    name: 'David Kim',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format',
    specialty: 'Character Design',
    experience: '8 years',
    rating: 4.9,
    students: 45,
    availability: 'Available',
    bio: 'Professional character designer with 8+ years experience in game and animation industry. Specialized in fantasy and sci-fi character creation.',
    skills: ['Character Design', 'Concept Art', '3D Modeling', 'Animation'],
    verified: true
  },
  {
    id: 2,
    name: 'Lisa Wang',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format',
    specialty: 'Environment Art',
    experience: '6 years',
    rating: 4.8,
    students: 32,
    availability: 'Available',
    bio: 'Environment artist specializing in fantasy and sci-fi worlds. Worked on multiple AAA game titles.',
    skills: ['Environment Design', 'Landscape Art', 'Architecture', 'Lighting'],
    verified: true
  },
  {
    id: 3,
    name: 'James Wilson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format',
    specialty: 'AI Art Workflow',
    experience: '4 years',
    rating: 4.7,
    students: 28,
    availability: 'Limited',
    bio: 'AI art specialist focusing on workflow optimization and prompt engineering. Creator of popular AI art tutorials.',
    skills: ['Prompt Engineering', 'Workflow Optimization', 'AI Tools', 'Post-Processing'],
    verified: true
  }
];

export default function CommunityForum() {
  const [activeTab, setActiveTab] = useState<'forums' | 'mentorship' | 'events'>('forums');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewPost, setShowNewPost] = useState(false);

  const filteredPosts = mockPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'artist': return 'text-purple-400 bg-purple-500/20';
      case 'brand': return 'text-blue-400 bg-blue-500/20';
      case 'admin': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'text-yellow-400 bg-yellow-500/20';
      case 'Pro': return 'text-purple-400 bg-purple-500/20';
      case 'Premium': return 'text-blue-400 bg-blue-500/20';
      case 'Admin': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Users className="h-8 w-8 text-purple-400" />
              <h1 className="text-xl sm:text-2xl font-bold text-white">Community Forum</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                onClick={() => setShowNewPost(true)}
                className="bg-purple-500 hover:bg-purple-600 text-white"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Button>
              <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-white/10 backdrop-blur-sm rounded-xl p-1 border border-white/20">
          <button
            onClick={() => setActiveTab('forums')}
            className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'forums'
                ? 'bg-purple-500 text-white'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <MessageSquare className="h-4 w-4 inline mr-2" />
            Forums
          </button>
          <button
            onClick={() => setActiveTab('mentorship')}
            className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'mentorship'
                ? 'bg-purple-500 text-white'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <GraduationCap className="h-4 w-4 inline mr-2" />
            Mentorship
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'events'
                ? 'bg-purple-500 text-white'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <Calendar className="h-4 w-4 inline mr-2" />
            Events
          </button>
        </div>

        {/* Forums Tab */}
        {activeTab === 'forums' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-purple-500 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    All Categories
                  </button>
                  {mockCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-purple-500 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <category.icon className="h-4 w-4" />
                        <span>{category.name}</span>
                        <Badge className="bg-white/20 text-white text-xs">
                          {category.postCount}
                        </Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Posts List */}
            <div className="lg:col-span-3">
              {/* Search and Filters */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search posts, tags, or users..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400"
                    />
                  </div>
                  <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>

              {/* Posts */}
              <div className="space-y-4">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={post.author.avatar} alt={post.author.name} />
                        <AvatarFallback className="bg-purple-500 text-white">
                          {post.author.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-white truncate">{post.title}</h3>
                          {post.isPinned && <Pin className="h-4 w-4 text-yellow-400" />}
                          {post.isLocked && <Lock className="h-4 w-4 text-red-400" />}
                        </div>
                        
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="text-sm text-gray-300">{post.author.name}</span>
                          <Badge className={`text-xs ${getRoleColor(post.author.role)}`}>
                            {post.author.role}
                          </Badge>
                          <Badge className={`text-xs ${getLevelColor(post.author.level)}`}>
                            {post.author.level}
                          </Badge>
                          {post.author.verified && <Star className="h-3 w-3 text-yellow-400 fill-current" />}
                        </div>
                        
                        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{post.content}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs text-gray-400 border-gray-600">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                        
                        {post.attachments && (
                          <div className="flex items-center space-x-2 mb-4">
                            {post.attachments.map((attachment, index) => (
                              <div key={index} className="flex items-center space-x-1 px-2 py-1 bg-white/10 rounded-lg">
                                {attachment.type === 'image' && <Camera className="h-3 w-3 text-gray-400" />}
                                {attachment.type === 'video' && <Video className="h-3 w-3 text-gray-400" />}
                                {attachment.type === 'file' && <FileText className="h-3 w-3 text-gray-400" />}
                                <span className="text-xs text-gray-400">{attachment.name}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Heart className="h-4 w-4" />
                              <span>{post.likes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="h-4 w-4" />
                              <span>{post.replies}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="h-4 w-4" />
                              <span>{post.views}</span>
                            </div>
                            <span>{post.createdAt}</span>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                              <Heart className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                              <Bookmark className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                              <Share2 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mentorship Tab */}
        {activeTab === 'mentorship' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="h-8 w-8 text-indigo-400" />
                <div>
                  <h2 className="text-2xl font-bold text-white">Mentorship Program</h2>
                  <p className="text-gray-300">Connect with experienced artists and grow your skills</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">45</p>
                  <p className="text-gray-400">Active Mentors</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">234</p>
                  <p className="text-gray-400">Successful Matches</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">4.8</p>
                  <p className="text-gray-400">Average Rating</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockMentors.map((mentor) => (
                <div key={mentor.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={mentor.avatar} alt={mentor.name} />
                      <AvatarFallback className="bg-indigo-500 text-white">
                        {mentor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{mentor.name}</h3>
                      <p className="text-sm text-gray-400">{mentor.specialty}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Rating</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-white">{mentor.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Experience</span>
                      <span className="text-sm text-white">{mentor.experience}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Students</span>
                      <span className="text-sm text-white">{mentor.students}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Status</span>
                      <Badge className={`text-xs ${
                        mentor.availability === 'Available' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-yellow-500 text-white'
                      }`}>
                        {mentor.availability}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-300 mb-4">{mentor.bio}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {mentor.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs text-gray-400 border-gray-600">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Request Mentorship
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/30">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="h-8 w-8 text-pink-400" />
                <div>
                  <h2 className="text-2xl font-bold text-white">Upcoming Events</h2>
                  <p className="text-gray-300">Join our community events and challenges</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-6 w-6 text-yellow-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Monthly AI Art Challenge</h3>
                    <p className="text-sm text-gray-400">February Theme: "Future Cities"</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Create AI-generated artwork inspired by futuristic cityscapes. Winners get featured in our gallery and receive prizes!
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-400">Feb 1 - Feb 28</span>
                  </div>
                  <Badge className="bg-green-500 text-white">Active</Badge>
                </div>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                  Join Challenge
                </Button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="h-6 w-6 text-blue-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Community Meetup</h3>
                    <p className="text-sm text-gray-400">Virtual AI Art Workshop</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Join our monthly virtual meetup where artists share techniques, showcase work, and network with peers.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-400">Feb 15, 7:00 PM EST</span>
                  </div>
                  <Badge className="bg-blue-500 text-white">Upcoming</Badge>
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  Register
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
