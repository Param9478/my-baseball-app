import SectionHeader from '../components/SectionHeader'
import { Users, Shield, Star, Heart, ChevronRight, Target, Eye } from 'lucide-react'
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

      {/* Mission & Vision */}
      <section className="py-24 bg-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #dc2626 0%, transparent 50%), radial-gradient(circle at 80% 50%, #1d4ed8 0%, transparent 50%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="h-0.5 w-10 bg-accent-500" />
              <span className="font-display text-accent-400 text-xs tracking-[0.25em] uppercase font-medium">Who We Are</span>
              <div className="h-0.5 w-10 bg-accent-500" />
            </div>
            <h2 className="font-display font-bold text-4xl text-white tracking-wide">Our Mission & Vision</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-primary-900 border border-primary-600 hover:border-accent-500 rounded-2xl p-10 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-accent-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target size={26} className="text-accent-400" />
                </div>
                <div>
                  <span className="font-display text-accent-400 text-xs tracking-[0.2em] uppercase block mb-1">HPMBA Mission Statement</span>
                  <h3 className="font-display font-bold text-white text-2xl tracking-wide">Our Mission</h3>
                </div>
              </div>
              <p className="text-white font-display font-semibold text-lg leading-snug mb-5">
                Our goal is to keep our Youth healthy and active.
              </p>
              <p className="text-blue-200 font-body text-base leading-relaxed mb-4">
                High Prairie Minor Baseball's mission is to instill in the youth of High Prairie and surrounding areas, through the organized sport of baseball, the ideals of honesty, loyalty, courage, and sportsmanship.
              </p>
              <p className="text-blue-200 font-body text-base leading-relaxed">
                To provide a safe, healthy environment that promotes physical exercise, teamwork, respect for coaches and players, sound baseball fundamentals, self-esteem, self-confidence, self-discipline, and fair play — while having fun.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-primary-900 border border-primary-600 hover:border-accent-500 rounded-2xl p-10 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Eye size={26} className="text-blue-400" />
                </div>
                <div>
                  <span className="font-display text-blue-400 text-xs tracking-[0.2em] uppercase block mb-1">HPMBA Vision Statement</span>
                  <h3 className="font-display font-bold text-white text-2xl tracking-wide">Our Vision</h3>
                </div>
              </div>
              <p className="text-white font-display font-semibold text-lg leading-snug mb-5">
                A community where every child has the opportunity to play.
              </p>
              <p className="text-blue-200 font-body text-base leading-relaxed mb-4">
                We envision High Prairie Minor Baseball as the heart of our community — a place where young athletes of all backgrounds and skill levels come together, grow as individuals, and develop a lifelong love of the game.
              </p>
              <p className="text-blue-200 font-body text-base leading-relaxed">
                We also promote the sport of baseball in all its forms, including the training and encouragement of competitive ballplayers who represent our community with pride.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
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
              { name: 'Financial Assistance', desc: 'KidSport and JumpStart programs available for families in need.', href: '/resources#financial-assistance' },
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