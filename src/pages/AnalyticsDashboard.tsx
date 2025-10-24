import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Eye, 
  Heart, 
  MessageSquare, 
  Download, 
  Calendar, 
  Filter, 
  RefreshCw,
  Target,
  Award,
  Clock,
  DollarSign,
  Palette,
  Building2,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  MousePointer,
  Share2,
  Bookmark,
  Star,
  Zap,
  Activity,
  PieChart,
  LineChart,
  BarChart
} from 'lucide-react';

interface AnalyticsData {
  totalViews: number;
  totalLikes: number;
  totalShares: number;
  totalComments: number;
  totalEarnings: number;
  monthlyGrowth: number;
  topArtwork: {
    title: string;
    views: number;
    likes: number;
    image: string;
  };
  audienceDemographics: {
    ageGroups: Array<{ age: string; percentage: number }>;
    countries: Array<{ country: string; percentage: number }>;
    devices: Array<{ device: string; percentage: number }>;
  };
  engagementMetrics: {
    averageTimeOnPage: number;
    bounceRate: number;
    conversionRate: number;
    returnVisitorRate: number;
  };
  revenueAnalytics: {
    monthlyRevenue: number;
    revenueGrowth: number;
    topRevenueSources: Array<{ source: string; amount: number; percentage: number }>;
    paymentMethods: Array<{ method: string; percentage: number }>;
  };
  contentPerformance: {
    mostPopularCategories: Array<{ category: string; views: number; growth: number }>;
    uploadFrequency: Array<{ month: string; uploads: number }>;
    approvalRate: number;
    rejectionReasons: Array<{ reason: string; count: number }>;
  };
}

const mockAnalyticsData: AnalyticsData = {
  totalViews: 125847,
  totalLikes: 8943,
  totalShares: 2156,
  totalComments: 3421,
  totalEarnings: 125430,
  monthlyGrowth: 23.5,
  topArtwork: {
    title: "Neon Dreams",
    views: 15420,
    likes: 892,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop&auto=format"
  },
  audienceDemographics: {
    ageGroups: [
      { age: "18-24", percentage: 35 },
      { age: "25-34", percentage: 42 },
      { age: "35-44", percentage: 18 },
      { age: "45+", percentage: 5 }
    ],
    countries: [
      { country: "United States", percentage: 28 },
      { country: "United Kingdom", percentage: 15 },
      { country: "Canada", percentage: 12 },
      { country: "Germany", percentage: 10 },
      { country: "Australia", percentage: 8 },
      { country: "Others", percentage: 27 }
    ],
    devices: [
      { device: "Desktop", percentage: 45 },
      { device: "Mobile", percentage: 38 },
      { device: "Tablet", percentage: 17 }
    ]
  },
  engagementMetrics: {
    averageTimeOnPage: 3.2,
    bounceRate: 42.5,
    conversionRate: 8.7,
    returnVisitorRate: 34.2
  },
  revenueAnalytics: {
    monthlyRevenue: 15420,
    revenueGrowth: 18.3,
    topRevenueSources: [
      { source: "Collaborations", amount: 8920, percentage: 58 },
      { source: "Artwork Sales", amount: 4200, percentage: 27 },
      { source: "Subscriptions", amount: 1800, percentage: 12 },
      { source: "Commissions", amount: 500, percentage: 3 }
    ],
    paymentMethods: [
      { method: "Credit Card", percentage: 65 },
      { method: "PayPal", percentage: 25 },
      { method: "Bank Transfer", percentage: 10 }
    ]
  },
  contentPerformance: {
    mostPopularCategories: [
      { category: "Character Design", views: 45230, growth: 15.2 },
      { category: "Landscape Art", views: 38240, growth: 22.1 },
      { category: "Concept Art", views: 29850, growth: 8.7 },
      { category: "Abstract Art", views: 12530, growth: -2.3 }
    ],
    uploadFrequency: [
      { month: "Jan", uploads: 12 },
      { month: "Feb", uploads: 18 },
      { month: "Mar", uploads: 15 },
      { month: "Apr", uploads: 22 },
      { month: "May", uploads: 19 },
      { month: "Jun", uploads: 25 }
    ],
    approvalRate: 87.3,
    rejectionReasons: [
      { reason: "Quality Issues", count: 45 },
      { reason: "Inappropriate Content", count: 12 },
      { reason: "Copyright Concerns", count: 8 },
      { reason: "Technical Problems", count: 15 }
    ]
  }
};

const mockAdminAnalytics = {
  platformStats: {
    totalUsers: 15420,
    activeUsers: 8920,
    totalArtworks: 45670,
    pendingApprovals: 234,
    totalRevenue: 892340,
    platformGrowth: 34.2
  },
  userMetrics: {
    newRegistrations: 456,
    userRetention: 78.5,
    averageSessionDuration: 12.3,
    topUserCountries: [
      { country: "United States", users: 4230 },
      { country: "United Kingdom", users: 2156 },
      { country: "Canada", users: 1890 },
      { country: "Germany", users: 1654 }
    ]
  },
  contentModeration: {
    totalSubmissions: 1234,
    approvedSubmissions: 1078,
    rejectedSubmissions: 156,
    averageReviewTime: 2.4,
    moderatorPerformance: [
      { moderator: "Admin Team", reviews: 456, accuracy: 94.2 },
      { moderator: "AI System", reviews: 778, accuracy: 87.5 }
    ]
  },
  businessMetrics: {
    monthlyRevenue: 89234,
    revenueGrowth: 23.1,
    averageTransactionValue: 245,
    topRevenueStreams: [
      { stream: "Artist Subscriptions", revenue: 45670, growth: 18.2 },
      { stream: "Brand Premium", revenue: 28940, growth: 34.5 },
      { stream: "Commission Fees", revenue: 14624, growth: 12.8 }
    ]
  }
};

export default function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState<'artist' | 'admin'>('artist');
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d');
  const [data, setData] = useState(mockAnalyticsData);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getGrowthColor = (growth: number) => {
    return growth >= 0 ? 'text-green-400' : 'text-red-400';
  };

  const getGrowthIcon = (growth: number) => {
    return growth >= 0 ? TrendingUp : TrendingDown;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <BarChart3 className="h-8 w-8 text-purple-400" />
              <h1 className="text-xl sm:text-2xl font-bold text-white">Analytics Dashboard</h1>
            </div>
            <div className="flex items-center space-x-2">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value as any)}
                className="bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 text-sm"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
              <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-white/10 backdrop-blur-sm rounded-xl p-1 border border-white/20">
          <button
            onClick={() => setActiveTab('artist')}
            className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'artist'
                ? 'bg-purple-500 text-white'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <Palette className="h-4 w-4 inline mr-2" />
            Artist Analytics
          </button>
          <button
            onClick={() => setActiveTab('admin')}
            className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'admin'
                ? 'bg-purple-500 text-white'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <Shield className="h-4 w-4 inline mr-2" />
            Admin Analytics
          </button>
        </div>

        {/* Artist Analytics */}
        {activeTab === 'artist' && (
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white/5 backdrop-blur-sm border-white/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Total Views</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">{formatNumber(data.totalViews)}</div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-green-400">+{data.monthlyGrowth}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Total Likes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">{formatNumber(data.totalLikes)}</div>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4 text-pink-400" />
                      <span className="text-sm text-pink-400">+12.3%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Total Earnings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">{formatCurrency(data.totalEarnings)}</div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-green-400">+18.7%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Engagement Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">{data.engagementMetrics.conversionRate}%</div>
                    <div className="flex items-center space-x-1">
                      <Target className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-blue-400">+5.2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Audience Demographics */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Audience Demographics</CardTitle>
                  <CardDescription className="text-gray-400">Age distribution of your audience</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {data.audienceDemographics.ageGroups.map((group, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">{group.age}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-purple-500 h-2 rounded-full" 
                              style={{ width: `${group.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-white w-8">{group.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Performing Categories */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Top Performing Categories</CardTitle>
                  <CardDescription className="text-gray-400">Views by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {data.contentPerformance.mostPopularCategories.map((category, index) => {
                      const GrowthIcon = getGrowthIcon(category.growth);
                      return (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-300">{category.category}</span>
                            <div className="flex items-center space-x-1">
                              <GrowthIcon className={`h-3 w-3 ${getGrowthColor(category.growth)}`} />
                              <span className={`text-xs ${getGrowthColor(category.growth)}`}>
                                {category.growth > 0 ? '+' : ''}{category.growth}%
                              </span>
                            </div>
                          </div>
                          <span className="text-sm text-white">{formatNumber(category.views)}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Revenue Analytics */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Revenue Analytics</CardTitle>
                <CardDescription className="text-gray-400">Breakdown of revenue sources</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Revenue Sources</h4>
                    <div className="space-y-3">
                      {data.revenueAnalytics.topRevenueSources.map((source, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm text-gray-300">{source.source}</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-24 bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-green-500 h-2 rounded-full" 
                                style={{ width: `${source.percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-white">{formatCurrency(source.amount)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Payment Methods</h4>
                    <div className="space-y-3">
                      {data.revenueAnalytics.paymentMethods.map((method, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm text-gray-300">{method.method}</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-24 bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-blue-500 h-2 rounded-full" 
                                style={{ width: `${method.percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-white">{method.percentage}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Artwork */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Top Performing Artwork</CardTitle>
                <CardDescription className="text-gray-400">Your most popular piece this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <img 
                    src={data.topArtwork.image} 
                    alt={data.topArtwork.title}
                    className="w-24 h-24 rounded-lg object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/300x200/4f46e5/ffffff?text=Artwork';
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{data.topArtwork.title}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Views</p>
                        <p className="text-xl font-bold text-white">{formatNumber(data.topArtwork.views)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Likes</p>
                        <p className="text-xl font-bold text-white">{formatNumber(data.topArtwork.likes)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Admin Analytics */}
        {activeTab === 'admin' && (
          <div className="space-y-6">
            {/* Platform Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white/5 backdrop-blur-sm border-white/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Total Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">{formatNumber(mockAdminAnalytics.platformStats.totalUsers)}</div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-blue-400">+{mockAdminAnalytics.platformStats.platformGrowth}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Active Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">{formatNumber(mockAdminAnalytics.platformStats.activeUsers)}</div>
                    <div className="flex items-center space-x-1">
                      <Activity className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-green-400">+15.2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Total Artworks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">{formatNumber(mockAdminAnalytics.platformStats.totalArtworks)}</div>
                    <div className="flex items-center space-x-1">
                      <Palette className="h-4 w-4 text-purple-400" />
                      <span className="text-sm text-purple-400">+22.8%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Pending Approvals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">{mockAdminAnalytics.platformStats.pendingApprovals}</div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm text-yellow-400">Avg: 2.4h</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Content Moderation */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Content Moderation</CardTitle>
                <CardDescription className="text-gray-400">Review performance and statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{mockAdminAnalytics.contentModeration.approvedSubmissions}</div>
                    <p className="text-gray-400">Approved</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{mockAdminAnalytics.contentModeration.rejectedSubmissions}</div>
                    <p className="text-gray-400">Rejected</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{mockAdminAnalytics.contentModeration.averageReviewTime}h</div>
                    <p className="text-gray-400">Avg Review Time</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Metrics */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Business Metrics</CardTitle>
                <CardDescription className="text-gray-400">Revenue and growth statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Revenue Streams</h4>
                    <div className="space-y-3">
                      {mockAdminAnalytics.businessMetrics.topRevenueStreams.map((stream, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm text-gray-300">{stream.stream}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-white">{formatCurrency(stream.revenue)}</span>
                            <Badge className="bg-green-500 text-white text-xs">
                              +{stream.growth}%
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">User Metrics</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">New Registrations</span>
                        <span className="text-sm text-white">{mockAdminAnalytics.userMetrics.newRegistrations}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">User Retention</span>
                        <span className="text-sm text-white">{mockAdminAnalytics.userMetrics.userRetention}%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">Avg Session Duration</span>
                        <span className="text-sm text-white">{mockAdminAnalytics.userMetrics.averageSessionDuration}m</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
