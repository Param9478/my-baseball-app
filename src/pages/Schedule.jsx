import { ExternalLink, ChevronRight, MapPin, Trophy, Facebook } from 'lucide-react'

const SPORDLE_URL = 'https://page.spordle.com/high-prairie-district-minor-ball-association/schedule-stats-standings'
const FB_PAGE_URL = 'https://www.facebook.com/1094783807050470'
const FB_GROUP_URL = 'https://www.facebook.com/groups/162547079983081/'

const rounds = [
    {
        id: 'round-1',
        dates: 'May 22–24',
        label: 'Round 1',
        emoji: '⚾',
        accentText: 'text-accent-400',
        accentBorder: 'border-accent-500/40',
        accentBg: 'bg-accent-500/10',
        venues: [
            {
                location: 'Peace River',
                headerBg: 'bg-red-700',
                teams: ['Peace River', 'Dawson Creek', 'Rycroft', 'Chetwynd', 'Valleyview'],
            },
            {
                location: 'Fort St. John',
                headerBg: 'bg-slate-800',
                teams: ['Fort St. John', 'Grande Prairie', 'High Prairie', 'Beaverlodge', 'Manning'],
            },
        ],
    },
    {
        id: 'round-2',
        dates: 'June 5–7',
        label: 'Round 2',
        emoji: '🏟️',
        accentText: 'text-blue-400',
        accentBorder: 'border-blue-500/40',
        accentBg: 'bg-blue-500/10',
        venues: [
            {
                location: 'Manning',
                headerBg: 'bg-blue-700',
                teams: ['Manning', 'Grande Prairie', 'High Prairie', 'Rycroft', 'Peace River', 'Valleyview'],
            },
            {
                location: 'Beaverlodge',
                headerBg: 'bg-indigo-700',
                teams: ['Beaverlodge', 'Fort St. John', 'Dawson Creek', 'Chetwynd'],
            },
        ],
    },
    {
        id: 'round-3',
        dates: 'June 12–14',
        label: 'Round 3',
        emoji: '🔥',
        accentText: 'text-green-400',
        accentBorder: 'border-green-500/40',
        accentBg: 'bg-green-500/10',
        venues: [
            {
                location: 'Dawson Creek',
                headerBg: 'bg-green-700',
                teams: ['Dawson Creek', 'Manning', 'High Prairie', 'Grande Prairie', 'Chetwynd'],
            },
            {
                location: 'Peace River',
                headerBg: 'bg-red-700',
                teams: ['Peace River', 'Fort St. John', 'Rycroft', 'Beaverlodge', 'Valleyview'],
            },
        ],
    },
]

const finals = {
    id: 'finals',
    dates: 'June 19–21',
    venues: [
        { location: 'Fort St. John', headerBg: 'bg-slate-800' },
        { location: 'Chetwynd', headerBg: 'bg-orange-600' },
    ],
}

export default function Schedule() {
    return (
        <div className="pt-28">
            {/* Hero */}
            <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-accent-600/10"
                    style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }} />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="inline-block bg-accent-600 text-white font-display text-xs tracking-[0.2em] px-4 py-2 mb-4 uppercase">
                        Montney League · 2026
                    </div>
                    <h1 className="font-display font-bold text-5xl sm:text-6xl text-white tracking-wide mb-4">
                        Game Schedule
                    </h1>
                    <p className="text-blue-200 font-body text-lg max-w-2xl mb-8">
                        Full schedule for all HPMBA divisions. Home games played at High Prairie ball diamonds. Check back regularly for updates or visit our Facebook page for the continues updates.
                    </p>
                    <a href={FB_PAGE_URL} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-display font-semibold text-sm px-6 py-3 uppercase tracking-wider transition-all backdrop-blur-sm rounded">
                        <ExternalLink size={15} /> Facebook Page
                    </a>
                </div>
            </section>

            {/* Rounds */}
            <section className="py-24 bg-primary-900">
                <div className="max-w-5xl mx-auto px-6">

                    {/* Timeline line */}
                    <div className="relative">
                        <div className="hidden lg:block absolute left-[22px] top-8 bottom-8 w-px bg-primary-700" />

                        <div className="space-y-16">
                            {rounds.map((round) => (
                                <div key={round.id} id={round.id} className="relative">

                                    {/* Round label + date */}
                                    <div className="flex items-center gap-4 mb-6">
                                        {/* Timeline dot */}
                                        <div className={`hidden lg:flex w-11 h-11 rounded-full border-2 ${round.accentBorder} ${round.accentBg} items-center justify-center flex-shrink-0 text-lg z-10 bg-primary-900`}>
                                            {round.emoji}
                                        </div>
                                        <div className="flex flex-wrap items-center gap-3 lg:ml-2">
                                            <span className={`font-display font-bold text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full border ${round.accentBorder} ${round.accentBg} ${round.accentText}`}>
                                                {round.label}
                                            </span>
                                            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide">
                                                {round.dates}
                                            </h2>
                                        </div>
                                    </div>

                                    {/* Venues grid */}
                                    <div className="lg:ml-16 grid sm:grid-cols-2 gap-5">
                                        {round.venues.map((venue) => (
                                            <div key={venue.location} className="bg-primary-800 border border-primary-600 rounded-2xl overflow-hidden hover:border-primary-500 transition-colors">
                                                {/* Header */}
                                                <div className={`${venue.headerBg} px-5 py-4 flex items-center gap-2`}>
                                                    <MapPin size={14} className="text-white/70" />
                                                    <div>
                                                        <div className="text-white/60 text-xs font-display uppercase tracking-widest">Location</div>
                                                        <div className="text-white font-display font-bold text-lg tracking-wide">{venue.location}</div>
                                                    </div>
                                                </div>
                                                {/* Teams */}
                                                <div className="px-5 py-4">
                                                    <div className="text-blue-400 font-display text-xs uppercase tracking-widest mb-3">Teams</div>
                                                    <div className="flex flex-wrap gap-2">
                                                        {venue.teams.map((team) => (
                                                            <span key={team}
                                                                className={`text-xs font-body px-3 py-1.5 rounded-lg border transition-colors ${team === 'High Prairie'
                                                                    ? 'bg-accent-600/20 border-accent-500/60 text-accent-300 font-semibold'
                                                                    : 'bg-primary-700/60 border-primary-600 text-blue-200'
                                                                    }`}>
                                                                {team === 'High Prairie' ? '⚾ ' + team : team}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {/* Finals */}
                            <div id={finals.id} className="relative">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="hidden lg:flex w-11 h-11 rounded-full border-2 border-yellow-500/60 bg-yellow-500/10 items-center justify-center flex-shrink-0 text-lg z-10 bg-primary-900">
                                        🏆
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3 lg:ml-2">
                                        <span className="font-display font-bold text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-yellow-500/40 bg-yellow-500/10 text-yellow-400">
                                            Championship
                                        </span>
                                        <h2 className="font-display font-bold text-3xl sm:text-4xl text-yellow-400 tracking-wide">
                                            {finals.dates} — Finals
                                        </h2>
                                    </div>
                                </div>

                                {/* Finals card */}
                                <div className="lg:ml-16 bg-gradient-to-br from-yellow-500/10 to-orange-500/5 border border-yellow-500/30 rounded-2xl overflow-hidden">
                                    <div className="px-6 py-5 border-b border-yellow-500/20">
                                        <div className="flex items-center gap-3">
                                            <Trophy size={22} className="text-yellow-400" />
                                            <div>
                                                <div className="font-display font-bold text-white text-xl tracking-wide">Championship Finals</div>
                                                <div className="text-yellow-300/70 font-body text-sm">Top teams from each division advance</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-4 p-5">
                                        {finals.venues.map((venue) => (
                                            <div key={venue.location} className={`${venue.headerBg} rounded-xl px-5 py-4 text-center`}>
                                                <div className="text-white/60 font-display text-xs uppercase tracking-widest mb-1">Location</div>
                                                <div className="text-white font-display font-bold text-xl tracking-wide">{venue.location}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            
        </div>
    )
}