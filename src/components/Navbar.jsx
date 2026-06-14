export default function Navbar() {
  return (
    <header className="border-b border-white/10 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Teen Academy</p>
          <p className="text-lg font-semibold text-white">Teen Master of Business Programme</p>
        </div>
        <nav className="hidden items-center gap-8 md:flex text-slate-300">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#modules" className="transition hover:text-white">Modules</a>
          <a href="#faq" className="transition hover:text-white">FAQ</a>
        </nav>
      </div>
    </header>
  );
}
