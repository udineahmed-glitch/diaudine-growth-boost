'use client'

import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5b4?w=400',
      quote: 'Diaudine transformed our digital presence completely. Our lead generation increased by 300% in just 4 months. His expertise in Facebook and Google Ads is unmatched.',
      rating: 5,
      result: '+300% lead generation'
    },
    {
      name: 'Marcus Chen',
      role: 'Marketing Director, SportZone',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      quote: 'Working with Diaudine was a game-changer for our Snapchat campaigns. He understands Gen Z marketing better than anyone. Our brand awareness skyrocketed.',
      rating: 5,
      result: '+45% brand awareness'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Founder, E-Shop Pro',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      quote: 'The ROI we achieved with Diaudine\'s campaigns exceeded all expectations. His data-driven approach and creative strategies delivered outstanding results for our e-commerce business.',
      rating: 5,
      result: '+250% ROI increase'
    }
  ]

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-6 animate-fade-in">
              What Clients{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Say About Me
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say about our collaboration.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="group hover:shadow-elegant transition-smooth border border-border/50 hover:border-primary/20 animate-slide-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start">
                    <Quote className="h-8 w-8 text-primary/20" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Quote Text */}
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Result Badge */}
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {testimonial.result}
                  </div>
                  
                  {/* Client Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold font-poppins text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
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

export default TestimonialsSection