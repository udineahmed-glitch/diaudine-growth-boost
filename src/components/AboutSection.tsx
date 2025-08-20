'use client'

import { Button } from '@/components/ui/button'
import { TrendingUp, Award, Target, Users } from 'lucide-react'

const AboutSection = () => {
  const achievements = [
    {
      icon: TrendingUp,
      title: '100,000+ Qualified Leads',
      description: 'Generated in just 9 months across multiple platforms'
    },
    {
      icon: Award,
      title: '50% Conversion Increase',
      description: 'Average improvement achieved for client campaigns'
    },
    {
      icon: Target,
      title: 'Multi-Platform Expert',
      description: 'Facebook, Google, TikTok, Snapchat Ads specialist'
    },
    {
      icon: Users,
      title: 'UX/UI Design',
      description: 'Modern web development with optimal user experience'
    }
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-6 animate-fade-in">
              Transforming Businesses Through{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Data-Driven Marketing
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="space-y-6 animate-slide-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 5+ years of experience in digital marketing, I've had the privilege of working with numerous companies to help them meet their marketing and business objectives. Starting at just $5.00/hr, I provide significant expertise in online advertising, successfully managing campaigns across platforms like Facebook Ads, Snapchat Ads, Google Ads, and TikTok Ads.
              </p>
              
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
                <h3 className="text-xl font-semibold font-poppins mb-4 text-primary">
                  📈 Recent Achievements
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Generated over 100,000 qualified leads in just 9 months</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Achieved an average 50% increase in conversion rates for my clients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-glow rounded-full mt-2 flex-shrink-0" />
                    <span>Expert in UX/UI Design and modern web development</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg">
                  <a href="#contact">Let's Discuss Your Project</a>
                </Button>
                <Button variant="outline" size="lg">
                  View Case Studies
                </Button>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-scale-in">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-smooth border border-border/50 group hover:border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold font-poppins text-foreground">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection