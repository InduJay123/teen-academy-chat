const modules = [
  {
    title: 'Introduction to Business Thinking',
    description: 'Explore the foundations of business and the mindset behind smart decisions.',
  },
  {
    title: 'Entrepreneurship and Opportunity',
    description: 'Learn how ideas become ventures and how opportunity is identified.',
  },
  {
    title: 'Leadership and Teamwork',
    description: 'Develop leadership presence, collaboration, and effective teamwork.',
  },
  {
    title: 'Marketing Basics',
    description: 'Understand branding, audience, and messaging for young entrepreneurs.',
  },
  {
    title: 'Finance and Money Management',
    description: 'Gain confidence with budgeting, value, and financial planning.',
  },
  {
    title: 'Customer Understanding',
    description: 'Learn how to research customers and shape products around their needs.',
  },
  {
    title: 'Business Communication',
    description: 'Practice presenting ideas, messaging, and professional communication.',
  },
  {
    title: 'Digital Business Skills',
    description: 'Explore modern digital tools, online presence, and business systems.',
  },
  {
    title: 'Problem Solving and Innovation',
    description: 'Apply creative thinking to solve real challenges with smart solutions.',
  },
  {
    title: 'Planning a Business Idea',
    description: 'Build a structured plan for a new business concept with confidence.',
  },
  {
    title: 'Presentation and Pitching',
    description: 'Refine storytelling, slides, and pitch skills for any audience.',
  },
  {
    title: 'Final Business Project',
    description: 'Complete a capstone project that showcases learned skills and growth.',
  },
];

export default function Modules() {
  return (
    <section id="modules">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Module catalogue</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">12 learning modules</h2>
        </div>
        <p className="max-w-xl text-slate-300">
          Each module focuses on skills, thinking, and hands-on practice that prepares teenagers for real business impact.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {modules.map((module, index) => (
          <div key={module.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow transition hover:-translate-y-1 hover:bg-white/10">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/15 text-lg font-semibold text-sky-200">
                {index + 1}
              </span>
              <span className="rounded-full bg-slate-950/70 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-300">
                Module
              </span>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">{module.title}</h3>
            <p className="mt-4 text-slate-300 leading-7">{module.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
