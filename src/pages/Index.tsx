import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ResultsSection from '@/components/ResultsSection'
import SuccessStoriesSection from '@/components/SuccessStoriesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PortfolioSection from '@/components/PortfolioSection'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ResultsSection />
        <SuccessStoriesSection />
        <TestimonialsSection />
        <PortfolioSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
