const BADGE_STYLES = {
  Popular: 'bg-sky-50 text-sky-600',
  Versatile: 'bg-emerald-50 text-emerald-600',
  Fast: 'bg-orange-50 text-orange-600',
  Standard: 'bg-emerald-50 text-emerald-600',
  'Top SQL': 'bg-blue-50 text-blue-600',
  Cache: 'bg-rose-50 text-rose-600',
  Ubiquitous: 'bg-amber-50 text-amber-600',
  Essential: 'bg-sky-50 text-sky-600',
  Robust: 'bg-orange-50 text-orange-600',
  Modern: 'bg-teal-50 text-teal-600',
  Containers: 'bg-sky-50 text-sky-600',
}

export default function TechCard({ tech, isAdded, onAdd }) {
  const badgeClass = BADGE_STYLES[tech.badge] || 'bg-chip text-body'

  return (
    <article className="flex flex-col rounded-2xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(21,18,31,0.04)] transition-shadow hover:shadow-[0_6px_20px_rgba(21,18,31,0.06)]">
      <div className="flex items-start justify-between gap-3">
        <img
          src={tech.icon}
          alt=""
          className="h-7 w-7 object-contain"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        {tech.badge && (
          <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${badgeClass}`}>
            {tech.badge}
          </span>
        )}
      </div>

      <h3 className="mt-4 font-display text-base font-semibold text-ink">{tech.name}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-body">{tech.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="rounded-md bg-chip px-2.5 py-1 text-xs text-body">{tech.category}</span>
        <span className="text-xs text-body">{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 text-sm font-semibold text-ink">
          <span className="text-amber-400">★</span>
          {tech.rating.toFixed(1)}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={
          isAdded
            ? 'mt-5 w-full cursor-default rounded-full border border-line py-2.5 text-sm font-semibold text-body'
            : 'mt-5 w-full rounded-full bg-night py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.01] active:scale-[0.98]'
        }
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  )
}
