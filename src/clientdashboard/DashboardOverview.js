// src/components/DashboardOverview.js
import React from 'react';
import '../clientdashboardcss/DashboardOverview.module.css';

const DashboardOverview = () => (
  <div className="dashboard-overview">
    <h2>Welcome to Your Dashboard</h2>
    <section className="overview-section">
      <h3>Recent Orders</h3>
      <ul>
        <li>Order #1234 - Delivered</li>
        <li>Order #5678 - Processing</li>
      </ul>
    </section>
    <section className="overview-section">
      <h3>Account Summary</h3>
      <p>Name: John Doe</p>
      <p>Member Since: Jan 2022</p>
    </section>
    <section className="overview-section">
      <h3>Quick Actions</h3>
      <button>Browse Products</button>
      <button>View Cart</button>
    </section>
  </div>
);

export default DashboardOverview;
