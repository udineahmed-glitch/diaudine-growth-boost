'use client'

import { Target, Rocket, RotateCcw, Palette, Code, BarChart3 } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: Target,
      title: 'Campaign Optimization',
      description: 'My top priority is to optimize my clients\' advertising campaigns to maximize their return on investment (ROI). From adjusting bids to refining target audiences or testing new creative formats, I focus on implementing the most effective strategies to achieve your goals profitably.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Rocket,
      title: 'Lead Generation',
      description: 'Generating high-quality leads is crucial for business growth. With targeted strategies and precise audience segmentation, I\'ve helped clients attract thousands of qualified prospects ready to convert into loyal customers.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: RotateCcw,
      title: 'Conversion Optimization',
      description: 'Conversion is the heart of digital marketing success. By crafting strategic ad campaigns and rigorously tracking performance, I\'ve consistently helped my clients boost their conversion rates, transforming prospects into paying customers.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Palette,
      title: 'UX/UI Design',
      description: 'Creating optimal user experiences and intuitive interfaces that convert. User-centered design approach to maximize engagement and results.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites optimized for performance. SEO optimization and tracking tools integration for measurable results.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: BarChart3,
      title: 'Growth Analytics',
      description: 'Advanced SEO strategies and data analysis to optimize online visibility and make data-driven marketing decisions.',
      color: 'from-cyan-500 to-cyan-600'
    }
  ]

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-6 animate-fade-in">
              What I{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Specialize In
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions designed to drive growth and maximize your ROI
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-500 border border-border/50 hover:border-primary/20 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold font-poppins mb-4 text-foreground group-hover:text-primary transition-colors">
                  🎯 {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-glow transition-smooth shadow-elegant hover:shadow-glow">
                Get Free Consultation
              </button>
              <button className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection