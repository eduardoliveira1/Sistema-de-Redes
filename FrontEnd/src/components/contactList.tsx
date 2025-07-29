import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/contacts/')
      .then(response => setContacts(response.data))
      .catch(error => console.error("Erro ao buscar contatos:", error));
  }, []);

  const deleteContact = async (id) => {
    const confirm = window.confirm("Deseja excluir este contato?");
    if (!confirm) return;
    try {
      await axios.delete(`http://localhost:8000/api/contacts/${id}/`);
      setContacts(contacts.filter(contact => contact.id !== id));
    } catch (error) {
      console.error("Erro ao excluir contato:", error);
    }
  };

  return (
    <div className="ContactList">
      <h2>Todos os Contatos</h2>
      {contacts.map(contact => (
        <div key={contact.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
          <h3>{contact.name}</h3>
          <p>{contact.email}</p>
          <Link to={`/contacts/${contact.id}`}>Ver Detalhes</Link> |{" "}
          <button id='deleteBtn' onClick={() => deleteContact(contact.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
