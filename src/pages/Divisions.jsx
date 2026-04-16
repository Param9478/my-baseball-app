import SectionHeader from '../components/SectionHeader'
import { Users, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const divisions = [
  {
    id: 'lil-reds',
    name: "Lil' Reds",
    ageRange: 'Ages 3–4',
    description: "Our youngest players! Lil' Reds introduces toddlers to the basics of baseball in a fun, safe, and supportive environment. No experience needed — just bring your enthusiasm!",
    icon: '⭐',
  },
  {
    id: 'rally-caps',
    name: 'Rally Caps',
    ageRange: 'Ages 5–6',
    description: 'Rally Caps focuses on introducing the core skills of batting, fielding, and teamwork. Games are structured for fun and learning at this foundational stage.',
    icon: '🧢',
  },
  {
    id: 'rookie',
    name: 'Rookie',
    ageRange: 'Ages 7–8',
    description: 'Rookie players begin to develop real baseball skills in a structured environment. Focus is on learning positions, base running, and the rules of the game.',
    icon: '🌟',
  },
  {
    id: '11u',
    name: '11U',
    ageRange: 'Ages 9–11',
    description: 'Players in the 11U division compete in organized games with full rules. Emphasis on skill development, sportsmanship, and competitive play.',
    icon: '⚾',
  },
  {
    id: '13u',
    name: '13U',
    ageRange: 'Ages 11–13',
    description: 'The 13U division features advanced coaching and competition. Players develop strategic thinking and higher-level skills as they prepare for senior play.',
    icon: '🔥',
  },
  {
    id: '15u',
    name: '15U / 18U',
    ageRange: 'Ages 13–18',
    description: 'Our senior community league divisions offer competitive baseball for older youth. These divisions prepare players for adult leagues and higher levels of competition.',
    icon: '🏆',
  },
  {
    id: 'hp-reds',
    name: 'HP AA Reds',
    ageRange: 'Elite Travel',
    description: 'The HP AA Reds are our competitive travel teams representing High Prairie at the provincial and national level. Tryouts required for these select programs.',
    icon: '🎯',
  },
  {
    id: 'female',
    name: 'Female Baseball',
    ageRange: 'All Ages',
    description: 'A dedicated program providing female players with a space to develop their skills, compete, and love the game. Empowering the next generation of female athletes.',
    icon: '💪',
  },
  {
    id: 'challenger',
    name: 'Challenger Baseball',
    ageRange: 'Adaptive Program',
    description: 'Challenger Baseball is an adaptive program for individuals with physical and cognitive challenges. Everyone deserves the joy of playing baseball.',
    icon: '💙',
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
          <p className="text-blue-200 font-body text-lg max-w-2xl">
            From our youngest Lil' Reds to our elite HP AA Reds, there's a place for every player in the HPMBA.
          </p>
        </div>
      </section>

      {/* Divisions Grid */}
      <section className="py-24 bg-primary-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((div) => (
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
                <Link
                  to="/register"
                  className="inline-flex items-center gap-1 text-accent-400 hover:text-accent-300 text-sm font-body font-semibold transition-colors"
                >
                  Register <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="py-16 bg-primary-800 border-t border-primary-700">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-3">Ready to Join a Division?</h2>
          <p className="text-blue-200 font-body text-base mb-6">Register today and secure your spot for the 2026 season.</p>
          <a
            href="http://HPball.rampregistrations.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-display font-semibold text-sm px-8 py-4 uppercase tracking-wider transition-all hover:shadow-lg"
          >
            Register Now <ChevronRight size={16} />
          </a>
        </div>
      </section>
    </div>
  )
}
