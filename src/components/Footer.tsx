'use client'

import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  Award,
  Star,
  TrendingUp
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-[#1877F2]' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-[#1DA1F2]' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-[#E4405F]' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-[#0A66C2]' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-[#FF0000]' }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    { name: 'Facebook Ads', href: '#services' },
    { name: 'Google Ads', href: '#services' },
    { name: 'TikTok Ads', href: '#services' },
    { name: 'UX/UI Design', href: '#services' },
    { name: 'Web Development', href: '#services' },
    { name: 'SEO Optimization', href: '#services' }
  ]

  const certifications = [
    { name: 'Google Ads Certified', icon: Award, color: 'text-[#4285F4]' },
    { name: 'Facebook Blueprint', icon: Star, color: 'text-[#1877F2]' },
    { name: 'Analytics Expert', icon: TrendingUp, color: 'text-accent' }
  ]

  return (
    <footer className="bg-gradient-to-b from-dark-surface to-background border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand & Contact */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-2xl font-bold font-poppins text-foreground mb-2">
                  Diaudine
                </h3>
                <p className="text-sm text-muted-foreground">
                  Digital Marketing Expert specializing in growth strategies, online advertising, and SEO optimization.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>contact@diaudine.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Remote & Global</span>
                </div>
              </div>

              {/* Rate Badge */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Starting Rate</p>
                <p className="text-xl font-bold text-primary">$5.00/hr</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold font-poppins text-foreground">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold font-poppins text-foreground">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications & Social */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold font-poppins text-foreground">
                Certifications
              </h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <cert.icon className={`h-4 w-4 ${cert.color}`} />
                    <span className="text-sm text-muted-foreground">{cert.name}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h5 className="text-sm font-medium text-foreground mb-3">Follow Me</h5>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className={`h-9 w-9 p-0 hover:scale-110 transition-smooth ${social.color}`}
                      asChild
                    >
                      <a href={social.href} aria-label={social.label}>
                        <social.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-border/50">
          <div className="text-center space-y-4">
            <h4 className="text-lg font-semibold font-poppins text-foreground">
              Stay Updated with Marketing Insights
            </h4>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Get weekly tips, case studies, and the latest trends in digital marketing delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-border/50 bg-background text-foreground focus:border-primary focus:outline-none"
              />
              <Button className="shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Diaudine. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-smooth">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer