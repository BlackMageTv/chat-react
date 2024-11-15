import React, { useState } from 'react';
import { Button, ListGroup, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NewChatModal from './NewChatModal';
import contacts from '../contacts.json'; // Importa el archivo JSON con los contactos

function Sidebar({ chats, setChats }) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleCreateChat = (contactId) => {
    const contact = contacts.find((c) => c.id === parseInt(contactId));
    if (contact) {
      const newChat = { id: chats.length + 1, ...contact, unreadMessages: 0, messages: [] };
      setChats((prevChats) => [...prevChats, newChat]);
      navigate(`/chat/${newChat.id}`); // Redirige a la nueva pantalla del chat
      handleCloseModal();
    }
  };

  const handleOpenChat = (chatId) => {
    navigate(`/chat/${chatId}`); // Redirige a la pantalla del chat existente
  };

  return (
    <div className="sidebar">
      <Button variant="primary" onClick={handleShowModal}>
        Nuevo Chat
      </Button>

      {/* Modal para seleccionar un contacto y crear un nuevo chat */}
      <NewChatModal
        show={showModal}
        handleClose={handleCloseModal}
        onCreateChat={handleCreateChat}
      />

      {/* Listado de chats */}
      <ListGroup className="mt-4">
        {chats.map((chat) => (
          <ListGroup.Item
            key={chat.id}
            className="d-flex justify-content-between align-items-center"
            onClick={() => handleOpenChat(chat.id)}
            style={{ cursor: 'pointer' }}
          >
            {chat.name}
            {chat.unreadMessages > 0 && (
              <Badge bg="info" pill>
                {chat.unreadMessages}
              </Badge>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Sidebar;
