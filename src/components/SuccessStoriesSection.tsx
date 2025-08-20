'use client'

import { Facebook, MessageCircle, Chrome } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const SuccessStoriesSection = () => {
  const caseStudies = [
    {
      platform: 'Facebook Ads',
      industry: 'E-commerce',
      icon: Facebook,
      iconColor: 'text-[#1877F2]',
      bgColor: 'bg-[#1877F2]/10',
      results: {
        leads: '10,000 leads',
        conversion: '15% conversion rate',
        sales: '+30% sales increase'
      },
      duration: '3 months',
      description: 'Transformed an online store\'s performance through strategic Facebook advertising campaigns'
    },
    {
      platform: 'Snapchat Ads',
      industry: 'Sports Products',
      icon: MessageCircle,
      iconColor: 'text-[#FFFC00]',
      bgColor: 'bg-[#FFFC00]/10',
      results: {
        awareness: '+40% brand awareness',
        sales: '+25% online sales',
        targeting: 'Gen Z audience targeting'
      },
      duration: '4 months',
      description: 'Boosted sports brand visibility and sales among younger demographics'
    },
    {
      platform: 'Google Ads',
      industry: 'B2B Tech/SaaS',
      icon: Chrome,
      iconColor: 'text-[#4285F4]',
      bgColor: 'bg-[#4285F4]/10',
      results: {
        cost: '-20% cost/acquisition',
        leads: '+50% qualified leads',
        revenue: '+40% revenue growth'
      },
      duration: '6 months',
      description: 'Optimized tech company campaigns for maximum ROI and lead quality'
    }
  ]

  return (
    <section id="success-stories" className="py-20 lg:py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-6 animate-fade-in">
              Client{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real campaigns. Here's how I've helped businesses achieve their marketing goals.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card 
                key={index}
                className="group hover:shadow-elegant transition-smooth border border-border/50 hover:border-primary/20 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${study.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth`}>
                    <study.icon className={`h-8 w-8 ${study.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold font-poppins text-foreground">
                    {study.platform}
                  </h3>
                  <p className="text-sm text-accent font-medium">
                    {study.industry}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {study.description}
                  </p>
                  
                  <div className="space-y-2">
                    {Object.values(study.results).map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-border/50">
                    <span className="text-xs text-muted-foreground">
                      Campaign Duration: <span className="text-primary font-medium">{study.duration}</span>
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessStoriesSection