import { useEffect, useState } from 'react';
import {
  ContactsHeader,
  Phonebook,
  PhonebookHeader,
} from './Phonebook/Phonebook.styled';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { Input } from './ContactForm/ContactForm.styled';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const isExist = name => {
    return contacts.some(el => el.name.toLowerCase() === name.toLowerCase());
  };

  const handleSubmit = contact => {
    const { name, number } = contact;
    const id = nanoid();
    const newContact = { id, name, number };

    if (isExist(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleFilterChange = ({ target: { value } }) => {
    setFilter(value);
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Phonebook>
      <PhonebookHeader>Phonebook</PhonebookHeader>
      <ContactForm onSubmit={handleSubmit} />

      <ContactsHeader>Contacts</ContactsHeader>
      <Input
        type="text"
        placeholder="Search contacts by name..."
        onChange={handleFilterChange}
      />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </Phonebook>
  );
};

export default App;
