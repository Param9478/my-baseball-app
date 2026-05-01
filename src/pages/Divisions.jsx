import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const BASEBALL_REG = 'https://page.spordle.com/high-prairie-district-minor-ball-association/register/1f11531e-1a82-6918-9bab-06d2358bfa0f'
const SOFTBALL_REG = 'https://www.rampregistrations.com/login?v3=d1c7bce4'

const divisions = [
  {
    id: 'rally-caps',
    name: 'Rally Caps',
    ageRange: 'Ages 5–6',
    description: 'Rally Caps focuses on introducing the core skills of batting, fielding, and teamwork. Games are structured for fun and learning at this foundational stage.',
    icon: '⚾',
    type: 'baseball',
  },
  {
    id: 'rookie',
    name: 'Rookie',
    ageRange: 'Ages 7–8',
    description: 'Rookie players begin to develop real baseball skills in a structured environment. Focus is on learning positions, base running, and the rules of the game.',
    icon: '⚾',
    type: 'baseball',
  },
  {
    id: '11u',
    name: '11U A Baseball',
    ageRange: 'Ages 9–11',
    description: 'Players in the 11U division compete in organized games with full rules. Emphasis on skill development, sportsmanship, and competitive play.',
    icon: '⚾',
    type: 'baseball',
  },
  {
    id: '13u',
    name: '13U A Baseball',
    ageRange: 'Ages 11–13',
    description: 'Players develop strategic thinking and higher-level baseball skills as they prepare for senior play.',
    icon: '⚾',
    type: 'baseball',
  },
  {
    id: '15u',
    name: '15U A Baseball',
    ageRange: 'Ages 13–15',
    description: 'Focused on advanced skill development and tactical gameplay on a full-size diamond, preparing players for high-school level baseball competition.',
    icon: '⚾',
    type: 'baseball',
  },
  {
    id: '18u',
    name: '18U A Baseball',
    ageRange: 'Ages 15–18',
    description: 'The peak of our youth baseball program, emphasizing high-level strategy, leadership, and physical conditioning for adult league or collegiate play.',
    icon: '⚾',
    type: 'baseball',
  },
  {
    id: 'softball-15u',
    name: '15U Softball',
    ageRange: 'Ages 13–15',
    description: 'Our 15U Softball program focuses on fastpitch fundamentals, team dynamics, and competitive skill-building in a supportive environment.',
    icon: '🥎',
    type: 'softball',
  },
  {
    id: 'softball-18u',
    name: '18U Softball',
    ageRange: 'Ages 15–18',
    description: 'The 18U Softball division offers high-level competition for senior players, emphasizing advanced techniques and preparation for regional tournaments.',
    icon: '🥎',
    type: 'softball',
  },
]

export default function Divisions() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-accent-600/10" style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-block bg-accent-600 text-white font-display text-xs tracking-[0.2em] px-4 py-2 mb-4 uppercase">
            Age Groups
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white tracking-wide mb-4">
            Divisions
          </h1>
          <p className="text-blue-200 font-body text-lg max-w-2xl mb-8">
            From our youngest Rally Caps to our elite 18U teams, there's a place for every player in the HPMBA.
          </p>
          {/* Quick register buttons in hero */}
          <div className="flex flex-wrap gap-4">
            <a
              href={BASEBALL_REG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-display font-semibold text-sm px-6 py-3 uppercase tracking-wider transition-all hover:shadow-lg"
            >
              ⚾ Register — Baseball
            </a>
            <a
              href={SOFTBALL_REG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-500 text-white font-display font-semibold text-sm px-6 py-3 uppercase tracking-wider transition-all hover:shadow-lg"
            >
              🥎 Register — Softball
            </a>
          </div>
        </div>
      </section>

      {/* Baseball Divisions */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-3xl">⚾</span>
            <div>
              <div className="font-display text-accent-400 text-xs tracking-[0.2em] uppercase mb-1">Baseball</div>
              <h2 className="font-display font-bold text-3xl text-white tracking-wide">Baseball Divisions</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.filter(d => d.type === 'baseball').map((div) => (
              <div
                key={div.id}
                id={div.id}
                className="bg-primary-800 border border-primary-600 hover:border-accent-500 rounded-xl p-6 card-hover group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{div.icon}</div>
                  <span className="text-xs font-display font-semibold text-blue-200 bg-primary-700 px-2.5 py-1 rounded uppercase tracking-wide">
                    {div.ageRange}
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-xl tracking-wide mb-2 group-hover:text-accent-400 transition-colors">
                  {div.name}
                </h3>
                <p className="text-blue-200 text-sm font-body leading-relaxed mb-4">{div.description}</p>
                <a
                  href={BASEBALL_REG}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent-400 hover:text-accent-300 text-sm font-body font-semibold transition-colors"
                >
                  Register <ChevronRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Softball Divisions */}
      <section className="py-20 bg-primary-800 border-t border-primary-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-3xl">🥎</span>
            <div>
              <div className="font-display text-pink-400 text-xs tracking-[0.2em] uppercase mb-1">Softball</div>
              <h2 className="font-display font-bold text-3xl text-white tracking-wide">Softball Divisions</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {divisions.filter(d => d.type === 'softball').map((div) => (
              <div
                key={div.id}
                id={div.id}
                className="bg-primary-900 border border-primary-600 hover:border-pink-500 rounded-xl p-6 card-hover group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{div.icon}</div>
                  <span className="text-xs font-display font-semibold text-blue-200 bg-primary-800 px-2.5 py-1 rounded uppercase tracking-wide">
                    {div.ageRange}
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-xl tracking-wide mb-2 group-hover:text-pink-400 transition-colors">
                  {div.name}
                </h3>
                <p className="text-blue-200 text-sm font-body leading-relaxed mb-4">{div.description}</p>
                <a
                  href={SOFTBALL_REG}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-pink-400 hover:text-pink-300 text-sm font-body font-semibold transition-colors"
                >
                  Register <ChevronRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="py-16 bg-primary-900 border-t border-primary-700">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-3">Ready to Join a Division?</h2>
          <p className="text-blue-200 font-body text-base mb-8">Register today and secure your spot for the 2026 season.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={BASEBALL_REG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-display font-semibold text-sm px-8 py-4 uppercase tracking-wider transition-all hover:shadow-lg"
            >
              ⚾ Register — Baseball <ChevronRight size={16} />
            </a>
            <a
              href={SOFTBALL_REG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-500 text-white font-display font-semibold text-sm px-8 py-4 uppercase tracking-wider transition-all hover:shadow-lg"
            >
              🥎 Register — Softball <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}