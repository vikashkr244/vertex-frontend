// src/components/Customization.js
import React from 'react';
import styles from '../clientdashboardcss/Customization.module.css';

const Customization = () => (
    <section id="customization" className={styles.customization}>
        <h2>Notebook Customization</h2>
        <div className={styles.options}>
            <div className={styles.option}>
                <h3>RAM</h3>
                <select>
                    <option>8 GB</option>
                    <option>16 GB</option>
                    <option>32 GB</option>
                </select>
            </div>
            <div className={styles.option}>
                <h3>Storage</h3>
                <select>
                    <option>256 GB SSD</option>
                    <option>512 GB SSD</option>
                    <option>1 TB SSD</option>
                </select>
            </div>
        </div>
    </section>
);

export default Customization;
