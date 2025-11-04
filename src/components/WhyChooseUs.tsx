import { Globe, DollarSign, Lock, Zap, Handshake } from "lucide-react";

const reasons = [
  {
    icon: <Globe />,
    title: "Accessible",
    description: "Join discussions online from anywhere.",
  },
  {
    icon: <DollarSign />,
    title: "Affordable",
    description: "Save on travel, legal, and court expenses.",
  },
  {
    icon: <Lock />,
    title: "Private",
    description: "Your matter stays confidential and secure.",
  },
  {
    icon: <Zap />,
    title: "Faster",
    description: "Resolutions happen in weeks, not years.",
  },
]

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Why People Choose ODR with <span className="font-bold text-emerald-600">Samnvay</span>
          </h2>
          <p className="text-xl text-gray-600">
            The smart choice for modern dispute resolution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
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