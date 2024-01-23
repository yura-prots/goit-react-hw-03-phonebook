import PropTypes from 'prop-types';

import { Filter } from './ContactsFilter.styled';

const ContactsFilter = ({ filter, toFind }) => {
  return (
    <div>
      <Filter
        type="text"
        name="filter"
        value={filter}
        onChange={e => toFind(e.target.value)}
        placeholder="Find contact by name"
      />
    </div>
  );
};

ContactsFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  toFind: PropTypes.func.isRequired,
};

export default ContactsFilter;
