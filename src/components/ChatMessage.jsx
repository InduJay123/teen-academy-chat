export default function ChatMessage({ message }) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap break-words shadow-sm ${
          isUser
            ? 'bg-blue-700 text-white'
            : 'bg-slate-100 text-slate-900 ring-1 ring-slate-200'
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
