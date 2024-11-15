import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import contacts from '../contacts.json'; // Importa el archivo JSON con los contactos

function NewChatModal({ show, handleClose, onCreateChat }) {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleCreate = () => {
    if (selectedContact) {
      onCreateChat(selectedContact);
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Nuevo Chat</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Selecciona un contacto</Form.Label>
            {contacts.map(contact => (
              <Form.Check
                key={contact.id}
                type="radio"
                label={contact.name}
                name="contactRadio"
                value={contact.id}
                onChange={(e) => setSelectedContact(e.target.value)}
              />
            ))}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleCreate}>
          Crear Chat
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewChatModal;
