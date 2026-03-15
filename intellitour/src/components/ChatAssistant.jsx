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


// import React, { useState } from "react";
// import "../style/ChatAssistant.css";

// const ChatAssistant = () => {
//   const [messages, setMessages] = useState([
//     {
//       sender: "bot",
//       text: "Hello 👋 I’m your Intellitour AI Travel Assistant! Where would you like to travel?",
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMessage = { sender: "user", text: input };

//     // show user message immediately
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:5000/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: input }),
//       });

//       const data = await res.json();

//       const botMessage = {
//         sender: "bot",
//         text: data.reply || "Sorry, I couldn't understand that.",
//       };

//       setMessages((prev) => [...prev, botMessage]);
//     } catch (err) {
//       console.error(err);
//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: "⚠️ Error talking to server. Please try again." },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="chat-container">
//       <div className="chat-box">
//         {messages.map((msg, index) => (
//           <div key={index} className={`message ${msg.sender}`}>
//             {msg.text}
//           </div>
//         ))}

//         {loading && (
//           <div className="message bot">
//             Typing…
//           </div>
//         )}
//       </div>

//       <div className="input-area">
//         <input
//           type="text"
//           placeholder="Ask me anything about your trip..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleSend()}
//         />
//         <button onClick={handleSend} disabled={loading}>
//           {loading ? "Thinking…" : "Send 🚀"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatAssistant;





//updated claude code with loading state and error handling


// import React, { useState, useEffect, useRef } from "react";
// import "../style/ChatAssistant.css";

// const ChatAssistant = () => {
//   const [messages, setMessages] = useState([
//     {
//       sender: "bot",
//       text: "Hello 👋 I'm your Intellitour AI Travel Assistant! Where would you like to travel?",
//       time: new Date().toLocaleTimeString(),
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const bottomRef = useRef(null);

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleSend = async () => {
//     if (!input.trim() || loading) return;

//     const userMessage = { sender: "user", text: input, time: new Date().toLocaleTimeString() };
//     const updatedMessages = [...messages, userMessage];

//     setMessages(updatedMessages);
//     setInput("");
//     setLoading(true);

//     try {
//       const res = await fetch(`${process.env.REACT_APP_API_URL}/chat`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: input, history: updatedMessages }),
//       });

//       const data = await res.json();

//       setMessages((prev) => [
//         ...prev,
//         {
//           sender: "bot",
//           text: data.reply || "Sorry, I couldn't understand that.",
//           time: new Date().toLocaleTimeString(),
//         },
//       ]);
//     } catch (err) {
//       console.error(err);
//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: "⚠️ Error talking to server. Please try again.", time: "" },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="chat-container">
//       <div className="chat-box">
//         {messages.map((msg, index) => (
//           <div key={index} className={`message ${msg.sender}`}>
//             <span>{msg.text}</span>
//             {msg.time && <small className="timestamp">{msg.time}</small>}
//           </div>
//         ))}
//         {loading && <div className="message bot">Typing…</div>}
//         <div ref={bottomRef} />
//       </div>

//       <div className="input-area">
//         <input
//           type="text"
//           placeholder="Ask me anything about your trip..."
//           value={input}
//           disabled={loading}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleSend()}
//         />
//         <button onClick={handleSend} disabled={loading}>
//           {loading ? "Thinking…" : "Send 🚀"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatAssistant;


//updated code wrapped chat assistant in a modal for better UX


import React, { useState, useEffect, useRef } from "react";
import "../style/ChatAssistant.css";

const ChatAssistant = ({ userId }) => { // ✅ accept userId prop
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: `Hello 👋 Welcome${userId ? `, ${userId}` : ""}! I'm your Intellitour AI Travel Assistant. Where would you like to travel?`, // ✅ personalized greeting
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = {
      sender: "user",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, history: updatedMessages }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.reply || "Sorry, I couldn't understand that.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error talking to server. Please try again.", time: "" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toggle button */}
      <button className="chat-toggle-btn" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "✕" : "💬"}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="chat-container">

          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">🤖</div>
              <div>
                <h4>Intellitour Assistant</h4>
                <span>Online • Ready to help</span>
              </div>
            </div>
            <button className="chat-close-btn" onClick={() => setIsOpen(false)}>✕</button>
          </div>

          {/* Messages */}
          <div className="chat-box">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <span>{msg.text}</span>
                {msg.time && <small className="timestamp">{msg.time}</small>}
              </div>
            ))}
            {loading && (
              <div className="message bot">
                <div className="typing-dots">
                  <span /><span /><span />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="input-area">
            <input
              type="text"
              placeholder="Ask me anything about your trip..."
              value={input}
              disabled={loading}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} disabled={loading}>
              {loading ? "⏳" : "➤"}
            </button>
          </div>

        </div>
      )}
    </>
  );
};

export default ChatAssistant;