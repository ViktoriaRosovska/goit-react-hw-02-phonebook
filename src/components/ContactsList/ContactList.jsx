import PropTypes from 'prop-types';
import {
  ContactListRender,
  ContactsListContainer,
  List,
  SortOptions,
  Span,
} from './ContactList.styled';
import { Button } from './ContactList.styled';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { SvgIcon } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export function ContactList({
  contacts,
  filter,
  onSortContactsAZ,
  onSortContactsZA,
  onDeleteContact,
}) {
  return (
    <ContactsListContainer>
      <SortOptions>
        <span>Sort contacts by:</span>
        <Button type="button" onClick={onSortContactsAZ}>
          <SvgIcon component={KeyboardArrowDownIcon}></SvgIcon>
        </Button>
        <Button type="button" onClick={onSortContactsZA}>
          <SvgIcon component={KeyboardArrowUpIcon}></SvgIcon>
        </Button>
      </SortOptions>

      <ContactListRender>
        {Boolean(filter.length) && (
          <ul>
            {filter.map((contact, idx) => (
              <List key={idx}>
                <Span>{contact.name}</Span>
                <span>{contact.number}</span>
                <Button
                  type="button"
                  onClick={() => {
                    onDeleteContact(contact.id);
                  }}
                >
                  <SvgIcon component={DeleteForeverIcon}></SvgIcon>
                </Button>
              </List>
            ))}
          </ul>
        )}

        {!Boolean(filter.length) && (
          <ul>
            {contacts.map(contact => (
              <List key={contact.id}>
                <Span>{contact.name}</Span> <span>{contact.number}</span>
                <Button
                  type="button"
                  onClick={() => onDeleteContact(contact.id)}
                >
                  <SvgIcon component={DeleteForeverIcon}></SvgIcon>
                </Button>
              </List>
            ))}
          </ul>
        )}
        {!Boolean(contacts.length) && (
          <p>There are no contacts in your phonebook</p>
        )}
      </ContactListRender>
    </ContactsListContainer>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  filter: PropTypes.arrayOf(PropTypes.shape().isRequired),
  onSortContactsAZ: PropTypes.func.isRequired,
  onSortContactsZA: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
