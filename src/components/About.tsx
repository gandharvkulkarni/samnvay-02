import { Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-2 h-12 bg-linear-to-b from-emerald-600 to-teal-600 rounded-full"></div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              About Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl">
                At Samnvay, We understand that disputes can be stressful <span className="font-bold text-emerald-600">emotionally</span>, <span className="font-bold text-teal-600">financially</span>, and <span className="font-bold text-cyan-600">mentally.</span>
              </p>
              <p>
                 That’s why we’ve created a simple, online way to resolve conflicts peacefully, without the need to go to court.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-emerald-200 to-teal-200 rounded-3xl opacity-30"></div>
              <div className="relative bg-linear-to-br from-emerald-50 to-teal-50 p-8 rounded-3xl border-2 border-emerald-200">
                <div className="flex items-start space-x-3 mb-4">
                  <Sparkles className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-xl text-gray-900 mb-2">Our Goal</p>
                    <p className="text-gray-700 leading-relaxed">
                      To bring understanding back into disagreements and help people find fair, practical, and lasting solutions with the support of professional mediators and a confidential, secure platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About