import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

function ChatPage({ chats, setChats }) {
  const { id } = useParams();
  const chat = chats.find((chat) => chat.id === parseInt(id));
  const [newMessage, setNewMessage] = useState("");

  if (!chat) {
    return <h2>Chat no encontrado</h2>;
  }


  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const updatedChats = chats.map((c) => {
        if (c.id === chat.id) {
          return { ...c, messages: [...c.messages, { text: newMessage, sender: "you" }] };
        }
        return c;
      });
      setChats(updatedChats);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chat con {chat.name}</h2>
      </div>
      <div className="chat-messages">
        {chat.messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === "you" ? "user" : "bot"}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <Form.Control
          type="text"
          placeholder="Escribe un mensaje..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button variant="primary" onClick={handleSendMessage}>
          Enviar
        </Button>
      </div>
    </div>
  );
}

export default ChatPage;
