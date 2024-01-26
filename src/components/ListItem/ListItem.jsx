import PropTypes from 'prop-types';

import { Item, DeleteBtn } from './ListItem.styled';

const ListItem = ({ contact: { id, name, phone }, toDelete }) => {
  return (
    <Item>
      <span>{name}:</span>
      <span>{phone}</span>
      <DeleteBtn type="button" onClick={() => toDelete(id)}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

ListItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  toDelete: PropTypes.func.isRequired,
};

export default ListItem;
