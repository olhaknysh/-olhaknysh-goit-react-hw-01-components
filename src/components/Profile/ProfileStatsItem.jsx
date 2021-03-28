import PropTypes from 'prop-types';

const ProfileStatsItem = ({ label, quantity }) => {
  return (
    <li>
      <span className="label">{label}</span>
      <span className="quantity">{quantity}</span>
    </li>
  );
};

ProfileStatsItem.propTypes = {
  label: PropTypes.string,
  quantity: PropTypes.number,
};

export default ProfileStatsItem;
