import SectionHeader from '../components/SectionHeader'
import { ChevronRight, ExternalLink } from 'lucide-react'

export default function Register() {
  return (
    <div className="pt-28">
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 bg-accent-600/10"
          style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-block bg-accent-600 text-white font-display text-xs tracking-[0.2em] px-4 py-2 mb-4 uppercase">
            2026 Season
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white tracking-wide mb-4">
            Register Now
          </h1>
          <p className="text-blue-200 font-body text-lg max-w-2xl">
            Secure your spot for the 2026 GPMBA season. Registration is now open for all divisions.
          </p>
        </div>
      </section>

      <section className="py-24 bg-primary-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-primary-800 border border-primary-600 rounded-2xl p-12">
            <div className="text-6xl mb-6">⚾</div>
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Ready to Play Ball?
            </h2>
            <p className="text-blue-200 font-body text-base leading-relaxed mb-8">
              Registration for the 2026 season is handled through our online portal. Click the button below to register your player for any division.
            </p>
            <a
              href="http://GPball.rampregistrations.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-display font-bold text-base px-10 py-5 uppercase tracking-wider transition-all hover:shadow-2xl hover:shadow-accent-600/40"
            >
              Go to Registration Portal <ExternalLink size={18} />
            </a>
            <p className="text-blue-300 font-body text-xs mt-6">
              You will be redirected to our external registration partner, Ramp Registrations.
            </p>
          </div>

          <div className="mt-10 bg-primary-800 border border-primary-600 rounded-xl p-6 text-left">
            <h3 className="font-display font-semibold text-white text-sm tracking-widest uppercase mb-4">Need Financial Assistance?</h3>
            <p className="text-blue-200 font-body text-sm leading-relaxed mb-4">
              We believe every child deserves to play. If cost is a barrier, please explore the following programs:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="https://kidsportcanada.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary-900 border border-primary-600 hover:border-accent-500 text-blue-200 hover:text-white font-body text-sm px-4 py-3 rounded-lg transition-all group"
              >
                <ChevronRight size={14} className="text-accent-400" />
                KidSport Canada
              </a>
              <a
                href="https://jumpstart.canadiantire.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary-900 border border-primary-600 hover:border-accent-500 text-blue-200 hover:text-white font-body text-sm px-4 py-3 rounded-lg transition-all group"
              >
                <ChevronRight size={14} className="text-accent-400" />
                Canadian Tire JumpStart
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
