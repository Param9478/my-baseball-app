import { Users } from 'lucide-react'

export default function DivisionCard({ name, ageRange, description, color = 'accent' }) {
  const colorMap = {
    accent: 'border-accent-500 bg-accent-600/10',
    blue: 'border-blue-500 bg-blue-600/10',
    indigo: 'border-indigo-500 bg-indigo-600/10',
  }

  return (
    <div className={`rounded-xl border ${colorMap[color] || colorMap.accent} p-5 card-hover group cursor-pointer`}>
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center">
          <Users size={18} className="text-accent-400" />
        </div>
        {ageRange && (
          <span className="text-xs font-display font-semibold text-blue-200 bg-primary-700 px-2 py-1 rounded uppercase tracking-wide">
            {ageRange}
          </span>
        )}
      </div>
      <h3 className="font-display font-bold text-white text-lg tracking-wide mb-1 group-hover:text-accent-400 transition-colors">
        {name}
      </h3>
      {description && (
        <p className="text-blue-200 text-sm font-body leading-relaxed">{description}</p>
      )}
    </div>
  )
}
