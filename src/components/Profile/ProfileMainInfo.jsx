import PropTypes from 'prop-types';

const ProfileMainInfo = ({ name, tag, location }) => {
  return (
    <>
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </>
  );
};

ProfileMainInfo.defaultProps = {
  name: 'Unknown user',
};

ProfileMainInfo.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
};

export default ProfileMainInfo;
