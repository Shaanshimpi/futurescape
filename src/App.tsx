import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { 
  Palette, 
  Users, 
  Shield, 
  Building2, 
  Image as ImageIcon,
  Sparkles,
  ArrowRight,
  MessageSquare,
  CreditCard,
  BarChart3,
  GraduationCap,
  Smartphone
} from 'lucide-react'

// Mock Pages Components
import ArtistDashboard from './pages/ArtistDashboard'
import AdminPanel from './pages/AdminPanel'
import BrandPortal from './pages/BrandPortal'
import PublicGallery from './pages/PublicGallery'
import MessagingSystem from './pages/MessagingSystem'
import PaymentSystem from './pages/PaymentSystem'
import CommunityForum from './pages/CommunityForum'
import AnalyticsDashboard from './pages/AnalyticsDashboard'
import MobileAppMockup from './pages/MobileAppMockup'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/artist-dashboard" element={<ArtistDashboard />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/brand-portal" element={<BrandPortal />} />
        <Route path="/public-gallery" element={<PublicGallery />} />
        <Route path="/messaging" element={<MessagingSystem />} />
        <Route path="/payment" element={<PaymentSystem />} />
        <Route path="/community" element={<CommunityForum />} />
        <Route path="/analytics" element={<AnalyticsDashboard />} />
        <Route path="/mobile-app" element={<MobileAppMockup />} />
      </Routes>
    </Router>
  )
}

function LandingPage() {
  const demoPages = [
    {
      title: "AI Art Gallery",
      description: "Pinterest-style gallery showcasing AI-generated artwork",
      icon: ImageIcon,
      path: "/public-gallery",
      gradient: "from-orange-500 to-red-500",
      features: ["Masonry Layout", "Artwork Discovery", "Artist Profiles", "Interactive Gallery"],
      priority: true
    },
    {
      title: "Artist Dashboard",
      description: "Portfolio management, artwork upload, and collaboration tracking",
      icon: Palette,
      path: "/artist-dashboard",
      gradient: "from-purple-500 to-pink-500",
      features: ["Upload Artwork", "Portfolio Management", "Collaboration Requests", "Analytics"]
    },
    {
      title: "Admin Panel",
      description: "Content moderation, user management, and platform oversight",
      icon: Shield,
      path: "/admin-panel",
      gradient: "from-blue-500 to-cyan-500",
      features: ["Content Approval", "User Management", "Analytics Dashboard", "Quality Control"]
    },
    {
      title: "Brand Portal",
      description: "Artist discovery, collaboration requests, and project management",
      icon: Building2,
      path: "/brand-portal",
      gradient: "from-green-500 to-emerald-500",
      features: ["Artist Discovery", "Portfolio Browsing", "Project Management", "Communication Hub"]
    },
    {
      title: "Messaging System",
      description: "Real-time communication between artists and brands",
      icon: MessageSquare,
      path: "/messaging",
      gradient: "from-indigo-500 to-purple-500",
      features: ["Real-time Chat", "File Sharing", "Project Communication", "Message History"]
    },
    {
      title: "Payment System",
      description: "Pricing tiers, earnings tracking, and transaction management",
      icon: CreditCard,
      path: "/payment",
      gradient: "from-emerald-500 to-teal-500",
      features: ["Pricing Plans", "Earnings Tracking", "Transaction History", "Payment Methods"]
    },
    {
      title: "Community Forum",
      description: "Forums, mentorship, and community events",
      icon: GraduationCap,
      path: "/community",
      gradient: "from-rose-500 to-pink-500",
      features: ["Discussion Forums", "Mentorship Program", "Community Events", "Knowledge Sharing"]
    },
    {
      title: "Analytics Dashboard",
      description: "Advanced analytics for artists and administrators",
      icon: BarChart3,
      path: "/analytics",
      gradient: "from-violet-500 to-purple-500",
      features: ["Performance Metrics", "Audience Insights", "Revenue Analytics", "Content Analytics"]
    },
    {
      title: "Mobile App",
      description: "Native mobile app interface mockup",
      icon: Smartphone,
      path: "/mobile-app",
      gradient: "from-cyan-500 to-blue-500",
      features: ["Native iOS Design", "Mobile-First UX", "Touch Interactions", "App Store Ready"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative z-10 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Futurescape Studios</h1>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-purple-300">
              About
            </Button>
            <Button variant="ghost" className="text-white hover:text-purple-300">
              Contact
            </Button>
          </div>
          <div className="sm:hidden">
            <Button variant="ghost" size="sm" className="text-white hover:text-purple-300">
              Menu
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              UI Showcase Demo
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6">
              <span className="gradient-text">Futurescape Studios</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              AI Artist Portfolio Platform - Interactive Demo
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Explore our platform's key features and user interfaces designed for AI artists, brands, and administrators.
            </p>
          </div>

          {/* Demo Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            <div className="animate-slide-up">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">10</h3>
                <p className="text-gray-300 text-sm sm:text-base">Demo Interfaces</p>
              </div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <ImageIcon className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">20+</h3>
                <p className="text-gray-300 text-sm sm:text-base">Mock Artworks</p>
              </div>
            </div>
            <div className="animate-slide-up sm:col-span-2 lg:col-span-1" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">100%</h3>
                <p className="text-gray-300 text-sm sm:text-base">Interactive Demo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Pages Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Interactive Demo Interfaces
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Click through each interface to experience the platform's functionality
            </p>
          </div>

          {/* Featured Gallery Card */}
          <div className="mb-8 sm:mb-12">
            {demoPages.filter(page => page.priority).map((page) => (
              <div key={page.title} className="group animate-slide-up">
                <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                    <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-0">
                      <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${page.gradient}`}>
                        <page.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                      </div>
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-2">
                          <h3 className="text-2xl sm:text-3xl font-bold text-white">{page.title}</h3>
                          <span className="px-2 sm:px-3 py-1 bg-orange-500 text-white text-xs sm:text-sm font-medium rounded-full w-fit">Featured</span>
                        </div>
                        <p className="text-gray-300 text-sm sm:text-base lg:text-lg">{page.description}</p>
                      </div>
                    </div>
                    <Link to={page.path}>
                      <Button 
                        variant="gradient" 
                        size="lg" 
                        className="w-full sm:w-auto group-hover:scale-105 transition-transform duration-200"
                      >
                        Start Here
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {page.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-2 sm:px-3 py-1 bg-white/20 rounded-full text-xs sm:text-sm text-white"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Demo Pages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {demoPages.filter(page => !page.priority).map((page, index) => (
              <div 
                key={page.title}
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                    <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${page.gradient}`}>
                      <page.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                        {page.title}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                        {page.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {page.features.slice(0, 2).map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-white/20 rounded-full text-xs text-white"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link to={page.path}>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:scale-105 transition-transform duration-200"
                    >
                      View Demo
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="px-4 sm:px-6 py-8 sm:py-12 border-t border-white/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
            <span className="text-lg sm:text-xl font-bold text-white">Futurescape Studios</span>
          </div>
          <p className="text-gray-400 mb-1 sm:mb-2 text-sm sm:text-base">
            Interactive UI Showcase Demo
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2024 Futurescape Studios. Demo purposes only.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
