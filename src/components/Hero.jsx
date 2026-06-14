export default function Hero() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl sm:p-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full border border-sky-300/30 bg-sky-300/10 px-4 py-2 text-sm font-semibold text-sky-200">
            Premium teen business learning
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Teen Master of Business Programme
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            A one-year business learning journey for students aged 14 to 17.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#faq"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-navy transition hover:bg-sky-400"
            >
              Ask About the Programme
            </a>
            <a
              href="#modules"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Modules
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {[
              'Years 7 to 10',
              'Ages 14 to 17',
              '12 Modules',
              'Approximately 72 Contact Hours',
              'One Academic Year',
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-navy/80 px-5 py-4 text-sm text-slate-200 ring-1 ring-white/10"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-500/20 via-white/5 to-soft-400/10 p-8 shadow-2xl ring-1 ring-white/10">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-sky-400/30 to-transparent" />
          <div className="relative rounded-3xl border border-white/10 bg-slate-950/50 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-200">Programme overview</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">A modern growth path for young leaders</h2>
            <p className="mt-4 text-slate-300 leading-7">
              This programme blends business fundamentals with active learning, real-world project experience, and guided support designed for teenagers.
            </p>
            <div className="mt-8 space-y-4">
              <div className="rounded-3xl bg-navy/90 p-5 text-slate-100 ring-1 ring-white/10">
                Real-world problem solving and business planning.
              </div>
              <div className="rounded-3xl bg-navy/90 p-5 text-slate-100 ring-1 ring-white/10">
                Building confidence through entrepreneurship and leadership practice.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
