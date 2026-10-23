import Logo from "./Logo.jsx";

const links = [
  { label: "Home", href: "#" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Left: hamburger (mobile) / logo (desktop) */}
        <div className="flex flex-1 items-center">
          <div className="dropdown lg:hidden">
            <button tabIndex={0} aria-label="Open menu" className="btn btn-ghost btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <ul tabIndex={0} className="menu dropdown-content z-10 mt-3 w-52 rounded-box bg-white p-2 shadow">
              {links.map((l, i) => (
                <li key={l.label}>
                  <a href={l.href} className={i === 0 ? "font-semibold text-pink-600" : ""}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block"><Logo /></div>
        </div>

        {/* Center: logo (mobile) / links (desktop) */}
        <div className="lg:hidden"><Logo /></div>
        <ul className="hidden items-center gap-8 text-sm lg:flex">
          {links.map((l, i) => (
            <li key={l.label}>
              <a href={l.href} className={i === 0 ? "font-semibold text-pink-600" : "hover:text-pink-600"}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Right: auth buttons */}
        <div className="flex flex-1 items-center justify-end gap-1 sm:gap-3">
          <button className="btn btn-ghost btn-sm sm:btn-md font-normal">Sign In</button>
          <button className="btn btn-sm sm:btn-md rounded-full border-0 bg-brand shadow-none">Sign Up</button>
        </div>
      </nav>
    </header>
  );
}
