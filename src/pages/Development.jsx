import SectionHeader from '../components/SectionHeader'
import { ChevronRight } from 'lucide-react'

const camps = [
  {
    id: 'pre-season',
    icon: '⚾',
    name: 'Pre-Season Camp',
    season: 'Spring',
    description:
      'Get ready before opening day with focused training on fundamentals, team chemistry, and game preparation. Our pre-season camps are designed to shake off the rust and get players performing at their best right from game one.',
    details: [
      'Hitting & pitching mechanics',
      'Fielding and defensive drills',
      'Base running strategy',
      'Team scrimmages',
    ],
  },
  {
    id: 'fall-camp',
    icon: '🍂',
    name: 'Fall Camp',
    season: 'Fall',
    description:
      'Continue your development after the regular season ends. Fall Camp keeps players engaged, active, and improving during the off-months while building on the skills developed over the summer.',
    details: [
      'Position-specific coaching',
      'Individual skill assessments',
      'Competitive drills & games',
      'Mental skills & game IQ',
    ],
  },
  {
    id: 'winter-camp',
    icon: '❄️',
    name: 'Winter Camp',
    season: 'Winter',
    description:
      'Don\'t let the Alberta winter stop your game. Our indoor winter camps are designed to keep players sharp and improve their skills so they come out stronger when spring arrives.',
    details: [
      'Indoor batting cages',
      'Pitching & catching clinics',
      'Strength & conditioning',
      'Film review & strategy',
    ],
  },
]

export default function Development() {
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
            Off-Season Programs
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white tracking-wide mb-4">
            Development Camps
          </h1>
          <p className="text-blue-200 font-body text-lg max-w-2xl">
            The GPMBA offers skill development camps year-round to help your children grow both on and off the field.
          </p>
        </div>
      </section>

      {/* Camps */}
      <section className="py-24 bg-primary-900">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {camps.map((camp, i) => (
            <div
              key={camp.id}
              id={camp.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Info */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{camp.icon}</span>
                  <span className="font-display text-accent-400 text-xs tracking-[0.25em] uppercase font-medium">
                    {camp.season}
                  </span>
                </div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide mb-4">
                  {camp.name}
                </h2>
                <p className="text-blue-200 font-body text-base leading-relaxed mb-6">
                  {camp.description}
                </p>
                <a
                  href="http://GPball.rampregistrations.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-display font-semibold text-sm px-7 py-3.5 uppercase tracking-wider transition-all hover:shadow-lg"
                >
                  Register <ChevronRight size={16} />
                </a>
              </div>

              {/* Details card */}
              <div className={`bg-primary-800 border border-primary-600 rounded-2xl p-8 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="font-display font-semibold text-white text-sm tracking-widest uppercase mb-5 pb-3 border-b border-primary-600">
                  What's Included
                </h3>
                <ul className="space-y-3">
                  {camp.details.map((d) => (
                    <li key={d} className="flex items-center gap-3 text-blue-100 font-body text-sm">
                      <div className="w-2 h-2 rounded-full bg-accent-500 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
