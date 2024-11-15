import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componentes/Home';
import UserProfileApp from './Perfilusuario/UserProfileApp';
import ChatPage from './componentes/ChatPage';
import Sidebar from './componentes/Sidebar'; // Importa el componente Sidebar
import './App.css'; // Importa la hoja de estilos
function App() {
  const [chats, setChats] = useState([]);

  return (
    <Router>
      <div className="container mt-4">
        <Sidebar chats={chats} setChats={setChats} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<UserProfileApp />} />
          <Route path="/chat/:id" element={<ChatPage chats={chats} setChats={setChats} />} /> {/* Ruta para la página de chat */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
