"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Shield,
  Play,
  BookOpen,
  Search,
  Filter,
  Clock,
  Eye,
  Download,
  Share2,
  AlertTriangle,
  Smartphone,
  Lock,
  Mail,
  Wifi,
  ChevronRight,
  Star,
  TrendingUp,
} from "lucide-react"

const AwarenessTraining = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { id: "all", label: "All Content", count: 45 },
    { id: "blog", label: "Blog Posts", count: 18 },
    { id: "video", label: "Videos", count: 12 },
    { id: "infographic", label: "Infographics", count: 8 },
    { id: "guide", label: "Safety Guides", count: 7 },
  ]

  const featuredContent = [
    {
      id: 1,
      type: "video",
      title: "How to Spot Phishing Emails in 2024",
      description: "Learn the latest techniques scammers use and how to protect yourself from phishing attacks.",
      thumbnail: "/placeholder.svg?height=200&width=350&text=Phishing+Video",
      duration: "8:45",
      views: "12.5K",
      category: "Email Security",
      featured: true,
    },
    {
      id: 2,
      type: "blog",
      title: "The Rise of AI-Powered Cyber Attacks",
      description:
        "Understanding how artificial intelligence is being weaponized by cybercriminals and how to defend against it.",
      thumbnail: "/placeholder.svg?height=200&width=350&text=AI+Cyber+Attacks",
      readTime: "5 min read",
      views: "8.2K",
      category: "Emerging Threats",
      featured: true,
    },
    {
      id: 3,
      type: "infographic",
      title: "Password Security Best Practices",
      description: "Visual guide to creating strong passwords and managing them securely.",
      thumbnail: "/placeholder.svg?height=200&width=350&text=Password+Infographic",
      downloads: "3.1K",
      category: "Password Security",
      featured: true,
    },
  ]

  const blogPosts = [
    {
      id: 4,
      type: "blog",
      title: "Social Engineering: The Human Factor in Cybersecurity",
      description: "How cybercriminals manipulate human psychology to breach security systems.",
      author: "Dr. Sarah Chen",
      date: "2 days ago",
      readTime: "7 min read",
      views: "5.8K",
      category: "Social Engineering",
      tags: ["Psychology", "Human Factor", "Prevention"],
    },
    {
      id: 5,
      type: "blog",
      title: "Securing Your Home Wi-Fi Network",
      description: "Step-by-step guide to protect your home network from unauthorized access.",
      author: "Mike Rodriguez",
      date: "1 week ago",
      readTime: "4 min read",
      views: "9.3K",
      category: "Network Security",
      tags: ["Wi-Fi", "Home Security", "Router"],
    },
    {
      id: 6,
      type: "blog",
      title: "Cryptocurrency Scams: What to Watch Out For",
      description: "Common cryptocurrency fraud schemes and how to avoid becoming a victim.",
      author: "Alex Thompson",
      date: "2 weeks ago",
      readTime: "6 min read",
      views: "7.1K",
      category: "Financial Security",
      tags: ["Cryptocurrency", "Scams", "Investment"],
    },
  ]

  const videos = [
    {
      id: 7,
      type: "video",
      title: "Two-Factor Authentication Setup Guide",
      description: "Complete walkthrough of setting up 2FA on popular platforms.",
      duration: "12:30",
      views: "15.2K",
      category: "Account Security",
      thumbnail: "/placeholder.svg?height=180&width=320&text=2FA+Setup",
    },
    {
      id: 8,
      type: "video",
      title: "Mobile Security Essentials",
      description: "Protecting your smartphone from malware and data breaches.",
      duration: "9:15",
      views: "11.8K",
      category: "Mobile Security",
      thumbnail: "/placeholder.svg?height=180&width=320&text=Mobile+Security",
    },
    {
      id: 9,
      type: "video",
      title: "Safe Online Shopping Tips",
      description: "How to shop online securely and avoid e-commerce scams.",
      duration: "6:45",
      views: "8.9K",
      category: "E-commerce Security",
      thumbnail: "/placeholder.svg?height=180&width=320&text=Online+Shopping",
    },
  ]

  const infographics = [
    {
      id: 10,
      type: "infographic",
      title: "Cybersecurity Statistics 2024",
      description: "Key statistics and trends in cybersecurity threats.",
      downloads: "4.5K",
      category: "Statistics",
      thumbnail: "/placeholder.svg?height=250&width=200&text=Cyber+Stats+2024",
    },
    {
      id: 11,
      type: "infographic",
      title: "Social Media Privacy Settings",
      description: "Visual guide to securing your social media accounts.",
      downloads: "3.8K",
      category: "Social Media",
      thumbnail: "/placeholder.svg?height=250&width=200&text=Social+Media+Privacy",
    },
    {
      id: 12,
      type: "infographic",
      title: "Ransomware Prevention Checklist",
      description: "Essential steps to protect against ransomware attacks.",
      downloads: "5.2K",
      category: "Malware Protection",
      thumbnail: "/placeholder.svg?height=250&width=200&text=Ransomware+Prevention",
    },
  ]

  const safetyGuides = [
    {
      id: 13,
      type: "guide",
      title: "Complete Guide to Digital Privacy",
      description: "Comprehensive resource for protecting your digital footprint.",
      pages: "24 pages",
      downloads: "2.1K",
      category: "Privacy",
      level: "Intermediate",
    },
    {
      id: 14,
      type: "guide",
      title: "Small Business Cybersecurity Handbook",
      description: "Essential security practices for small business owners.",
      pages: "32 pages",
      downloads: "1.8K",
      category: "Business Security",
      level: "Advanced",
    },
    {
      id: 15,
      type: "guide",
      title: "Parents' Guide to Online Safety",
      description: "Protecting children in the digital age.",
      pages: "16 pages",
      downloads: "3.4K",
      category: "Family Safety",
      level: "Beginner",
    },
  ]

  const threatAlerts = [
    {
      id: 1,
      title: "New Banking Trojan Targeting Mobile Apps",
      severity: "high",
      date: "Today",
      description: "A sophisticated malware campaign is targeting banking applications on Android devices.",
    },
    {
      id: 2,
      title: "Phishing Campaign Impersonating Tax Authorities",
      severity: "medium",
      date: "Yesterday",
      description: "Scammers are sending fake tax refund emails to steal personal information.",
    },
    {
      id: 3,
      title: "Vulnerability in Popular VPN Software",
      severity: "high",
      date: "2 days ago",
      description: "Critical security flaw discovered in widely-used VPN application.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className=" container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-bold text-gray-900">RCPP</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Report
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Help Desk
              </a>
              <a href="#" className="text-emerald-600 font-medium">
                Awareness
              </a>
              <Button variant="outline" size="sm">
                Log In
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-16">
        <div className=" container mx-auto px-6">
          <div className="text-center">
            <Badge variant="secondary" className="bg-emerald-500 text-white mb-4">
              <BookOpen className="h-3 w-3 mr-1" />
              Awareness & Training
            </Badge>
            <h1 className="text-5xl font-bold mb-4">Stay Informed, Stay Protected</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
              Access the latest cybersecurity insights, educational content, and practical resources to enhance your
              digital safety knowledge.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for topics, guides, videos..."
                className="pl-12 pr-4 py-3 text-lg bg-white text-gray-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" container mx-auto px-6 py-12">
        {/* Current Threat Alerts */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
              Current Threat Alerts
            </h2>
            <Button variant="outline" size="sm">
              View All Alerts
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {threatAlerts.map((alert) => (
              <Card
                key={alert.id}
                className={`border-l-4 ${
                  alert.severity === "high" ? "border-l-red-500 bg-red-50" : "border-l-amber-500 bg-amber-50"
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge
                      variant={alert.severity === "high" ? "destructive" : "secondary"}
                      className={alert.severity === "high" ? "bg-red-600" : "bg-amber-600"}
                    >
                      {alert.severity.toUpperCase()}
                    </Badge>
                    <span className="text-xs text-gray-500">{alert.date}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{alert.title}</h3>
                  <p className="text-sm text-gray-600">{alert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Filter Categories */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 overflow-x-auto pb-2">
            <Filter className="h-5 w-5 text-gray-400 flex-shrink-0" />
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category.id)}
                className={`flex-shrink-0 ${activeFilter === category.id ? "bg-emerald-600 hover:bg-emerald-700" : ""}`}
              >
                {category.label}
                <Badge variant="secondary" className="ml-2 bg-gray-100 text-gray-600">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Star className="h-6 w-6 text-amber-500 mr-2" />
            Featured Content
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredContent.map((content) => (
              <Card key={content.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <img
                    src={content.thumbnail || "/placeholder.svg"}
                    alt={content.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {content.type === "video" && (
                      <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                        <Play className="h-5 w-5 mr-2" />
                        Play Video
                      </Button>
                    )}
                    {content.type === "blog" && (
                      <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                        <BookOpen className="h-5 w-5 mr-2" />
                        Read Article
                      </Button>
                    )}
                    {content.type === "infographic" && (
                      <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                        <Download className="h-5 w-5 mr-2" />
                        Download
                      </Button>
                    )}
                  </div>
                  <Badge className="absolute top-3 left-3 bg-emerald-600">
                    {content.type.charAt(0).toUpperCase() + content.type.slice(1)}
                  </Badge>
                  {content.duration && (
                    <Badge variant="secondary" className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white">
                      {content.duration}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-2">
                    {content.category}
                  </Badge>
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {content.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{content.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {content.views || content.downloads} {content.views ? "views" : "downloads"}
                    </div>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Blog Posts Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <BookOpen className="h-6 w-6 text-emerald-600 mr-2" />
              Latest Blog Posts
            </h2>
            <Button variant="outline">
              View All Posts
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline">{post.category}</Badge>
                        <span className="text-sm text-gray-500">{post.date}</span>
                      </div>
                      <h3 className="font-bold text-xl text-gray-900 mb-2 hover:text-emerald-600 transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{post.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>By {post.author}</span>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </div>
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {post.views}
                          </div>
                        </div>
                        <div className="flex space-x-1">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Play className="h-6 w-6 text-red-600 mr-2" />
              Educational Videos
            </h2>
            <Button variant="outline">
              View All Videos
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                      <Play className="h-5 w-5 mr-2" />
                      Play Video
                    </Button>
                  </div>
                  <Badge variant="secondary" className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white">
                    {video.duration}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2 text-xs">
                    {video.category}
                  </Badge>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{video.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {video.views}
                    </div>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Infographics Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
              Infographics & Visual Guides
            </h2>
            <Button variant="outline">
              View All Infographics
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {infographics.map((infographic) => (
              <Card key={infographic.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <img
                    src={infographic.thumbnail || "/placeholder.svg"}
                    alt={infographic.title}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                      <Download className="h-5 w-5 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2 text-xs">
                    {infographic.category}
                  </Badge>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {infographic.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{infographic.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      {infographic.downloads}
                    </div>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Safety Guides Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Shield className="h-6 w-6 text-emerald-600 mr-2" />
              Comprehensive Safety Guides
            </h2>
            <Button variant="outline">
              View All Guides
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {safetyGuides.map((guide) => (
              <Card key={guide.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="outline">{guide.category}</Badge>
                    <Badge
                      variant="secondary"
                      className={`${
                        guide.level === "Beginner"
                          ? "bg-green-100 text-green-800"
                          : guide.level === "Intermediate"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {guide.level}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2 hover:text-emerald-600 transition-colors cursor-pointer">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{guide.pages}</span>
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      {guide.downloads}
                    </div>
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download Guide
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Tips Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Security Tips</h2>
            <p className="text-gray-600">Essential practices for everyday digital safety</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Use Strong Passwords</h3>
              <p className="text-sm text-gray-600">Create unique, complex passwords for each account</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Verify Emails</h3>
              <p className="text-sm text-gray-600">Always verify sender before clicking links</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Update Devices</h3>
              <p className="text-sm text-gray-600">Keep software and apps up to date</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure Networks</h3>
              <p className="text-sm text-gray-600">Avoid public Wi-Fi for sensitive activities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AwarenessTraining
