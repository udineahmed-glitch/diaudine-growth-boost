'use client'

import { Button } from '@/components/ui/button'
import AnimatedCounter from '@/components/AnimatedCounter'
import { ArrowRight, Sparkles } from 'lucide-react'
import heroBg from '@/assets/hero-bg.jpg'

const HeroSection = () => {
  const stats = [
    { value: 100, suffix: 'k+', label: 'Qualified Leads Generated' },
    { value: 50, suffix: '%', label: 'Average Conversion Increase' },
    { value: 9, suffix: ' Months', label: 'Record Performance' }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Digital Marketing Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-float opacity-80" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-primary-glow rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
        <div className="absolute top-60 right-40 w-2 h-2 bg-accent-light rounded-full animate-float opacity-70" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Digital Marketing Expert</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Diaudine
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Digital Marketing Expert | Growth Strategies, Online Advertising & SEO
          </h2>

          {/* Accroche */}
          <p className="text-lg md:text-xl text-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            💡 Helping businesses achieve their goals through high-performing online advertising campaigns
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="xl" className="group">
              Let's Grow Your Business 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              🚀
            </Button>
            <Button variant="glass" size="xl">
              View My Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-scale-in" style={{ animationDelay: '0.8s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl mb-2">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    className="text-primary"
                  />
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection