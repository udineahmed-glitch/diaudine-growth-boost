import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ResultsSection from '@/components/ResultsSection'
import ContactSection from '@/components/ContactSection'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ResultsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
