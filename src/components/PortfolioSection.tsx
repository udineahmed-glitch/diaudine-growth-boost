'use client'

import { ExternalLink, BarChart3, Palette, Code, Megaphone } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: 'Facebook Ads Dashboard',
      category: 'Campaign Management',
      icon: BarChart3,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
      description: 'Advanced analytics dashboard for Facebook advertising campaigns with real-time performance tracking.',
      tags: ['Facebook Ads', 'Analytics', 'Dashboard'],
      metrics: '10K+ leads generated'
    },
    {
      title: 'E-commerce UX Design',
      category: 'UX/UI Design',
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600',
      description: 'Modern e-commerce interface design optimized for conversion and user experience.',
      tags: ['UX/UI', 'E-commerce', 'Conversion'],
      metrics: '15% conversion rate'
    },
    {
      title: 'SaaS Landing Page',
      category: 'Web Development',
      icon: Code,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
      description: 'High-converting landing page for B2B SaaS company with integrated analytics.',
      tags: ['Landing Page', 'SaaS', 'Conversion'],
      metrics: '+40% conversion lift'
    },
    {
      title: 'Google Ads Creative',
      category: 'Ad Creative',
      icon: Megaphone,
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600',
      description: 'High-performing Google Ads creative design for tech industry campaigns.',
      tags: ['Google Ads', 'Creative', 'Tech'],
      metrics: '-20% cost per acquisition'
    },
    {
      title: 'Snapchat Campaign Manager',
      category: 'Campaign Management',
      icon: BarChart3,
      image: 'https://images.unsplash.com/photo-1554474051-0e7e5041d61d?w=600',
      description: 'Custom campaign management interface for Snapchat Ads optimization.',
      tags: ['Snapchat', 'Campaign', 'Gen Z'],
      metrics: '+40% brand awareness'
    },
    {
      title: 'Sports Brand Website',
      category: 'Web Development',
      icon: Code,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600',
      description: 'Responsive sports brand website with integrated e-commerce functionality.',
      tags: ['Sports', 'E-commerce', 'Mobile'],
      metrics: '+25% online sales'
    },
    {
      title: 'TikTok Ad Creative Suite',
      category: 'Ad Creative',
      icon: Megaphone,
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600',
      description: 'Viral-optimized creative designs for TikTok advertising campaigns.',
      tags: ['TikTok', 'Viral', 'Creative'],
      metrics: '2M+ impressions'
    },
    {
      title: 'Analytics Dashboard',
      category: 'Analytics',
      icon: BarChart3,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
      description: 'Comprehensive multi-platform analytics dashboard for campaign performance.',
      tags: ['Analytics', 'Multi-platform', 'ROI'],
      metrics: '360° campaign view'
    }
  ]

  const categories = ['All', 'Campaign Management', 'UX/UI Design', 'Web Development', 'Ad Creative', 'Analytics']

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-6 animate-fade-in">
              Featured{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore my recent work across digital marketing campaigns, UX/UI design, and web development projects.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="hover:scale-105 transition-smooth"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <Card 
                key={index}
                className="group hover:shadow-elegant transition-smooth border border-border/50 hover:border-primary/20 animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="absolute bottom-4 right-4">
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-4 space-y-3">
                  {/* Title & Icon */}
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold font-poppins text-foreground group-hover:text-primary transition-smooth">
                      {item.title}
                    </h3>
                    <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium inline-block">
                    {item.metrics}
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="hover:scale-105 transition-smooth">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection