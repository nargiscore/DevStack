export default function YourStack({ stack, onRemove, onRemoveAll }) {
  const count = stack.length

  return (
    <aside className="rounded-2xl border border-line bg-white p-5 lg:sticky  lg:top-24 lg:mt-10 lg:self-start">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-base font-semibold text-ink">Your Stack</h2>
        {count > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-xs font-medium text-body underline decoration-line underline-offset-4 hover:text-ink"
          >
            Remove All
          </button>
        )}
      </div>
      <p className="mt-1 text-xs text-body">
        {count === 0 ? 'No technologies selected yet.' : `${count} ${count === 1 ? 'technology' : 'technologies'} selected`}
      </p>

      {count === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-line px-4 py-8 text-center">
          <p className="text-xs text-body/70">Your stack is empty.</p>
        </div>
      ) : (
        <ul className="mt-4 flex flex-col gap-2.5">
          {stack.map((tech) => (
            <li
              key={tech.id}
              className="flex items-center gap-3 rounded-xl border border-line bg-chip/40 px-3 py-2.5"
            >
              <img
                src={tech.icon}
                alt=""
                className="h-6 w-6 shrink-0 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{tech.name}</p>
                <p className="truncate text-xs text-body">{tech.category}</p>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name} from your stack`}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-body hover:bg-chip hover:text-ink"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}
