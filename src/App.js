import { useState, useEffect } from 'react';
import './App.css';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const submitFromForm = data => {
    const { name } = data;
    const nameAlreadyIs = contacts.find(contact => contact.name === name);

    if (nameAlreadyIs) {
      alert(`${name} is already in contacts`);
      return;
    }
    data.id = uuidv4();
    setContacts(state => [...state, data]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      const newContactsArr = contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter),
      );
      return newContactsArr;
    }
    return contacts;
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const onVisibleContacts = getVisibleContacts();

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={submitFromForm} />
      <h2> Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        visibleContacts={onVisibleContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
