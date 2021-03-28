import ProfileDescription from './ProfileDescription';
import ProfileStats from './ProfileStats';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
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
