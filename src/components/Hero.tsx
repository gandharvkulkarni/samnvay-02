import { Users, Shield, ArrowRight, Sparkles, Zap } from 'lucide-react';


const Hero = ({scrollToSection}:any) => {
  return (
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
  )
}

export default Hero