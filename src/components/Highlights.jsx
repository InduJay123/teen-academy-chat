const highlights = [
  {
    title: '12 structured modules',
    description: 'A clear learning path designed for young business learners.',
  },
  {
    title: 'Practical business skills',
    description: 'Hands-on exercises with real-world relevance.',
  },
  {
    title: 'Leadership and communication',
    description: 'Build confidence and teamwork through guided practice.',
  },
  {
    title: 'Business thinking for teenagers',
    description: 'Develop a growth mindset for future opportunities.',
  },
  {
    title: 'Project-based learning',
    description: 'Create business solutions and refine them with feedback.',
  },
  {
    title: 'One academic year',
    description: 'A complete journey across 72 contact hours.',
  },
];

export default function Highlights() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Programme benefits</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Learning outcomes for teens and parents</h2>
          <p className="mt-4 max-w-2xl text-slate-300 leading-7">
            A premium, modern learning experience that prepares students for business thinking, leadership, finance, and communication.
          </p>
        </div>
        <div className="grid flex-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-navy/80 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-navy/90">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-slate-300 leading-7">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
