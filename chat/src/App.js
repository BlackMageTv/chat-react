import React from "react";
import MainChatApp from "./componentes/MainChatApp";
import UserProfileApp from "./Perfilusuario/UserProfileApp";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainChatApp />} />
        <Route path="/profile" element={<UserProfileApp />} />
      </Routes>
    </Router>
  );
}

export default App;
