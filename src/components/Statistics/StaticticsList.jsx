import StaticticsListItem from './StaticticsListItem';

const StaticticsList = ({ stats }) => {
  return (
    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className="item">
          <StaticticsListItem label={label} percentage={percentage} />
        </li>
      ))}
    </ul>
  );
};

export default StaticticsList;
