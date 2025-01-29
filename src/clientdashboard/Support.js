// src/components/Support.js
import React from 'react';

import styles from '../clientdashboardcss/Support.module.css';

const Support = () => (
    <section id="support" className={styles.support}>
        <h2>Customer Support</h2>
        
        <div className={styles.faq}>
            <h3>Frequently Asked Questions</h3>
            <ul>
                <li><strong>How do I track my order?</strong> You can view tracking details in the Order History section.</li>
                <li><strong>What is the return policy?</strong> Returns are accepted within 30 days of purchase. Please visit our Returns page for details.</li>
                <li><strong>How do I contact customer support?</strong> You can reach us via email, phone, or live chat below.</li>
            </ul>
        </div>
        
        <div className={styles.contact}>
            <h3>Contact Us</h3>
            <p>Email: <a href="mailto:support@notebookorder.com">support@notebookorder.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
            <button className={styles.chatButton}>Start Live Chat</button>
        </div>
    </section>
);

export default Support;
