'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { HelpCircle } from 'lucide-react'

const FAQSection = () => {
  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on scope and complexity. Campaign setup and optimization typically takes 1-2 weeks, while website development projects range from 2-6 weeks. I always provide detailed timelines during our initial consultation.'
    },
    {
      question: 'How do you determine your pricing?',
      answer: 'I charge $5.00/hour for most projects, with pricing based on project complexity, timeline, and required expertise. I provide transparent quotes upfront with no hidden fees. Payment plans are available for larger projects.'
    },
    {
      question: 'What platforms do you specialize in?',
      answer: 'I specialize in Facebook Ads, Google Ads, TikTok Ads, and Snapchat Ads. I also provide UX/UI design services and modern web development using the latest technologies and best practices.'
    },
    {
      question: 'Do you work with businesses of all sizes?',
      answer: 'Yes! I work with startups, small businesses, and established companies. Whether you\'re launching your first campaign or scaling existing operations, I tailor my approach to fit your budget and goals.'
    },
    {
      question: 'What kind of results can I expect?',
      answer: 'While results vary by industry and goals, my clients typically see 40-60% improvements in key metrics. I focus on measurable outcomes like lead generation, conversion rates, and ROI improvement.'
    },
    {
      question: 'Do you provide ongoing support and optimization?',
      answer: 'Absolutely! I offer ongoing campaign management, monthly optimization reviews, and performance reporting. Continuous optimization is key to maintaining and improving campaign performance over time.'
    },
    {
      question: 'How do you measure campaign success?',
      answer: 'I track comprehensive metrics including conversion rates, cost per acquisition, return on ad spend (ROAS), lead quality, and overall ROI. You\'ll receive detailed monthly reports with actionable insights.'
    },
    {
      question: 'Can you help with campaign strategy and planning?',
      answer: 'Yes! Strategy development is a core part of my service. I help define target audiences, create campaign structures, develop creative strategies, and establish KPIs aligned with your business objectives.'
    }
  ]

  return (
    <section id="faq" className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <HelpCircle className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins animate-fade-in">
                Frequently Asked{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about my services, process, and what to expect when working with me.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="animate-slide-up">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border/50 hover:border-primary/20 transition-smooth px-6"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="text-left hover:text-primary transition-smooth py-6 hover:no-underline">
                    <span className="font-semibold font-poppins">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? I'm here to help!
            </p>
            <a 
              href="#contact" 
              className="text-primary hover:text-accent transition-smooth font-medium underline underline-offset-4"
            >
              Get in touch for a free consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection