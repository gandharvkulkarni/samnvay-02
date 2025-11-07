import { Users, Banknote, Building2, Briefcase, Home, ShoppingCart } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-50 to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Areas Where <span className="font-bold text-emerald-600">We Can Help</span> 
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find resolution across a wide range of disputes with our expert online mediation and arbitration services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
  {
    title: "Loan & Financial Disputes",
    description: "Resolve issues related to loans, credit, or investments through expert-led mediation and fair settlement guidance.",
    icon: <Banknote className="w-8 h-8" />,
    gradient: "from-emerald-500 to-teal-500",
    delay: "0",
  },
  {
    title: "Business & Commercial",
    description: "Settle contract, partnership, or trade disputes efficiently with certified arbitrators and structured online proceedings.",
    icon: <Building2 className="w-8 h-8" />,
    gradient: "from-teal-500 to-cyan-500",
    delay: "100",
  },
  {
    title: "Family & Personal",
    description: "Address family, marriage, or inheritance-related conflicts privately with the help of trusted mediators.",
    icon: <Users className="w-8 h-8" />,
    gradient: "from-cyan-500 to-blue-500",
    delay: "200",
  },
  {
    title: "Employment Matters",
    description: "Resolve workplace disputes such as termination, harassment, or wage issues through fair and impartial mediation.",
    icon: <Briefcase className="w-8 h-8" />,
    gradient: "from-blue-500 to-indigo-500",
    delay: "300",
  },
  {
    title: "Property & Real Estate",
    description: "Handle ownership, tenancy, or land-related conflicts with guidance from certified dispute resolution professionals.",
    icon: <Home className="w-8 h-8" />,
    gradient: "from-violet-500 to-purple-500",
    delay: "400",
  },
  {
    title: "Consumer Complaints",
    description: "Quickly resolve disputes between consumers and businesses regarding defective goods or unsatisfactory services.",
    icon: <ShoppingCart className="w-8 h-8" />,
    gradient: "from-pink-500 to-rose-500",
    delay: "500",
  },
]
.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${service.gradient} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>

              <div className={`relative inline-flex p-4 rounded-2xl bg-linear-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                {service.icon}
              </div>

              <h3 className="relative text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="relative text-gray-600 leading-relaxed">{service.description}</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services