import React from "react";

const Sidebar = ({ setActiveChat }) => {
  return (
    <aside className="sidebar">
      <div className="menu">
        <h2>Menú</h2>
        <ul>
          <li><button onClick={() => setActiveChat("Chat 1")}>Chat 1</button></li>
          <li><button onClick={() => setActiveChat("Chat 2")}>Chat 2</button></li>
          <li><button onClick={() => setActiveChat("Chat 3")}>Chat 3</button></li>
          <li><a href="/profile">Configuración</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
