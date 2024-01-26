import PropTypes from 'prop-types';

import ListItem from 'components/ListItem';
import { List } from './ContactsList.styled';

const ContactsList = ({ contacts, toDelete }) => {
  return (
    <div>
      <List>
        {contacts.map(contact => (
          <ListItem key={contact.id} contact={contact} toDelete={toDelete} />
        ))}
      </List>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  toDelete: PropTypes.func.isRequired,
};

export default ContactsList;
