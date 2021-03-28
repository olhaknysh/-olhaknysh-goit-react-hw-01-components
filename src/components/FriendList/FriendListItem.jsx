import { Fragment } from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <Fragment>
      <span className="status">{isOnline}</span>
      <img src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </Fragment>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
