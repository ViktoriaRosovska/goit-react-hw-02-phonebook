import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify, Confirm } from 'notiflix';
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

Notify.init({
  width: 'fit-content',
  padding: '20px',
  position: 'center-top',
  distance: '200px',
  borderRadius: '15px',
  fontSize: '25px',
  textColor: 'black',
  timeout: 1500,
  useIcon: false,
  closeButton: false,
  warning: {
    borderRadius: '15px',
    heigth: '200px',
    closeButton: false,
    background: '#f26b94',
    fontSize: '40px',
    titleFontSize: '40px',
    messageFontSize: '40px',
    textColor: 'white',
  },
  info: {
    background: 'transparent',
    textColor: 'black',
  },
});

Confirm.init({
  background: '#f26b94',
  heigth: '100px',
  okButtonBackground: '#f26b94',
  titleColor: '#f26b94',
});

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: [],
  };

  onFormSubmit(e) {
    e.preventDefault();
    const userName = e.currentTarget.elements.name.value;
    const userNumber = e.currentTarget.elements.number.value;
    this.setState(
      {
        name: userName,
        number: userNumber,
      },
      () => this.onStorageContact()
    );
    e.currentTarget.reset();
  }

  onStorageContact() {
    if (this.state.contacts.find(user => user.name === this.state.name)) {
      return Notify.warning(`${this.state.name} is already in contacts`);
    }
    if (this.state.contacts.find(user => user.number === this.state.number)) {
      return Notify.warning(
        `This number: ${this.state.number} is already in contacts`
      );
    }
    const user = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, user],
    }));
  }

  onFindContact(e) {
    const userFilter = e.target.value.toLowerCase();
    this.setState({ userFilter: userFilter }, () => this.filterContacts());
  }

  filterContacts() {
    return this.setState(prevState => ({
      filter: prevState.contacts.filter(
        el => el.name.toLowerCase().indexOf(prevState.userFilter) !== -1
      ),
    }));
  }

  onSortContactsAZ() {
    return this.setState(prevState => ({
      contacts: prevState.contacts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      }),
    }));
  }

  onSortContactsZA() {
    return this.setState(prevState => ({
      contacts: prevState.contacts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      }),
    }));
  }

  onDeleteContact(userId) {
    const deletedUser = this.state.contacts.find(user => user.id === userId);

    Confirm.show(
      `Delete contact`,
      `Are you sure you want to delete contact ${deletedUser.name}?`,
      'Yes',
      'No',
      () => {
        Notify.info(`Contact ${deletedUser.name} was deleted`);
        return this.setState(
          prevState => ({
            contacts: prevState.contacts.filter(user => user.id !== userId),
          }),
          () => this.filterContacts()
        );
      },
      () => {
        return;
      }
    );
  }

  render() {
    return (
      <Container>
        <AddContactWrapper>
          <HeaderApp>Phonebook</HeaderApp>
          <ContactForm onFormSubmit={e => this.onFormSubmit(e)} />
        </AddContactWrapper>
        <ContactsWrapper>
          <Filter onFindContact={e => this.onFindContact(e)} />
          <HeaderContacts>Contacts</HeaderContacts>
          <ContactList
            contacts={this.state.contacts}
            filter={this.state.filter}
            onSortContactsAZ={() => this.onSortContactsAZ()}
            onSortContactsZA={() => this.onSortContactsZA()}
            onDeleteContact={id => this.onDeleteContact(id)}
          />
        </ContactsWrapper>
      </Container>
    );
  }
}
