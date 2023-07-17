import { Component } from 'react';

import * as services from 'services/notify';
import { nanoid } from 'nanoid';

import {
  AddContactWrapper,
  ContactsWrapper,
  Container,
  HeaderApp,
  HeaderContacts,
} from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    order: 'az',
  };

  onStorageContact = (contactName, contactNumber) => {
    if (this.state.contacts.find(user => user.name === contactName)) {
      return services.Notify.warning(`${contactName} is already in contacts`);
    }
    if (this.state.contacts.find(user => user.number === contactNumber)) {
      return services.Notify.warning(
        `This number: ${contactNumber} is already in contacts`
      );
    }
    const user = {
      name: contactName,
      number: contactNumber,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, user],
      filter: '',
    }));
  };

  onFilterContact = e => {
    const filter = e.target.value.toLowerCase();
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter, order } = this.state;
    const filtered = contacts.filter(el =>
      el.name.toLowerCase().includes(filter)
    );
    if (order === 'az') {
      return filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === 'za') {
      return filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    return filtered;
  };

  onSortContacts = order => {
    this.setState({ order });
  };

  onDeleteContact = user => {
    services.Confirm.show(
      `Delete contact`,
      `Are you sure you want to delete contact ${user.name}?`,
      'Yes',
      'No',
      () => {
        services.Notify.info(`Contact ${user.name} was deleted`);
        return this.setState(prevState => ({
          contacts: prevState.contacts.filter(
            contact => contact.id !== user.id
          ),
        }));
      }
    );
  };

  render() {
    return (
      <Container>
        <AddContactWrapper>
          <HeaderApp>Phonebook</HeaderApp>
          <ContactForm onStorageContact={this.onStorageContact} />
        </AddContactWrapper>
        <ContactsWrapper>
          <Filter
            onFilterContact={this.onFilterContact}
            filter={this.state.filter}
          />
          <HeaderContacts>Contacts</HeaderContacts>
          <ContactList
            contactList={this.getFilteredContacts()}
            onSortContacts={this.onSortContacts}
            onDeleteContact={this.onDeleteContact}
            hasContacts={this.state.contacts.length > 0}
          />
        </ContactsWrapper>
      </Container>
    );
  }
}
