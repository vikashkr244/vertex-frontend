// src/components/Dashboard.js
import React from 'react';
import styles from '../clientdashboardcss/Dashboard.module.css';

const Dashboard = () => (
    <section id="dashboard" className={styles.dashboard}>
        <h2>Dashboard Overview</h2>
        <div className={styles.cards}>
            <div className={styles.card}>Recent Orders</div>
            <div className={styles.card}>Pending Orders</div>
            <div className={styles.card}>Account Info</div>
        </div>
    </section>
);

export default Dashboard;
