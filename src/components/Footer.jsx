import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const divisions = [
  { label: "Lil' Reds", href: '/divisions#lil-reds' },
  { label: 'Rally Caps', href: '/divisions#rally-caps' },
  { label: 'Rookie', href: '/divisions#rookie' },
  { label: '11U', href: '/divisions#11u' },
  { label: '13U', href: '/divisions#13u' },
  { label: '15U / 18U', href: '/divisions#15u' },
  { label: 'GP AA Reds', href: '/divisions#gp-reds' },
  { label: 'Female Baseball', href: '/divisions#female' },
  { label: 'Challenger Baseball', href: '/divisions#challenger' },
]

const organization = [
  { label: 'Register', href: 'http://GPball.rampregistrations.com', external: true },
  { label: 'About Us', href: '/about' },
  { label: 'Coaching', href: '/league#coaches' },
  { label: 'Umpires', href: '/league#umpires' },
  { label: 'Development', href: '/development' },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'News', href: '/news' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-900 border-t border-primary-700">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-14 h-14 bg-accent-600 rounded-full flex items-center justify-center font-display font-bold text-white text-lg">
              HP
            </div>
            <div>
              <div className="font-display text-white font-bold text-base leading-tight tracking-wide">
                High Prairie
              </div>
              <div className="font-display text-accent-400 text-xs tracking-widest font-medium">
                MINOR BASEBALL
              </div>
            </div>
          </div>
          <p className="text-blue-200 text-sm leading-relaxed mb-5 font-body">
            Baseball built for the community. A safe and active environment promoting exercise, teamwork, and sportsmanship.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/groups/162547079983081/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-primary-700 hover:bg-accent-600 rounded-full flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={16} className="text-white" />
            </a>
            <a
              href="https://www.instagram.com/grandeprairieminorbaseball/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-primary-700 hover:bg-accent-600 rounded-full flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={16} className="text-white" />
            </a>
          </div>
        </div>

        {/* Organization */}
        <div>
          <h4 className="font-display font-semibold text-white text-sm tracking-widest uppercase mb-4 pb-2 border-b border-primary-600">
            Organization
          </h4>
          <ul className="space-y-2">
            {organization.map((item) => (
              <li key={item.label}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-white text-sm font-body transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className="text-blue-200 hover:text-white text-sm font-body transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Divisions */}
        <div>
          <h4 className="font-display font-semibold text-white text-sm tracking-widest uppercase mb-4 pb-2 border-b border-primary-600">
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

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-white text-sm tracking-widest uppercase mb-4 pb-2 border-b border-primary-600">
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-accent-400 mt-0.5 flex-shrink-0" />
              <span className="text-blue-200 text-sm font-body leading-relaxed">
                PO Box 1388<br />
                High Prairie, AB T8V 4Z2
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-accent-400 flex-shrink-0" />
              <a
                href="tel:7802961550"
                className="text-blue-200 hover:text-white text-sm font-body transition-colors"
              >
                780.296.1550
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-accent-400 flex-shrink-0" />
              <a
                href="mailto:execdirector@gpmba.ca"
                className="text-blue-200 hover:text-white text-sm font-body transition-colors break-all"
              >
                execdirector@gpmba.ca
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-700 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-blue-300 font-body">
          <span>© {new Date().getFullYear()} High Prairie Minor Baseball Association. All rights reserved.</span>
          <span>Designed with ❤️ for the community</span>
        </div>
      </div>
    </footer>
  )
}
