import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import useCart to manage cart
import { useAuth } from '../context/AuthContext'; // Import useAuth for login status
import styles from '../clientdashboardcss/ClientDashboard.module.css';

const ClientDashboard = () => {
  const [searchQuery, setSearchQuery] = useState(''); // For searching products
  const { addToCart } = useCart(); // Get the addToCart function from context
  const { isLoggedIn } = useAuth(); // Get login status from context
  const navigate = useNavigate(); // For navigation

  const products = [
    {
      id: 1,
      name: 'Classic Notebook',
      image: 'https://via.placeholder.com/200',
      price: 20.0,
      discount: 5.0,
      description: 'A classic notebook for everyday use.',
    },
    {
      id: 2,
      name: 'Premium Leather Journal',
      image: 'https://via.placeholder.com/200',
      price: 40.0,
      discount: 10.0,
      description: 'A luxurious leather journal for professionals.',
    },
    {
      id: 3,
      name: 'Eco-Friendly Notebook',
      image: 'https://via.placeholder.com/200',
      price: 15.0,
      discount: 3.0,
      description: 'A sustainable notebook made from recycled materials.',
    },
  ];

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (product) => {
    if (isLoggedIn) {
      // If logged in, add to cart
      addToCart(product);
    } else {
      // If not logged in, redirect to login with redirect path
      navigate('/login', { state: { from: '/home' } });
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <h2>Welcome to Your Product Dashboard</h2>

      {/* Search bar */}
      <input
        type="text"
        className={styles.searchBar}
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className={styles.cardsContainer}>
        {filteredProducts.map((product) => {
          const priceAfterDiscount = product.price - product.discount;
          return (
            <div key={product.id} className={styles.card}>
              <img src={product.image} alt={product.name} className={styles.productImage} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className={styles.productPrice}>
                <span className={styles.originalPrice}>${product.price.toFixed(2)}</span>
                <span className={styles.discountedPrice}>${priceAfterDiscount.toFixed(2)}</span>
              </div>
              <span className={styles.discount}>You save ${product.discount.toFixed(2)}!</span>
              <button onClick={() => handleAddToCart(product)} className={styles.addToCart}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientDashboard;
