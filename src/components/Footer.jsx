import logoText from '../assets/logo-text.png'

const LINK_GROUPS = [
  { title: 'Product', links: ['Home', 'Technologies', 'Projects'] },
  { title: 'Company', links: ['About', 'Contact', 'Careers'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
]

export default function Footer() {
  return (
    <footer id="contact" className="mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="inline-flex items-center">
              <img
                 src={logoText}
                 alt="Dev Stack"
                className="h-8 w-auto"
                  />
               </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-body">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-5 flex items-center gap-4">
              {['GitHub', 'Twitter', 'LinkedIn'].map((label) => (
                <a key={label} href="#" className="text-xs font-medium text-body hover:text-[#DB2777]">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-bold tracking-wide text-ink">{group.title.toUpperCase()}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-body hover:text-[#DB2777]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="text-xs text-body">© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-body hover:text-[#DB2777]">Privacy</a>
            <a href="#" className="text-xs text-body hover:text-[#DB2777]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
