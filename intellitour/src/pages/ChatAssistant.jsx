// import React, { useState } from "react";
// import "../style/ChatAssistant.css";

// const ChatAssistant = () => {
//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "Hello 👋 I’m your Intellitour AI Travel Assistant! Where would you like to travel?" }
//   ]);
//   const [input, setInput] = useState("");

//   const handleSend = () => {
//     if (!input.trim()) return;

//     const newMessage = { sender: "user", text: input };
//     setMessages([...messages, newMessage]);

//     setInput("");

//     // TODO: Send message to backend AI (Step-2)
//   };

//   return (
//     <div className="chat-container">
//       <div className="chat-box">
//         {messages.map((msg, index) => (
//           <div key={index} className={`message ${msg.sender}`}>
//             {msg.text}
//           </div>
//         ))}
//       </div>

//       <div className="input-area">
//         <input
//           type="text"
//           placeholder="Ask me anything about your trip..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleSend()}
//         />
//         <button onClick={handleSend}>Send 🚀</button>
//       </div>
//     </div>
//   );
// };

// export default ChatAssistant;


import React, { useState } from "react";
import "../style/ChatAssistant.css";

const ChatAssistant = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 I’m your Intellitour AI Travel Assistant! Where would you like to travel?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };

    // show user message immediately
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      const botMessage = {
        sender: "bot",
        text: data.reply || "Sorry, I couldn't understand that.",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error talking to server. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="message bot">
            Typing…
          </div>
        )}
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Ask me anything about your trip..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} disabled={loading}>
          {loading ? "Thinking…" : "Send 🚀"}
        </button>
      </div>
    </div>
  );
};

export default ChatAssistant;

