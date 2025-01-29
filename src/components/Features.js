// src/components/Features.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Features.css';

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
  {
    id: 4,
    name: 'Smart Notebook',
    image: 'https://via.placeholder.com/200',
    price: 50.0,
    discount: 15.0,
    description: 'A digital notebook with cloud integration.',
  },
  {
    id: 5,
    name: 'Travel Notebook',
    image: 'https://via.placeholder.com/200',
    price: 25.0,
    discount: 5.0,
    description: 'A compact notebook for travelers.',
  },
  {
    id: 6,
    name: 'Creative Sketchpad',
    image: 'https://via.placeholder.com/200',
    price: 30.0,
    discount: 8.0,
    description: 'A sketchpad for artists and creators.',
  },
];

const Features = () => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate('/login');
  };

  return (
    <section id="features" className="features">
      <h3>Our Products</h3>
      <div className="product-list">
        {products.map((product) => {
          const discountedPrice = product.price - product.discount;
          return (
            <div
              key={product.id}
              className="product-card"
              onClick={handleProductClick}
            >
              <img src={product.image} alt={product.name} className="product-image" />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p className="price">
                <span className="original-price">${product.price.toFixed(2)}</span>
                <span className="discounted-price">${discountedPrice.toFixed(2)}</span>
              </p>
              <p className="savings">You save ${product.discount.toFixed(2)}!</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
