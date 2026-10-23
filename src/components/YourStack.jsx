export default function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <h3 className="text-lg font-semibold">Your Stack</h3>
      <p className="text-sm text-slate-400">{stack.length} Technology Selected</p>

      {/* Conditional rendering: empty message vs list */}
      {stack.length === 0 ? (
        <p className="py-8 text-center text-sm text-slate-400">
          Your stack is empty. Add a technology to get started.
        </p>
      ) : (
        <>
          <ul className="mt-4 grid grid-cols-1 gap-2">
            {stack.map((tech) => (
              <li key={tech.id} className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2">
                <img src={tech.icon} alt="" className="h-7 w-7 object-contain" />
                <div className="flex-1 leading-tight">
                  <p className="text-sm font-semibold">{tech.name}</p>
                  <p className="text-xs text-slate-400">{tech.category}</p>
                </div>
                <button onClick={() => onRemove(tech)} aria-label={`Remove ${tech.name}`} className="text-slate-400 hover:text-red-500">✕</button>
              </li>
            ))}
          </ul>
          <button onClick={onRemoveAll} className="btn btn-outline btn-error btn-sm mt-5 w-full font-medium">
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}
