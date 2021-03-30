import FriendListItem from './FriendListItem';
import styles from './FriendList.module.scss';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendlist}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={styles.item}>
          <FriendListItem avatar={avatar} isOnline={isOnline} name={name} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
