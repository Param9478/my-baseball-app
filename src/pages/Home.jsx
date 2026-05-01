import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Users, Trophy, ChevronRight, Facebook, Heart } from 'lucide-react'
import HeroSlider from '../components/HeroSlider'
import SectionHeader from '../components/SectionHeader'
import NewsCard from '../components/NewsCard'

// Registration Links
const BASEBALL_REG = 'https://page.spordle.com/high-prairie-district-minor-ball-association/register/1f11531e-1a82-6918-9bab-06d2358bfa0f'
const SOFTBALL_REG = 'https://www.rampregistrations.com/login?v3=d1c7bce4'

// Fallback news
const fallbackNews = [
  {
    title: '13U / 11U Try Outs – Registered Athletes Only!',
    date: 'February 2, 2026',
    excerpt: 'Try Outs Continue! REGISTERED athletes only. You can register up until try outs begin, late fee now applies.',
    href: '/news',
    image: null,
  },
  {
    title: 'Announcing our 18U AA-2 REDS team – 2026 Season!',
    date: 'February 2, 2026',
    excerpt: 'We are excited to announce the roster for our 2026 18U AA-2 REDS team. Congratulations to all selected players!',
    href: '/news',
    image: null,
  },
  {
    title: 'Announcing our 18U AA-1 REDS team – 2026 Season!',
    date: 'January 26, 2026',
    excerpt: 'We are thrilled to announce the roster for our 2026 18U AA-1 REDS team.',
    href: '/news',
    image: null,
  },
]

const divisions = [
  { id: 'rally-caps', name: 'Rally Caps', ageRange: 'Ages 5–6', description: 'Rally Caps focuses on introducing the core skills of batting, fielding, and teamwork. Games are structured for fun and learning at this foundational stage.', icon: '🧢' },
  { id: 'rookie', name: 'Rookie', ageRange: 'Ages 7–8', description: 'Rookie players begin to develop real baseball skills in a structured environment. Focus is on learning positions, base running, and the rules of the game.', icon: '🌟' },
  { id: '11u', name: '11U A Baseball', ageRange: 'Ages 9–11', description: 'Players in the 11U division compete in organized games with full rules. Emphasis on skill development, sportsmanship, and competitive play.', icon: '⚾' },
  { id: '13u', name: '13U A Baseball', ageRange: 'Ages 11–13', description: 'Players develop strategic thinking and higher-level baseball skills as they prepare for senior play.', icon: '🔥' },
  { id: '15u', name: '15U A Baseball', ageRange: 'Ages 13–15', description: 'Focused on advanced skill development and tactical gameplay on a full-size diamond, preparing players for high-school level baseball competition.', icon: '🏆' },
  { id: '18u', name: '18U A Baseball', ageRange: 'Ages 15–18', description: 'The peak of our youth baseball program, emphasizing high-level strategy, leadership, and physical conditioning for adult league or collegiate play.', icon: '🏆' },
  { id: 'softball-15u', name: '15U Softball', ageRange: 'Ages 13–15', description: 'Our 15U Softball program focuses on fastpitch fundamentals, team dynamics, and competitive skill-building in a supportive environment.', icon: '🥎' },
  { id: 'softball-18u', name: '18U Softball', ageRange: 'Ages 15–18', description: 'The 18U Softball division offers high-level competition for senior players, emphasizing advanced techniques and preparation for regional tournaments.', icon: '🥎' },
]

function formatFBDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-CA', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

function fbPostToNewsItem(post) {
  const message = post.message || post.story || 'View post on Facebook'
  const title = message.length > 80 ? message.substring(0, 80) + '...' : message
  const excerpt = message.length > 160 ? message.substring(0, 160) + '...' : message
  return {
    title,
    date: formatFBDate(post.created_time),
    excerpt,
    href: `https://www.facebook.com/${import.meta.env.VITE_FB_PAGE_ID}/posts/${post.id.split('_')[1]}`,
    external: true,
    image: post.full_picture || null,
  }
}

export default function Home() {
  const [newsItems, setNewsItems] = useState(fallbackNews)
  const [liveNews, setLiveNews] = useState(false)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const PAGE_ID = import.meta.env.VITE_FB_PAGE_ID
        const TOKEN = import.meta.env.VITE_FB_ACCESS_TOKEN
        if (!PAGE_ID || !TOKEN) return

        const res = await fetch(
          `https://graph.facebook.com/v19.0/${PAGE_ID}/posts?fields=id,message,story,created_time,full_picture&limit=3&access_token=${TOKEN}`
        )
        const data = await res.json()
        if (data.data && data.data.length > 0) {
          setNewsItems(data.data.map(fbPostToNewsItem))
          setLiveNews(true)
        }
      } catch (err) {
        // Fallback news use karo — koi gal nahi
      }
    }
    fetchNews()
  }, [])

  return (
    <div>
      {/* Hero */}
      <HeroSlider />

      {/* About section */}
      <section className="py-24 bg-primary-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader tag="The HPMBA" title="We believe in a fun and healthy environment for both players and coaches." />
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
              <Link key={camp.name} to={camp.href} className="group bg-primary-900 border border-primary-600 hover:border-accent-500 rounded-xl p-8 card-hover text-center block">
                <div className="text-4xl mb-4">{camp.icon}</div>
                <h3 className="font-display font-bold text-white text-xl tracking-wide mb-3 group-hover:text-accent-400 transition-colors">{camp.name}</h3>
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
            <Link to="/divisions" className="hidden sm:flex items-center gap-1 text-accent-400 hover:text-accent-300 font-body font-semibold text-sm transition-colors">
              View All <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((div) => (
              <Link
                key={div.id}
                to={`/divisions#${div.id}`}
                className="bg-primary-800 border border-primary-600 hover:border-accent-500 rounded-xl p-6 card-hover group block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{div.icon}</div>
                  <span className="text-xs font-display font-semibold text-blue-200 bg-primary-700 px-2.5 py-1 rounded uppercase tracking-wide">
                    {div.ageRange}
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-xl tracking-wide mb-2 group-hover:text-accent-400 transition-colors">{div.name}</h3>
                <p className="text-blue-200 text-sm font-body leading-relaxed mb-4">{div.description}</p>
                <span className="inline-flex items-center gap-1 text-accent-400 group-hover:text-accent-300 text-sm font-body font-semibold transition-colors">
                  Learn More <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-gradient-to-br from-accent-700 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.5) 30px, rgba(255,255,255,0.5) 31px)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="h-0.5 w-10 bg-white/50" />
            <span className="font-display text-white/80 text-xs tracking-[0.25em] uppercase">Coaches & Umpires</span>
            <div className="h-0.5 w-10 bg-white/50" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-wide mb-4">Learn How You Can Get Involved</h2>
          <p className="text-white/80 font-body text-lg max-w-2xl mx-auto mb-8">
            High Prairie Minor Baseball is always looking for fresh faces interested in getting involved. There are a variety of positions available every year.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Coaching Applications', 'Umpire Clinics', 'Equipment'].map((item) => (
              <div key={item} className="bg-white/20 backdrop-blur-sm border border-white/30 text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full">{item}</div>
            ))}
          </div>
          <Link to="/league" className="inline-flex items-center gap-2 bg-white text-accent-600 hover:bg-blue-50 font-display font-bold text-sm px-8 py-4 uppercase tracking-wider transition-all hover:shadow-xl">
            Learn More <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* News — FB Live */}
      <section className="py-24 bg-primary-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <SectionHeader tag="Latest" title="Baseball News" />
              {liveNews && (
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 font-body text-xs">Live from Facebook</span>
                </div>
              )}
            </div>
            <Link to="/news" className="hidden sm:flex items-center gap-1 text-accent-400 hover:text-accent-300 font-body font-semibold text-sm transition-colors">
              All News <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.map((item, i) => (
              <NewsCard key={i} {...item} />
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
            Stay up to date with the latest news, announcements, and community updates on our Facebook page and group.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://www.facebook.com/${import.meta.env.VITE_FB_PAGE_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white font-display font-semibold text-sm px-7 py-3.5 uppercase tracking-wider transition-all hover:shadow-lg"
            >
              <Facebook size={16} /> Follow Our Page
            </a>
            <a
              href="https://www.facebook.com/groups/162547079983081/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-600 border border-primary-500 text-white font-display font-semibold text-sm px-7 py-3.5 uppercase tracking-wider transition-all"
            >
              <Facebook size={16} /> Join Facebook Group
            </a>
          </div>
        </div>
      </section>

      {/* Register CTA — dono buttons */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-accent-600 text-white font-display text-xs tracking-[0.2em] px-4 py-2 mb-6 uppercase">
            2026 Season
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-wide mb-4">Ready to Play Ball?</h2>
          <p className="text-blue-200 font-body text-lg mb-10 max-w-2xl mx-auto">
            Secure your spot in the 2026 season. Registration is now open for baseball and softball divisions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={BASEBALL_REG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-display font-bold text-base px-10 py-5 uppercase tracking-wider transition-all hover:shadow-2xl hover:shadow-accent-600/40"
            >
              ⚾ Register — Baseball
            </a>
            <a
              href={SOFTBALL_REG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-600 border-2 border-accent-500 text-white font-display font-bold text-base px-10 py-5 uppercase tracking-wider transition-all hover:shadow-2xl"
            >
              🥎 Register — Softball
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}