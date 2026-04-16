import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
    {
        tag: 'High Prairie Minor Baseball',
        title: '2026 REGULAR SEASON',
        subtitle: 'Join us for the 2026 Baseball season filled with thrilling games, new friendships, and unforgettable memories.',
        cta: 'Register Now!',
        ctaHref: 'http://GPball.rampregistrations.com',
        bg: 'from-primary-900 via-primary-800 to-primary-700',
        accent: 'bg-blue-600',
    },
    {
        tag: 'Winter Camp',
        title: 'DEVELOP YOUR SKILLS THIS OFF-SEASON',
        subtitle: 'The GPMBA offers off-season skill development camps to help your children grow both on and off the field!',
        cta: 'View Development',
        ctaHref: '/development',
        bg: 'from-primary-900 via-[#1a2e6e] to-primary-800',
        accent: 'bg-accent-600',
    },
    {
        tag: 'Our Community',
        title: 'BASEBALL BUILT FOR THE COMMUNITY',
        subtitle: 'A fun and healthy environment for players and coaches. Equal opportunity for every child that steps onto the field.',
        cta: 'Learn More',
        ctaHref: '/about',
        bg: 'from-[#0d1a40] via-primary-900 to-[#1e3a8a]',
        accent: 'bg-accent-600',
    },
]

export default function HeroSlider() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
    const next = () => setCurrent((c) => (c + 1) % slides.length)

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background */}
            {slides.map((slide, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 bg-gradient-to-br ${slide.bg} transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            ))}

            {/* Diamond pattern overlay */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,0.3) 20px,
            rgba(255,255,255,0.3) 21px
          )`,
                }}
            />

            {/* Diagonal accent stripe */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-600/10 clip-slant"
                style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        className={`transition-all duration-700 ${i === current
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8 absolute'
                            }`}
                    >
                        {i === current && (
                            <div className="max-w-3xl">
                                <div className={`inline-block ${slide.accent} text-white font-display text-xs tracking-[0.2em] px-4 py-2 mb-6 uppercase`}>
                                    {slide.tag}
                                </div>
                                <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-6 text-shadow tracking-wide">
                                    {slide.title}
                                </h1>
                                <p className="font-body text-blue-100 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
                                    {slide.subtitle}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href={slide.ctaHref}
                                        target={slide.ctaHref.startsWith('http') ? '_blank' : '_self'}
                                        rel={slide.ctaHref.startsWith('http') ? 'noopener noreferrer' : ''}
                                        className="bg-accent-600 hover:bg-accent-500 text-white font-display font-semibold text-base px-8 py-4 uppercase tracking-wider transition-all duration-200 hover:shadow-2xl hover:shadow-accent-600/40 hover:-translate-y-0.5"
                                    >
                                        {slide.cta}
                                    </a>
                                    <a
                                        href="/about"
                                        className="border-2 border-white/50 hover:border-white text-white font-display font-semibold text-base px-8 py-4 uppercase tracking-wider transition-all duration-200 hover:bg-white/10"
                                    >
                                        About Us
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                {/* Stats bar */}
                <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
                    {[
                        { num: '9+', label: 'Divisions' },
                        { num: '500+', label: 'Players' },
                        { num: '30+', label: 'Years' },
                        { num: '100%', label: 'Community' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="font-display font-bold text-3xl text-accent-400">{stat.num}</div>
                            <div className="font-body text-xs text-blue-300 uppercase tracking-widest mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Slider controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-1 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-accent-400' : 'w-3 bg-white/30'
                            }`}
                    />
                ))}
            </div>

            <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white flex items-center justify-center rounded-full transition-all"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white flex items-center justify-center rounded-full transition-all"
            >
                <ChevronRight size={20} />
            </button>

            {/* Bottom diagonal cut */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-primary-900" style={{ clipPath: 'polygon(0 60%, 100% 0, 100% 100%, 0 100%)' }} />
        </section>
    )
}