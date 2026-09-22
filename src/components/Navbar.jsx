import { useState } from 'react'

const LINKS = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

function BrandMark({ compact }) {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient font-display text-xs font-bold text-white">
        DS
      </span>
      {!compact && (
        <span className="font-display text-lg font-semibold text-ink">
          Dev<span className="text-gradient">Stack</span>
        </span>
      )}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        {/* Mobile: hamburger left */}
        <button
          className="-ml-2 flex h-10 w-10 items-center justify-center rounded-lg text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <div className="flex h-4 w-5 flex-col justify-between">
            <span className={`h-0.5 w-full bg-current transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`h-0.5 w-full bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-current transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </div>
        </button>

        {/* Mobile: centered logo only */}
        <div className="md:hidden">
          <BrandMark compact />
        </div>

        {/* Desktop: brand left */}
        <div className="hidden md:block">
          <BrandMark />
        </div>

        {/* Desktop: center links */}
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-body transition-colors hover:text-ink"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: auth buttons (both breakpoints) */}
        <div className="flex items-center gap-3">
          <button className="hidden text-sm font-medium text-body hover:text-ink sm:inline-block">
            Sign In
          </button>
          <button className="hidden rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03] sm:inline-flex">
            Sign Up
          </button>
          <button className="rounded-full bg-brand-gradient px-3.5 py-1.5 text-xs font-semibold text-white sm:hidden">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-line bg-white px-5 pb-5 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2.5 text-sm text-ink hover:bg-chip"
                >
                  {link}
                </a>
              </li>
            ))}
            <li className="pt-1">
              <button className="w-full rounded-lg px-2 py-2.5 text-left text-sm text-body hover:bg-chip">
                Sign In
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
