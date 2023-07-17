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
  contactList,
  hasContacts,
  onSortContacts,
  onDeleteContact,
}) {
  return (
    <ContactsListContainer>
      <SortOptions>
        <span>Sort contacts by:</span>
        <Button type="button" onClick={() => onSortContacts('az')}>
          <SvgIcon component={KeyboardArrowDownIcon}></SvgIcon>
        </Button>
        <Button type="button" onClick={() => onSortContacts('za')}>
          <SvgIcon component={KeyboardArrowUpIcon}></SvgIcon>
        </Button>
      </SortOptions>

      <ContactListRender>
        <ul>
          {contactList.map(contact => (
            <List key={contact.id}>
              <Span>{contact.name}</Span> <Span>{contact.number}</Span>
              <Button type="button" onClick={() => onDeleteContact(contact)}>
                <SvgIcon component={DeleteForeverIcon}></SvgIcon>
              </Button>
            </List>
          ))}
        </ul>
        {!Boolean(contactList.length) && !hasContacts && (
          <p>There are no contacts in your phonebook</p>
        )}
        {!Boolean(contactList.length) && hasContacts && (
          <p>No contacts found</p>
        )}
      </ContactListRender>
    </ContactsListContainer>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onSortContacts: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  hasContacts: PropTypes.bool.isRequired,
};
