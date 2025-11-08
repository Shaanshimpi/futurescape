import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MessageSquare, 
  Send, 
  Paperclip, 
  Smile, 
  Phone, 
  Video, 
  MoreVertical,
  Search,
  Filter,
  Star,
  Check,
  CheckCheck,
  Image as ImageIcon,
  FileText,
  Download
} from 'lucide-react';

interface Message {
  id: number;
  sender: 'artist' | 'brand';
  content: string;
  timestamp: string;
  isRead: boolean;
  attachments?: Array<{
    type: 'image' | 'file';
    name: string;
    url: string;
  }>;
}

interface Conversation {
  id: number;
  participant: {
    name: string;
    avatar: string;
    role: 'artist' | 'brand';
    company?: string;
    isOnline: boolean;
  };
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isPinned: boolean;
  project?: {
    title: string;
    status: 'active' | 'completed' | 'pending';
  };
}

const mockConversations: Conversation[] = [
  {
    id: 1,
    participant: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format",
      role: "brand",
      company: "TechCorp Marketing",
      isOnline: true
    },
    lastMessage: "The final artwork looks amazing! When can we expect the source files?",
    timestamp: "2 min ago",
    unreadCount: 2,
    isPinned: true,
    project: {
      title: "AI-Generated Tech Campaign",
      status: "active"
    }
  },
  {
    id: 2,
    participant: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
      role: "brand",
      company: "Creative Agency",
      isOnline: false
    },
    lastMessage: "Thanks for the quick turnaround on the revisions",
    timestamp: "1 hour ago",
    unreadCount: 0,
    isPinned: false,
    project: {
      title: "Brand Identity Design",
      status: "completed"
    }
  },
  {
    id: 3,
    participant: {
      name: "Emma Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format",
      role: "brand",
      company: "StartupXYZ",
      isOnline: true
    },
    lastMessage: "Could you create a few more variations in different color schemes?",
    timestamp: "3 hours ago",
    unreadCount: 1,
    isPinned: false,
    project: {
      title: "Product Launch Graphics",
      status: "active"
    }
  }
];

const mockMessages: Message[] = [
  {
    id: 1,
    sender: 'brand',
    content: "Hi! I love your AI art style. We're looking for someone to create visuals for our tech campaign. Are you available for a project?",
    timestamp: "10:30 AM",
    isRead: true
  },
  {
    id: 2,
    sender: 'artist',
    content: "Hello! Thank you for reaching out. I'd be happy to discuss the project details. What kind of visuals are you looking for?",
    timestamp: "10:32 AM",
    isRead: true
  },
  {
    id: 3,
    sender: 'brand',
    content: "We need futuristic tech-themed illustrations for our AI product launch. Here are some reference images:",
    timestamp: "10:35 AM",
    isRead: true,
    attachments: [
      {
        type: 'image',
        name: 'reference1.jpg',
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop&auto=format'
      },
      {
        type: 'image',
        name: 'reference2.jpg',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&auto=format'
      }
    ]
  },
  {
    id: 4,
    sender: 'artist',
    content: "Perfect! I can definitely work with this aesthetic. What's your timeline and budget range?",
    timestamp: "10:38 AM",
    isRead: true
  },
  {
    id: 5,
    sender: 'brand',
    content: "We need 5 illustrations by next Friday. Budget is $2,000-$3,000. Does that work for you?",
    timestamp: "10:40 AM",
    isRead: true
  },
  {
    id: 6,
    sender: 'artist',
    content: "That timeline and budget work perfectly! I'll start with sketches and send them for approval. Looking forward to working with you!",
    timestamp: "10:42 AM",
    isRead: true
  },
  {
    id: 7,
    sender: 'brand',
    content: "Excellent! I'll send over the project brief and contract details shortly.",
    timestamp: "10:45 AM",
    isRead: true
  },
  {
    id: 8,
    sender: 'brand',
    content: "The final artwork looks amazing! When can we expect the source files?",
    timestamp: "2 min ago",
    isRead: false
  }
];

export default function MessagingSystem() {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(mockConversations[0]);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConversations = mockConversations.filter(conv =>
    conv.participant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.participant.company?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message to the backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <MessageSquare className="h-8 w-8 text-purple-400" />
              <h1 className="text-xl sm:text-2xl font-bold text-white">Messages</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Conversations List */}
          <div className="lg:col-span-1 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            <div className="p-4 border-b border-white/10">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400"
                />
              </div>
            </div>
            
            <div className="overflow-y-auto max-h-[calc(100vh-300px)]">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`p-4 border-b border-white/10 cursor-pointer hover:bg-white/5 transition-colors ${
                    selectedConversation?.id === conversation.id ? 'bg-white/10' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={conversation.participant.avatar} alt={conversation.participant.name} />
                        <AvatarFallback className="bg-purple-500 text-white">
                          {conversation.participant.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      {conversation.participant.isOnline && (
                        <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-sm font-semibold text-white truncate">
                            {conversation.participant.name}
                          </h3>
                          {conversation.isPinned && (
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          )}
                        </div>
                        <span className="text-xs text-gray-400">{conversation.timestamp}</span>
                      </div>
                      
                      <p className="text-xs text-gray-400 mb-1">{conversation.participant.company}</p>
                      
                      {conversation.project && (
                        <Badge 
                          variant="outline" 
                          className={`text-xs mb-2 ${
                            conversation.project.status === 'active' ? 'border-green-500 text-green-400' :
                            conversation.project.status === 'completed' ? 'border-blue-500 text-blue-400' :
                            'border-yellow-500 text-yellow-400'
                          }`}
                        >
                          {conversation.project.title}
                        </Badge>
                      )}
                      
                      <p className="text-sm text-gray-300 truncate">{conversation.lastMessage}</p>
                      
                      {conversation.unreadCount > 0 && (
                        <div className="flex justify-end mt-2">
                          <Badge className="bg-purple-500 text-white text-xs">
                            {conversation.unreadCount}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden flex flex-col">
            {selectedConversation ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-white/10 bg-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={selectedConversation.participant.avatar} alt={selectedConversation.participant.name} />
                          <AvatarFallback className="bg-purple-500 text-white">
                            {selectedConversation.participant.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {selectedConversation.participant.isOnline && (
                          <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{selectedConversation.participant.name}</h3>
                        <p className="text-sm text-gray-400">{selectedConversation.participant.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {mockMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'artist' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[70%] ${message.sender === 'artist' ? 'order-2' : 'order-1'}`}>
                        <div
                          className={`p-3 rounded-2xl ${
                            message.sender === 'artist'
                              ? 'bg-purple-500 text-white'
                              : 'bg-white/10 text-white'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          
                          {message.attachments && (
                            <div className="mt-2 space-y-2">
                              {message.attachments.map((attachment, index) => (
                                <div key={index} className="flex items-center space-x-2 p-2 bg-white/10 rounded-lg">
                                  {attachment.type === 'image' ? (
                                    <ImageIcon className="h-4 w-4" />
                                  ) : (
                                    <FileText className="h-4 w-4" />
                                  )}
                                  <span className="text-xs">{attachment.name}</span>
                                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                    <Download className="h-3 w-3" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        <div className={`flex items-center space-x-1 mt-1 ${message.sender === 'artist' ? 'justify-end' : 'justify-start'}`}>
                          <span className="text-xs text-gray-400">{message.timestamp}</span>
                          {message.sender === 'artist' && (
                            <div className="flex items-center">
                              {message.isRead ? (
                                <CheckCheck className="h-3 w-3 text-blue-400" />
                              ) : (
                                <Check className="h-3 w-3 text-gray-400" />
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-white/10 bg-white/5">
                  <div className="flex items-end space-x-2">
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                      <ImageIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                      <Smile className="h-4 w-4" />
                    </Button>
                    
                    <div className="flex-1">
                      <Textarea
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="min-h-[40px] max-h-[120px] bg-white/10 border-white/20 text-white placeholder-gray-400 resize-none"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                          }
                        }}
                      />
                    </div>
                    
                    <Button 
                      onClick={handleSendMessage}
                      disabled={!newMessage.trim()}
                      className="bg-purple-500 hover:bg-purple-600 text-white"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Select a conversation</h3>
                  <p className="text-gray-400">Choose a conversation from the sidebar to start messaging</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
