import PropTypes from 'prop-types';
import { FormWrapper, FormInput, FormButton } from './ContactForm.styled';

export function ContactForm({ onFormSubmit }) {
  return (
    <form onSubmit={e => onFormSubmit(e)}>
      <FormWrapper>
        <label htmlFor="name">Name</label>
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="phone">Number</label>
        <FormInput
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
        />
        <FormButton type="submit">Add contact</FormButton>
      </FormWrapper>
    </form>
  );
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
