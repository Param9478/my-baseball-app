export default function SectionHeader({ tag, title, center = false }) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`}>
      {tag && (
        <div className={`flex items-center gap-3 mb-2 ${center ? 'justify-center' : ''}`}>
          <div className="h-0.5 w-8 bg-accent-600" />
          <span className="font-display text-accent-400 text-xs tracking-[0.25em] uppercase font-medium">
            {tag}
          </span>
          {center && <div className="h-0.5 w-8 bg-accent-600" />}
        </div>
      )}
      <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide leading-tight">
        {title}
      </h2>
    </div>
  )
}
