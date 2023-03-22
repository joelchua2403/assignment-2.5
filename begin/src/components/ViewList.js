import styles from "./ViewList.module.css";

function ViewList({ list, total }) {
  
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Discount</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
                <td>{item.count}</td>
                <td>{item.discount}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Total: ${total}</h2>
    </div>
  );
}
export default ViewList;
