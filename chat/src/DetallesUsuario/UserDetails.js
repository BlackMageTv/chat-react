import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function DetallesUsuario() {
  const [editing, setEditing] = useState(false);
  const [userData, setUserData] = useState({ name: 'Juan Pérez', email: 'juan@example.com' });

  const handleEditToggle = () => setEditing(!editing);

  return (
    <Form>
      <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          readOnly={!editing}
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          readOnly={!editing}
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
      </Form.Group>
      <Button onClick={handleEditToggle}>
        {editing ? 'Guardar' : 'Editar'}
      </Button>
    </Form>
  );
}

export default DetallesUsuario;
