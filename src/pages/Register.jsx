import { ChevronRight, ExternalLink, CheckCircle } from 'lucide-react'

const BASEBALL_REG = 'https://page.spordle.com/high-prairie-district-minor-ball-association/register/1f11531e-1a82-6918-9bab-06d2358bfa0f'
const SOFTBALL_REG = 'https://www.rampregistrations.com/login?v3=d1c7bce4'

const steps = [
  {
    number: '01',
    title: 'Choose Your Division',
    description: 'Find the right age group for your child. If you are unsure which division fits, check our Divisions page or contact us directly.',
  },
  {
    number: '02',
    title: 'Complete Registration',
    description: "Fill out the online registration form through our portal. You will need your child's basic info and emergency contact details.",
  },
  {
    number: '03',
    title: 'Pay Registration Fee',
    description: 'Securely pay your registration fee online. Financial assistance is available through KidSport and Jumpstart for families in need.',
  },
  {
    number: '04',
    title: 'Show Up & Play Ball!',
    description: 'Once registered, you will receive details on tryouts, practice schedules, and your first game. Welcome to the HPMBA family!',
  },
]

const faqs = [
  {
    q: 'When does registration open?',
    a: 'Registration typically opens in January for the upcoming spring season. Late registration may be available with an additional fee.',
  },
  {
    q: 'What equipment does my child need?',
    a: 'Players need a glove, helmet, and cleats. Bats and batting helmets are available to borrow. Full equipment lists are provided after registration.',
  },
  {
    q: 'Is financial assistance available?',
    a: 'Yes! KidSport and Canadian Tire Jumpstart both offer funding for families in need. Visit our Resources page for more information.',
  },
  {
    q: 'What if my child has never played before?',
    a: 'No experience needed! Our younger divisions (Rally Caps, Rookie) are specifically designed for beginners. All skill levels are welcome.',
  },
  {
    q: 'Are there tryouts?',
    a: 'Younger divisions (Rally Caps, Rookie) do not have tryouts. The 11U and above divisions may hold tryouts — details will be communicated after registration.',
  },
  {
    q: 'Can I register more than one child?',
    a: 'Absolutely. You can register multiple children through the same account. Each child needs their own registration.',
  },
]

export default function Register() {
  return (
    <div className="pt-28">
      {/* Hero */}
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
          <p className="text-blue-200 font-body text-lg max-w-2xl mb-8">
            Join the High Prairie & District Minor Ball Association for the 2026 season. Registration is open for all divisions — from Rally Caps to 18U.
          </p>
          {/* Hero — dono buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={BASEBALL_REG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-display font-bold text-sm px-8 py-4 uppercase tracking-wider transition-all hover:shadow-2xl hover:shadow-accent-600/40"
            >
              ⚾ Baseball Registration <ExternalLink size={15} />
            </a>
            <a
              href={SOFTBALL_REG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-white/40 hover:border-white text-white font-display font-bold text-sm px-8 py-4 uppercase tracking-wider transition-all backdrop-blur-sm"
            >
              🥎 Softball Registration <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-primary-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="h-0.5 w-10 bg-accent-500" />
              <span className="font-display text-accent-400 text-xs tracking-[0.25em] uppercase font-medium">Simple Process</span>
              <div className="h-0.5 w-10 bg-accent-500" />
            </div>
            <h2 className="font-display font-bold text-4xl text-white tracking-wide">How to Register</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="bg-primary-800 border border-primary-600 rounded-xl p-6 relative group hover:border-accent-500 transition-all card-hover">
                <div className="font-display font-bold text-5xl text-accent-600/50 mb-4 leading-none">{step.number}</div>
                <h3 className="font-display font-bold text-white text-lg tracking-wide mb-3 group-hover:text-accent-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-blue-200 text-sm font-body leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Steps section — dono buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href={BASEBALL_REG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-display font-semibold text-sm px-8 py-4 uppercase tracking-wider transition-all hover:shadow-lg"
            >
              ⚾ Baseball Registration <ChevronRight size={16} />
            </a>
            <a
              href={SOFTBALL_REG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-600 border border-primary-500 hover:border-accent-400 text-white font-display font-semibold text-sm px-8 py-4 uppercase tracking-wider transition-all hover:shadow-lg"
            >
              🥎 Softball Registration <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Financial Assistance */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-accent-600 text-white font-display text-xs tracking-[0.2em] px-4 py-2 mb-4 uppercase">
                Need Help?
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide mb-4">
                Financial Assistance Available
              </h2>
              <p className="text-blue-200 font-body text-base leading-relaxed mb-4">
                We believe every child deserves the chance to play. If registration fees are a barrier, financial assistance is available through the following programs:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'No application deadline — apply anytime',
                  'Covers full or partial registration fees',
                  'Easy online application process',
                  'Contact us if you need help applying',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-blue-100 font-body text-sm">
                    <CheckCircle size={16} className="text-accent-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <a
                href="https://kidsportcanada.ca/alberta/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-4 p-6 rounded-xl bg-primary-900 hover:bg-primary-700 border border-primary-600 hover:border-accent-500 transition-all group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-display font-bold text-white text-lg group-hover:text-accent-400 transition-colors">KidSport Alberta</span>
                    <ExternalLink size={14} className="text-blue-400 group-hover:text-accent-400 transition-colors" />
                  </div>
                  <p className="text-blue-300 text-sm font-body leading-relaxed">
                    Provides funding to children aged 18 and under to help cover the cost of registration fees for sport.
                  </p>
                </div>
                <ChevronRight size={18} className="text-blue-400 group-hover:text-accent-400 transition-colors flex-shrink-0 mt-1" />
              </a>

              <a
                href="https://jumpstart.canadiantire.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-4 p-6 rounded-xl bg-primary-900 hover:bg-primary-700 border border-primary-600 hover:border-accent-500 transition-all group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-display font-bold text-white text-lg group-hover:text-accent-400 transition-colors">Canadian Tire Jumpstart</span>
                    <ExternalLink size={14} className="text-blue-400 group-hover:text-accent-400 transition-colors" />
                  </div>
                  <p className="text-blue-300 text-sm font-body leading-relaxed">
                    Helps kids in financial need participate in organized sport — covering registration, equipment, and more.
                  </p>
                </div>
                <ChevronRight size={18} className="text-blue-400 group-hover:text-accent-400 transition-colors flex-shrink-0 mt-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-primary-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="h-0.5 w-10 bg-accent-500" />
              <span className="font-display text-accent-400 text-xs tracking-[0.25em] uppercase font-medium">Common Questions</span>
              <div className="h-0.5 w-10 bg-accent-500" />
            </div>
            <h2 className="font-display font-bold text-4xl text-white tracking-wide">FAQs</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-primary-800 border border-primary-600 rounded-xl p-6 hover:border-accent-500 transition-all">
                <h3 className="font-display font-semibold text-white text-base mb-2">{faq.q}</h3>
                <p className="text-blue-200 font-body text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary-800 border-t border-primary-700">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-3">Still Have Questions?</h2>
          <p className="text-blue-200 font-body text-base mb-6">
            Our team is happy to help. Reach out and we will get back to you as soon as possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={BASEBALL_REG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-display font-semibold text-sm px-8 py-4 uppercase tracking-wider transition-all hover:shadow-lg"
            >
              ⚾ Baseball Registration <ChevronRight size={16} />
            </a>
            <a
              href={SOFTBALL_REG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-600 border border-primary-500 hover:border-accent-400 text-white font-display font-semibold text-sm px-8 py-4 uppercase tracking-wider transition-all"
            >
              🥎 Softball Registration <ChevronRight size={16} />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-600 border border-primary-500 text-white font-display font-semibold text-sm px-8 py-4 uppercase tracking-wider transition-all"
            >
              Contact Us <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}