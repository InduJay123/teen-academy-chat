export default function ChatInput({ value, onChange, onSubmit, onSend, loading }) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-end">
      <textarea
        value={value}
        onChange={onChange}
        rows={2}
        placeholder="Type your message..."
        className="min-h-[80px] flex-1 resize-none rounded-3xl border border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-900 placeholder:text-slate-400 caret-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
      />
      <button
        type="button"
        onClick={onSend}
        disabled={loading || !value.trim()}
        className="inline-flex h-12 items-center justify-center rounded-3xl bg-gradient-to-r from-sky-600 via-violet-500 to-indigo-600 px-6 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? 'Sending…' : 'Send'}
      </button>
    </form>
  );
}
