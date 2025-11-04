import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Disclaimer from './components/Disclaimer';
import SamnvayWayToResolveDisputes from './components/SamnvayWayToResolveDisputes';
import BookConsultation from './components/BookConsultation';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'how-it-works', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 100;
      setScrollY(window.scrollY);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Disclaimer />
      {/* Navigation */}
      <Navbar scrollY={scrollY} activeSection={activeSection} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <Hero scrollToSection={scrollToSection} />

      {/* About Section */}
      <About />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Samnvay Way to Resolve Disputes Section */}
      <SamnvayWayToResolveDisputes />

      {/* Services Section */}
      <Services />

      {/* Contact Section */}
      <Contact scrollToSection={scrollToSection} />

      {/* Book Consultation Section */}
      <BookConsultation />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
