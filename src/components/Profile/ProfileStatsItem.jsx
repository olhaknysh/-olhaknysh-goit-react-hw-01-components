import PropTypes from 'prop-types';
import styles from './ProfileStatsItem.module.scss';

const ProfileStatsItem = ({ label, quantity }) => {
  return (
    <li>
      <span className="label">{label}</span>
      <span className={styles.quantity}>{quantity}</span>
    </li>
  );
};

ProfileStatsItem.propTypes = {
  label: PropTypes.string,
  quantity: PropTypes.number,
};

export default ProfileStatsItem;
