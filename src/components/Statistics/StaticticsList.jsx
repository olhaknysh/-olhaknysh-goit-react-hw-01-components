import StaticticsListItem from './StaticticsListItem';

import styles from './StaticticsList.module.scss';

const StaticticsList = ({ stats }) => {
  return (
    <ul className={styles.statlist}>
      {stats.map(({ id, label, percentage, color }) => (
        <li
          key={id}
          className={styles.statListItem}
          style={{ backgroundColor: color }}
        >
          <StaticticsListItem label={label} percentage={percentage} />
        </li>
      ))}
    </ul>
  );
};

export default StaticticsList;
