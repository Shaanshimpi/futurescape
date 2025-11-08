// Mock data for the demo
export const mockArtists = [
  {
    id: 1,
    name: "Alex Chen",
    username: "@alexchen_ai",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
    bio: "AI artist specializing in surreal digital landscapes and character design",
    location: "San Francisco, CA",
    followers: 12500,
    artworks: 45,
    verified: true,
    specialties: ["Digital Art", "Character Design", "Surreal Landscapes"],
    socialMedia: {
      instagram: "@alexchen_ai",
      twitter: "@alexchen_ai",
      behance: "alexchen-ai"
    }
  },
  {
    id: 2,
    name: "Maya Rodriguez",
    username: "@maya_ai_art",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format",
    bio: "Creating futuristic cityscapes and abstract AI-generated art",
    location: "New York, NY",
    followers: 8900,
    artworks: 32,
    verified: true,
    specialties: ["Futuristic Art", "Abstract", "Cityscapes"],
    socialMedia: {
      instagram: "@maya_ai_art",
      twitter: "@maya_ai_art",
      behance: "maya-rodriguez"
    }
  },
  {
    id: 3,
    name: "David Kim",
    username: "@davidkim_creates",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
    bio: "AI artist focused on nature-inspired digital art and environmental themes",
    location: "Seattle, WA",
    followers: 15600,
    artworks: 67,
    verified: true,
    specialties: ["Nature Art", "Environmental", "Digital Painting"],
    socialMedia: {
      instagram: "@davidkim_creates",
      twitter: "@davidkim_creates",
      behance: "david-kim-art"
    }
  }
]

export const mockArtworks = [
  {
    id: 1,
    title: "Neon Dreams",
    artist: mockArtists[0],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop&auto=format",
    description: "A surreal landscape where neon lights dance through ethereal clouds",
    category: "Digital Art",
    tags: ["neon", "surreal", "landscape", "futuristic"],
    techniques: ["Midjourney", "Photoshop", "After Effects"],
    status: "approved",
    views: 1250,
    likes: 89,
    createdAt: "2024-01-15",
    isAvailableForCollaboration: true,
    price: 500
  },
  {
    id: 2,
    title: "Cyberpunk Metropolis",
    artist: mockArtists[1],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop&auto=format",
    description: "A sprawling futuristic city with towering skyscrapers and flying vehicles",
    category: "Digital Art",
    tags: ["cyberpunk", "city", "futuristic", "architecture"],
    techniques: ["DALL-E", "Blender", "Photoshop"],
    status: "approved",
    views: 2100,
    likes: 156,
    createdAt: "2024-01-20",
    isAvailableForCollaboration: true,
    price: 750
  },
  {
    id: 3,
    title: "Forest of Light",
    artist: mockArtists[2],
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop&auto=format",
    description: "An enchanted forest where bioluminescent trees create a magical atmosphere",
    category: "Digital Art",
    tags: ["nature", "forest", "magical", "bioluminescent"],
    techniques: ["Stable Diffusion", "Photoshop", "Lightroom"],
    status: "pending",
    views: 0,
    likes: 0,
    createdAt: "2024-01-25",
    isAvailableForCollaboration: true,
    price: 400
  }
]

export const mockCollaborations = [
  {
    id: 1,
    brand: "TechCorp",
    artist: mockArtists[0],
    artwork: mockArtworks[0],
    title: "Product Launch Campaign",
    description: "Need AI-generated visuals for our new product launch",
    budget: { min: 2000, max: 5000, currency: "USD" },
    timeline: "2 weeks",
    status: "pending",
    createdAt: "2024-01-22"
  },
  {
    id: 2,
    brand: "Fashion Brand X",
    artist: mockArtists[1],
    artwork: mockArtworks[1],
    title: "Fashion Campaign Visuals",
    description: "Looking for futuristic fashion campaign imagery",
    budget: { min: 1500, max: 3000, currency: "USD" },
    timeline: "3 weeks",
    status: "accepted",
    createdAt: "2024-01-18"
  }
]

export const mockNotifications = [
  {
    id: 1,
    type: "collaboration_request",
    title: "New Collaboration Request",
    message: "TechCorp wants to collaborate on your 'Neon Dreams' artwork",
    timestamp: "2 hours ago",
    read: false
  },
  {
    id: 2,
    type: "artwork_approved",
    title: "Artwork Approved",
    message: "Your artwork 'Forest of Light' has been approved and is now live",
    timestamp: "1 day ago",
    read: true
  },
  {
    id: 3,
    type: "new_follower",
    title: "New Follower",
    message: "You have 5 new followers this week",
    timestamp: "2 days ago",
    read: true
  }
]

export const mockStats = {
  totalViews: 15420,
  totalLikes: 892,
  totalCollaborations: 12,
  completedProjects: 8,
  pendingApprovals: 3,
  monthlyEarnings: 3200
}
