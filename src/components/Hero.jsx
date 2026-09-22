import bannerStack from '../assets/banner-stack.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pt-20"
    >
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
          <img
            src={bannerStack}
            alt="Development Stack"
            className="w-full max-w-xs md:max-w-sm"
          />
        </div>

      </div>
    </section>
  )
}