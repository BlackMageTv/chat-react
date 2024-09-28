import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ActiveChat from "../Chatactivo/ActiveChat";

const MainChatApp = () => {
  const [activeChat, setActiveChat] = useState("Chat 1");

  return (
    <div className="container">
      <Sidebar setActiveChat={setActiveChat} />
      <main className="chat-container">
        <header className="chat-header">
          <h2>{activeChat}</h2>
        </header>
        <div className="chat-messages">
          <div className="message user">Hola, ¿cómo estás?</div>
          <div className="message bot">Hola, estoy bien, ¿y tú?</div>
        </div>
        <footer className="chat-input">
          <input type="text" placeholder="Escribe un mensaje..." />
          <button>Enviar</button>
        </footer>
      </main>
    </div>
  );
};

export default MainChatApp;
