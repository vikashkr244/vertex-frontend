// src/components/OrderSummary.js
import React from 'react';
import styles from '../clientdashboardcss/OrderSummary.module.css';

const OrderSummary = () => (
    <section id="ordersummary" className={styles.orderSummary}>
        <h2>Order Summary</h2>
        <div className={styles.summaryItem}>
            <span>Notebook Model 1</span>
            <span>$899.00</span>
        </div>
        <div className={styles.promo}>
            <input type="text" placeholder="Promo code" />
            <button>Apply</button>
        </div>
        <div className={styles.total}>
            <span>Total:</span>
            <span>$899.00</span>
        </div>
    </section>
);

export default OrderSummary;
