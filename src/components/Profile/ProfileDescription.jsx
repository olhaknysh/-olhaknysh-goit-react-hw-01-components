import PropTypes from 'prop-types';

import ProfileMainInfo from './ProfileMainInfo';
import defaultImage from './no-image-available.jpeg';

const ProfileDescription = ({ avatar, name, tag, location }) => {
  return (
    <div className="description">
      <img src={avatar} alt={name} className="avatar" />
      <ProfileMainInfo text={name} />
      <ProfileMainInfo text={tag} type="tag" />
      <ProfileMainInfo text={location} />
    </div>
  );
};

ProfileDescription.defaultProps = {
  avatar: defaultImage,
};

ProfileDescription.propTypes = {
  avatar: PropTypes.string,
};

export default ProfileDescription;
