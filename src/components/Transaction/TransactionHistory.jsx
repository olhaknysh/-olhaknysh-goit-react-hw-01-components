import TransactionHistoryItem from './TransactionHistoryItem';
import styles from './Transaction.module.scss';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles.transcation}>
      <thead className={styles.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr className={styles.item} key={id}>
            <TransactionHistoryItem
              type={type}
              amount={amount}
              currency={currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
