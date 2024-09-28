import React from "react";

const ActiveChat = ({ chat }) => {
  return (
    <div className="chat-container">
      <header className="chat-header">
        <h2>{chat}</h2>
      </header>
      <div className="chat-messages">
        <div className="message user">Hola, ¿cómo estás?</div>
        <div className="message bot">Hola, estoy bien, ¿y tú?</div>
      </div>
      <footer className="chat-input">
        <input type="text" placeholder="Escribe un mensaje..." />
        <button>Enviar</button>
      </footer>
    </div>
  );
};

export default ActiveChat;
