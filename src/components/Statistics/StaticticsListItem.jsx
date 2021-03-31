import PropTypes from 'prop-types';

import styles from './StaticticsListItem.module.scss';

const StaticticsListItem = ({ label, percentage, color }) => {
  return (
    <li className={styles.statListItem} style={{ backgroundColor: color }}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage} %</span>
    </li>
  );
};

StaticticsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StaticticsListItem;
