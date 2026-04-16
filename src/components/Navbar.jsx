import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  {
    label: 'Divisions',
    to: '/divisions',
    // children: [
    //   { label: "Lil' Reds", to: '/divisions#lil-reds' },
    //   { label: 'Rally Caps', to: '/divisions#rally-caps' },
    //   { label: 'Rookie', to: '/divisions#rookie' },
    //   { label: '11U', to: '/divisions#11u' },
    //   { label: '13U', to: '/divisions#13u' },
    //   { label: '15U / 18U', to: '/divisions#15u' },
    //   { label: 'GP AA Reds', to: '/divisions#gp-reds' },
    //   { label: 'Female Baseball', to: '/divisions#female' },
    //   { label: 'Challenger Baseball', to: '/divisions#challenger' },
    // ],
  },
  {
    label: 'League',
    to: '/league',
    // children: [
    //   { label: 'Coaches', to: '/league#coaches' },
    //   { label: 'Umpires', to: '/league#umpires' },
    //   { label: 'Game Nights', to: '/league#game-nights' },
    // ],
  },
  {
    label: 'Development',
    to: '/development',
    children: [
      { label: 'Pre Season', to: '/development#pre-season' },
      { label: 'Fall Camp', to: '/development#fall-camp' },
      { label: 'Winter Camp', to: '/development#winter-camp' },
    ],
  },
  { label: 'News', to: '/news' },
//   { label: 'Sponsors', to: '/sponsors' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }, [location])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-accent-600 text-white text-xs py-1.5 px-4 hidden md:flex justify-between items-center">
        <div className="flex items-center gap-4 max-w-7xl mx-auto w-full">
          <a href="mailto:execdirector@gpmba.ca" className="flex items-center gap-1 hover:text-accent-100 transition-colors">
            <Mail size={12} />
            <span>hpbaseball@gmail.com</span>
          </a>
          <a href="tel:7802961550" className="flex items-center gap-1 hover:text-accent-100 transition-colors">
            <Phone size={12} />
            <span>780 296 1550</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-primary-900/95 backdrop-blur-md shadow-2xl py-2'
            : 'bg-primary-900/80 backdrop-blur-sm py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center font-display font-bold text-white text-sm group-hover:bg-accent-500 transition-colors">
              HP
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-white font-bold text-base leading-tight tracking-wide">
                High Prairie
              </div>
              <div className="font-display text-accent-400 text-xs tracking-widest font-medium">
                MINOR BASEBALL
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label} className="relative group">
                {link.children ? (
                  <>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `flex items-center gap-1 px-3 py-2 font-body text-sm font-semibold tracking-wide transition-colors rounded ${
                          isActive
                            ? 'text-accent-400'
                            : 'text-blue-100 hover:text-white'
                        }`
                      }
                    >
                      {link.label}
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                    </NavLink>
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 mt-1 w-48 bg-primary-800 border border-primary-600 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          className="block px-4 py-2 text-sm text-blue-100 hover:text-white hover:bg-primary-700 first:rounded-t-lg last:rounded-b-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `px-3 py-2 font-body text-sm font-semibold tracking-wide transition-colors rounded ${
                        isActive
                          ? 'text-accent-400'
                          : 'text-blue-100 hover:text-white'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* Register CTA */}
          <a
            href="http://GPball.rampregistrations.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block bg-accent-600 hover:bg-accent-500 text-white font-display font-semibold text-sm px-5 py-2.5 rounded tracking-wider transition-all duration-200 hover:shadow-lg hover:shadow-accent-600/30 uppercase"
          >
            Register
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-primary-900 border-t border-primary-700 px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <div className="flex items-center justify-between">
                  <Link
                    to={link.to}
                    className="flex-1 py-2 text-blue-100 font-body font-semibold text-sm tracking-wide hover:text-white"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.label ? null : link.label
                        )
                      }
                      className="p-2 text-blue-200"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          openDropdown === link.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>
                {link.children && openDropdown === link.label && (
                  <div className="pl-4 border-l border-primary-600 space-y-1 mt-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        className="block py-1.5 text-sm text-blue-200 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3">
              <a
                href="http://GPball.rampregistrations.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-accent-600 hover:bg-accent-500 text-white font-display font-semibold text-sm px-5 py-3 rounded tracking-wider uppercase"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
