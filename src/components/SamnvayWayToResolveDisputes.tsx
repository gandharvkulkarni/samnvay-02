import { MessageCircle, Users, Scale, Gavel } from "lucide-react"

const approaches = [
    {
        icon: <MessageCircle />,
        title: "Negotiation",
        description:
            "Direct communication between parties to reach mutual understanding without third-party involvement.",
        benefit: "Quick, informal, and fully in your control",
        gradient: "from-emerald-500 to-teal-500",
        delay: "0",
    },
    {
        icon: <Users />,
        title: "Mediation",
        description: "A neutral mediator helps both sides communicate and find a mutually acceptable solution together.",
        benefit: "Compassionate, confidential, and relationship-focused",
        gradient: "from-teal-500 to-cyan-500",
        delay: "100",
    },
    {
        icon: <Scale />,
        title: "Conciliation",
        description: "A conciliator actively suggests fair settlement options based on facts and principles of fairness.",
        benefit: "Practical guidance toward balanced closure",
        gradient: "from-cyan-500 to-blue-500",
        delay: "200",
    },
    {
        icon: <Gavel />,
        title: "Arbitration",
        description: "A neutral arbitrator reviews both sides and issues a binding decision on the matter.",
        benefit: "Formal, private, and legally enforceable",
        gradient: "from-blue-500 to-indigo-500",
        delay: "300",
    },
]

const SamnvayWayToResolveDisputes = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                        The <span className="font-bold text-emerald-600">Samnvay</span> Way to Resolve Disputes
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Choose the approach that fits your dispute — from simple negotiation to formal arbitration
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {approaches.map((item, index) => (
                        <div key={index} className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                            <div className="mb-4 flex items-center space-x-4">
                            <div className={`inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-md`}>
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
                                </div>
                            <p className="text-gray-600 mb-4">{item.description}</p>
                            <span
                                className={`inline-block text-sm font-medium bg-gradient-to-br ${item.gradient} text-white px-3 py-1 rounded-full`}
                            >
                                {item.benefit}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default SamnvayWayToResolveDisputes