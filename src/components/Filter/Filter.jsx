import PropTypes from 'prop-types';
import {
  FormInput,
  FindLabel,
  FindWrapper,
} from 'components/ContactForm/ContactForm.styled';
export function Filter({ onFindContact }) {
  return (
    <FindWrapper>
      <FindLabel htmlFor="filter">Find contact</FindLabel>
      <FormInput
        type="text"
        name="filter"
        title="Find phonebook contact"
        onChange={onFindContact}
        onBlur={e => (e.currentTarget.value = '')}
      />
    </FindWrapper>
  );
}

Filter.propTypes = {
  onFindContact: PropTypes.func.isRequired,
};
