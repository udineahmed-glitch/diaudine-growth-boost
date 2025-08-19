'use client'

import AnimatedCounter from '@/components/AnimatedCounter'
import { TrendingUp, Users, DollarSign, Target, Zap, Award } from 'lucide-react'

const ResultsSection = () => {
  const results = [
    {
      icon: Users,
      value: 100000,
      suffix: '+',
      label: 'Qualified leads in 9 months',
      color: 'text-blue-500'
    },
    {
      icon: TrendingUp,
      value: 50,
      suffix: '%',
      label: 'Average conversion increase',
      color: 'text-green-500'
    },
    {
      icon: DollarSign,
      value: 20,
      suffix: '%',
      label: 'Cost per acquisition reduction',
      color: 'text-purple-500'
    },
    {
      icon: Target,
      value: 40,
      suffix: '%',
      label: 'Revenue growth achieved',
      color: 'text-orange-500'
    },
    {
      icon: Zap,
      value: 25,
      suffix: '+',
      label: 'Successful campaigns launched',
      color: 'text-cyan-500'
    },
    {
      icon: Award,
      value: 15,
      suffix: '%',
      label: 'Average conversion rate',
      color: 'text-pink-500'
    }
  ]

  return (
    <section id="results" className="py-20 lg:py-32 bg-gradient-to-b from-dark-surface to-dark-surface/90 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-6 animate-fade-in">
              Proven Results That{' '}
              <span className="bg-gradient-to-r from-primary-glow to-accent-light bg-clip-text text-transparent">
                Speak
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Numbers don't lie. Here's the measurable impact I've delivered for my clients across various industries.
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-500 hover:bg-white/10 group-hover:scale-105 animate-scale-in">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <result.icon className={`h-8 w-8 ${result.color}`} />
                    </div>
                  </div>

                  {/* Counter */}
                  <div className="text-center mb-4">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-numbers mb-2">
                      <AnimatedCounter
                        value={result.value}
                        suffix={result.suffix}
                        className="text-white"
                      />
                    </div>
                    <p className="text-gray-300 font-medium">
                      {result.label}
                    </p>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold font-poppins mb-4">
                Ready to See Similar Results?
              </h3>
              <p className="text-gray-300 mb-6">
                Let's discuss how I can help drive these kinds of results for your business.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-glow text-white rounded-lg font-semibold hover:from-primary-glow hover:to-accent transition-all duration-300 shadow-glow hover:shadow-elegant">
                Start Your Success Story 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResultsSection