import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TechnologyGrid from './components/TechnologyGrid.jsx'
import YourStack from './components/YourStack.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [stack, setStack] = useState([])

  // Load the technology list from the JSON file at runtime (not hardcoded).
  useEffect(() => {
    let cancelled = false

    async function loadTechnologies() {
      try {
        const res = await fetch('/technologies.json')
        const data = await res.json()
        if (!cancelled) setTechnologies(data)
      } catch (err) {
        if (!cancelled) toast.error('Could not load technologies. Please refresh.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadTechnologies()
    return () => {
      cancelled = true
    }
  }, [])

  const stackIds = new Set(stack.map((tech) => tech.id))

  function handleAdd(tech) {
    if (stackIds.has(tech.id)) {
      toast.warn(`${tech.name} is already in your stack.`)
      return
    }
    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack.`)
  }

  function handleRemove(id) {
    const tech = stack.find((t) => t.id === id)
    setStack((prev) => prev.filter((t) => t.id !== id))
    if (tech) toast.info(`${tech.name} removed from your stack.`)
  }

  function handleRemoveAll() {
    if (stack.length === 0) return
    setStack([])
    toast.info('Your stack has been cleared.')
  }

  return (
    <div id="top" className="min-h-screen">
      <Navbar />
      <Hero />

      <main className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <TechnologyGrid
            technologies={technologies}
            loading={loading}
            stackIds={stackIds}
            onAdd={handleAdd}
          />
          <div className="lg:mt-10">
  <YourStack
    stack={stack}
    onRemove={handleRemove}
    onRemoveAll={handleRemoveAll}
  />
</div>
        </div>
      </main>

      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={2800}
        newestOnTop
        theme="dark"
      />
    </div>
  )
}
