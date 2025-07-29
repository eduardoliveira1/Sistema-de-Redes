import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ContactDetail() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
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
