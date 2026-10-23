import Logo from "./Logo.jsx";

const groups = {
  Product: ["Home", "Technologies", "Projects"],
  Company: ["About", "Contact", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service"],
};
const socials = ["GitHub", "Twitter", "LinkedIn"];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-slate-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="mt-5 flex gap-4 text-sm font-medium">
              {socials.map((s) => (<a key={s} href="#" className="hover:text-pink-600">{s}</a>))}
            </div>
          </div>
          {Object.entries(groups).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-xs font-bold uppercase tracking-wider">{title}</h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-500">
                {items.map((i) => (<li key={i}><a href="#" className="hover:text-pink-600">{i}</a></li>))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 text-sm text-slate-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6"><a href="#">Privacy</a><a href="#">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
