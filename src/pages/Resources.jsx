import { ExternalLink, ChevronRight } from 'lucide-react'

const resourceGroups = [
    {
        id: 'governing-bodies',
        icon: '🏛️',
        title: 'Governing Bodies',
        description: 'Official organizations that oversee and regulate baseball across Canada and Alberta.',
        links: [
            {
                label: 'Baseball Canada',
                url: 'https://www.baseball.ca/',
                description: 'The national governing body for baseball in Canada — rules, programs, and national championships.',
            },
            {
                label: 'Baseball Alberta',
                url: 'https://www.baseballalberta.com/en/index.html',
                description: 'Provincial governing body overseeing all amateur baseball programs across Alberta.',
            },
        ],
    },
    {
        id: 'documents',
        icon: '📋',
        title: 'Documents & Forms',
        description: 'Official handbooks, rulebooks, and forms required for league participation.',
        links: [
            {
                label: 'Baseball Alberta Handbook',
                url: 'https://cloud.rampinteractive.com/baseballabertav3/files/2021%20BA%20BOOk%20%28P5%29.pdf',
                description: 'The complete Baseball Alberta rulebook and policy handbook for coaches, players, and officials.',
            },
            {
                label: 'Baseball Alberta Forms',
                url: 'https://www.baseballalberta.com/en/index.html',
                description: 'Registration forms, waivers, and official documentation required for league play.',
            },
        ],
    },
    {
        id: 'financial-assistance',
        icon: '💰',
        title: 'Financial Assistance',
        description: 'Programs to help ensure every child has the opportunity to participate regardless of financial circumstances.',
        links: [
            {
                label: 'KidSport Alberta',
                url: 'https://kidsportcanada.ca/alberta/',
                description: 'KidSport provides funding to children aged 18 and under to help cover registration fees for sport.',
            },
            {
                label: 'Canadian Tire Jumpstart',
                url: 'https://jumpstart.canadiantire.ca/',
                description: "Jumpstart helps kids in financial need participate in sport and recreation — covering registration, equipment, and more.",
            },
        ],
    },
]

export default function Resources() {
    return (
        <div className="pt-28">
            {/* Hero */}
            <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
                <div
                    className="absolute right-0 top-0 bottom-0 w-1/3 bg-accent-600/10"
                    style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}
                />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="inline-block bg-accent-600 text-white font-display text-xs tracking-[0.2em] px-4 py-2 mb-4 uppercase">
                        Helpful Links
                    </div>
                    <h1 className="font-display font-bold text-5xl sm:text-6xl text-white tracking-wide mb-4">
                        Resources
                    </h1>
                    <p className="text-blue-200 font-body text-lg max-w-2xl">
                        Everything you need — governing body links, official documents, forms, and financial assistance programs for HPMBA families.
                    </p>
                </div>
            </section>

            {/* Resource Groups */}
            <section className="py-24 bg-primary-900">
                <div className="max-w-7xl mx-auto px-6 space-y-16">
                    {resourceGroups.map((group, i) => (
                        <div
                            key={group.id}
                            id={group.id}
                            className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? '' : ''}`}
                        >
                            {/* Info */}
                            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-4xl">{group.icon}</span>
                                </div>
                                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide mb-4">
                                    {group.title}
                                </h2>
                                <p className="text-blue-200 font-body text-base leading-relaxed">
                                    {group.description}
                                </p>
                            </div>

                            {/* Links card */}
                            <div className={`bg-primary-800 border border-primary-600 rounded-2xl p-8 space-y-4 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                                {group.links.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start justify-between gap-4 p-4 rounded-xl bg-primary-700 hover:bg-primary-600 border border-primary-600 hover:border-accent-500 transition-all group"
                                    >
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="font-display font-semibold text-white text-sm tracking-wide group-hover:text-accent-400 transition-colors">
                                                    {link.label}
                                                </span>
                                                <ExternalLink size={12} className="text-blue-400 group-hover:text-accent-400 transition-colors flex-shrink-0" />
                                            </div>
                                            <p className="text-blue-300 text-xs font-body leading-relaxed">
                                                {link.description}
                                            </p>
                                        </div>
                                        <ChevronRight size={16} className="text-blue-400 group-hover:text-accent-400 transition-colors flex-shrink-0 mt-1" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary-800 border-t border-primary-700">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="font-display font-bold text-3xl text-white mb-3">Questions?</h2>
                    <p className="text-blue-200 font-body text-base mb-6">
                        Can't find what you're looking for? Reach out to the HPMBA directly.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-display font-semibold text-sm px-8 py-4 uppercase tracking-wider transition-all hover:shadow-lg"
                    >
                        Contact Us <ChevronRight size={16} />
                    </a>
                </div>
            </section>
        </div>
    )
}