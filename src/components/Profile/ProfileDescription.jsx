import PropTypes from 'prop-types';

import ProfileMainInfo from './ProfileMainInfo';
import styles from './ProfileDescription.module.scss';
import defaultImage from './no-image-available.jpeg';

const ProfileDescription = ({ avatar, name, tag, location }) => {
  return (
    <div className="description">
      <img src={avatar} alt={name} className={styles.avatar} />
      <ProfileMainInfo name={name} tag={tag} location={location} />
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
