import ProfileStatsItem from './ProfileStatsItem';

const ProfileStats = ({ stats }) => {
  return (
    <ul className="stats">
      <ProfileStatsItem label="Followers" quantity={stats.followers} />
      <ProfileStatsItem label="Views" quantity={stats.views} />
      <ProfileStatsItem label="Likes" quantity={stats.likes} />
    </ul>
  );
};

export default ProfileStats;
