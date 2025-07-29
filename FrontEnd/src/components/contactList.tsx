import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Contact {
  id: number;
  name: string;
  email: string;
  number: string;
}

function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get<Contact[]>('http://localhost:8000/api/contacts/');
        setContacts(response.data);
      } catch (error) {
        console.error("Erro ao buscar contatos:", error);
      }
    };

    fetchContacts();
  }, []);

  const deleteContact = async (id: number) => {
    const confirmDelete = window.confirm("Deseja excluir este contato?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:8000/api/contacts/${id}/`);
      setContacts(prev => prev.filter(contact => contact.id !== id));
    } catch (error) {
      console.error("Erro ao excluir contato:", error);
    }
  };

  return (
    <div className="ContactList" style={{ textAlign: 'center' }}>
      <h2>Todos os Contatos</h2>
      {contacts.map((contact) => (
        <div key={contact.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
          <h3>{contact.name}</h3>
          <p>{contact.email}</p>
          <Link to={`/contacts/${contact.id}`}>Ver Detalhes</Link> |{" "}
          <button onClick={() => deleteContact(contact.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
