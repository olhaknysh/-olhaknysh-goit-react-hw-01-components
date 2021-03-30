import ProfileDescription from './ProfileDescription';
import ProfileStats from './ProfileStats';
import styles from './profile.module.scss';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <ProfileDescription
        avatar={avatar}
        tag={tag}
        name={name}
        location={location}
      />
      <ProfileStats stats={stats} />
    </div>
  );
};

export default Profile;
