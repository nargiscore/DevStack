export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-32" role="status" aria-live="polite">
      <div className="relative h-10 w-10">
        <div className="absolute inset-0 rounded-full border-2 border-line" />
        <div
          className="absolute inset-0 animate-spin rounded-full border-2 border-transparent"
          style={{ borderTopColor: '#FF3D81', borderRightColor: '#8B5CF6' }}
        />
      </div>
      <p className="font-mono text-xs text-body">Loading technologies…</p>
    </div>
  )
}
