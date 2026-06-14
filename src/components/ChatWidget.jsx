import { useEffect, useRef, useState } from 'react';

const WEBHOOK_URL = 'https://YOUR-N8N-DOMAIN.com/webhook/teen-academy-chat';

const initialMessages = [
  { role: 'assistant', content: 'Hello! I am the Teen Academy Assistant. Ask about the programme anytime.' },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, open]);

  const sendMessage = async () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const userMessage = { role: 'user', content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setLoading(true);
    setError('');

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, session_id: `website-user-${Date.now()}` }),
      });

      if (!response.ok) {
        throw new Error('Unable to connect to the webhook.');
      }

      const data = await response.json();
      if (!data.success) {
        throw new Error(data?.error || 'Webhook responded with an error.');
      }

      const assistantMessage = { role: 'assistant', content: data.reply || 'Sorry, I could not get a reply from the assistant.' };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      setError('We could not send your message. Please try again later.');
      setMessages((prev) => [...prev, { role: 'assistant', content: 'There was an issue sending your message. Please try again later.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[min(100vw-2rem,420px)] rounded-[2rem] border border-white/10 bg-slate-950/95 p-4 shadow-glow backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Chat</p>
              <h3 className="text-lg font-semibold text-white">Teen Academy Assistant</h3>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full bg-white/5 px-3 py-2 text-slate-300 transition hover:bg-white/10"
              aria-label="Close chat panel"
            >
              Close
            </button>
          </div>
          <div className="max-h-[420px] space-y-4 overflow-y-auto py-4" ref={panelRef}>
            {messages.map((message, idx) => (
              <div key={`${message.role}-${idx}`} className={`rounded-3xl p-4 ${message.role === 'user' ? 'bg-sky-500/15 text-slate-100 self-end' : 'bg-navy/80 text-slate-200'}`}>
                <p className="text-sm leading-7">{message.content}</p>
              </div>
            ))}
            {loading && <p className="text-sm text-slate-400">Waiting for assistant reply…</p>}
            {error && <p className="text-sm text-rose-300">{error}</p>}
          </div>
          <form onSubmit={handleSubmit} className="mt-3 flex items-center gap-3">
            <input
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Ask about the programme…"
              className="flex-1 rounded-3xl border border-white/10 bg-navy/90 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-sky-500 px-4 py-3 text-sm font-semibold text-navy transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-3 rounded-full bg-sky-500 px-5 py-4 text-sm font-semibold text-navy shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
      >
        {open ? 'Hide Chat' : 'Ask Teen Academy'}
      </button>
    </div>
  );
}
