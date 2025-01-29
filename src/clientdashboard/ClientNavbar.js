// src/clientdashboard/ClientNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';  // Import the Cart context
import { useAuth } from '../context/AuthContext';  // Import the Auth context
import '../clientdashboardcss/ClientNavbar.css';

const ClientNavbar = ({ onToggleSidebar }) => {
  const { cartItems } = useCart();  // Get the cart items from context
  const { user } = useAuth();  // Get the logged-in user from Auth context
  const firstLetter = user ? user.name.trim().charAt(0).toUpperCase() : 'U';  // Default to 'U' if no user

  return (
    <nav className="clientnavbar">
      <div className="profile-icon-container" onClick={onToggleSidebar}>
        <div className="profile-icon">{firstLetter}</div>
      </div>
      <div className="clientnavbar-links">
        <Link to="/dashboard/order-history">Order Tracking & History</Link>
        <Link to="/dashboard/support">Support & Help</Link>
        <Link to="/dashboard/notifications">Notifications</Link>
        <Link to="/dashboard/cart">
          <i className="fas fa-shopping-cart"></i> {/* FontAwesome cart icon */}
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>} {/* Show cart count */}
        </Link>
      </div>
    </nav>
  );
};

export default ClientNavbar;
