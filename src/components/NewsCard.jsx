import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'

export default function NewsCard({ title, date, excerpt, href = '/news', image }) {
  return (
    <div className="bg-primary-800 border border-primary-600 rounded-xl overflow-hidden card-hover group">
      {image && (
        <div className="h-44 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-2 text-blue-300 text-xs font-body mb-3">
          <Calendar size={12} />
          <span>{date}</span>
        </div>
        <h3 className="font-display font-semibold text-white text-base leading-snug mb-2 group-hover:text-accent-400 transition-colors">
          {title}
        </h3>
        {excerpt && (
          <p className="text-blue-200 text-sm font-body leading-relaxed mb-4 line-clamp-2">{excerpt}</p>
        )}
        <a
          href={href}
          className="inline-flex items-center gap-1 text-accent-400 hover:text-accent-300 text-sm font-body font-semibold transition-colors"
        >
          Read More <ArrowRight size={14} />
        </a>
      </div>
    </div>
  )
}
