

const HowItWorks = () => {
  return (
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
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-emerald-200 via-teal-200 to-cyan-200 transform -translate-x-1/2"></div>

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
                  <div className="shrink-0 relative z-10">
                    <div className={`w-20 h-20 bg-linear-to-br ${item.gradient} text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-xl transform hover:scale-110 hover:rotate-6 transition-all duration-300`}>
                      {item.step}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-linear-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default HowItWorks