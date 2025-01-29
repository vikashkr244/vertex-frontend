// src/components/Payment.js
import React from 'react';
import styles from '../clientdashboardcss/Payment.module.css';

const Payment = () => (
    <section id="payment" className={styles.payment}>
        <h2>Payment and Checkout</h2>
        <form className={styles.form}>
            <label>
                Credit Card Number
                <input type="text" placeholder="1234 5678 9012 3456" />
            </label>
            <label>
                Expiration Date
                <input type="text" placeholder="MM/YY" />
            </label>
            <label>
                CVV
                <input type="text" placeholder="123" />
            </label>
            <button type="submit">Place Order</button>
        </form>
    </section>
);

export default Payment;
