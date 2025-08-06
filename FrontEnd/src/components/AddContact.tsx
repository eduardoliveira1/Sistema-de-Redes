import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Define a interface para o formulário
interface ContactForm {
  name: string;
  email: string;
  number: string;
}

function AddContact() {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', number: '' });
  const navigate = useNavigate();

  // Tipa o evento como ChangeEvent de input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Tipa o submit como evento de formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('http://13.220.79.190:8000/api/contacts/', form);
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
        <input
          name="name"
          placeholder="Nome"
          value={form.name}
          onChange={handleChange}
          required
        /><br />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        /><br />

        <input
          name="number"
          placeholder="Telefone"
          value={form.number}
          onChange={handleChange}
          required
        /><br />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default AddContact;
