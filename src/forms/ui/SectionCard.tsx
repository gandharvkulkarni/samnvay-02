export function SectionCard({ number, title, children }: any) {
    return (
        <div className=" p-8 rounded-2xl border border-[#00BBA4]/50 bg-[#00BBA4]/5 transition">
            <SectionTitle number={number} title={title} />
            {children}
        </div>
    )
}


function SectionTitle({ number, title }: { number: string; title: string }) {
    return (
        <div className="flex items-center mb-5">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-emerald-500 to-teal-500 text-white font-bold mr-3">
                {number}
            </span>
            <h3 className="text-xl font-semibold text-emerald-700">{title}</h3>
        </div>
    )
}