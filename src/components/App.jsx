import { Component } from 'react';
import { nanoid } from 'nanoid';

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
    filter: '',
  };

  onFormSubmit(e) {
    e.preventDefault();
    this.onStorageContact(e);
    e.currentTarget.reset();
  }
  onStorageContact(e) {
    const userName = e.currentTarget.elements.name.value;
    const userNumber = e.currentTarget.elements.number.value;

    if (this.state.contacts.find(user => user.name === userName)) {
      return alert(`${userName} is already in contacts`);
    }
    if (this.state.contacts.find(user => user.number === userNumber)) {
      return alert(`This number: ${userNumber} is already in contacts`);
    }
    const user = {
      name: userName,
      number: userNumber,
      id: nanoid(),
    };
    console.log(user);

    return this.setState(prevState => ({
      contacts: [...prevState.contacts, user],
    }));
  }
  onFindContact(e) {
    console.log(this.state);
    const userFilter = e.target.value.toLowerCase();

    return this.setState(prevState => ({
      filter: prevState.contacts.filter(
        el => el.name.toLowerCase().indexOf(userFilter) !== -1
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
    console.log(userId);
    const deletedUser = this.state.contacts.find(user => user.id === userId);
    console.log(deletedUser);
    let del = window.confirm(
      `Are you sure you want to delete contact ${deletedUser.name}`
    );
    if (del) {
      alert(`Contat ${deletedUser.name} was deleting`);
    } else {
      return;
    }
    return this.setState(prevState => ({
      contacts: prevState.contacts.filter(user => user.id !== userId),
    }));
  }
  render() {
    return (
      <div>
        <>
          <h2>Phonebook</h2>
          <form
            onSubmit={e => {
              this.onFormSubmit(e);
            }}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <label htmlFor="phone">Number</label>
            <input
              type="tel"
              name="number"
              title="Enter phone number"
              required
            />
            <button type="submit">Add contact</button>
          </form>
          <label htmlFor="filter">Find contact</label>
          <input
            type="text"
            name="filter"
            title="Find phonebook contact"
            onChange={e => this.onFindContact(e)}
          />
          <h2>Contacts</h2>
          {this.state.contacts.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => {
                  this.onSortContactsAZ();
                }}
              >
                A-Z
              </button>
              <button
                type="button"
                onClick={() => {
                  this.onSortContactsZA();
                }}
              >
                Z-A
              </button>
            </>
          )}

          {Boolean(this.state.filter.length) && (
            <ul>
              {this.state.filter.map((u, idx) => (
                <li key={idx}>
                  {u.name} {u.number}
                </li>
              ))}
            </ul>
          )}
          {!Boolean(this.state.filter.length) && (
            <ul>
              {this.state.contacts.map(u => (
                <li key={u.id}>
                  {u.name} {u.number}
                  <button
                    type="button"
                    onClick={() => {
                      this.onDeleteContact(u.id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
          {!Boolean(this.state.contacts.length) && (
            <p>There are no contacts in your phonebook</p>
          )}
        </>
      </div>
    );
  }
}
