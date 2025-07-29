import { Routes, Route, Link } from 'react-router-dom';
import ContactList from './components/contactList';
import ContactDetail from './components/details';
import AddContact from './components/AddContact';

function App() {
  return (
    <div className="App">
      <h1>Gerenciador de Contatos</h1>
      <nav>
        <Link to="/">Lista de Contatos</Link> | <Link to="/add">Adicionar Contato</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/contacts/:id" element={<ContactDetail />} />
        <Route path="/add" element={<AddContact />} />
      </Routes>
    </div>
  );
}

export default App;
