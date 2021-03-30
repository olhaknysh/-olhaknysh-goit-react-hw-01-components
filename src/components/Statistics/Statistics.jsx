import PropTypes from 'prop-types';

import StaticticsList from './StaticticsList';
import styles from './Statictics.module.scss';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statictics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <StaticticsList stats={stats} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
