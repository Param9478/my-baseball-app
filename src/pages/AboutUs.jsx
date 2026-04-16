import SectionHeader from '../components/SectionHeader'
import { Users, Shield, Star, Heart, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <div className="pt-28">
      {/* Page Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-accent-600/10" style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-block bg-accent-600 text-white font-display text-xs tracking-[0.2em] px-4 py-2 mb-4 uppercase">
            Our Story
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white tracking-wide mb-4">
            About Us
          </h1>
          <p className="text-blue-200 font-body text-lg max-w-2xl">
            High Prairie Minor Baseball — Building communities through the love of the game since the beginning.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-primary-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader tag="Who We Are" title="Community-Driven Baseball in High Prairie" />
              <p className="text-blue-200 font-body text-base leading-relaxed mb-5">
                High Prairie Minor Baseball is a community-based program with dedicated volunteers that believe in creating a safe and active environment that promotes exercise, teamwork, and sportsmanship.
              </p>
              <p className="text-blue-200 font-body text-base leading-relaxed mb-5">
                We want to build a space of equal opportunity for every child that steps onto the field by offering development programs that will teach them the fundamentals of the game and develop their playing skills.
              </p>
              <p className="text-blue-200 font-body text-base leading-relaxed mb-8">
                Our organization is run entirely by passionate volunteers who give their time to ensure every season is safe, competitive, and fun for all involved.
              </p>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-display font-semibold text-sm px-7 py-3.5 uppercase tracking-wider transition-all hover:shadow-lg"
              >
                Join Us <ChevronRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, title: 'Inclusive', desc: 'Open doors for every child regardless of skill level or background.' },
                { icon: Shield, title: 'Safe', desc: 'Creating a protected environment on and off the field.' },
                { icon: Star, title: 'Competitive', desc: 'Structured programs that challenge players to grow.' },
                { icon: Heart, title: 'Passionate', desc: 'Run by volunteers who love baseball and community.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-primary-800 border border-primary-600 rounded-xl p-6 card-hover">
                  <div className="w-12 h-12 bg-accent-600/20 rounded-full flex items-center justify-center mb-4">
                    <Icon size={22} className="text-accent-400" />
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-1">{title}</h3>
                  <p className="text-blue-200 text-xs font-body leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader tag="Resources" title="Baseball Canada & Alberta" center />
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { name: 'Baseball Canada', desc: 'National governing body for baseball in Canada.', href: 'https://www.baseball.ca/' },
              { name: 'Baseball Alberta', desc: 'Provincial organization overseeing Alberta amateur baseball.', href: 'http://baseballalberta.com/' },
              { name: 'Financial Assistance', desc: 'KidSport and JumpStart programs available for families in need.', href: '/contact' },
            ].map((res) => (
              <a
                key={res.name}
                href={res.href}
                target={res.href.startsWith('http') ? '_blank' : '_self'}
                rel={res.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="bg-primary-900 border border-primary-600 hover:border-accent-500 rounded-xl p-6 card-hover block group"
              >
                <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-accent-400 transition-colors">{res.name}</h3>
                <p className="text-blue-200 text-sm font-body leading-relaxed">{res.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
