const faqItems = [
  {
    question: 'Who is this programme for?',
    answer: 'This programme is designed for students in Years 7 to 10 aged 14 to 17 who want to explore business and leadership skills.',
  },
  {
    question: 'How long is the programme?',
    answer: 'The programme runs for one academic year with approximately 72 contact hours.',
  },
  {
    question: 'How many modules are included?',
    answer: 'There are 12 structured modules covering entrepreneurship, finance, marketing, leadership and project planning.',
  },
  {
    question: 'Are fees published?',
    answer: 'The official fee and payment details have not yet been published in the programme database.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">FAQ & enquiries</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">Common questions from parents and students</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {faqItems.map((item) => (
          <div key={item.question} className="rounded-3xl border border-white/10 bg-navy/80 p-6 text-slate-200 shadow-sm">
            <h3 className="text-lg font-semibold text-white">{item.question}</h3>
            <p className="mt-4 leading-7 text-slate-300">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
