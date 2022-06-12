import { OrderDoc } from 'interfaces';
import { getOrdersAPI } from 'orders';
import React from 'react';
import styles from 'styles.module.scss';
function App() {
  const [tables, setTables] = React.useState(false);

  const [orders, SetOrders] = React.useState<OrderDoc[]>([]);

  React.useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const res = await getOrdersAPI();
    SetOrders(res);
  };

  return (
    <div className={styles.container}>
      <div className={styles.orders}>
        {orders.map((order) => (
          <div key={order._id}>{/* <div>{order.name}</div> */}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
