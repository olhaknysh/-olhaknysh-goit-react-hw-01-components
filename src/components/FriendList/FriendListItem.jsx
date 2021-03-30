import { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './FriendListItem.module.scss';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <Fragment>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img className={styles.image} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </Fragment>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
