import { Calendar, MapPin, Clock, ChevronRight, ExternalLink } from 'lucide-react'

// Update karo eh real Spordle data naal
const seasons = [
    {
        id: 'spring',
        label: 'Spring Season',
        icon: '⚾',
        games: [
            { date: 'May 3, 2026', day: 'Sat', time: '10:00 AM', home: 'HP Rally Caps', away: 'Slave Lake', field: 'Field 1', division: 'Rally Caps' },
            { date: 'May 3, 2026', day: 'Sat', time: '12:00 PM', home: 'HP Rookie', away: 'Peace River', field: 'Field 2', division: 'Rookie' },
            { date: 'May 10, 2026', day: 'Sun', time: '10:00 AM', home: 'HP 11U', away: 'Grande Prairie', field: 'Field 1', division: '11U' },
            { date: 'May 10, 2026', day: 'Sun', time: '1:00 PM', home: 'HP 13U', away: 'Valleyview', field: 'Field 2', division: '13U' },
            { date: 'May 17, 2026', day: 'Sun', time: '11:00 AM', home: 'HP 15U', away: 'Fairview', field: 'Field 1', division: '15U' },
            { date: 'May 24, 2026', day: 'Sun', time: '10:00 AM', home: 'HP 18U', away: 'Peace River', field: 'Field 1', division: '18U' },
        ],
    },
    {
        id: 'summer',
        label: 'Summer Season',
        icon: '🌞',
        games: [
            { date: 'Jun 7, 2026', day: 'Sun', time: '10:00 AM', home: 'HP 11U', away: 'Slave Lake', field: 'Field 1', division: '11U' },
            { date: 'Jun 7, 2026', day: 'Sun', time: '12:30 PM', home: 'HP 13U', away: 'Grande Prairie', field: 'Field 2', division: '13U' },
            { date: 'Jun 14, 2026', day: 'Sun', time: '10:00 AM', home: 'HP 15U Softball', away: 'Peace River', field: 'Field 2', division: '15U Softball' },
            { date: 'Jun 21, 2026', day: 'Sun', time: '11:00 AM', home: 'HP 18U', away: 'Valleyview', field: 'Field 1', division: '18U' },
            { date: 'Jun 28, 2026', day: 'Sun', time: '10:00 AM', home: 'HP 18U Softball', away: 'Fairview', field: 'Field 2', division: '18U Softball' },
        ],
    },
]

const divisionColors = {
    'Rally Caps': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    'Rookie': 'bg-green-500/20 text-green-300 border-green-500/30',
    '11U': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    '13U': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    '15U': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    '18U': 'bg-red-500/20 text-red-300 border-red-500/30',
    '15U Softball': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
    '18U Softball': 'bg-rose-500/20 text-rose-300 border-rose-500/30',
}

const SPORDLE_URL = 'https://page.spordle.com/high-prairie-district-minor-ball-association/schedule-stats-standings'

export default function Schedule() {
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
                        2026 Season
                    </div>
                    <h1 className="font-display font-bold text-5xl sm:text-6xl text-white tracking-wide mb-4">
                        Game Schedule
                    </h1>
                    <p className="text-blue-200 font-body text-lg max-w-2xl mb-8">
                        Full schedule for all HPMBA divisions. Home games played at High Prairie ball diamonds. Check back regularly for updates.
                    </p>
                    <a
                        href={SPORDLE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-display font-semibold text-sm px-6 py-3 uppercase tracking-wider transition-all backdrop-blur-sm rounded"
                    >
                        <ExternalLink size={15} />
                        View Live Schedule on Spordle
                    </a>
                </div>
            </section>

            {/* Live Banner */}
            <section className="bg-primary-800 border-b border-primary-600">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <p className="text-blue-200 font-body text-sm">
                            Live scores, standings & stats available on Spordle
                        </p>
                    </div>
                    <a
                        href={SPORDLE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 font-display font-semibold text-sm transition-colors whitespace-nowrap"
                    >
                        Open Spordle <ExternalLink size={13} />
                    </a>
                </div>
            </section>

            {/* Division Legend */}
            <section className="py-6 bg-primary-800 border-b border-primary-700">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-blue-300 font-display text-xs uppercase tracking-widest mr-2">Divisions:</span>
                        {Object.entries(divisionColors).map(([div, color]) => (
                            <span key={div} className={`text-xs font-display font-semibold px-3 py-1 rounded-full border ${color}`}>
                                {div}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Schedule */}
            <section className="py-24 bg-primary-900">
                <div className="max-w-7xl mx-auto px-6 space-y-20">
                    {seasons.map((season) => (
                        <div key={season.id} id={season.id}>
                            {/* Season Header */}
                            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                                <div className="flex items-center gap-4">
                                    <span className="text-4xl">{season.icon}</span>
                                    <div>
                                        <h2 className="font-display font-bold text-3xl text-white tracking-wide">{season.label}</h2>
                                        <p className="text-blue-300 font-body text-sm">{season.games.length} games scheduled</p>
                                    </div>
                                </div>
                                <a
                                    href={SPORDLE_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-700 border border-primary-600 hover:border-accent-500 text-blue-200 hover:text-white font-display font-semibold text-xs px-4 py-2 uppercase tracking-wider transition-all rounded"
                                >
                                    <ExternalLink size={12} />
                                    Live Scores
                                </a>
                            </div>

                            {/* Desktop Table */}
                            <div className="hidden md:block bg-primary-800 border border-primary-600 rounded-2xl overflow-hidden">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-primary-600 bg-primary-700">
                                            <th className="text-left px-6 py-4 font-display text-xs text-blue-300 uppercase tracking-widest">Date</th>
                                            <th className="text-left px-6 py-4 font-display text-xs text-blue-300 uppercase tracking-widest">Time</th>
                                            <th className="text-left px-6 py-4 font-display text-xs text-blue-300 uppercase tracking-widest">Home</th>
                                            <th className="text-left px-6 py-4 font-display text-xs text-blue-300 uppercase tracking-widest">Away</th>
                                            <th className="text-left px-6 py-4 font-display text-xs text-blue-300 uppercase tracking-widest">Field</th>
                                            <th className="text-left px-6 py-4 font-display text-xs text-blue-300 uppercase tracking-widest">Division</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {season.games.map((game, i) => (
                                            <tr key={i} className="border-b border-primary-700 last:border-0 hover:bg-primary-700/50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="font-display font-semibold text-white text-sm">{game.day}</div>
                                                    <div className="text-blue-300 text-xs font-body">{game.date}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-1.5 text-blue-200 text-sm font-body">
                                                        <Clock size={13} className="text-accent-400" />
                                                        {game.time}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 font-body text-white text-sm font-semibold">{game.home}</td>
                                                <td className="px-6 py-4 font-body text-blue-200 text-sm">vs {game.away}</td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-1.5 text-blue-200 text-sm font-body">
                                                        <MapPin size={13} className="text-accent-400" />
                                                        {game.field}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`text-xs font-display font-semibold px-2.5 py-1 rounded-full border ${divisionColors[game.division] || 'bg-primary-600 text-blue-200 border-primary-500'}`}>
                                                        {game.division}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile Cards */}
                            <div className="md:hidden space-y-4">
                                {season.games.map((game, i) => (
                                    <div key={i} className="bg-primary-800 border border-primary-600 rounded-xl p-5">
                                        <div className="flex items-start justify-between mb-3">
                                            <span className={`text-xs font-display font-semibold px-2.5 py-1 rounded-full border ${divisionColors[game.division] || 'bg-primary-600 text-blue-200 border-primary-500'}`}>
                                                {game.division}
                                            </span>
                                            <div className="text-right">
                                                <div className="font-display font-semibold text-white text-sm">{game.day}</div>
                                                <div className="text-blue-300 text-xs font-body">{game.date}</div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="font-display font-bold text-white text-base">{game.home}</div>
                                            <div className="text-blue-300 font-body text-sm">vs {game.away}</div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1.5 text-blue-200 text-xs font-body">
                                                <Clock size={12} className="text-accent-400" />
                                                {game.time}
                                            </div>
                                            <div className="flex items-center gap-1.5 text-blue-200 text-xs font-body">
                                                <MapPin size={12} className="text-accent-400" />
                                                {game.field}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 bg-primary-800 border-t border-primary-700">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <Calendar size={36} className="text-accent-400 mx-auto mb-4" />
                    <h2 className="font-display font-bold text-2xl text-white mb-3">Want Live Scores & Standings?</h2>
                    <p className="text-blue-200 font-body text-base mb-6">
                        Full live scores, stats, and standings are available on our Spordle page. Schedule subject to change — follow our Facebook group for rainout notifications.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href={SPORDLE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-display font-semibold text-sm px-7 py-3.5 uppercase tracking-wider transition-all hover:shadow-lg"
                        >
                            <ExternalLink size={15} />
                            View on Spordle
                        </a>
                        <a
                            href={`https://www.facebook.com/${import.meta.env.VITE_FB_PAGE_ID}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white font-display font-semibold text-sm px-7 py-3.5 uppercase tracking-wider transition-all"
                        >
                            Follow Our Page <ChevronRight size={15} />
                        </a>
                        <a
                            href="https://www.facebook.com/groups/162547079983081/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-600 border border-primary-500 text-white font-display font-semibold text-sm px-7 py-3.5 uppercase tracking-wider transition-all"
                        >
                            Join Facebook Group <ChevronRight size={15} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}