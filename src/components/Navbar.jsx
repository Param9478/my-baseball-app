import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  {
    label: 'Divisions',
    to: '/divisions',
    children: [
      { label: 'Rally Caps', to: '/divisions#rally-caps' },
      { label: 'Rookie', to: '/divisions#rookie' },
      { label: '11U A Baseball', to: '/divisions#11u' },
      { label: '13U A Baseball', to: '/divisions#13u' },
      { label: '15U A Baseball', to: '/divisions#15u' },
      { label: '18U A Baseball', to: '/divisions#18u' },
      { label: 'Softball 15U', to: '/divisions#softball15u' },
      { label: 'Softball 18U', to: '/divisions#softball18u' },
    ],
  },
  { label: 'About Us', to: '/about' },
  { label: 'Registeration', to: '/register' },
  { label: 'Schedule', to: '/schedule' },

  {
    label: 'League',
    to: '/league',
    children: [
      { label: 'Coaches', to: '/league#coaches' },
      { label: 'Umpires', to: '/league#umpires' },
      // { label: 'Game Nights', to: '/league#game-nights' },
    ],
  },
  {
    label: 'Resources',
    to: '/resources',
    children: [
      { label: 'Baseball Canada', to: 'https://www.baseball.ca/' },
      { label: 'Baseball Alberta', to: 'https://www.baseballalberta.com/en/index.html' },
      { label: 'Baseball Alberta Handbook', to: 'https://cloud.rampinteractive.com/baseballabertav3/files/2021%20BA%20BOOk%20%28P5%29.pdf' },
      { label: 'Baseball Alberta Forms', to: 'https://www.baseballalberta.com/en/index.html' },
      {
        label: 'Financial Assistance',
        to: '#',
        children: [
          { label: 'KidSport', to: 'https://kidsportcanada.ca/alberta/' },
          { label: 'Jumpstart', to: 'https://jumpstart.canadiantire.ca/' }
        ]
      },
    ],
  },
  // {
  //   label: 'Development',
  //   to: '/development',
  //   children: [
  //     { label: 'Pre Season', to: '/development#pre-season' },
  //     { label: 'Fall Camp', to: '/development#fall-camp' },
  //     { label: 'Winter Camp', to: '/development#winter-camp' },
  //   ],
  // },
  // { label: 'News', to: '/news' },
  // { label: 'Sponsors', to: '/sponsors' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  // FIX: Set use karo instead of single string
  // Isse parent + child dono ek sath open reh sakte
  const [openDropdowns, setOpenDropdowns] = useState(new Set())
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setOpenDropdowns(new Set())
  }, [location])

  const isExternal = (url) => url.startsWith('http')

  // Toggle karo specific label - baaki sab chalta rahe
  const toggleDropdown = (label) => {
    setOpenDropdowns(prev => {
      const next = new Set(prev)
      if (next.has(label)) {
        next.delete(label)
      } else {
        next.add(label)
      }
      return next
    })
  }

  const isOpen = (label) => openDropdowns.has(label)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-accent-600 text-white text-xs py-1.5 px-4 hidden md:flex justify-between items-center">
        <div className="flex items-center gap-4 max-w-7xl mx-auto w-full">
          <a href="mailto:hpminorball@gmail.com" className="flex items-center gap-1 hover:text-accent-100 transition-colors">
            <Mail size={12} />
            <span>hpminorball@gmail.com</span>
          </a>
          <a href="tel:+17805367803" className="flex items-center gap-1 hover:text-accent-100 transition-colors">
            <Phone size={12} />
            <span>+1 780-536-7803</span>
          </a>
        </div>
      </div>

      <nav
        className={`transition-all duration-300 ${scrolled
          ? 'bg-primary-900/95 backdrop-blur-md shadow-2xl py-2'
          : 'bg-primary-900/80 backdrop-blur-sm py-3'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto object-contain" />
            <div className="hidden sm:block text-white">
              <div className="font-display font-bold text-sm tracking-wide">HIGH PRAIRIE & DISTRICT</div>
              <div className="font-display text-accent-400 text-xs tracking-widest font-medium uppercase">Minor Ball Association</div>
            </div>
          </Link>

          {/* Desktop nav links - unchanged */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label} className="relative group">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-3 py-2 font-body text-sm font-semibold transition-colors rounded ${isActive ? 'text-accent-400' : 'text-blue-100 hover:text-white'}`
                  }
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                </NavLink>

                {link.children && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-primary-800 border border-primary-600 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 overflow-visible">
                    {link.children.map((child) => (
                      <div key={child.label} className="relative group/sub">
                        {isExternal(child.to) ? (
                          <a
                            href={child.to}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-sm text-blue-100 hover:text-white hover:bg-primary-700 transition-colors rounded-md"
                          >
                            {child.label}
                          </a>
                        ) : (
                          <div className="flex items-center justify-between px-4 py-2 text-sm text-blue-100 hover:text-white hover:bg-primary-700 cursor-pointer rounded-md">
                            <Link to={child.to} className="flex-1">{child.label}</Link>
                            {child.children && <ChevronDown size={12} className="-rotate-90" />}
                          </div>
                        )}

                        {child.children && (
                          <div className="absolute left-full top-0 ml-1 w-48 bg-primary-800 border border-primary-600 rounded-lg shadow-2xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                            {child.children.map((subChild) => (
                              <a
                                key={subChild.label}
                                href={subChild.to}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 text-sm text-blue-100 hover:text-white hover:bg-primary-700 first:rounded-t-lg last:rounded-b-lg"
                              >
                                {subChild.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <a href="https://page.spordle.com/high-prairie-district-minor-ball-association/register/1f11531e-1a82-6918-9bab-06d2358bfa0f?fbclid=IwY2xjawROWDFleHRuA2FlbQIxMABicmlkETFCdWRyVUV5aGF3NzRzZUpGc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHk82WY9JTgh9NIJ7o_bK8Sc6OWaZlhb6IkU3rPoam_UZs-w8CLrne1VlrdK2_aem_ehi1KtcEGbcddXnZoaPYOQ" target="_blank" rel="noopener noreferrer" className="hidden lg:block bg-accent-600 hover:bg-accent-500 text-white font-display font-semibold text-sm px-5 py-2.5 rounded uppercase transition-all">
            Register
          </a>

          <button className="lg:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu - FIXED */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-primary-900 border-t border-primary-700 px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <div className="flex items-center justify-between">
                  {link.children ? (
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className="flex-1 text-left py-2 text-blue-100 font-semibold text-sm focus:outline-none"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className="flex-1 py-2 text-blue-100 font-semibold text-sm"
                    >
                      {link.label}
                    </Link>
                  )}

                  {link.children && (
                    <button onClick={() => toggleDropdown(link.label)} className="p-2 text-blue-200">
                      <ChevronDown size={16} className={isOpen(link.label) ? 'rotate-180 transition-transform' : 'transition-transform'} />
                    </button>
                  )}
                </div>

                {/* Level 1 children */}
                {link.children && isOpen(link.label) && (
                  <div className="pl-4 border-l border-primary-600 space-y-1 mt-1">
                    {link.children.map((child) => (
                      <div key={child.label}>
                        {isExternal(child.to) ? (
                          <a
                            href={child.to}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block py-1.5 text-sm text-blue-200 hover:text-white"
                          >
                            {child.label}
                          </a>
                        ) : child.children ? (
                          // FIX: Nested dropdown — toggleDropdown(child.label) independent kaam karda
                          <>
                            <button
                              onClick={() => toggleDropdown(child.label)}
                              className="flex items-center justify-between w-full py-1.5 text-sm text-blue-200 hover:text-white"
                            >
                              {child.label}
                              <ChevronDown
                                size={14}
                                className={isOpen(child.label) ? 'rotate-180 transition-transform' : 'transition-transform'}
                              />
                            </button>
                            {/* Level 2 children — Resources > Financial Assistance > KidSport etc */}
                            {isOpen(child.label) && (
                              <div className="pl-4 border-l border-primary-500 space-y-1 mt-1">
                                {child.children.map(sub => (
                                  <a
                                    key={sub.label}
                                    href={sub.to}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block py-1.5 text-sm text-blue-300 hover:text-white"
                                  >
                                    {sub.label}
                                  </a>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <Link
                            to={child.to}
                            onClick={() => setMenuOpen(false)}
                            className="block py-1.5 text-sm text-blue-200 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}