// src/clientdashboard/ProductCatalog.js
import React from 'react';
import { useCart } from '../context/CartContext';  // Import Cart context

const ProductCatalog = () => {
  const { addToCart } = useCart();  // Get addToCart function

  // Example product data with full information
  const products = [
    { 
      id: 1, 
      name: 'Product 1', 
      price: 10.00, 
      discount: 2.00, 
      image: '/images/product1.jpg',
      description: 'This is a detailed description of Product 1.'
    },
    { 
      id: 2, 
      name: 'Product 2', 
      price: 20.00, 
      discount: 5.00, 
      image: '/images/product2.jpg',
      description: 'This is a detailed description of Product 2.'
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);  // Add the product to the cart
  };

  return (
    <div className="product-catalog">
      <h2>Product Catalog</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Discount:</strong> -${product.discount}</p>
            <p><strong>Price After Discount:</strong> ${product.price - product.discount}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
