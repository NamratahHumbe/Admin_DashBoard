// import React from 'react'
// import { groupNumber, ordersData } from '../../data'
// import OrdersPieChart from '../OrdersPieChart/OrdersPieChart'
// import css from './Orders.module.css'

// const Orders = () => {
//     return (
//         <div className={`${css.container} theme-container`}>
//             <div className={css.head}>
//                 <img src="./logo.png" alt="logo" />
//                 <span>Orders today</span>
//             </div>

//             <div className={`grey-container ${css.stat}`}>
//                 <span>Amount</span>
//                 <span>$ {groupNumber(4560)}</span>
//             </div>

//             <div className={css.orders}>
//                 {
//                     ordersData.map((order, index) => (
//                         <div key={index} className={css.order}>
//                             <div>
//                                 <span>{order.name}</span>
//                                 <span>$ {order.change}</span>
//                             </div>
//                             <div>
//                                 <span>{order.type}</span>
//                                 <span>Items: {order.items}</span>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>


//             <div className={css.orderChart}>
//                 <span>Split by orders</span>
//                 <OrdersPieChart/>
//             </div>
//         </div>
//     )
// }

// export default Orders

import React from 'react';
import { useQuery } from 'react-query';
import OrdersPieChart from '../OrdersPieChart/OrdersPieChart';
import css from './Orders.module.css';
import axios from 'axios';

const fetchOrdersData = async () => {
  const response = await axios.get('http://localhost:3001/api/orders');
  return response.data;
};

const Orders = () => {
  const { data: ordersData, isLoading, isError } = useQuery('orders', fetchOrdersData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className={`${css.container} theme-container`}>
      <div className={css.head}>
        <img src="./logo.png" alt="logo" />
        <span>Orders today</span>
      </div>

      <div className={`grey-container ${css.stat}`}>
        <span>Amount</span>
        <span>$ 4560</span>
      </div>

      <div className={css.orders}>
        {ordersData.map((order, index) => (
          <div key={index} className={css.order}>
            <div>
              <span>{order.name}</span>
              <span>$ {order.change}</span>
            </div>
            <div>
              <span>{order.type}</span>
              <span>Items: {order.items}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={css.orderChart}>
        <span>Split by orders</span>
        <OrdersPieChart />
      </div>
    </div>
  );
};

export default Orders;
