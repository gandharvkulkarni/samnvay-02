import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';


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

          <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 p-8 md:p-12 rounded-3xl border-2 border-emerald-200">

            <div className="relative grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">alaka@samnvay.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 83904 61664</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className=" backdrop-blur-sm p-6 rounded-2xl">
                <p className="font-bold text-xl text-gray-900 mb-4">Ready to get started?</p>
                <p className="text-gray-600 mb-6">
                  Start your dispute resolution journey today with our expert team.
                </p>
                <button
                  onClick={() => scrollToSection('book-consultation')}
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Book Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact