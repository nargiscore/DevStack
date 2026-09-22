function IsoCrate() {
  return (
    <svg viewBox="0 0 320 300" className="w-full max-w-xs md:max-w-sm" role="img" aria-label="Illustration of a glowing isometric tech crate">
      <defs>
        <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF3D81" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="edgeGrad2" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="160" cy="255" rx="110" ry="18" fill="url(#glow)" />

      {/* base slab */}
      <polygon points="160,190 250,225 160,260 70,225" fill="none" stroke="url(#edgeGrad2)" strokeWidth="3" strokeLinejoin="round" />
      <polygon points="160,190 250,225 160,260 70,225" fill="#8B5CF6" opacity="0.06" />

      {/* mid layer */}
      <polygon points="160,120 235,150 160,180 85,150" fill="none" stroke="url(#edgeGrad)" strokeWidth="3" strokeLinejoin="round" />
      <polygon points="160,120 235,150 160,180 85,150" fill="#FF3D81" opacity="0.08" />
      <circle cx="200" cy="140" r="9" fill="none" stroke="#60A5FA" strokeWidth="2.5" />
      <rect x="118" y="140" width="20" height="12" rx="2" fill="none" stroke="#F472B6" strokeWidth="2" />

      {/* top panel */}
      <polygon points="160,50 235,80 160,110 85,80" fill="none" stroke="url(#edgeGrad)" strokeWidth="3" strokeLinejoin="round" />
      <polygon points="160,50 235,80 160,110 85,80" fill="#8B5CF6" opacity="0.1" />
      <rect x="140" y="65" width="40" height="26" rx="6" fill="none" stroke="#F5F3FF" strokeWidth="2" />
      <text x="160" y="83" fontSize="14" fill="#C4B5FD" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" textAnchor="middle">
        Aa
      </text>

      {/* connecting verticals */}
      <line x1="85" y1="80" x2="85" y2="150" stroke="url(#edgeGrad2)" strokeWidth="2.5" opacity="0.7" />
      <line x1="235" y1="80" x2="235" y2="150" stroke="url(#edgeGrad)" strokeWidth="2.5" opacity="0.7" />
      <line x1="85" y1="150" x2="70" y2="225" stroke="url(#edgeGrad2)" strokeWidth="2.5" opacity="0.7" />
      <line x1="235" y1="150" x2="250" y2="225" stroke="url(#edgeGrad)" strokeWidth="2.5" opacity="0.7" />

      {/* small floating chips */}
      <circle cx="120" cy="205" r="4" fill="#60A5FA" />
      <circle cx="205" cy="212" r="4" fill="#F472B6" />
      <rect x="150" y="200" width="18" height="10" rx="2" fill="none" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pt-20">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-8">
        <div>
          <h1 className="max-w-lg font-display text-4xl font-bold leading-[1.12] text-ink md:text-[2.75rem]">
            Build Your Ideal
            <br />
            <span className="text-gradient">Development Stack</span>
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-body">
            Explore frontend, backend, database, and tooling options, compare them
            side by side, and put together the stack that fits your next project.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#technologies" className="btn-brand">
              Explore Technologies
            </a>
            <a href="#about" className="btn-outline-brand">
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <IsoCrate />
        </div>
      </div>
    </section>
  )
}
