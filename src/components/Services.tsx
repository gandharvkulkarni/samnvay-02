import { Scale, Users, FileText, Shield, Award, ArrowRight, Clock } from 'lucide-react';

const Services = () => {
  return (
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
  )
}

export default Services