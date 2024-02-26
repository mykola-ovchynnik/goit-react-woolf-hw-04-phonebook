import { ContactItem, DeleteButton, List } from './ContactList.styled.jsx';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteButton onClick={() => onDeleteContact(contact.id)}>
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </List>
  );
};

export default ContactList;
