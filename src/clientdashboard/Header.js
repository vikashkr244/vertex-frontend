// src/components/Header.js
import React from 'react';
import styles from '../clientdashboardcss/Header.module.css';

const Header = () => (
    <header className={styles.header}>
        <h1 className={styles.title}>Notebook Orders</h1>
        <nav className={styles.nav}>
            <a href="#dashboard">Dashboard</a>
            <a href="#catalog">Catalog</a>
            <a href="#cart">Cart</a>
            <a href="#support">Support</a>
        </nav>
    </header>
);

export default Header;
