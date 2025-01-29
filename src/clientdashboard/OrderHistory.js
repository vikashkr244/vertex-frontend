// src/components/OrderHistory.js
import React from 'react';
import styles from '../clientdashboardcss/OrderHistory.module.css';

const OrderHistory = () => (
    <section id="orderhistory" className={styles.orderHistory}>
        <h2>Order History</h2>
        <div className={styles.order}>
            <span>Order #1234</span>
            <span>Status: Shipped</span>
            <button>Reorder</button>
        </div>
    </section>
);

export default OrderHistory;
