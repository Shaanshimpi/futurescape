import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CreditCard, 
  Check, 
  Star, 
  Zap, 
  Crown, 
  Building2,
  Users,
  Shield,
  Clock,
  DollarSign,
  TrendingUp,
  Award,
  MessageSquare,
  Palette,
  BarChart3,
  Settings,
  FileText,
  Download,
  Calendar,
  Target,
  Globe,
  Smartphone
} from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  icon: React.ComponentType<any>;
  gradient: string;
  features: string[];
  limitations: string[];
  popular?: boolean;
  buttonText: string;
  buttonVariant: 'default' | 'outline' | 'gradient';
}

const pricingTiers: PricingTier[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: 'forever',
    description: 'Perfect for getting started with AI art',
    icon: Palette,
    gradient: 'from-gray-500 to-gray-600',
    features: [
      'Up to 10 artwork uploads',
      'Basic portfolio showcase',
      'Public gallery visibility',
      'Basic analytics',
      'Community access'
    ],
    limitations: [
      'Limited collaboration requests',
      'Basic support only',
      'No priority listing'
    ],
    buttonText: 'Get Started Free',
    buttonVariant: 'outline'
  },
  {
    id: 'artist-pro',
    name: 'Artist Pro',
    price: 29,
    period: 'month',
    description: 'For serious AI artists building their career',
    icon: Crown,
    gradient: 'from-purple-500 to-pink-500',
    features: [
      'Unlimited artwork uploads',
      'Advanced portfolio customization',
      'Priority in search results',
      'Advanced analytics & insights',
      'Direct brand messaging',
      'Collaboration request management',
      'Priority support',
      'Custom portfolio themes'
    ],
    limitations: [
      'Standard commission rates',
      'Basic project management'
    ],
    popular: true,
    buttonText: 'Upgrade to Pro',
    buttonVariant: 'gradient'
  },
  {
    id: 'brand-premium',
    name: 'Brand Premium',
    price: 99,
    period: 'month',
    description: 'For brands and agencies seeking top talent',
    icon: Building2,
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      'Advanced artist search & filtering',
      'Priority access to top artists',
      'Project management tools',
      'Team collaboration features',
      'Advanced analytics dashboard',
      'Custom project briefs',
      'Dedicated account manager',
      'API access for integrations',
      'White-label options'
    ],
    limitations: [
      'Higher commission rates',
      'Minimum project requirements'
    ],
    buttonText: 'Start Premium',
    buttonVariant: 'default'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 0,
    period: 'custom',
    description: 'Custom solutions for large organizations',
    icon: Shield,
    gradient: 'from-green-500 to-emerald-500',
    features: [
      'Custom platform integration',
      'Dedicated infrastructure',
      'Custom branding & themes',
      'Advanced security features',
      '24/7 dedicated support',
      'Custom API development',
      'On-premise deployment options',
      'Custom analytics & reporting',
      'SLA guarantees'
    ],
    limitations: [],
    buttonText: 'Contact Sales',
    buttonVariant: 'outline'
  }
];

const mockTransactions = [
  {
    id: 1,
    type: 'collaboration',
    amount: 2500,
    status: 'completed',
    date: '2024-01-15',
    description: 'TechCorp Marketing Campaign',
    artist: 'Alex Chen',
    brand: 'TechCorp Marketing'
  },
  {
    id: 2,
    type: 'subscription',
    amount: 29,
    status: 'completed',
    date: '2024-01-01',
    description: 'Artist Pro Subscription',
    artist: null,
    brand: null
  },
  {
    id: 3,
    type: 'collaboration',
    amount: 1800,
    status: 'pending',
    date: '2024-01-20',
    description: 'StartupXYZ Product Launch',
    artist: 'Alex Chen',
    brand: 'StartupXYZ'
  },
  {
    id: 4,
    type: 'collaboration',
    amount: 3200,
    status: 'completed',
    date: '2023-12-28',
    description: 'Creative Agency Brand Identity',
    artist: 'Alex Chen',
    brand: 'Creative Agency'
  }
];

const mockEarnings = {
  totalEarnings: 7530,
  monthlyEarnings: 2529,
  pendingEarnings: 1800,
  platformFees: 753,
  netEarnings: 6777,
  growthRate: 23.5
};

export default function PaymentSystem() {
  const [selectedTier, setSelectedTier] = useState<string>('artist-pro');
  const [activeTab, setActiveTab] = useState<'pricing' | 'earnings' | 'transactions'>('pricing');

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-500/20';
      case 'pending': return 'text-yellow-400 bg-yellow-500/20';
      case 'failed': return 'text-red-400 bg-red-500/20';
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
              <CreditCard className="h-8 w-8 text-purple-400" />
              <h1 className="text-xl sm:text-2xl font-bold text-white">Payment & Billing</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-white/10 backdrop-blur-sm rounded-xl p-1 border border-white/20">
          <button
            onClick={() => setActiveTab('pricing')}
            className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'pricing'
                ? 'bg-purple-500 text-white'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <Crown className="h-4 w-4 inline mr-2" />
            Pricing Plans
          </button>
          <button
            onClick={() => setActiveTab('earnings')}
            className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'earnings'
                ? 'bg-purple-500 text-white'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <TrendingUp className="h-4 w-4 inline mr-2" />
            Earnings
          </button>
          <button
            onClick={() => setActiveTab('transactions')}
            className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'transactions'
                ? 'bg-purple-500 text-white'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <FileText className="h-4 w-4 inline mr-2" />
            Transactions
          </button>
        </div>

        {/* Pricing Plans Tab */}
        {activeTab === 'pricing' && (
          <div className="space-y-8">
            {/* Current Plan Status */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Crown className="h-8 w-8 text-purple-400" />
                  <div>
                    <h2 className="text-2xl font-bold text-white">Current Plan: Artist Pro</h2>
                    <p className="text-gray-300">Renews on February 1, 2024</p>
                  </div>
                </div>
                <Badge className="bg-green-500 text-white">Active</Badge>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">$29</p>
                  <p className="text-gray-400">per month</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">Unlimited</p>
                  <p className="text-gray-400">artwork uploads</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">Priority</p>
                  <p className="text-gray-400">support & listing</p>
                </div>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingTiers.map((tier) => (
                <Card 
                  key={tier.id}
                  className={`relative bg-white/5 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 ${
                    tier.popular ? 'ring-2 ring-purple-500/50 scale-105' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-purple-500 text-white px-3 py-1">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className={`mx-auto p-3 rounded-xl bg-gradient-to-r ${tier.gradient} w-fit mb-4`}>
                      <tier.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{tier.name}</CardTitle>
                    <CardDescription className="text-gray-400">{tier.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-white">
                        {tier.price === 0 ? 'Free' : `$${tier.price}`}
                      </span>
                      {tier.price > 0 && (
                        <span className="text-gray-400 ml-2">/{tier.period}</span>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Features:</h4>
                      <ul className="space-y-2">
                        {tier.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {tier.limitations.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Limitations:</h4>
                        <ul className="space-y-2">
                          {tier.limitations.map((limitation, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-400">
                              <Clock className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                              {limitation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>

                  <CardFooter>
                    <Button 
                      variant={tier.buttonVariant}
                      className="w-full"
                      onClick={() => setSelectedTier(tier.id)}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Payment Methods</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/20">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="h-6 w-6 text-purple-400" />
                      <div>
                        <p className="text-white font-medium">**** **** **** 4242</p>
                        <p className="text-gray-400 text-sm">Expires 12/25</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500 text-white">Primary</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/20">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="h-6 w-6 text-purple-400" />
                      <div>
                        <p className="text-white font-medium">**** **** **** 1234</p>
                        <p className="text-gray-400 text-sm">Expires 08/26</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                      Set Primary
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button variant="outline" className="w-full text-white border-white/20 hover:bg-white/10">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Add New Card
                  </Button>
                  <Button variant="outline" className="w-full text-white border-white/20 hover:bg-white/10">
                    <Globe className="h-4 w-4 mr-2" />
                    Add PayPal
                  </Button>
                  <Button variant="outline" className="w-full text-white border-white/20 hover:bg-white/10">
                    <Smartphone className="h-4 w-4 mr-2" />
                    Add Apple Pay
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Earnings Tab */}
        {activeTab === 'earnings' && (
          <div className="space-y-8">
            {/* Earnings Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <DollarSign className="h-8 w-8 text-green-400" />
                  <TrendingUp className="h-5 w-5 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{formatCurrency(mockEarnings.totalEarnings)}</h3>
                <p className="text-gray-400">Total Earnings</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <Calendar className="h-8 w-8 text-blue-400" />
                  <TrendingUp className="h-5 w-5 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{formatCurrency(mockEarnings.monthlyEarnings)}</h3>
                <p className="text-gray-400">This Month</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <Clock className="h-8 w-8 text-yellow-400" />
                  <Target className="h-5 w-5 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{formatCurrency(mockEarnings.pendingEarnings)}</h3>
                <p className="text-gray-400">Pending</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <BarChart3 className="h-8 w-8 text-purple-400" />
                  <TrendingUp className="h-5 w-5 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">+{mockEarnings.growthRate}%</h3>
                <p className="text-gray-400">Growth Rate</p>
              </div>
            </div>

            {/* Earnings Chart Placeholder */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Earnings Trend</h3>
              <div className="h-64 bg-white/5 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400">Earnings chart would be displayed here</p>
                  <p className="text-gray-500 text-sm">Integration with Chart.js or similar library</p>
                </div>
              </div>
            </div>

            {/* Platform Fees Breakdown */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Platform Fees Breakdown</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <div>
                    <p className="text-white font-medium">Total Platform Fees</p>
                    <p className="text-gray-400 text-sm">10% commission on collaborations</p>
                  </div>
                  <span className="text-xl font-bold text-red-400">{formatCurrency(mockEarnings.platformFees)}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <div>
                    <p className="text-white font-medium">Net Earnings</p>
                    <p className="text-gray-400 text-sm">After platform fees</p>
                  </div>
                  <span className="text-xl font-bold text-green-400">{formatCurrency(mockEarnings.netEarnings)}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Transactions Tab */}
        {activeTab === 'transactions' && (
          <div className="space-y-6">
            {/* Transaction Filters */}
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                All Transactions
              </Button>
              <Button variant="ghost" className="text-gray-400 hover:text-white">
                Collaborations
              </Button>
              <Button variant="ghost" className="text-gray-400 hover:text-white">
                Subscriptions
              </Button>
              <Button variant="ghost" className="text-gray-400 hover:text-white">
                Withdrawals
              </Button>
            </div>

            {/* Transactions List */}
            <div className="space-y-4">
              {mockTransactions.map((transaction) => (
                <div key={transaction.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${
                        transaction.type === 'collaboration' ? 'bg-purple-500/20' : 'bg-blue-500/20'
                      }`}>
                        {transaction.type === 'collaboration' ? (
                          <MessageSquare className="h-6 w-6 text-purple-400" />
                        ) : (
                          <Crown className="h-6 w-6 text-blue-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{transaction.description}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>{transaction.date}</span>
                          {transaction.artist && (
                            <span>Artist: {transaction.artist}</span>
                          )}
                          {transaction.brand && (
                            <span>Brand: {transaction.brand}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl font-bold text-white">{formatCurrency(transaction.amount)}</span>
                        <Badge className={`${getStatusColor(transaction.status)}`}>
                          {transaction.status}
                        </Badge>
                      </div>
                      {transaction.status === 'pending' && (
                        <p className="text-sm text-gray-400 mt-1">Processing...</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
