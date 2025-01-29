// src/layouts/MainLayout.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import './MainLayout.css';

function MainLayout() {
  return (
    <div className="MainLayout">
      <Navbar />
      <main className="main-content">
        <Outlet /> {/* This renders nested routes */}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
