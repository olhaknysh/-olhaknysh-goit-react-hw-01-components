import { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './StaticticsListItem.module.scss';

const StaticticsListItem = ({ label, percentage }) => {
  return (
    <Fragment>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage} %</span>
    </Fragment>
  );
};

StaticticsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StaticticsListItem;
