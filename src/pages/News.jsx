import { useState, useEffect } from 'react'
import SectionHeader from '../components/SectionHeader'
import NewsCard from '../components/NewsCard'
import { ExternalLink, RefreshCw, AlertCircle } from 'lucide-react'

// Fallback news — jedo FB API kaam na kare
const fallbackNews = [
  {
    title: '13U / 11U Try Outs – Registered Athletes Only!',
    date: 'February 2, 2026',
    excerpt: 'Try Outs Continue! REGISTERED athletes only. You can register up until try outs begin, late fee now applies.',
    href: '/news',
  },
  {
    title: 'Announcing our 18U AA-2 REDS team – 2026 Season!',
    date: 'February 2, 2026',
    excerpt: 'We are excited to announce the roster for our 2026 18U AA-2 REDS team. Congratulations to all selected players and thank you to everyone who tried out.',
    href: '/news',
  },
  {
    title: 'Announcing our 18U AA-1 REDS team – 2026 Season!',
    date: 'January 26, 2026',
    excerpt: 'We are thrilled to announce the roster for our 2026 18U AA-1 REDS team.',
    href: '/news',
  },
  {
    title: '2025 Awards Ceremony and AGM',
    date: 'November 4, 2025',
    excerpt: "We would like to extend an invitation to all players, coaches, and families to the High Prairie Minor Baseball Association's Awards Ceremony and AGM.",
    href: '/news',
  },
  {
    title: '2024 Award Ceremony and AGM',
    date: 'October 31, 2024',
    excerpt: "We're excited to invite all players, coaches, families, and supporters to the High Prairie Minor Baseball Association's Annual Award Ceremony and AGM.",
    href: '/news',
  },
  {
    title: 'Get Involved!',
    date: 'November 9, 2023',
    excerpt: 'We are in need of directors for the 2024 season. Executive Secretary and other positions available. Come join our volunteer team!',
    href: '/news',
  },
]

// Facebook date format karo readable
function formatFBDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// FB post nu NewsCard format ch convert karo
function fbPostToNewsItem(post) {
  const message = post.message || post.story || 'View post on Facebook'
  const title = message.length > 80 ? message.substring(0, 80) + '...' : message
  const excerpt = message.length > 80 ? message.substring(0, 200) + '...' : message

  return {
    title,
    date: formatFBDate(post.created_time),
    excerpt,
    href: `https://www.facebook.com/${import.meta.env.VITE_FB_PAGE_ID}/posts/${post.id.split('_')[1]}`,
    external: true,
    image: post.full_picture || null,
  }
}

export default function News() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [usingFallback, setUsingFallback] = useState(false)

  const fetchPosts = async () => {
    setLoading(true)
    setError(false)

    try {
      const PAGE_ID = import.meta.env.VITE_FB_PAGE_ID
      const TOKEN = import.meta.env.VITE_FB_ACCESS_TOKEN

      if (!PAGE_ID || !TOKEN) {
        throw new Error('Missing env variables')
      }

      const res = await fetch(
        `https://graph.facebook.com/v19.0/${PAGE_ID}/posts?fields=id,message,story,created_time,full_picture&limit=9&access_token=${TOKEN}`
      )

      if (!res.ok) throw new Error('API error')

      const data = await res.json()

      if (data.error) throw new Error(data.error.message)

      if (data.data && data.data.length > 0) {
        setPosts(data.data.map(fbPostToNewsItem))
        setUsingFallback(false)
      } else {
        // FB page te posts nahi hain abhi — fallback use karo
        setPosts(fallbackNews)
        setUsingFallback(true)
      }
    } catch (err) {
      console.error('FB API Error:', err)
      setPosts(fallbackNews)
      setUsingFallback(true)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

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
            Stay up to date with announcements, tryout info, event recaps, and more from the HPMBA.
          </p>
        </div>
      </section>

      {/* Status Banner — FB connected dikhao */}
      {!usingFallback && !loading && (
        <div className="bg-primary-800 border-b border-primary-600">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <p className="text-blue-200 font-body text-sm">Live updates from Facebook</p>
            </div>
            <a
              href={`https://www.facebook.com/${import.meta.env.VITE_FB_PAGE_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent-400 hover:text-accent-300 font-display font-semibold text-xs transition-colors"
            >
              View Page <ExternalLink size={11} />
            </a>
          </div>
        </div>
      )}

      {/* News Grid */}
      <section className="py-24 bg-primary-900">
        <div className="max-w-7xl mx-auto px-6">

          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <RefreshCw size={32} className="text-accent-400 animate-spin" />
              <p className="text-blue-300 font-body text-sm">Loading latest news...</p>
            </div>
          )}

          {/* Error notice */}
          {!loading && error && (
            <div className="flex items-center gap-3 bg-primary-800 border border-primary-600 rounded-xl px-5 py-4 mb-8 max-w-xl">
              <AlertCircle size={18} className="text-yellow-400 flex-shrink-0" />
              <p className="text-blue-200 font-body text-sm">
                Could not load live Facebook posts — showing latest saved news.
              </p>
              <button
                onClick={fetchPosts}
                className="ml-auto text-accent-400 hover:text-accent-300 font-display text-xs uppercase tracking-wide flex-shrink-0"
              >
                Retry
              </button>
            </div>
          )}

          {/* Posts Grid */}
          {!loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((item, i) => (
                <NewsCard key={i} {...item} />
              ))}
            </div>
          )}

          {/* Facebook CTA */}
          <div className="mt-16 bg-primary-800 border border-primary-600 rounded-2xl p-10 text-center">
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Get Real-Time Updates
            </h3>
            <p className="text-blue-200 font-body text-base mb-6 max-w-xl mx-auto">
              Follow our Facebook page to get the latest news, game schedules, and announcements delivered directly to your feed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://www.facebook.com/${import.meta.env.VITE_FB_PAGE_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white font-display font-semibold text-sm px-7 py-3.5 uppercase tracking-wider transition-all hover:shadow-lg"
              >
                Follow Our Page
              </a>
              <a
                href="https://www.facebook.com/groups/162547079983081/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-600 border border-primary-500 text-white font-display font-semibold text-sm px-7 py-3.5 uppercase tracking-wider transition-all"
              >
                Join Facebook Group
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}