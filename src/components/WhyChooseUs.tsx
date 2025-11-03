import { Scale, Shield, Award, CheckCircle, Zap, Clock } from 'lucide-react';


const WhyChooseUs = () => {
  return (
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
  )
}

export default WhyChooseUs