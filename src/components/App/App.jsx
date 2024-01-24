import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactsForm from 'components/ContactsForm';
import ContactsList from 'components/ContactsList';
import ContactsFilter from 'components/ContactsFilter';

import initialState from 'db/contacts.json';
import { Container, Title } from './App.styled';

class App extends Component {
  state = {
    contacts: initialState,
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    const isDuplicate = this.state.contacts.find(
      contact => contact.name === newContact.name
    );

    if (isDuplicate) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            ...newContact,
            id: nanoid(),
          },
        ],
      };
    });
  };

  findContact = searchQuery => {
    this.setState({ filter: searchQuery });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactsForm onAdd={this.addContact} />

        <Title>Contacts</Title>
        <ContactsFilter filter={filter} toFind={this.findContact} />
        <ContactsList
          contacts={visibleContacts}
          toDelete={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
