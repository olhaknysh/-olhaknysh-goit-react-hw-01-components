import ProfileStatsItem from './ProfileStatsItem';
import styles from './ProfileStats.module.scss';

const ProfileStats = ({ stats }) => {
  return (
    <ul className={styles.stats}>
      <ProfileStatsItem label="Followers" quantity={stats.followers} />
      <ProfileStatsItem label="Views" quantity={stats.views} />
      <ProfileStatsItem label="Likes" quantity={stats.likes} />
    </ul>
  );
};

export default ProfileStats;
