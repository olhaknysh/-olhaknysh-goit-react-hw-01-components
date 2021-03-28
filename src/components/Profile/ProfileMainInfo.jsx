import PropTypes from 'prop-types';

const ProfileMainInfo = ({ text, type }) => {
  return type === 'tag' ? (
    <p className={text}>@{text}</p>
  ) : (
    <p className={text}>{text}</p>
  );
};

ProfileMainInfo.defaultProps = {
  type: 'text',
};

ProfileMainInfo.propTypes = {
  text: PropTypes.string,
};

export default ProfileMainInfo;
