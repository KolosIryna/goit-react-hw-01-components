import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.title}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr className={css.list} key={item.id}>
            <td className={css.item}>{item.type}</td>
            <td className={css.item}>{item.amount}</td>
            <td className={css.item}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
