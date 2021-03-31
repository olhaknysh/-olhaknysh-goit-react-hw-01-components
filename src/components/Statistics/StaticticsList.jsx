import StaticticsListItem from './StaticticsListItem';

import styles from './StaticticsList.module.scss';

const StaticticsList = ({ stats }) => {
  return (
    <ul className={styles.statlist}>
      {stats.map(({ id, label, percentage, color }) => (
        <StaticticsListItem
          key={id}
          label={label}
          percentage={percentage}
          color={color}
        />
      ))}
    </ul>
  );
};

export default StaticticsList;
