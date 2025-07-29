import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Contact {
  id: number;
  name: string;
  email: string;
  number: string;
}

function ContactDetail() {
  const { id } = useParams<{ id: string }>(); // tipagem do parâmetro da URL
  const [contact, setContact] = useState<Contact | null>(null); // tipagem do estado
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    axios.get(`http://localhost:8000/api/contacts/${id}/`)
      .then(response => setContact(response.data))
      .catch(error => console.error("Erro ao buscar detalhes:", error));
  }, [id]);

  if (!contact) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Detalhes do Contato</h2>
      <p><strong>Nome:</strong> {contact.name}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Telefone:</strong> {contact.number}</p>
      <button onClick={() => navigate('/')}>Voltar</button>
    </div>
  );
}

export default ContactDetail;
