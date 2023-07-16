import PropTypes from 'prop-types';
import {
  FormInput,
  FindLabel,
  FindWrapper,
} from 'components/ContactForm/ContactForm.styled';
export function Filter({ onFilterContact, filter }) {
  return (
    <FindWrapper>
      <FindLabel htmlFor="filter">Find contact</FindLabel>
      <FormInput
        type="text"
        name="filter"
        title="Find phonebook contact"
        value={filter}
        onChange={onFilterContact}
      />
    </FindWrapper>
  );
}

Filter.propTypes = {
  onFilterContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
