import FriendListItem from './FriendListItem';
import styles from './FriendList.module.scss';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendlist}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          isOnline={isOnline}
          name={name}
        />
      ))}
    </ul>
  );
};

export default FriendList;
