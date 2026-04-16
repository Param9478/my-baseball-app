import SectionHeader from '../components/SectionHeader'
import NewsCard from '../components/NewsCard'

const allNews = [
  {
    title: '13U / 11U Try Outs – Registered Athletes Only!',
    date: 'February 2, 2026',
    excerpt:
      'Try Outs Continue! REGISTERED athletes only. You can register up until try outs begin, late fee now applies.',
    href: '/news',
  },
  {
    title: 'Announcing our 18U AA-2 REDS team – 2026 Season!',
    date: 'February 2, 2026',
    excerpt:
      'We are excited to announce the roster for our 2026 18U AA-2 REDS team. Congratulations to all selected players and thank you to everyone who tried out.',
    href: '/news',
  },
  {
    title: 'Announcing our 18U AA-1 REDS team – 2026 Season!',
    date: 'January 26, 2026',
    excerpt:
      'We are thrilled to announce the roster for our 2026 18U AA-1 REDS team.',
    href: '/news',
  },
  {
    title: '2025 Awards Ceremony and AGM',
    date: 'November 4, 2025',
    excerpt:
      'We would like to extend an invitation to all players, coaches, and families to the High Prairie Minor Baseball Association\'s Awards Ceremony and AGM.',
    href: '/news',
  },
  {
    title: '2024 Award Ceremony and AGM',
    date: 'October 31, 2024',
    excerpt:
      "We're excited to invite all players, coaches, families, and supporters to the High Prairie Minor Baseball Association's Annual Award Ceremony and AGM.",
    href: '/news',
  },
  {
    title: 'Get Involved!',
    date: 'November 9, 2023',
    excerpt:
      'We are in need of directors for the 2024 season. Executive Secretary and other positions available. Come join our volunteer team!',
    href: '/news',
  },
]

export default function News() {
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
            Latest Updates
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white tracking-wide mb-4">
            Baseball News
          </h1>
          <p className="text-blue-200 font-body text-lg max-w-2xl">
            Stay up to date with announcements, tryout info, event recaps, and more from the GPMBA.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 bg-primary-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allNews.map((item) => (
              <NewsCard key={item.title} {...item} />
            ))}
          </div>

          {/* Facebook CTA */}
          <div className="mt-16 bg-primary-800 border border-primary-600 rounded-2xl p-10 text-center">
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Get Real-Time Updates
            </h3>
            <p className="text-blue-200 font-body text-base mb-6 max-w-xl mx-auto">
              Join our Facebook community group to get the latest news, game schedules, and announcements delivered directly to your feed.
            </p>
            <a
              href="https://www.facebook.com/groups/162547079983081/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white font-display font-semibold text-sm px-7 py-3.5 uppercase tracking-wider transition-all hover:shadow-lg"
            >
              Join Facebook Group
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
