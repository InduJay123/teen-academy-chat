import { useEffect, useMemo, useRef, useState } from 'react';
import ChatInput from './ChatInput.jsx';
import ChatMessage from './ChatMessage.jsx';

const WEBHOOK_URL = '/api/chat';

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 'assistant-1',
      role: 'assistant',
      content:
        'Hello! I can answer questions about the Teen Master of Business Programme. How can I help you?',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sessionId] = useState(() => `website-user-${Date.now()}`);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    const trimmed = inputValue.trim();
    if (!trimmed || loading) return;

    setError('');
    const userMessage = { id: `user-${Date.now()}`, role: 'user', content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setLoading(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, session_id: sessionId }),
      });

      const text = await response.text();
      console.log('RAW WEBHOOK RESPONSE:', text);

      if (!response.ok) {
        throw new Error(`Webhook request failed (${response.status}) ${text || ''}`);
      }

      if (!text) {
        throw new Error('Webhook responded with an empty body. Expected JSON.');
      }

      let responseData;
      try {
        responseData = JSON.parse(text);
      } catch (parseError) {
        throw new Error('Invalid webhook response format. Expected JSON.');
      }

      const payload = Array.isArray(responseData) ? responseData[0] : responseData;
      if (!payload || typeof payload.reply !== 'string') {
        throw new Error('Invalid webhook payload received from assistant.');
      }

      setMessages((prev) => [
        ...prev,
        { id: `assistant-${Date.now()}`, role: 'assistant', content: payload.reply },
      ]);
    } catch (err) {
      console.error('Chat webhook error:', err);
      const userError =
        err instanceof Error
          ? err.message
          : 'Sorry, I could not connect to the assistant. Please try again.';
      setError(`Sorry, I could not connect to the assistant. ${userError}`);
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-error-${Date.now()}`,
          role: 'assistant',
          content: 'Sorry, I could not connect to the assistant. Please try again.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSend();
  };

  const welcomeText = 'Ask anything about the Teen Master of Business Programme.';

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6">
      <div className="w-full max-w-3xl rounded-[2rem] border border-slate-200/20 bg-slate-100 p-6 shadow-2xl shadow-slate-950/20 sm:p-10">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Teen Academy Assistant</p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Ask anything about the Teen Master of Business Programme.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">{welcomeText}</p>
        </div>

        <div className="max-h-[68vh] space-y-4 overflow-y-auto rounded-[1.75rem] bg-slate-900/5 p-4 shadow-sm shadow-slate-900/10 ring-1 ring-slate-200/60">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="mt-6 rounded-[1.75rem] bg-slate-100 p-4 shadow-inner shadow-slate-200/70">
          <ChatInput
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onSubmit={handleSubmit}
            onSend={handleSend}
            loading={loading}
          />
          {error && <p className="mt-3 text-sm text-rose-600">{error}</p>}
        </div>
      </div>
    </div>
  );
}
