import SectionHeader from '../components/SectionHeader'
import { ChevronRight, Users, Shield, Calendar } from 'lucide-react'

export default function League() {
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
            Get Involved
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white tracking-wide mb-4">
            Our League
          </h1>
          <p className="text-blue-200 font-body text-lg max-w-2xl">
            GPMBA is always looking for coaches, umpires, and volunteers to help grow our community.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-24 bg-primary-900">
        <div className="max-w-7xl mx-auto px-6 space-y-20">

          {/* Coaches */}
          <div id="coaches" className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-accent-600/20 rounded-full flex items-center justify-center">
                  <Users size={20} className="text-accent-400" />
                </div>
                <span className="font-display text-accent-400 text-xs tracking-[0.25em] uppercase">Volunteer</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide mb-4">Coaching Applications</h2>
              <p className="text-blue-200 font-body text-base leading-relaxed mb-4">
                Do you have a passion for baseball and working with youth? We are always looking for dedicated coaches to lead our teams. Whether you're a former player or just love the game, we have a spot for you.
              </p>
              <p className="text-blue-200 font-body text-base leading-relaxed mb-6">
                Coaches play a critical role in player development, safety, and the overall experience of every child on the team. Our coaches are supported with training, resources, and a strong community network.
              </p>
              <a
                href="mailto:execdirector@gpmba.ca"
                className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-display font-semibold text-sm px-7 py-3.5 uppercase tracking-wider transition-all hover:shadow-lg"
              >
                Apply Now <ChevronRight size={16} />
              </a>
            </div>
            <div className="bg-primary-800 border border-primary-600 rounded-2xl p-8">
              <h3 className="font-display font-semibold text-white text-sm tracking-widest uppercase mb-5 pb-3 border-b border-primary-600">
                What We Look For
              </h3>
              <ul className="space-y-3">
                {[
                  'Passion for youth development',
                  'Positive attitude and sportsmanship',
                  'Reliable and committed to the season',
                  'Willing to complete coaching certifications',
                  'Clear criminal record check required',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-blue-100 font-body text-sm">
                    <div className="w-2 h-2 rounded-full bg-accent-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Umpires */}
          <div id="umpires" className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-primary-800 border border-primary-600 rounded-2xl p-8 lg:order-1">
              <h3 className="font-display font-semibold text-white text-sm tracking-widest uppercase mb-5 pb-3 border-b border-primary-600">
                Umpire Clinics Include
              </h3>
              <ul className="space-y-3">
                {[
                  'Rules of baseball (all divisions)',
                  'Positioning and mechanics',
                  'Conflict resolution on the field',
                  'Game management skills',
                  'Paid opportunities available',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-blue-100 font-body text-sm">
                    <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:order-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <Shield size={20} className="text-blue-400" />
                </div>
                <span className="font-display text-blue-400 text-xs tracking-[0.25em] uppercase">Officiate</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide mb-4">Umpire Clinics</h2>
              <p className="text-blue-200 font-body text-base leading-relaxed mb-4">
                Become a certified umpire with the GPMBA. We offer clinics for new and experienced umpires to develop their skills and knowledge of the game.
              </p>
              <p className="text-blue-200 font-body text-base leading-relaxed mb-6">
                Umpires are essential to the game and are compensated for their time. This is a great opportunity for older youth and adults to give back to the baseball community.
              </p>
              <a
                href="mailto:execdirector@gpmba.ca"
                className="inline-flex items-center gap-2 border-2 border-blue-500 hover:bg-blue-500 text-blue-300 hover:text-white font-display font-semibold text-sm px-7 py-3.5 uppercase tracking-wider transition-all"
              >
                Learn More <ChevronRight size={16} />
              </a>
            </div>
          </div>

          {/* Game Nights */}
          <div id="game-nights" className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-accent-600/20 rounded-full flex items-center justify-center">
                  <Calendar size={20} className="text-accent-400" />
                </div>
                <span className="font-display text-accent-400 text-xs tracking-[0.25em] uppercase">Community</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide mb-4">Game Nights</h2>
              <p className="text-blue-200 font-body text-base leading-relaxed mb-4">
                Come out and support your local teams at our game nights throughout the season. Game nights are a great opportunity to connect with the community, cheer on the players, and enjoy the sport we all love.
              </p>
              <p className="text-blue-200 font-body text-base leading-relaxed mb-6">
                Check our news and social media pages for upcoming game schedules and special events.
              </p>
              <a
                href="https://www.facebook.com/groups/162547079983081/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-display font-semibold text-sm px-7 py-3.5 uppercase tracking-wider transition-all hover:shadow-lg"
              >
                Follow for Updates <ChevronRight size={16} />
              </a>
            </div>
            <div className="bg-primary-800 border border-primary-600 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">⚾</div>
              <h3 className="font-display font-bold text-white text-xl mb-2">2026 Season</h3>
              <p className="text-blue-200 font-body text-sm leading-relaxed mb-4">
                Game schedules will be posted once registration is complete and teams are formed. Stay tuned to our Facebook group for updates.
              </p>
              <a
                href="https://www.facebook.com/groups/162547079983081/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 hover:text-accent-300 font-body font-semibold text-sm transition-colors"
              >
                Join the Facebook Group →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
