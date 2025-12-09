import React, { useState } from 'react';

export default function ChatPanel() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
    // TODO: Integrate with orchestration backend
  };

  return (
    <div className="bg-white shadow rounded h-full flex flex-col p-4">
      <h2 className="font-bold mb-2">💬 Mavos Assistant</h2>
      <div className="flex-1 overflow-y-auto space-y-2 mb-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`text-sm ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className="inline-block bg-gray-200 px-2 py-1 rounded">{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded px-2 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={sendMessage} className="bg-blue-600 text-white px-3 py-1 rounded">
          Send
        </button>
      </div>
    </div>
  );
}
