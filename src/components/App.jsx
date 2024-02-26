import { Component } from 'react';
import {
  ContactsHeader,
  Phonebook,
  PhonebookHeader,
} from './Phonebook/Phonebook.styled';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { Input } from './ContactForm/ContactForm.styled';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    this.setState({
      contacts: JSON.parse(localStorage.getItem('contacts')) || [],
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  isExist = name => {
    return this.state.contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
  };

  handleSubmit = contact => {
    const { name, number } = contact;
    const id = nanoid();
    const newContact = { id, name, number };

    if (this.isExist(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.addContact(newContact);
  };

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleFilterChange = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.filterContacts();

    return (
      <Phonebook>
        <PhonebookHeader>Phonebook</PhonebookHeader>
        <ContactForm onSubmit={this.handleSubmit} />

        <ContactsHeader>Contacts</ContactsHeader>
        <Input
          type="text"
          placeholder="Search contacts by name..."
          onChange={this.handleFilterChange}
        />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </Phonebook>
    );
  }
}

export default App;
