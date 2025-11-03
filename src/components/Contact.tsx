import { Scale, Users, FileText, ArrowRight } from 'lucide-react';


const Contact = ({scrollToSection}: any) => {
  return (
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
  )
}

export default Contact