import { useState, useEffect } from 'react';
import { Scale, Users, FileText, Shield, Award, Menu, X, CheckCircle, ArrowRight, Sparkles, Zap, Clock } from 'lucide-react';
import logo from '../Samnvay-logo.png';
import logoWhite from '../Samnvay-logo-white.png';


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

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'why-us', label: 'Why Choose Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <img src={logo} alt='Samnvay Logo' className='w-48' />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${activeSection === item.id
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg scale-105'
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-emerald-50 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all ${activeSection === item.id
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md'
                      : 'text-gray-700 hover:bg-emerald-50'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">Legal Resolution Platform</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight animate-slide-up">
              Resolve Legal Disputes{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Peacefully
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-10 animate-slide-up animation-delay-200">
              Fast, fair, and affordable dispute resolution — anytime, anywhere
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400">
              <button
                onClick={() => scrollToSection('services')}
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-lg font-bold rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Start a Case</span>
                <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={() => scrollToSection('how-it-works')}
                className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 text-lg font-bold rounded-full border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Learn How It Works
              </button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'Secure & Confidential',
                description: 'End-to-end encrypted sessions',
                gradient: 'from-emerald-500 to-teal-500',
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: 'Lightning Fast',
                description: 'Resolve disputes in days, not years',
                gradient: 'from-teal-500 to-cyan-500',
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Expert Mediators',
                description: 'Certified professionals ready to help',
                gradient: 'from-cyan-500 to-blue-500',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-2 h-12 bg-gradient-to-b from-emerald-600 to-teal-600 rounded-full"></div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              About Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl">
                We believe justice should be <span className="font-bold text-emerald-600">accessible</span>, <span className="font-bold text-teal-600">affordable</span>, and <span className="font-bold text-cyan-600">timely</span> for everyone.
              </p>
              <p>
                Our platform leverages cutting-edge technology to simplify legal dispute resolution — offering mediation, conciliation, and arbitration services without the hassle of traditional court processes.
              </p>
              <p>
                Our team includes legal professionals, mediators, and technologists passionate about making justice digital. Our goal is to bring peace through conversation, not confrontation.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-3xl border-2 border-emerald-200 shadow-xl">
                <div className="flex items-start space-x-3 mb-4">
                  <Sparkles className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-xl text-gray-900 mb-2">Our Vision</p>
                    <p className="text-gray-700 leading-relaxed">
                      To make India and the world a leader in Online Dispute Resolution, ensuring every citizen can settle disputes quickly and fairly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive dispute resolution solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Online Mediation',
                description: 'Connect with certified mediators who help both parties communicate and reach voluntary settlements.',
                icon: <Users className="w-8 h-8" />,
                gradient: 'from-emerald-500 to-teal-500',
                delay: '0',
              },
              {
                title: 'Online Arbitration',
                description: 'Get an impartial decision from a certified arbitrator — entirely online.',
                icon: <Scale className="w-8 h-8" />,
                gradient: 'from-teal-500 to-cyan-500',
                delay: '100',
              },
              {
                title: 'Case Management',
                description: 'Track your case documents, evidence, and updates securely in one dashboard.',
                icon: <FileText className="w-8 h-8" />,
                gradient: 'from-cyan-500 to-blue-500',
                delay: '200',
              },
              {
                title: 'Legal Assistance',
                description: 'Get access to verified legal experts for criminal or imprisonment-related cases.',
                icon: <Shield className="w-8 h-8" />,
                gradient: 'from-blue-500 to-indigo-500',
                delay: '300',
              },
              {
                title: 'Training & Certification',
                description: 'Learn and get certified in mediation, arbitration, and conflict management.',
                icon: <Award className="w-8 h-8" />,
                gradient: 'from-violet-500 to-purple-500',
                delay: '400',
              },
              {
                title: 'Express Resolution',
                description: 'Fast-track service for urgent disputes requiring immediate attention and resolution.',
                icon: <Clock className="w-8 h-8" />,
                gradient: 'from-pink-500 to-rose-500',
                delay: '500',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>

                <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  {service.icon}
                </div>

                <h3 className="relative text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="relative text-gray-600 leading-relaxed">{service.description}</p>

                <button className="relative mt-6 text-emerald-600 font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, transparent process from start to finish
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-200 via-teal-200 to-cyan-200 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {[
                {
                  step: 1,
                  title: 'Submit Your Dispute',
                  description: 'Submit your dispute through our secure online form.',
                  gradient: 'from-emerald-500 to-teal-500',
                },
                {
                  step: 2,
                  title: 'Invite Other Party',
                  description: 'Invite the other party to participate in the resolution process.',
                  gradient: 'from-teal-500 to-cyan-500',
                },
                {
                  step: 3,
                  title: 'Attend Session',
                  description: 'Attend an online mediation or arbitration session via chat or video.',
                  gradient: 'from-cyan-500 to-blue-500',
                },
                {
                  step: 4,
                  title: 'Receive Agreement',
                  description: 'Receive a legally binding digital agreement or award.',
                  gradient: 'from-blue-500 to-indigo-500',
                },
                {
                  step: 5,
                  title: 'Case Closed',
                  description: 'Case closed — receive documentation digitally.',
                  gradient: 'from-indigo-500 to-purple-500',
                },
              ].map((item, index) => (
                <div key={item.step} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Step number */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-xl transform hover:scale-110 hover:rotate-6 transition-all duration-300`}>
                      {item.step}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              The smart choice for modern dispute resolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                benefit: '100% Online',
                detail: 'No court visits or travel required',
                icon: <Zap className="w-6 h-6" />,
              },
              {
                benefit: 'Legally Compliant',
                detail: 'Based on Arbitration & Conciliation Act, 1996',
                icon: <Scale className="w-6 h-6" />,
              },
              {
                benefit: 'Secure & Confidential',
                detail: 'End-to-end encrypted sessions',
                icon: <Shield className="w-6 h-6" />,
              },
              {
                benefit: 'Transparent Fees',
                detail: 'No hidden costs or surprises',
                icon: <CheckCircle className="w-6 h-6" />,
              },
              {
                benefit: 'Trusted Platform',
                detail: 'By businesses, institutions & citizens',
                icon: <Award className="w-6 h-6" />,
              },
              {
                benefit: 'Fast Resolution',
                detail: 'Resolve disputes in days, not years',
                icon: <Clock className="w-6 h-6" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.benefit}</h3>
                    <p className="text-gray-600 text-sm">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Let's resolve together. We're here to help you find the right path.
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 p-8 md:p-12 rounded-3xl shadow-xl border-2 border-emerald-200">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full blur-3xl opacity-20"></div>

            <div className="relative grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">alaka@samnvay.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 9876543210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Scale className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl">
                <p className="font-bold text-xl text-gray-900 mb-4">Ready to get started?</p>
                <p className="text-gray-600 mb-6">
                  Start your dispute resolution journey today with our expert team.
                </p>
                <button
                  onClick={() => scrollToSection('services')}
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Start a Case Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center mb-3">Follow us on</p>
                  <p className="text-center text-gray-700 font-medium">
                    LinkedIn • Twitter • Instagram • Facebook
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center space-x-3">
             <img src={logoWhite} alt='Samnvay Logo' className='w-48' />
            </div>

            <p className="text-center text-gray-400 max-w-md">
              Promoting Peace Through Dialogue. Making justice accessible to everyone, everywhere.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <button className="hover:text-emerald-400 transition-colors">Privacy Policy</button>
              <span className="text-gray-600">•</span>
              <button className="hover:text-emerald-400 transition-colors">Terms of Service</button>
              <span className="text-gray-600">•</span>
              <button className="hover:text-emerald-400 transition-colors">Cookie Policy</button>
            </div>

            <div className="pt-6 border-t border-gray-800 w-full text-center">
              <p className="text-sm text-gray-500">
               © 2025 Samnvay. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
