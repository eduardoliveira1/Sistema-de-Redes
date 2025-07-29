import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddContact() {
  const [form, setForm] = useState({ name: '', email: '', number: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/contacts/', form);
      alert("Contato adicionado com sucesso!");
      navigate('/');
    } catch (error) {
      console.error("Erro ao adicionar contato:", error);
    }
  };

  return (
    <div>
      <h2>Adicionar Contato</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nome" onChange={handleChange} required /><br />
        <input name="email" placeholder="Email" onChange={handleChange} required /><br />
        <input name="number" placeholder="Telefone" onChange={handleChange} required /><br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default AddContact;
