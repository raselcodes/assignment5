export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-28">
      <div>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          Build Your Ideal <br />
          <span className="text-brand">Development Stack</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
          Discover the best frontend, backend, database, and DevOps tools. Compare ratings
and difficulty, then pick the technologies that fit your next project.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#technologies" className="btn border-0 bg-brand shadow-none">Explore Technologies</a>
          <a href="#about" className="btn btn-outline border-slate-300 font-normal">Learn More</a>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
       <img src={`${import.meta.env.BASE_URL}hero.png`} alt="Layered development stack illustration" className="w-full max-w-sm sm:max-w-md" />
      </div>
    </section>
  );
}
