import Loader from './Loader.jsx'
import TechCard from './TechCard.jsx'

export default function TechnologyGrid({ technologies, loading, stackIds, onAdd }) {
  return (
    <section id="technologies" aria-labelledby="tech-heading">
      <h2 id="tech-heading" className="font-display text-2xl font-bold text-ink">
        Explore the <span className="text-gradient">Technologies</span>
      </h2>
      <p className="mt-1.5 text-sm text-body">
        Pick one technology per category to build your ideal stack.
      </p>

      {loading ? (
        <Loader />
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {technologies.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              isAdded={stackIds.has(tech.id)}
              onAdd={onAdd}
            />
          ))}
        </div>
      )}
    </section>
  )
}
