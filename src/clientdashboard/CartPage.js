// src/components/CartPage.js
import React from 'react';
import { useCart } from '../context/CartContext';
import styles from '../clientdashboardcss/CartPage.module.css';

const CartPage = () => {
  const { cartItems } = useCart(); // Get the cart items from context

  return (
    <div className={styles.cartPage}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className={styles.cartItems}>
          {cartItems.map((item, index) => (
            <div key={index} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.cartItemImage} />
              <div className={styles.cartItemDetails}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className={styles.cartItemPrice}>
                  <span className={styles.cartItemDiscountedPrice}>${(item.price - item.discount).toFixed(2)}</span>
                  <span className={styles.cartItemOriginalPrice}>${item.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
