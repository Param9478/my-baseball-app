import { Link } from 'react-router-dom'
import { Users, Trophy, Star, ChevronRight, Facebook, Heart } from 'lucide-react'
import HeroSlider from '../components/HeroSlider'
import SectionHeader from '../components/SectionHeader'
import NewsCard from '../components/NewsCard'
import DivisionCard from '../components/DivisionCard'

const newsItems = [
  {
    title: '13U / 11U Try Outs – Registered Athletes Only!',
    date: 'February 2, 2026',
    excerpt: 'Try Outs Continue! REGISTERED athletes only. You can register up until try outs begin, late fee now applies.',
    href: '/news',
  },
  {
    title: 'Announcing our 18U AA-2 REDS team – 2026 Season!',
    date: 'February 2, 2026',
    excerpt: 'We are excited to announce the roster for our 2026 18U AA-2 REDS team. Congratulations to all selected players!',
    href: '/news',
  },
  {
    title: 'Announcing our 18U AA-1 REDS team – 2026 Season!',
    date: 'January 26, 2026',
    excerpt: 'We are thrilled to announce the roster for our 2026 18U AA-1 REDS team.',
    href: '/news',
  },
]

const divisions = [
  { name: "Lil' Reds", ageRange: 'Ages 3–4', description: 'Introduction to baseball fundamentals in a fun, low-pressure environment.' },
  { name: 'Rally Caps', ageRange: 'Ages 5–6', description: 'Learning the basics of batting, fielding, and teamwork.' },
  { name: 'Rookie', ageRange: 'Ages 7–8', description: 'Building foundational skills through guided play and development.' },
  { name: '11U', ageRange: 'Ages 9–11', description: 'Competitive play with a focus on skill development and sportsmanship.' },
  { name: '13U', ageRange: 'Ages 11–13', description: 'Developing advanced skills and game strategy.' },
  { name: '15U / 18U', ageRange: 'Ages 13–18', description: 'High-level competitive baseball for serious players.' },
  { name: 'GP AA Reds', ageRange: 'Elite', description: 'Our competitive travel team representing High Prairie.' },
  { name: 'Female Baseball', ageRange: 'All Ages', description: 'Dedicated program for female players to develop and compete.' },
  { name: 'Challenger Baseball', ageRange: 'Adaptive', description: 'Inclusive baseball program for players with physical and cognitive challenges.' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <HeroSlider />

      {/* About section */}
      <section className="py-24 bg-primary-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader tag="The GPMBA" title="We believe in a fun and healthy environment for both players and coaches." />
              <p className="text-blue-200 font-body text-base leading-relaxed mb-6">
                High Prairie Minor Baseball is a community-based program with dedicated volunteers that believe in creating a safe and active environment that promotes exercise, teamwork, and sportsmanship.
              </p>
              <p className="text-blue-200 font-body text-base leading-relaxed mb-8">
                We want to build a space of equal opportunity for every child that steps onto the field by offering development programs that will teach them the fundamentals of the game and develop their playing skills.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-display font-semibold text-sm px-7 py-3.5 uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-accent-600/30"
              >
                Learn More <ChevronRight size={16} />
              </Link>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Users, title: 'Community', desc: 'A welcoming space for every player, family, and volunteer.' },
                { icon: Trophy, title: 'Excellence', desc: 'Pushing players to reach their full potential on and off the field.' },
                { icon: Heart, title: 'Fun', desc: 'Baseball should be fun. We make sure every child loves the game.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-primary-800 border border-primary-600 rounded-xl p-6 text-center card-hover">
                  <div className="w-12 h-12 bg-accent-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-accent-400" />
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-2">{title}</h3>
                  <p className="text-blue-200 text-xs font-body leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Camps */}
      <section className="py-20 bg-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #dc2626 0%, transparent 60%), radial-gradient(circle at 70% 50%, #1d4ed8 0%, transparent 60%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <SectionHeader tag="Off-Season" title="Development Camps" center />
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { name: 'Pre-Season', desc: 'Get ready for the season with focused training on fundamentals and team chemistry before opening day.', href: '/development#pre-season', icon: '⚾' },
              { name: 'Fall Camp', desc: 'Continue developing your game after the season ends with specialized fall training sessions.', href: '/development#fall-camp', icon: '🍂' },
              { name: 'Winter Camp', desc: 'Stay sharp all winter long with indoor training camps designed to improve your skills.', href: '/development#winter-camp', icon: '❄️' },
            ].map((camp) => (
              <Link
                key={camp.name}
                to={camp.href}
                className="group bg-primary-900 border border-primary-600 hover:border-accent-500 rounded-xl p-8 card-hover text-center block"
              >
                <div className="text-4xl mb-4">{camp.icon}</div>
                <h3 className="font-display font-bold text-white text-xl tracking-wide mb-3 group-hover:text-accent-400 transition-colors">
                  {camp.name}
                </h3>
                <p className="text-blue-200 text-sm font-body leading-relaxed">{camp.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-24 bg-primary-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <SectionHeader tag="Age Groups" title="Our Divisions" />
            <Link
              to="/divisions"
              className="hidden sm:flex items-center gap-1 text-accent-400 hover:text-accent-300 font-body font-semibold text-sm transition-colors"
            >
              View All <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {divisions.map((div, i) => (
              <DivisionCard key={div.name} {...div} color={i % 3 === 0 ? 'accent' : i % 3 === 1 ? 'blue' : 'indigo'} />
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved / League */}
      <section className="py-20 bg-gradient-to-br from-accent-700 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.5) 30px, rgba(255,255,255,0.5) 31px)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="h-0.5 w-10 bg-white/50" />
            <span className="font-display text-white/80 text-xs tracking-[0.25em] uppercase">Coaches & Umpires</span>
            <div className="h-0.5 w-10 bg-white/50" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-wide mb-4">
            Learn How You Can Get Involved
          </h2>
          <p className="text-white/80 font-body text-lg max-w-2xl mx-auto mb-8">
            High Prairie Minor Baseball is always looking for fresh faces interested in getting involved. There are a variety of positions available every year.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Coaching Applications', 'Umpire Clinics', 'Equipment'].map((item) => (
              <div key={item} className="bg-white/20 backdrop-blur-sm border border-white/30 text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/league"
              className="inline-flex items-center gap-2 bg-white text-accent-600 hover:bg-blue-50 font-display font-bold text-sm px-8 py-4 uppercase tracking-wider transition-all hover:shadow-xl"
            >
              Learn More <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-24 bg-primary-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <SectionHeader tag="Latest" title="Baseball News" />
            <Link
              to="/news"
              className="hidden sm:flex items-center gap-1 text-accent-400 hover:text-accent-300 font-body font-semibold text-sm transition-colors"
            >
              All News <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <NewsCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Facebook CTA */}
      <section className="py-16 bg-primary-800 border-t border-primary-700">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Facebook size={40} className="text-blue-400 mx-auto mb-4" />
          <h3 className="font-display font-bold text-2xl text-white mb-2">Join Our Community</h3>
          <p className="text-blue-200 font-body text-base mb-6">
            Stay up to date with the latest news, announcements, and community updates on our Facebook group.
          </p>
          <a
            href="https://www.facebook.com/groups/162547079983081/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white font-display font-semibold text-sm px-7 py-3.5 uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-blue-600/40"
          >
            <Facebook size={16} />
            Join Facebook Group
          </a>
        </div>
      </section>

      {/* Register CTA */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-accent-600 text-white font-display text-xs tracking-[0.2em] px-4 py-2 mb-6 uppercase">
            2026 Season
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-wide mb-4">
            Ready to Play Ball?
          </h2>
          <p className="text-blue-200 font-body text-lg mb-10 max-w-2xl mx-auto">
            Secure your spot in the 2026 season. Registration is now open for all divisions.
          </p>
          <a
            href="http://GPball.rampregistrations.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-display font-bold text-base px-10 py-5 uppercase tracking-wider transition-all hover:shadow-2xl hover:shadow-accent-600/40 animate-pulse2"
          >
            Register Now <ChevronRight size={18} />
          </a>
        </div>
      </section>
    </div>
  )
}
