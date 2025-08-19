'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Mail, Clock, DollarSign, ArrowRight } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    projectType: '',
    budgetRange: '',
    projectDescription: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@diaudine.com',
      color: 'text-blue-500'
    },
    {
      icon: Clock,
      label: 'Response time',
      value: 'Within 24 hours',
      color: 'text-green-500'
    },
    {
      icon: DollarSign,
      label: 'Starting rate',
      value: '$5.00/hr',
      color: 'text-purple-500'
    }
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-6 animate-fade-in">
              Ready to{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Grow Your Business?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how I can help drive your business success through strategic digital marketing
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                <h3 className="text-2xl font-semibold font-poppins mb-6">
                  Start Your Project
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <Input
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Name</label>
                      <Input
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        placeholder="Your company"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@company.com"
                      className="w-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Project Type</label>
                      <Select onValueChange={(value) => handleInputChange('projectType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="facebook-ads">Facebook Ads</SelectItem>
                          <SelectItem value="google-ads">Google Ads</SelectItem>
                          <SelectItem value="ux-ui-design">UX/UI Design</SelectItem>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="full-marketing">Full Marketing Strategy</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Budget Range</label>
                      <Select onValueChange={(value) => handleInputChange('budgetRange', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="500-1k">$500 - $1k</SelectItem>
                          <SelectItem value="1k-5k">$1k - $5k</SelectItem>
                          <SelectItem value="5k-10k">$5k - $10k</SelectItem>
                          <SelectItem value="10k+">$10k+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Project Description</label>
                    <Textarea
                      value={formData.projectDescription}
                      onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                      placeholder="Tell me about your project, goals, and challenges..."
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <Button variant="hero" size="xl" className="w-full group">
                    Start My Project 
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    🚀
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-scale-in space-y-8">
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                <h3 className="text-2xl font-semibold font-poppins mb-6">
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center`}>
                        <info.icon className={`h-6 w-6 ${info.color}`} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Me */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
                <h4 className="text-xl font-semibold font-poppins mb-4">
                  Why Choose Me?
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>100k+ qualified leads generated</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>50% average conversion rate increase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-glow rounded-full mt-2 flex-shrink-0" />
                    <span>Multi-platform advertising expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-light rounded-full mt-2 flex-shrink-0" />
                    <span>Full-stack marketing & development</span>
                  </li>
                </ul>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col gap-4">
                <Button variant="outline" size="lg" className="w-full">
                  Download Case Studies
                </Button>
                <Button variant="ghost" size="lg" className="w-full">
                  Schedule Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection