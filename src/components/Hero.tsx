import { Users, Shield, ArrowRight, Sparkles, Zap, DollarSign, Lock } from 'lucide-react';


const Hero = ({scrollToSection}:any) => {
  return (
   <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight animate-slide-up">
              Online Dispute {" "} <br></br>
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Resolution
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-10 animate-slide-up animation-delay-200">
              Settle Disputes. Save Time. Stay Peaceful.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400">
              <button
                onClick={() => scrollToSection('book-consultation')}
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-lg font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Book Consultation</span>
                <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-20">
            <div className="p-6 rounded-xl bg-background mx-auto w-full text-center md:text-left">
              <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                <Zap className="w-5 h-5 text-[#00BBA1]" />
                <h3 className="font-bold text-foreground">Fast & Efficient</h3>
              </div>
              <p className="text-sm text-muted-foreground">Resolve disputes in weeks, not years</p>
            </div>
            <div className="p-6 rounded-xl bg-background mx-auto w-full text-center md:text-left">
              <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                <DollarSign className="w-5 h-5 text-[#00ABE6]" />
                <h3 className="font-bold text-foreground">Cost-Effective</h3>
              </div>
              <p className="text-sm text-muted-foreground">Save on legal fees and court costs</p>
            </div>
            <div className="p-6 rounded-xl bg-background mx-auto w-full text-center md:text-left">
              <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                <Lock className="w-5 h-5 text-[#00BBA1]" />
                <h3 className="font-bold text-foreground">Confidential</h3>
              </div>
              <p className="text-sm text-muted-foreground">Your dispute details remain private</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero