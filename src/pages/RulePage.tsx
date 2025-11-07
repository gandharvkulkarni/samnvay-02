import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ruels } from "@/data/Rules"
import { HandshakeIcon, Leaf, Scale, Gavel } from "lucide-react"

export default function RulesPage() {
    const RuleSection = ({
        id,
        items,
    }: {
        id: string
        title: string
        items: { heading: string; content: string | string[] }[]
    }) => (
        <Accordion type="multiple" className="w-full space-y-3">
            {items.map((item, idx) => (
                <AccordionItem
                    key={idx}
                    value={`${id}-${idx}`}
                    className="border border-teal-500 rounded-lg overflow-hidden bg-card"
                >
                    <AccordionTrigger className="px-6 py-4 hover:bg-teal-50 text-left text-foreground font-semibold">
                        {item.heading}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 border-t border-teal-500 text-foreground/90 bg-background">
                        {Array.isArray(item.content) ? (
                            <ul className="list-disc list-inside space-y-2">
                                {item.content.map((line, i) => (
                                    <li key={i} className="text-sm leading-relaxed">
                                        {line}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm leading-relaxed">{item.content}</p>
                        )}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="pt-24 pb-12 px-4 bg-linear-to-b from-card to-background">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Samnvay ODR <span className="text-teal-500">Rules</span>
                    </h1>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        Comprehensive guidelines for online dispute resolution services. Choose your preferred method for peaceful resolution.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
                {/* Negotiation */}
                <section>
                    <div className="bg-card rounded-lg p-6 md:p-8 border border-teal-500/50 shadow-sm">
                        <div className="flex gap-4 mb-6 items-start">
                            <HandshakeIcon className="w-8 h-8 text-teal-500 shrink-0" />
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-2">Online Negotiation</h2>
                                <p className="text-foreground/70">
                                    Direct communication between parties for amicable settlement without third-party intervention.
                                </p>
                            </div>
                        </div>
                        <RuleSection
                            id="negotiation"
                            title="Negotiation Rules"
                            items={ruels.negotiation}
                        />
                    </div>
                </section>

                {/* Mediation */}
                <section>
                    <div className="bg-card rounded-lg p-6 md:p-8 border border-teal-500/50 shadow-sm">
                        <div className="flex gap-4 mb-6 items-start">
                            <Leaf className="w-8 h-8 text-teal-500 shrink-0" />
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-2">Online Mediation</h2>
                                <p className="text-foreground/70">
                                    Peaceful settlement with assistance of an impartial mediator appointed through our platform.
                                </p>
                            </div>
                        </div>
                        <RuleSection
                            id="mediation"
                            title="Mediation Rules"
                            items={ruels.mediation}
                        />
                    </div>
                </section>

                {/* Conciliation */}
                <section>
                    <div className="bg-card rounded-lg p-6 md:p-8 border border-teal-500/50 shadow-sm">
                        <div className="flex gap-4 mb-6 items-start">
                            <Scale className="w-8 h-8 text-teal-500 shrink-0" />
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-2">Online Conciliation</h2>
                                <p className="text-foreground/70">
                                    Structured negotiation where a neutral conciliator assists in reaching settlement by proposing terms.
                                </p>
                            </div>
                        </div>
                        <RuleSection
                            id="conciliation"
                            title="Conciliation Rules"
                            items={ruels.conciliation}
                        />
                    </div>
                </section>

                {/* Arbitration */}
                <section>
                    <div className="bg-card rounded-lg p-6 md:p-8 border border-teal-500/50 shadow-sm">
                        <div className="flex gap-4 mb-6 items-start">
                            <Gavel className="w-8 h-8 text-teal-500 shrink-0" />
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-2">Online Arbitration</h2>
                                <p className="text-foreground/70">
                                    Secure and efficient resolution with legally binding award in accordance with Indian Arbitration Act.
                                </p>
                            </div>
                        </div>
                        <RuleSection
                            id="arbitration"
                            title="Arbitration Rules"
                            items={ruels.arbitration}
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}
