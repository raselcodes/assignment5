export default function TechCard({ tech, added, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech;
  return (
    <article className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <img src={icon} alt={`${name} icon`} className="h-8 w-8 object-contain" />
        <span className="badge badge-outline badge-sm border-pink-200 text-pink-600">{badge}</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-slate-500">{description}</p>

      <div className="mt-4 flex items-center justify-between gap-2 border-t border-slate-100 pt-3 text-xs text-slate-500">
        <span className="rounded bg-slate-100 px-2 py-1 text-slate-700">{category}</span>
        <span>{difficulty}</span>
        <span className="flex items-center gap-1 font-medium text-slate-700">
          <span className="text-amber-400">★</span>{rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={added}
        className="btn mt-4 w-full border-0 bg-slate-900 font-normal text-white hover:bg-slate-700 disabled:bg-slate-200 disabled:text-slate-500"
      >
        {added ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}
