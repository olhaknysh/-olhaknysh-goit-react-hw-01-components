import PropTypes from 'prop-types';
import { Fragment } from 'react';

const ProfileMainInfo = ({ name, tag, location }) => {
  return (
    <Fragment>
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </Fragment>
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
