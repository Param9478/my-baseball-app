import { Link } from 'react-router-dom'
import { Facebook, Mail, MapPin } from 'lucide-react'

const BASEBALL_REG = 'https://page.spordle.com/high-prairie-district-minor-ball-association/register/1f11531e-1a82-6918-9bab-06d2358bfa0f'
const SOFTBALL_REG = 'https://www.rampregistrations.com/login?v3=d1c7bce4'

// Navbar naal match karda
const organization = [
  { label: 'About Us', href: '/about' },
  { label: 'League', href: '/league' },
  { label: 'Development', href: '/development' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'News', href: '/news' },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
]

const divisions = [
  { label: 'Rally Caps', href: '/divisions#rally-caps' },
  { label: 'Rookie', href: '/divisions#rookie' },
  { label: '11U Baseball', href: '/divisions#11u' },
  { label: '13U Baseball', href: '/divisions#13u' },
  { label: '15U Baseball', href: '/divisions#15u' },
  { label: '18U Baseball', href: '/divisions#18u' },
  { label: '15U Softball', href: '/divisions#softball-15u' },
  { label: '18U Softball', href: '/divisions#softball-18u' },
]

const league = [
  { label: 'Coaches', href: '/league#coaches' },
  { label: 'Umpires', href: '/league#umpires' },
  { label: 'Game Nights', href: '/league#game-nights' },
  { label: 'Pre Season', href: '/development#pre-season' },
  { label: 'Fall Camp', href: '/development#fall-camp' },
  { label: 'Winter Camp', href: '/development#winter-camp' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-900 border-t border-primary-700">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <img src="/logo.png" alt="HPMBA Logo" className="h-14 w-auto object-contain" />
            <div>
              <div className="font-display text-white font-bold text-base leading-tight tracking-wide">
                HIGH PRAIRIE & DISTRICT
              </div>
              <div className="font-display text-accent-400 text-xs tracking-widest font-medium uppercase">
                Minor Ball Association
              </div>
            </div>
          </div>
          <p className="text-blue-200 text-sm leading-relaxed mb-6 font-body max-w-xs">
            Baseball built for the community. A safe and active environment promoting exercise, teamwork, and sportsmanship for every child.
          </p>

          {/* Social */}
          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href={`https://www.facebook.com/${import.meta.env.VITE_FB_PAGE_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white font-body text-xs px-3 py-2 rounded-lg transition-colors"
            >
              <Facebook size={14} /> Follow Our Page
            </a>
            <a
              href="https://www.facebook.com/groups/162547079983081/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary-700 hover:bg-primary-600 border border-primary-500 text-white font-body text-xs px-3 py-2 rounded-lg transition-colors"
            >
              <Facebook size={14} /> Facebook Group
            </a>
          </div>

          {/* Register buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={BASEBALL_REG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-accent-600 hover:bg-accent-500 text-white font-display font-semibold text-xs px-4 py-2.5 uppercase tracking-wider transition-all"
            >
              ⚾ Register Baseball
            </a>
            <a
              href={SOFTBALL_REG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-primary-700 hover:bg-primary-600 border border-primary-500 hover:border-accent-400 text-white font-display font-semibold text-xs px-4 py-2.5 uppercase tracking-wider transition-all"
            >
              🥎 Register Softball
            </a>
          </div>
        </div>

        {/* Organization */}
        <div>
          <h4 className="font-display font-semibold text-white text-xs tracking-widest uppercase mb-4 pb-2 border-b border-primary-600">
            Organization
          </h4>
          <ul className="space-y-2">
            {organization.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="text-blue-200 hover:text-white text-sm font-body transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Divisions */}
        <div>
          <h4 className="font-display font-semibold text-white text-xs tracking-widest uppercase mb-4 pb-2 border-b border-primary-600">
            Divisions
          </h4>
          <ul className="space-y-2">
            {divisions.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="text-blue-200 hover:text-white text-sm font-body transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* League + Contact */}
        <div className="space-y-8">
          <div>
            <h4 className="font-display font-semibold text-white text-xs tracking-widest uppercase mb-4 pb-2 border-b border-primary-600">
              League
            </h4>
            <ul className="space-y-2">
              {league.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-blue-200 hover:text-white text-sm font-body transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-xs tracking-widest uppercase mb-4 pb-2 border-b border-primary-600">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-accent-400 mt-0.5 flex-shrink-0" />
                <span className="text-blue-200 text-sm font-body leading-relaxed">
                  PO Box 2411<br />
                  High Prairie, AB T0G 1E0
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-accent-400 flex-shrink-0" />
                <a
                  href="mailto:hpminorball@gmail.com"
                  className="text-blue-200 hover:text-white text-sm font-body transition-colors break-all"
                >
                  hpminorball@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-700 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-blue-300 font-body">
          <span>© {new Date().getFullYear()} High Prairie & District Minor Ball Association. All rights reserved.</span>
          <span>
            Built with ❤️ for the community by{' '}
            <a
              href="https://www.prairietechs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-400 hover:text-accent-300 transition-colors font-semibold"
            >
              Prairie Tech Services
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}